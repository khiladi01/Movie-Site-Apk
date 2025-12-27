# 🎬 Movie Management Web Application (OA Project)

A full-stack **Movie Management Web Application** built using the **MERN stack**.  
This project is designed as a **role-based system** where users can explore movies and admins can manage movie content through a secure dashboard.

The application focuses on **performance, scalability, and clean UI**, making it suitable for real-world production use and technical evaluations (OA).

---

## 🚀 Features

### 👤 User
- User registration & login
- Browse movies
- View movie details (title, description, rating, release date, duration, poster)
- Clean and responsive cinema-style UI

### 🛠 Admin
- Secure admin authentication
- Add new movies
- Update existing movies
- Delete movies
- Role-based access control (Admin / User)

---

## 🧑‍💻 Tech Stack

### Frontend
- **React.js** – Fast and component-based UI development
- **Material UI (MUI)** – Modern, accessible, and responsive UI components
- **React Router DOM** – Client-side routing
- **JavaScript (ES6+)**

### Backend
- **Node.js** – Server-side runtime
- **Express.js** – RESTful API development
- **MongoDB** – NoSQL database for storing movie & user data
- **Mongoose** – MongoDB object modeling

### Authentication & Security
- JWT (JSON Web Tokens)
- Role-based authorization (User / Admin)
- Protected routes on both frontend and backend

---

## 🏗 Project Architecture

```text
Movie-Site/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── App.jsx
│   └── public/
│
└── README.md
