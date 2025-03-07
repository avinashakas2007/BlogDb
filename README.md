
---

# Wander & Wonder - Blog Platform

Welcome to **Wander & Wonder**, a space for creativity, connection, and sharing stories! Built by **Hariharan**, this platform allows users to share their experiences, explore new ideas, and connect with a vibrant community.

---

## 🎯 Features

- **Home Page**: Displays all blog posts with titles and excerpts. Click "Read More" to view full posts.
- **About Page**: Learn more about the platform, its mission, and the creator.
- **Contact Page**: A form for users to reach out with questions or feedback.
- **Compose Page**: A simple interface for creating new blog posts.
- **Post Page**: Full view of each individual post.

---

## ⚙️ Technologies Used

- **Node.js**: JavaScript runtime for the server-side.
- **Express.js**: Web framework for handling routes and requests.
- **MongoDB**: Database to store blog posts and contact form data.
- **EJS**: Templating engine for rendering dynamic views.
- **Lodash**: Utility library for simplifying JavaScript tasks.
- **Body-Parser**: Middleware to parse incoming request bodies.

---

## 🛠️ Setup & Installation

### Prerequisites

- **Node.js** (with npm)
- **MongoDB** (either local or MongoDB Atlas)

### Installation Steps

1. Clone the repository:
   ```bash
   git clone git remote add origin https://github.com/avinashakas2007/BlogDB.git
   ```

2. Navigate into the project directory:
   ```bash
   cd wander-and-wonder
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start MongoDB server (if using locally):
   ```bash
   mongod
   ```

5. Run the application:
   ```bash
   npm start
   ```

6. Open `http://localhost:3000` in your browser to explore the app.

---

## 🗂️ Project Structure

```
/wander-and-wonder
├── /node_modules          # Installed npm packages
├── /public                # Static files (CSS, JS, Images)
│   ├── /uploads           # Image assets
├── /views                 # EJS templates
│   ├── home.ejs           # Home page template
│   ├── about.ejs          # About page template
│   ├── contact.ejs        # Contact page template
│   ├── compose.ejs        # Post composition page
│   ├── post.ejs           # Individual post page
│   └── partials           # Reusable partials (header, footer)
├── app.js                 # Main application file
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
```

---

## 📋 API Endpoints

- **GET /**: Home page displaying all blog posts.
- **GET /about**: About page.
- **GET /contact**: Contact form page.
- **GET /compose**: Page to create a new blog post.
- **POST /compose**: Saves a new post to the database.
- **GET /posts/:postId**: Displays an individual post.
- **POST /contact**: Saves the contact form data.

---

## 🎨 Design

The design focuses on clean layouts and ease of navigation. Here are a few key design elements:

- **Banner**: A beautiful, welcoming banner with a motivational message.
- **Post Previews**: Each post is shown as a card with a snippet of the content.
- **Responsive Design**: The site adapts to both mobile and desktop screens.

---

## 🤝 Contributing

We welcome contributions! Here’s how you can help:

1. Fork the repository.
2. Clone your fork locally.
3. Create a new branch for your feature.
4. Commit your changes and push them to your fork.
5. Open a pull request to the original repository.

---

## 🙏 Acknowledgements

Thanks to **Node.js**, **Express.js**, **MongoDB**, and **EJS** for their amazing frameworks and libraries that made this project possible.

---

Enjoy exploring **Wander & Wonder**! ✨
