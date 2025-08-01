# Project Management App (GraphQL + Apollo + MongoDB)

A full-stack project management application built with **Node.js**, **Express**, **MongoDB**, **GraphQL**, and **Apollo Client**.  
It allows you to manage **clients** and **projects** with full CRUD functionality, cascading deletes, and instant UI updates using Apollo cache.

---

## 🚀 Features

- **Client Management**
  - Add, view, update, and delete clients
  - Automatically delete related projects when a client is deleted

- **Project Management**
  - Add, view, update, and delete projects
  - Link projects to specific clients

- **GraphQL API**
  - Powerful query and mutation support
  - Nested queries (fetch project + client details in a single request)

- **Apollo Client Integration**
  - Optimistic UI updates
  - Cache management with `cache.modify` and `refetchQueries`

- **MongoDB + Mongoose**
  - Data persistence and schema modeling

---

## 🛠️ Tech Stack

**Frontend**
- React
- Apollo Client
- React Router
- Bootstrap / React Icons

**Backend**
- Node.js
- Express
- MongoDB + Mongoose
- GraphQL + Express-GraphQL

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/war-riz/graphql-pm-app
cd graphql-pm-app
```

### 2️⃣ Install Dependencies
**Backend:**
```bash
cd server
npm install
```
**Frontend:**
```bash
cd client
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the `server` folder:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/project_mgmt
```

### 4️⃣ Run the App
**Run Backend:**
```bash
cd server
npm run dev
```

**Run Frontend:**
```bash
cd client
npm start
```

---

## 🔍 Example GraphQL Queries

### Fetch All Projects with Client Info
```graphql
query {
  projects {
    id
    name
    description
    status
    client {
      id
      name
      email
    }
  }
}
```

### Add a Client
```graphql
mutation {
  addClient(name: "John Doe", email: "john@example.com", phone: "123-456-7890") {
    id
    name
  }
}
```

---

## 📂 Folder Structure
```
project-management-graphql/
│
├── client/        # React + Apollo frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/        # Node.js + Express + GraphQL backend
│   ├── models/
│   ├── schema/
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## 📜 License
This project is licensed under the MIT License.

---

## 👨‍💻 Author
**Waris Akanmu** – [GitHub](https://github.com/war-riz)