<div align="center">

![Header](https://capsule-render.vercel.app/api?type=waving&color=0:0f172a,100:0ea5e9&height=180&section=header&text=vector-clock-lab&fontColor=ffffff&fontSize=38)

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=21&pause=1000&color=38BDF8&center=true&vCenter=true&width=720&lines=Explore%20causality%20across%20distributed%20processes" alt="Typing title" />

[![License](https://img.shields.io/github/license/CyberLoop-dev/vector-clock-lab)](LICENSE) [![Language](https://img.shields.io/github/languages/top/CyberLoop-dev/vector-clock-lab)](https://github.com/CyberLoop-dev/vector-clock-lab) [![Stars](https://img.shields.io/github/stars/CyberLoop-dev/vector-clock-lab?style=social)](https://github.com/CyberLoop-dev/vector-clock-lab/stargazers) [![Last commit](https://img.shields.io/github/last-commit/CyberLoop-dev/vector-clock-lab)](https://github.com/CyberLoop-dev/vector-clock-lab/commits/main)

<img src="assets/mark.svg" width="112" alt="vector-clock-lab illustration" />

</div>

## 🧭 Overview

Create local, send, and receive events on three simulated processes. The lab updates Lamport timestamps and vector clocks so you can compare causal ordering with concurrent events.

## ✨ Features

- ✨ Create local events on three simulated processes.
- ✨ Send messages carrying vector-clock snapshots.
- ✨ Deliver messages and merge clocks with component-wise maxima.
- ✨ Inspect event histories and pending messages.

## 🎬 Demo

Run the app locally and use the controls to explore the scenarios. No hosted demo is claimed; the app runs on your machine and makes no external API requests.

## 🚀 Quick Start

```bash
npm start
```

Open **http://127.0.0.1:4173**.

## 🧰 Tech Stack

- 🟦 Node.js built-in HTTP server
- 🌐 Browser JavaScript, HTML, and CSS
- 📦 No third-party runtime dependencies

## 🗂️ Folder Structure

```text
vector-clock-lab/
├── assets/mark.svg
├── public/
│   ├── app.js
│   ├── index.html
│   └── styles.css
├── .gitignore
├── LICENSE
├── package.json
├── README.md
└── server.js
```

## 🛣️ Roadmap

- [ ] Add message reordering scenarios.
- [ ] Export the event history as JSON.

## 🤝 Contributing

Issues and pull requests are welcome. Keep changes focused, document behavior, and avoid unnecessary dependencies.

## 📄 License

Released under the [MIT License](LICENSE).

<div align="center">

![Footer](https://capsule-render.vercel.app/api?type=waving&color=0:0f172a,100:0ea5e9&height=100&section=footer)

</div>
