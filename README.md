# Velasco Portfolio

A lightweight, high-performance, single-file PHP personal portfolio web application built for simplicity, speed, and clean routing. 

Developed by **Raissel Jan H. Velasco**, an Information Technology student at Pamantasan ng Lungsod ng Valenzuela (PLV).

---

## Features

* **Single-File Architecture:** Cleanly consolidates routing, view rendering, and form submission processing into a single maintainable entry point (`index.php` or custom file name).
* **Built-in URL Routing:** Simple query-string based multi-page routing (`?page=home`, `?page=about`, `?page=contact`).
* **Interactive About Page:** Features dynamic sections for personal biography, tech stack grids, and personal interests.
* **Featured Projects Showcase:** Highlights academic and personal builds, including interactive Figma UI prototypes and responsive frontend web applications (e.g., *D&G Apparel*).
* **Secure Contact Form:** Includes robust input sanitization, email validation, header injection defense, and error-handling feedback via PHP's `mail()` function.
* **Responsive Styling:** Custom CSS layout structured with dedicated enhancements for various viewports.

---

## Tech Stack

* **Backend:** PHP 8+
* **Frontend:** HTML5, CSS3, JavaScript
* **Design Tools & Prototyping:** Figma

---

## Project Structure

```text
├── index.php             # Main entry point containing routing, logic, and views
├── CSS/                  
│   ├── style.css         # Core layout stylesheets
│   └── enhancements.css  # Responsive and design polish styles
├── JS/
│   └── main.js           # Client-side interactivity scripts
└── IMAGES/               # Profile assets, tech stack icons, and social media badges
