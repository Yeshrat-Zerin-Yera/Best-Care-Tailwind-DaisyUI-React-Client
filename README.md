# 🏥 Best Care — Healthcare Service Platform

Best Care is a modern healthcare service platform built with React, Tailwind CSS, and DaisyUI. The application allows users to explore healthcare treatments, authenticate securely, and interact with a responsive and user-friendly interface.

The project uses Firebase Authentication for user authentication and Firebase Hosting for deployment, with a separate backend API for server-side functionality.

## 🚀 Live Demo

🔗 **[Visit Best Care](https://best-care-58ee6.web.app/)**

## 📸 Preview

![Best Care Healthcare Platform](Preview/BestCare.PNG)

## 🛠️ Technologies Used

* React
* JavaScript
* Tailwind CSS
* DaisyUI
* React Router DOM
* Firebase Authentication
* Firebase Hosting
* TanStack React Query
* React Hook Form
* React Day Picker
* React Icons

## ✨ Key Features

* 🏥 Healthcare treatment/service browsing
* 🔐 User authentication
* 📧 Email/password registration and login
* 🔵 Google authentication
* ⚫ GitHub authentication
* 🧭 Client-side routing with React Router
* ⚡ Dynamic data loading
* 🔄 Efficient server-state management with React Query
* 📝 Form handling with React Hook Form
* 📅 Date selection functionality
* 📱 Responsive user interface
* 🎨 Modern UI built with Tailwind CSS and DaisyUI
* 🔥 Firebase-powered authentication and hosting

## 🔐 Authentication

Users can create accounts and sign in using:

* Email and password
* Google
* GitHub

Authentication is implemented using **Firebase Authentication**.

## 📦 Dependencies

The project uses the following major libraries and frameworks:

* `react`
* `react-router-dom`
* `@tanstack/react-query`
* `react-hook-form`
* `react-day-picker`
* `react-icons`
* `firebase`
* `tailwindcss`
* `daisyui`

Install all project dependencies with:

```bash
npm install
```

## 💻 Run Locally

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* Git

### 1. Clone the repository

```bash
git clone https://github.com/Yeshrat-Zerin-Yera/Best-Care-Tailwind-DaisyUI-React-Client.git
```

### 2. Navigate to the project directory

```bash
cd Best-Care-Tailwind-DaisyUI-React-Client
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env.local` file in the root directory and add the required Firebase/API configuration.

Example:

```env
VITE_API_URL=your_api_url

VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

> Never commit real API keys, passwords, private credentials, or sensitive environment variables to GitHub.

### 5. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```text
Best-Care-Tailwind-DaisyUI-React-Client/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   ├── hooks/
│   ├── contexts/
│   └── ...
│
├── .firebase/
├── .gitignore
├── firebase.json
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

## 🔗 Project Links

### 🌐 Client Live Site

https://best-care-58ee6.web.app/

### 💻 Client Repository

[GitHub — Best Care Client](https://github.com/Yeshrat-Zerin-Yera/Best-Care-Tailwind-DaisyUI-React-Client)

### ⚙️ Server Repository

[GitHub — Best Care Server](https://github.com/Yeshrat-Zerin-Yera/Best-Care-Tailwind-DaisyUI-React-Server)

### 🚀 Server API

[Best Care Server](https://best-care-server.vercel.app/)

## 🌐 Deployment

The client application is deployed using **Firebase Hosting**.

🔗 [Live Application](https://best-care-58ee6.web.app/)

## 🎯 Purpose

The goal of Best Care is to provide a clean and accessible interface for exploring healthcare services while demonstrating modern React development practices, authentication, routing, API integration, and responsive UI development.

## 👩‍💻 Author

**Yeshrat Zerin Yera**

GitHub: [Yeshrat-Zerin-Yera](https://github.com/Yeshrat-Zerin-Yera)

---

⭐ If you like this project, consider giving it a star!
