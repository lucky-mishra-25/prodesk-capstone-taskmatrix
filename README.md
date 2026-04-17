# 🚀 TaskMatrix – Project Management Tool

## 📌 Overview

**TaskMatrix** is a modern, full-stack project management web application inspired by tools like Jira and Asana.
It enables teams to collaborate efficiently, manage tasks using Kanban boards, assign responsibilities, and track progress in real-time.

---

## 🎯 Project Objective

The goal of TaskMatrix is to:

* Simplify task and project management
* Provide real-time collaboration for teams
* Improve productivity with structured workflows
* Deliver a clean and intuitive user experience

---

## 🧑‍💻 Track

**Fullstack Development**

---

## ⚙️ Tech Stack

### 🔹 Frontend

* React.js / Next.js
* Tailwind CSS
* Zustand / Redux Toolkit

### 🔹 Backend

* Node.js
* Express.js

### 🔹 Database

* MongoDB (Mongoose ODM)

### 🔹 Tools & Services

* Socket.io (real-time updates)
* JWT Authentication
* Cloudinary (file uploads)
* Figma (UI/UX design)

---

## ✨ Core Features

### 🔐 Authentication System

* User Signup & Login
* Secure JWT-based authentication
* Role-based access control (Admin / Member)

---

### 📋 Project Management

* Create, update, and delete projects
* Add/remove team members
* Manage multiple projects simultaneously

---

### 🗂️ Kanban Board

* Drag-and-drop task management
* Columns:

  * To Do
  * In Progress
  * Done
* Visual workflow tracking

---

### ✅ Task Management

* Create and assign tasks
* Set priority levels (Low, Medium, High)
* Add due dates
* Update task status

---

### 🔔 Real-Time Activity

* Live updates using Socket.io
* Activity feed (task updates, comments, changes)

---

### 💬 Collaboration Features

* Task comments system
* Team member roles & permissions
* Shared workspace

---

## 🎨 UI/UX Design

### 🔗 Figma Wireframes

👉 [View Figma Design](https://www.figma.com/design/6hXYf9dgbkghBDVtmZqhFo/login-page?node-id=0-1&p=f&t=Hsbub3VmGkkFm8QC-0)

---

### 🖼️ UI Screens Included

* Login Page
* Dashboard (Kanban Board)
* Task Details Page

---

### 📷 UI Preview

<p align="center">
  <img src="taskmatrix-ui.png" width="800"/>
</p>

---

## 🏗️ System Architecture

### 📊 Entity Relationship Diagram (ERD)

👉## 🏗️ Architecture Diagram (ERD)

<p align="center">
  <img src="taskmatrix_erd.png" width="700"/>
</p>

---

### 🗃️ Database Schema

#### 👤 Users Collection

* _id
* name
* email
* password
* role (Admin / Member)
* createdAt

---

#### 📁 Projects Collection

* _id
* title
* description
* members (array of user IDs)
* createdBy
* createdAt

---

#### 📝 Tasks Collection

* _id
* title
* description
* status (To Do / In Progress / Done)
* priority (Low / Medium / High)
* assignedTo (user ID)
* projectId
* dueDate
* createdAt

---

#### 💬 Comments Collection

* _id
* taskId
* userId
* message
* timestamp

---

## 🔄 Application Flow

1. User logs in / signs up
2. User creates or joins a project
3. Tasks are created and assigned
4. Tasks move across Kanban stages
5. Team collaborates via comments
6. Real-time updates sync across users

---

## 📁 Folder Structure (Planned)

```
taskmatrix/
│
├── client/                # Frontend (React / Next.js)
│   ├── components/
│   ├── pages/
│   ├── store/
│   └── styles/
│
├── server/                # Backend (Node.js / Express)
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── middleware/
│
├── README.md
└── package.json
```

---

## 🚀 Future Enhancements

* 📱 Mobile responsiveness
* 🔔 Notification system
* 📎 File attachments in tasks
* 📊 Analytics dashboard
* 🌙 Dark mode support

---

## 🧪 Testing Strategy

* Unit testing for backend APIs
* Integration testing for workflows
* UI testing for frontend components

---

## 📌 Deployment Plan

* Frontend: Vercel / Netlify
* Backend: Render / Railway
* Database: MongoDB Atlas

---

## 🤝 Contribution

Contributions are welcome!
Feel free to fork this repository and submit a pull request.

---

## 📄 License

This project is for educational purposes under the Prodesk Internship Program.

---

## 👨‍💻 Author

**Lucky Mishra**

---

## ⭐ Acknowledgements

Inspired by modern project management tools like:

* Jira
* Asana

---

## 🔥 Final Note

This project demonstrates the design and architecture planning of a scalable, enterprise-level application. The current phase focuses on UI/UX, system design, and documentation before full implementation.
