# Portfolio Website

This project is a multi-page personal portfolio built with plain HTML, CSS, and a small amount of JavaScript.

## Pages

- `Index.html`: main landing page
- `education.html`: education background
- `projects.html`: project showcase
- `experience.html`: experience page
- `contact.html`: contact form and social links

## Main Changes Made

### Home Page

The home page was updated to use a cleaner layout with:

- a fixed navigation bar
- a profile image on the left
- an introduction and role on the right
- a short description below the role
- action buttons for contact and resume download
- a hobbies section below the profile section

### Layout Improvements

The homepage layout now uses:

- a `profile-row` section for the main image and text
- a `text-column` wrapper to stack the title, description, and buttons vertically
- an `action-buttons` row to place the buttons side by side

This replaced earlier spacing attempts that relied too heavily on large margins.

### Resume Download

A JavaScript file was added:

- `js/main.js`

The `Download CV` button now triggers a download of:

- `Docs/resume.docx`

This is done by creating a temporary link in JavaScript and clicking it automatically.

### Navigation Bar

The navigation bar was changed to stay fixed at the top of the page.

To support that:

- `body` now has top padding
- `.navbar` uses `position: fixed`
- global `box-sizing: border-box` was added to prevent overflow issues

### Hobbies Section

A hobbies section was added below the main profile section on the home page.

It includes:

- Playing soccer
- Playing video games
- Traveling to new places
- Reading autobiographies

The hobbies section was moved outside the profile container so it appears below the main content instead of beside it.

### Projects Page

The Projects page was restyled to match the cleaner look of the home page.

Changes include:

- cleaner spacing
- light background
- simple project cards
- simple rounded project links
- corrected home link path to `Index.html`

Files updated:

- `projects.html`
- `css/projects.css`

### Education Page

The Education page was simplified and cleaned up.

Changes include:

- a cleaner page header
- a simple styled education table
- removal of broken table markup
- corrected home link path to `Index.html`

Files updated:

- `education.html`
- `css/education.css`

## Current Project Structure

```text
.
|-- Index.html
|-- education.html
|-- projects.html
|-- experience.html
|-- contact.html
|-- README.md
|-- css/
|   |-- styles.css
|   |-- education.css
|   |-- projects.css
|   |-- contact.css
|   |-- skills.css
|-- js/
|   |-- main.js
|-- Docs/
|   |-- resume.docx
|-- img/
|   |-- profile.jpg
|   |-- profile2.png
```
