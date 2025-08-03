# NextCosera Documentation

## Project Overview

NextCosera is a simple blog application built with Next.js. It serves as a hands-on tutorial for learning the fundamentals of Next.js, including file-based routing, layouts, client and server components, and data fetching.

## Getting Started

To get started with NextCosera, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

    The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

Here's an overview of the key files and folders in the project:

*   `src/app/`: This directory contains the main application logic.
    *   `layout.js`: The main layout for the application, which includes the navigation bar and footer.
    *   `page.js`: The homepage of the application.
    *   `posts/[id]/page.js`: The page for individual blog posts.
    *   `data/post.js`: This file contains the data for the blog posts.
*   `public/`: This directory contains static assets, such as images and SVGs.
*   `package.json`: This file contains the project's dependencies and scripts.

## Key Features

*   **Homepage:** A landing page with a mini-tutorial on Next.js.
*   **Blog Posts:** The application displays a list of blog posts, and users can click on a post to view its content.
*   **Dynamic Routing:** The application uses dynamic routing to display individual blog posts.
*   **Responsive Design:** The application is designed to be responsive and work on different screen sizes.

## Technologies Used

*   **Next.js:** A React framework for building server-side rendered and statically generated web applications.
*   **React:** A JavaScript library for building user interfaces.
*   **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
*   **CSS Modules:** A CSS file in which all class names and animation names are scoped locally by default.
