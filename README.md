# Portfolio Website - Yash Bhushan

A professional, modern, and fully responsive personal portfolio website showcasing my skills, projects, and experience as a software developer.

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Contact Form**: Functional contact form with email delivery via SendGrid
- **Resume Download**: Direct PDF download functionality
- **Photography Gallery**: Showcasing performance photos
- **Project Showcase**: Interactive project cards with GitHub links
- **Professional Animations**: Smooth transitions and scroll-triggered animations

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** components
- **Framer Motion** for animations
- **React Hook Form** for form handling
- **React Query** for state management

### Backend
- **Node.js** with Express
- **TypeScript** for type safety
- **Drizzle ORM** for database operations
- **Zod** for data validation
- **SendGrid** for email service

### Build Tools
- **Vite** for development and building
- **esbuild** for production bundling
- **PostCSS** for CSS processing

## 🏗️ Architecture

```
Frontend (React) ↔ Backend (Express) ↔ SendGrid (Email)
                         ↓
                   Database (In-Memory)
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YashB28/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Add your SendGrid API key and other environment variables
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 📦 Build and Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### GitHub Pages Deployment
This project is configured for automatic deployment to GitHub Pages via GitHub Actions. Simply push to the `main` branch and the deployment will trigger automatically.

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/components/     # React components
│   ├── src/pages/          # Page components
│   ├── public/             # Static files (resume, images)
│   └── index.html          # HTML template
├── server/                 # Backend Express application
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API endpoints
│   ├── email.ts            # Email service
│   └── storage.ts          # Data storage
├── shared/                 # Shared types and schemas
└── .github/workflows/      # GitHub Actions workflows
```

## 🔧 Configuration

### Environment Variables
- `SENDGRID_API_KEY`: SendGrid API key for email functionality
- `NODE_ENV`: Environment (development/production)
- `DATABASE_URL`: PostgreSQL connection string (optional)

### Custom Domain (Optional)
To use a custom domain with GitHub Pages:
1. Add your domain to the `cname` field in `.github/workflows/deploy.yml`
2. Configure your domain's DNS settings
3. Add a CNAME file to the `client/public` directory

## 📧 Contact Form

The contact form is fully functional and sends emails directly to `ybhushan2002@gmail.com` using SendGrid. Features include:

- Real-time form validation
- Client-side and server-side validation with Zod
- Professional email templates
- Toast notifications for user feedback
- Graceful error handling

## 🎨 Customization

### Updating Personal Information
1. Edit component files in `client/src/components/`
2. Update social links and contact information
3. Replace photos in `attached_assets/`
4. Update resume PDF in `client/public/`

### Styling
- Tailwind CSS classes can be customized in component files
- Global styles are in `client/src/index.css`
- Theme colors can be modified in the CSS variables

## 🚀 Performance

- **Code Splitting**: Automatic code splitting with React lazy loading
- **Image Optimization**: Optimized images for web
- **Bundle Size**: Minimized bundle size with Vite
- **Caching**: Effective caching strategies implemented

## 🔒 Security

- Input validation with Zod schemas
- XSS protection with proper sanitization
- CSRF protection for forms
- Environment variable management
- Secure email handling

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Yash Bhushan**
- Email: ybhushan2002@gmail.com
- GitHub: [@YashB28](https://github.com/YashB28)
- LinkedIn: [Yash Bhushan](https://linkedin.com/in/yash-bhushan-3a43a3262)
- Phone: (+91) 8849453588

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [SendGrid](https://sendgrid.com/) - Email service
- [Vite](https://vitejs.dev/) - Build tool

---

⭐ If you found this project helpful, please give it a star on GitHub!