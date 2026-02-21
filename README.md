# Developer Portfolio

A premium, fully responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 🛠️ Customization

This project is built to be easily customizable.

### 1. Update Content
All text, links, projects, and skills are located in `src/data/index.js`.
- Open `src/data/index.js`
- Edit the `profile` object to change your name, role, social links, and bio.
- Edit the `skills` array to update your tech stack.
- Edit the `projects` array to add your own work (images, links, descriptions).
- Edit the `experience` array to reflect your work history.

### 2. Update Icons
The project uses `lucide-react`. 
- To use new icons, import them in `src/data/index.js` (for skills) or the respective component file.
- Example: `import { NewIcon } from 'lucide-react';`

### 3. Change Colors & Fonts
- **Colors**: Open `tailwind.config.js` and modify the `primary` and `secondary` colors in the `theme` section.
- **Fonts**: The project uses **Inter** from Google Fonts. To change it, update the import in `src/index.css` and the fontFamily in `tailwind.config.js`.

### 4. Images
- Place your local images in `public/` or `src/assets/`.
- Update the image paths in `src/data/index.js`.

## 📂 Structure
- `src/components/` - All UI sections (Hero, About, etc.)
- `src/data/` - Centralized content
- `src/styles/` - Global styles (if added)

Happy Coding! 🚀
