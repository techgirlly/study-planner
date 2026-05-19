# 📚 Study Planner Web App

![HTML](https://img.shields.io/badge/HTML-FF5722?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-00758F?style=for-the-badge&logo=mysql&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A full-stack Study Planner Web App that helps students organize tasks, schedule study time, and track progress in a simple structured way.

---

## 🧠 Overview

This project was built to solve a real student problem: lack of structure in studying, missed deadlines, and poor time management.

Instead of complex tools, this app focuses on simplicity:
- Manage study tasks
- Plan weekly schedules
- Organize subjects
- Track study progress

Built using:
Frontend: HTML, CSS, JavaScript  
Backend: Node.js (Express)  
Database: MySQL  
Communication: REST API (JSON)  
Authentication: JWT  

---

## 🔐 Authentication Flow

Register → Login → Dashboard  
User → Auth System → JWT Token → Protected Dashboard  

---

## 🏗️ System Architecture

Frontend (HTML/CSS/JS) → Express API (Node.js) → JWT Authentication → MySQL Database → JSON Response → UI Update  

---

## ✨ Features

| Feature | Description |
|--------|-------------|
| Authentication | Register/Login system using JWT |
| Tasks | Add, edit, delete, complete tasks |
| Schedule | Weekly study planner (Mon–Sun) |
| Subjects | Organize tasks by subject |
| Progress | Track completed vs pending work |

---

## 🧩 Core Modules

Tasks Module:
Create tasks with title, subject, priority, deadline. Mark complete, edit, delete. Stored in MySQL.

Schedule Module:
Weekly planner view. Add study sessions per day. Edit or remove sessions.

Subjects Module:
Add and manage subjects. Link tasks and schedules. Group data by subject.

Progress Module:
Track completion per subject. View weekly summary and study progress.

---

## ⚙️ TECH STACK

Frontend:
🟦 HTML 🟨 CSS 🟧 JavaScript  

Backend:
🟩 Node.js 🟩 Express.js  

Database:
🟪 MySQL  

Authentication:
🟨 JWT (JSON Web Tokens)

---

## 📁 Folder Structure

study-planner/
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   │
│   ├── CSS/
│   │   ├── dashboard.css
│   │   ├── login.css
│   │   └── register.css
│   │
│   └── JS/
│       ├── dashboard.js
│       ├── login.js
│       └── register.js
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │
│   ├── middleware/
│   │
│   ├── models/
│   │
│   ├── routes/
│   │
│   ├── server.js
│   └── .env
│
├── package.json
├── package-lock.json
└── README.md

---

## 🚀 Getting Started

Install dependencies:
npm install  

Start server:
npm start  

Create .env file:
PORT=5000  
DB_HOST=localhost  
DB_USER=root  
DB_PASSWORD=  
DB_NAME=study_planner  
JWT_SECRET=your_secret_key  

Open in browser:
http://localhost:5000  

---

## 🔌 API Endpoints

POST /register → Create user  
POST /login → Login user  
GET /tasks → Get tasks  
POST /tasks → Add task  
PUT /tasks/:id → Update task  
DELETE /tasks/:id → Delete task  

---

## 💡 What I Learned

REST API development using Express  
MySQL database design  
JWT authentication flow  
Frontend–backend integration using JSON  
Full-stack project structuring  

---

## 🔭 Future Improvements

Pomodoro timer integration  
Calendar drag-and-drop scheduling  
Email reminders for tasks  
Mobile responsive UI  
Google OAuth login  
Study group collaboration  

---

Study Planner Web App  
Full-stack project built for learning and academic demonstration
