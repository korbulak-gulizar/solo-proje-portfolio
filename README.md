Personal Portfolio Website
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vColor=white ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoCSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=Responsive](https://img.shields.io/badge/Responsive-Yes-success?badge

A modern and responsive portfolio website developed to showcase projects, technical skills, and professional experience.

📖 Project Overview
This portfolio website serves as a central place to present my background, frontend development skills, and portfolio projects.

The application focuses on:

Clean user experience
Responsive design
Scalable component structure
Professional project presentation
Modern web development practices
✨ Features
Responsive Design
About Me Section
Skills Showcase
Project Portfolio
Contact Section
Reusable Components
Mobile-Friendly Layout
Modern UI Design
🛠 Tech Stack
Frontend
JavaScript (ES6+)
HTML5
CSS3
Vite
Development Tools
npm
ESLint
🚀 Installation
Clone the repository:

git clone https://github.com/korbulak-gulizar/solo-proje-portfolio.git
Navigate to project:

cd solo-proje-portfolio
Install dependencies:

npm install
Run development server:

npm run dev
Build project:

npm run build
🏗 Architecture Diagram
graph TD

Visitor --> Portfolio

Portfolio --> Home
Portfolio --> About
Portfolio --> Skills
Portfolio --> Projects
Portfolio --> Contact

Home --> Components
About --> Components
Skills --> Components
Projects --> Components
Contact --> Components

Components --> Assets
Components --> Styles
Components --> Utilities
🔄 User Flow Diagram
flowchart TD

A[Visitor Opens Website]

A --> B[Home Section]

B --> C[About Me]

C --> D[Skills]

D --> E[Projects]

E --> F[Project Details]

F --> G[Contact Section]

G --> H[External Links]
🧩 Component Diagram
graph LR

App --> Navbar
App --> Home
App --> About
App --> Skills
App --> Projects
App --> Contact
App --> Footer

Projects --> ProjectCard

ProjectCard --> Image
ProjectCard --> Description

Contact --> ContactInfo
Contact --> SocialLinks
📂 Folder Structure
graph TD

SRC[src]

SRC --> COMPONENTS[components]
SRC --> PAGES[pages]
SRC --> ASSETS[assets]
SRC --> STYLES[styles]
SRC --> UTILS[utils]

COMPONENTS --> NAVBAR[Navbar]
COMPONENTS --> FOOTER[Footer]
COMPONENTS --> PROJECTCARD[ProjectCard]

PAGES --> HOME[Home]
PAGES --> ABOUT[About]
PAGES --> PROJECTS[Projects]
PAGES --> CONTACT[Contact]
📸 Screenshots
Home Page
docs/screenshots/home.png
Projects Section
docs/screenshots/projects.png
Contact Section
docs/screenshots/contact.png
🎯 Future Improvements
Dark Mode
Multi-language Support
Blog Section
Downloadable Resume
Animations
Performance Optimizations
Contact Form Integration
👩‍💻 Author
Gülizar Körbulak

Frontend Developer

GitHub: https://github.com/korbulak-gulizar

📄 License
This project is licensed under the MIT License.
