# My Portfolio Website

A modern, futuristic portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive across all devices
- ✨ Smooth animations and transitions
- 🎯 Interactive navigation with smooth scrolling
- 💼 Project showcase section
- 🛠️ Skills and technologies display
- 📬 Contact form
- 🌙 Dark theme design

## Sections

1. **Home/Hero** - Introduction and call-to-action
2. **About** - Personal information and statistics
3. **Projects** - Showcase of your work
4. **Skills** - Technical skills with progress bars
5. **Contact** - Contact information and form

## Technologies Used

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS (with custom colors)
- next-themes (Dark/Light mode)
- React 18

## Setup

1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser
5. Customize the content:
   - Edit components in `/components` folder
   - Modify colors in `tailwind.config.ts`
   - Update projects data in `components/Projects.tsx`
   - Edit personal info in `components/Hero.tsx`, `About.tsx`, etc.

## Customization

### Colors
Edit the custom colors in `tailwind.config.ts`:
```typescript
colors: {
  primaryRed: '#FF0033',
  primaryBlue: '#00AAFF',
  accentWhite: '#E6F0FF',
  glass: 'rgba(255,255,255,0.04)'
}
```

### Content
- Update your name and title in `components/Hero.tsx`
- Edit about section in `components/About.tsx`
- Add your projects in `components/Projects.tsx`
- Update skills list in `components/Skills.tsx`
- Modify contact info and social links in `components/Footer.tsx`

## File Structure

```
My_Portfolio/
├── app/
│   ├── layout.tsx          # Root layout with ThemeProvider
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── ThemeProvider.tsx   # Theme provider wrapper
│   ├── Navbar.tsx          # Navigation component
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects showcase
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer component
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Build for Production

```bash
npm run build
npm start
```

## Deployment

Deploy easily to Vercel (recommended for Next.js):
```bash
npm install -g vercel
vercel
```

Or deploy to:
- Vercel (recommended)
- Netlify
- Railway
- Any Node.js hosting platform

## License

Free to use for personal and commercial projects.

## Contact

Feel free to reach out if you have any questions or suggestions!

---

**Note**: Remember to update all placeholder content with your actual information before deploying!

Enjoy It! 🚀
