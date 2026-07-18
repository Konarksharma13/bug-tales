## 🐞 Bug Tales

> **Transform error messages into unforgettable stories—and discover the fix behind every bug.**

Debugging can be frustrating.

Cryptic stack traces, unfamiliar exceptions, and endless searching often interrupt the flow of building software.

**Bug Tales** reimagines that experience by turning error screenshots into entertaining stories while still providing practical debugging solutions. Upload a screenshot, choose a storytelling style, and let AI explain your bug in a way you'll actually remember.

🔗 **Live Demo:** https://bug-tales.vercel.app/

---

## 🎭 Before vs After

### ❌ Before

```text
TypeError: Cannot read properties of undefined (reading 'map')
    at Dashboard.jsx:42
```

↓

### 🐞 Bug Tale

> *Captain Nullbeard set sail with a fearless crew, only to discover that his treasure map had vanished into the void. Confidently following a path that didn't exist, his ship drifted into the Sea of Undefined. The crew waited... but there was nothing to navigate.*
>
> *The old navigator smiled and said, "Ye can't chart a course using a map that was never there."*

↓

### ✅ Solution

The `map()` function can only be called on an array.

Before rendering, ensure the value exists or provide a fallback.

```javascript
const items = data ?? [];

items.map(...)
```

💡 **Lesson:** Always verify that your data exists before iterating over it.

---

## ✨ Philosophy

Developers spend hours reading error messages.

But what if understanding an error was actually enjoyable?

> **People remember stories better than stack traces.**

Bug Tales combines storytelling with AI-powered debugging to make technical problems more approachable without sacrificing useful solutions.

Learning should be memorable.

Debugging should be fun.

---

## 💡 The Problem

Error messages often feel intimidating, especially for beginners.

Most debugging tools focus on providing technical explanations, but they rarely help developers remember *why* the problem happened.

As a result:

- Developers repeatedly encounter the same mistakes.
- Error messages feel overwhelming.
- Learning becomes frustrating instead of engaging.

---

## 🚀 The Solution

Bug Tales transforms debugging into an interactive storytelling experience.

Simply:

- 📷 Upload an error screenshot.
- 🎭 Choose a storytelling persona.
- 🚀 Generate a unique story.
- 💡 Receive an actionable solution alongside the narrative.

The result is an experience that helps developers understand, remember, and fix their errors more effectively.

---

## 🌟 Features

### 📷 Screenshot-Based Error Analysis

Upload screenshots of error messages instead of manually copying stack traces.

### 🤖 AI-Powered Story Generation

Convert technical errors into imaginative stories using different storytelling styles.

### 💡 Practical Debugging Solutions

Receive clear explanations and actionable fixes alongside every generated story.

### 🎭 Multiple Storytelling Personas

Experience your bugs through different creative perspectives, including:

- 🧙 Wizard
- 🏴‍☠️ Pirate
- 🎭 Bard
- 🚀 Cosmic Explorer
- 😂 Comedian

### 📋 Copy-to-Clipboard Support

Quickly copy generated solutions for use in your editor or documentation.

### ✨ Modern Interactive UI

A clean, space-inspired interface designed to make debugging enjoyable.

---

## ❤️ Why I Built This

Every developer has stared at an error message that made absolutely no sense.

I wanted to explore whether AI could make debugging less intimidating by combining technical explanations with creative storytelling.

Instead of simply telling developers what went wrong,

Bug Tales helps them remember why it happened.

Because memorable lessons are often the ones wrapped inside a great story.

---

## 🖼️ Preview


<p align="center">
<img alt="bug-tales" src="https://github.com/user-attachments/assets/65d53398-2b43-4b17-b150-dc29ee76f869" width="900"/>
</p>

---

## 🛠 Built With

**React** • **Node.js** • **Express.js** • **Google Gemini 2.5** • **Google Cloud Run**

---

## ⚡ Technical Highlights

- AI-powered analysis of uploaded error screenshots.
- Story generation combined with practical debugging guidance.
- Persona-based prompt system that creates different storytelling experiences.
- Client-server architecture separating frontend interactions from AI processing.
- Copy-to-clipboard functionality for quickly reusing generated solutions.

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/Konarksharma13/bug-tales.git
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Visit:

```text
http://localhost:5173
```

---

## 📚 Lessons Learned

Building Bug Tales helped me explore how AI can improve developer experience beyond traditional productivity tools.

This project strengthened my understanding of:

- AI-powered application workflows
- Prompt engineering for structured outputs
- Full-stack communication between React and Express
- Processing user-uploaded content
- Designing engaging developer-focused interfaces

More importantly, it reinforced that technical tools can be both practical and enjoyable.

---

## 🤝 Contributing

Contributions are welcome.

If you'd like to improve Bug Tales:

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push your branch.
5. Open a Pull Request.

For ideas, feature requests, or bug reports, please open an issue.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🐞 One Last Thing

Every bug has a story.

Sometimes it's frustrating.

Sometimes it's hilarious.

But every bug teaches something.

Bug Tales exists to make sure you'll remember the lesson long after the error disappears.
