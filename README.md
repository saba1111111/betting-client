# Online Betting Dashboard Client

This is a scalable React client application for an online betting dashboard. The project is built using Vite, React, and TypeScript with SCSS for styling. It includes user authentication (login and register), protected routes, event listings with pagination (ready for future growth), and a bet placement modal. The application is designed following best practices and modular architecture to ensure maintainability and scalability.

---

## Features

- **Authentication:**

  - Login and Register pages with form validation.
  - Token-based authentication with protected routes.
  - Public routes that prevent logged-in users from accessing login/register pages.

- **Event Management:**

  - Fetches and displays sports events from the backend API.
  - Supports pagination (via query parameters) for future growth.
  - Each event card provides a "Place Bet" button to open a modal.
  - Bet modal accepts a bet amount and displays a simple success acknowledgment.

- **Logout Functionality:**

  - A header component with a logout button that clears authentication tokens and redirects to the login page.

- **Styling:**
  - SCSS is used for styling with a modular structure.
  - Responsive and modern design with clear separation of concerns.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

### Running Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo/frontend
   npm install
   npm run dev
   ```
