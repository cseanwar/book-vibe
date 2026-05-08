# 📚 Book Vibe — Book Discovery & Reading List App

**Book Vibe** is a frontend React web application that lets book lovers browse a curated collection of books, view detailed information on each title, and manage a personal reading list — split into a **Read list** and a **Wishlist** — all persisted via `localStorage` with no backend required.

---

## 🌐 Live URL

🔗 [https://book-vibe-beta.vercel.app](https://book-vibe-beta.vercel.app)

---

## 🎯 Purpose

Book Vibe is built for book enthusiasts who want a clean, fast way to:

- Discover books with cover images, author names, ratings, and categories
- Click into any book for a full detail view
- Mark books as **Read** or add them to a **Wishlist**
- Revisit their saved lists across sessions via `localStorage`
- Sort their lists by rating for quick prioritization

The project demonstrates core React concepts including component architecture, React Router DOM for multi-page navigation, `useState` / `useEffect` hooks, `localStorage` persistence, and prop-driven UI.

---

## ✨ Key Features

- 📖 **Book Catalogue** — Browse a rich grid of books with cover image, title, author, category tags, and star rating on the homepage
- 🔎 **Book Detail Page** — Click any book to view its full description, publisher, year, tags, and rating on a dedicated route (`/books/:bookId`)
- ✅ **Read List** — Mark books as read; they appear in the "Read" tab on the Listed Books page
- 💛 **Wishlist** — Add books to a wishlist for later; they appear in the "Wishlist" tab on the same page
- 💾 **localStorage Persistence** — Both lists are saved in the browser so they survive page refreshes and revisits
- 🚫 **Duplicate Prevention** — Adding the same book twice triggers a toast warning instead of creating duplicates
- ⭐ **Sort by Rating** — Sort either list by book rating (highest first) with one click
- 🔔 **Toast Notifications** — Real-time feedback for successful additions and duplicate errors via `react-toastify`
- 🧭 **Client-Side Routing** — Multi-page experience with React Router DOM: Home → Detail → Listed Books → 404
- 📱 **Fully Responsive** — Clean, modern layout across mobile, tablet, and desktop using Tailwind CSS and DaisyUI

---

## 🛠️ NPM Packages Used

### Core Framework

| Package | Purpose |
|---|---|
| `react` | UI component library |
| `react-dom` | React DOM rendering |

### Build Tool

| Package | Purpose |
|---|---|
| `vite` | Fast dev server and production build tool |
| `@vitejs/plugin-react` | Vite plugin for React JSX support |

### Routing

| Package | Purpose |
|---|---|
| `react-router-dom` | Client-side routing — home, book detail, listed books, 404 pages |

### Notifications

| Package | Purpose |
|---|---|
| `react-toastify` | Toast alerts for list additions, duplicates, and validation |

### Styling & UI

| Package | Purpose |
|---|---|
| `tailwindcss` | Utility-first CSS framework for responsive layout and design |
| `daisyui` | Tailwind CSS component library — buttons, cards, tabs, badges |
| `postcss` | CSS transformation (required by Tailwind) |
| `autoprefixer` | Adds vendor prefixes for cross-browser CSS compatibility |

### Icons

| Package | Purpose |
|---|---|
| `react-icons` | Icon sets for ratings, categories, and UI buttons |

### Developer Tools

| Package | Purpose |
|---|---|
| `eslint` | Code linting |
| `eslint-plugin-react` | React-specific ESLint rules |
| `eslint-plugin-react-hooks` | Rules for React Hooks usage |

---

## 📁 Project Structure

```
book-vibe/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/              # Static images and book covers
│   ├── components/
│   │   ├── Banner/          # Hero section on the homepage
│   │   ├── BookCard/        # Individual book card (cover, title, author, rating)
│   │   ├── BookList/        # Grid of all BookCards on the homepage
│   │   ├── Navbar/          # Top navigation with route links
│   │   └── Footer/          # Site footer
│   ├── pages/
│   │   ├── Home/            # Homepage — banner + book catalogue
│   │   ├── BookDetail/      # Full book detail page (/books/:bookId)
│   │   ├── ListedBooks/     # Read & Wishlist tabs with sort (/listed-books)
│   │   └── NotFound/        # 404 error page
│   ├── data/
│   │   └── booksData.js     # Local book data (title, author, image, rating, tags)
│   ├── utils/
│   │   └── localStorage.js  # Helpers: getRead, addToRead, getWishlist, addToWishlist
│   ├── App.jsx              # Router setup and route definitions
│   ├── main.jsx             # React entry point
│   └── index.css            # Tailwind directives and global styles
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 🗺️ Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Book catalogue with banner |
| `/books/:bookId` | Book Detail | Full info for a single book |
| `/listed-books` | Listed Books | Read and Wishlist tabs with sort |
| `*` | 404 | Not Found page |

---

## 💾 localStorage Schema

```js
// Read list
localStorage.setItem('read-list', JSON.stringify([bookId1, bookId2, ...]));

// Wishlist
localStorage.setItem('wish-list', JSON.stringify([bookId1, bookId2, ...]));
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+

### Installation

```bash
# Clone the repository
git clone https://github.com/cseanwar/book-vibe.git
cd book-vibe

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 🌍 Deployment

Deployed on **Vercel** with:

- Vite production build served as a static site
- Automatic deployments triggered on push to `main`

---

## 👤 Author

**Anwar Hossain**
- GitHub: [@cseanwar](https://github.com/cseanwar)
- LinkedIn: [anwar-hossain-a3095147](https://www.linkedin.com/in/anwar-hossain-a3095147)
- Twitter/X: [@cseanwar](https://x.com/cseanwar)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).