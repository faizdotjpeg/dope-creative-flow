# Dope Creative Flow - Portfolio Website

A modern, cyberpunk-inspired portfolio website built with cutting-edge web technologies. Features smooth animations, dark/light theme support, and a futuristic design aesthetic.

## 🚀 Live Demo

Visit the live site: [Your Portfolio URL]

## 🛠 Technologies Used

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **State Management**: TanStack Query
- **Theming**: next-themes for dark/light mode
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation

## ⚡ Quick Start

### Prerequisites
- Node.js 18+ and npm (recommended: [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Installation

```bash
# Clone the repository
git clone https://github.com/faizdotjpeg/dope-creative-flow.git

# Navigate to project directory  
cd dope-creative-flow

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to view the site locally.

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Theme**: Seamless theme switching with system preference detection
- **Smooth Animations**: Framer Motion powered transitions and effects
- **Custom Cursor**: Interactive cursor with hover effects
- **Portfolio Grid**: Dynamic work showcase with filtering capabilities
- **Contact Form**: Validated contact form with real-time validation
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── portfolio/      # Portfolio-specific components
├── pages/              # Route components
├── styles/             # Global styles and animations
├── hooks/              # Custom React hooks
└── lib/                # Utilities and helpers
```

## 🚀 Deployment

### GitHub Pages (Automatic)
Pushes to `main` branch automatically deploy via GitHub Actions.

### Manual Deployment Options

**Build for production:**
```bash
npm run build
```

**Preview production build:**
```bash
npm run preview
```

**Deploy to Netlify:**
```bash
# Build command: npm run build
# Publish directory: dist
```

**Deploy to Vercel:**
```bash
# Auto-detected configuration
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Customization

### Colors
Update theme colors in `src/styles/base.css` - modify CSS variables for light/dark modes.

### Content
- Update portfolio items in relevant components
- Modify contact information in `src/components/Contact.tsx`
- Change hero content in `src/components/Hero.tsx`

### Animations
Custom animations are defined in `src/styles/animations.css` and can be modified or extended.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

**Faiz Ghori** - Creative Director & Developer
- Email: [your-email@example.com]
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn]
- Twitter: [Your Twitter]
