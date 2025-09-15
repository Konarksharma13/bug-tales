import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import gsap from "gsap";
import toast, { Toaster } from "react-hot-toast";

const BACKEND_URL =
  "https://error-storyteller-89872365527.us-central1.run.app/upload";

export default function App() {
  const [file, setFile] = useState(null);
  const [story, setStory] = useState("");
  const [solution, setSolution] = useState("");
  const [persona, setPersona] = useState("Default Narrator");
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [launched, setLaunched] = useState(false);

  const cardRef = useRef(null);

  useEffect(() => {
    if (story || solution) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }
  }, [story, solution]);

  const resetResults = () => {
    setStory("");
    setSolution("");
    setLaunched(false);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0] && !launched) {
      setFile(e.target.files[0]);
      resetResults();
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0] && !launched) {
      setFile(e.dataTransfer.files[0]);
      resetResults();
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select or drag a screenshot first!");
      return;
    }
    setLoading(true);
    setLaunched(true);

    try {
      const formData = new FormData();
      formData.append("screenshot", file);
      formData.append("persona", persona);

      const res = await fetch(BACKEND_URL, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error(`Backend error: ${res.status}`);

      const data = await res.json();
      setStory(data.story || "No story generated.");
      setSolution(data.solution || "");
    } catch (err) {
      console.error(err);
      toast.error("Cosmic turbulence! Try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopySolution = () => {
    if (solution) {
      navigator.clipboard.writeText(solution);
      toast.success("Solution copied to clipboard!");
    }
  };

  const handleNewStory = () => {
    setFile(null);
    resetResults();
    const el = document.getElementById("fileInput");
    if (el) el.value = null;
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.15),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(167,139,250,0.15),transparent_60%)]"></div>

      <Toaster position="top-right" reverseOrder={false} />

      <main className="flex-grow flex justify-center items-center p-4">
        <div className="w-full max-w-2xl bg-gray-900/50 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 shadow-lg shadow-cyan-400/10 relative">
          <h1 className="text-center text-4xl font-extrabold mb-6 text-cyan-400 drop-shadow-lg flex items-center justify-center gap-2">
            <i className="ri-bug-fill text-violet-400 animate-pulse"></i> Bug
            Tales
          </h1>

          <div className="flex flex-col items-center gap-3 mb-6">
            <label className="font-semibold text-gray-300">
              Choose Your Storyteller:
            </label>
            <select
              value={persona}
              onChange={(e) => setPersona(e.target.value)}
              disabled={launched}
              className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-cyan-500 cursor-pointer focus:ring-2 focus:ring-cyan-400 transition"
            >
              <option>Default Narrator</option>
              <option>Galactic Explorer</option>
              <option>Swashbuckling Pirate</option>
              <option>Medieval Bard</option>
              <option>AI Overlord</option>
              <option>Fantasy Wizard</option>
              <option>Stand-Up Comedian</option>
            </select>
          </div>

          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragActive(true);
            }}
            onDragLeave={() => setDragActive(false)}
            onDrop={handleDrop}
            className={`border-2 ${
              dragActive ? "border-cyan-400" : "border-dashed border-gray-600"
            } rounded-xl p-8 text-center transition-colors cursor-pointer mb-6 bg-gray-800/40`}
          >
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              disabled={launched}
            />
            <label
              htmlFor="fileInput"
              className={`flex flex-col items-center gap-2 cursor-pointer ${
                launched ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <i className="ri-file-upload-fill text-4xl text-cyan-300"></i>
              {file ? (
                <p className="text-cyan-300 font-semibold">{file.name}</p>
              ) : (
                <p className="text-gray-400">
                  Click to upload or drag & drop <br />
                  <span className="text-sm">PNG, JPG up to 10MB</span>
                </p>
              )}
            </label>
          </div>

          {!(!loading && launched) && (
            <div className="flex justify-center mb-6">
              <button
                onClick={handleUpload}
                disabled={loading}
                className="px-6 py-3 rounded-lg font-bold bg-cyan-600 hover:bg-cyan-500 active:scale-95 transition flex items-center gap-2 shadow-lg shadow-cyan-500/30 cursor-pointer"
              >
                {loading ? (
                  <>
                    <i className="ri-timer-fill animate-spin"></i> Brewing Tales
                  </>
                ) : (
                  <>
                    Launch Story <i className="ri-arrow-right-long-fill"></i>
                  </>
                )}
              </button>
            </div>
          )}

          {(story || solution) && (
            <div ref={cardRef} className="flex flex-col md:flex-row gap-6 mt-6">
              {story && (
                <div className="flex-1 bg-gray-900/70 border border-cyan-400 rounded-xl p-4 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 transition h-[400px] flex flex-col">
                  <h2 className="text-xl font-bold mb-2 text-cyan-300 flex items-center gap-2">
                    <i className="ri-book-open-fill"></i> Story
                  </h2>
                  <div className="overflow-y-auto pr-2 custom-scroll flex-grow">
                    <ReactMarkdown>{story}</ReactMarkdown>
                  </div>
                </div>
              )}

              {solution && (
                <div className="flex-1 bg-gray-900/70 border border-violet-400 rounded-xl p-4 shadow-lg shadow-violet-500/20 hover:shadow-violet-400/40 transition h-[400px] flex flex-col">
                  <h2 className="text-xl font-bold mb-2 text-violet-300 flex items-center gap-2">
                    <i className="ri-checkbox-circle-fill"></i> Solution
                  </h2>
                  <div className="overflow-y-auto pr-2 custom-scroll flex-grow">
                    <ReactMarkdown>{solution}</ReactMarkdown>
                  </div>
                  <button
                    onClick={handleCopySolution}
                    className="mt-3 px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 active:scale-95 transition flex items-center gap-2"
                  >
                    <i className="ri-clipboard-fill"></i> Copy Solution
                  </button>
                </div>
              )}
            </div>
          )}

          {story && solution && (
            <div className="flex justify-center">
              <button
                onClick={handleNewStory}
                className="mt-6 px-6 py-3 rounded-lg font-bold bg-gray-700 hover:bg-gray-600 flex items-center gap-2 transition"
              >
                <i className="ri-add-circle-fill"></i> New Tale
              </button>
            </div>
          )}
        </div>
      </main>

      <footer className="py-4 text-center text-gray-400 text-sm relative z-10">
        Made with <i className="ri-heart-fill text-red-400"></i> by{" "}
        <a
          href="https://github.com/konarksharma13"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          Konark
        </a>
      </footer>
    </div>
  );
}
