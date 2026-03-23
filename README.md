# Ethereal OS - Interactive Portfolio System

A stunning, OS-inspired portfolio web application that reimagines the personal portfolio as an operating system experience. Built with React, TypeScript, and modern web technologies, this project delivers a unique and immersive way to showcase skills, projects, and professional information.

## Features

### Operating System Experience
- **Boot Sequence Animation**: Authentic OS boot sequence with progress tracking and system logs
- **Desktop Environment**: Full-featured desktop with draggable icons and interactive widgets
- **Window Management**: Resizable, draggable, and minimizable application windows
- **Dynamic Dock**: macOS-style dock with active application indicators
- **Start Menu**: Windows-inspired start menu with app launcher and search functionality

### Portfolio Applications
The system includes 6 custom applications:

1. **About Me** - Personal information with tabs for Personal, Education, and Experience
2. **Projects** - Showcase of development projects with detailed descriptions
3. **Skills** - Technical skills and competencies display
4. **Contact** - Email integration for direct communication
5. **Resume** - PDF-style resume viewer
6. **Terminal** - Interactive terminal application for tech-savvy visitors

### Desktop Widgets
- **Live Clock**: Large, elegant time and date display
- **System Monitor**: Real-time CPU, RAM, and network usage indicators
- **Music Player**: Functional music player widget with playback controls

### Design Highlights
- **Ethereal Aesthetics**: Dark theme with glassmorphism and subtle gradients
- **Smooth Animations**: Fluid transitions and hover effects throughout
- **Responsive Design**: Fully responsive layout that adapts to mobile and desktop
- **Accessibility**: Built with semantic HTML and ARIA attributes

## Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript 5.8
- **Build Tool**: Vite 6.2
- **Styling**: Tailwind CSS 4.1 with custom design system
- **Icons**: Lucide React
- **Animations**: Motion (Framer Motion)
- **AI Integration**: Google Gemini AI (@google/genai)
- **Backend**: Express.js for API routes

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/mahmoud25osama/Portfolio-04-OS-System.git
cd Portfolio-04-OS-System
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Configure your `.env` file with required API keys:
```env
GEMINI_API_KEY=your_gemini_api_key_here
APP_URL=your_app_url_here
```

## Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server (port 3000, host 0.0.0.0)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run clean` - Remove build artifacts
- `npm run lint` - Run TypeScript type checking

## Building for Production

Create an optimized production build:
```bash
npm run build
```

The build output will be in the `dist` directory.

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
Portfolio-04-OS-System/
├── src/
│   ├── App.tsx           # Main application component with OS logic
│   ├── Apps.tsx          # Individual portfolio applications
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── index.html            # HTML entry point
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite build configuration
├── .env.example          # Environment variables template
└── README.md             # Project documentation
```

## Customization

### Personalizing Content
Edit the content in `src/Apps.tsx` to update:
- Personal information and bio
- Education and experience
- Projects showcase
- Skills and technologies
- Contact information

### Styling and Theme
The project uses Tailwind CSS with a custom color scheme. Main color palette:
- Background: `#1a1a24`, `#13141c`
- Surface: `#1a1b26`, `#2a2b3d`
- Accent: `#a3b8f0` (ethereal blue)
- Text: `#e2e8f0`, `#94a3b8`

### Adding New Applications
To add a new application to the OS:

1. Define the app in the `APPS` array in `src/App.tsx`:
```typescript
{
  id: 'myapp',
  title: 'My App',
  icon: MyIcon,
  color: 'bg-gradient-to-br from-color-400 to-color-600 text-white',
  component: MyAppComponent,
  defaultSize: { w: 800, h: 600 }
}
```

2. Create the app component in `src/Apps.tsx`:
```typescript
export const MyAppComponent = () => {
  return (
    <div className="h-full bg-[#13141c] text-[#e2e8f0] p-6">
      {/* Your app content */}
    </div>
  );
};
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

The application is optimized for performance:
- Code splitting with Vite
- Lazy loading of components
- Optimized animations with CSS transforms
- Efficient re-rendering with React 19

## License

This project is open source and available for personal and commercial use.

## Author

**Mahmoud Osama**
- Fullstack MERN Developer
- GitHub: [@mahmoud25osama](https://github.com/mahmoud25osama)

## Acknowledgments

- UI/UX inspiration from modern operating systems (macOS, Windows 11)
- Design philosophy: Digital weightlessness and ethereal aesthetics
- Built with modern web technologies and best practices

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## Support

If you find this project helpful, please consider giving it a star on GitHub!

---

*Built for modern architects. ETHEREAL_OS v2.0*
