# Portfolio Website

## Overview

This is a full-stack portfolio website built with React, TypeScript, and Express for Yash Bhushan, a recent Electronics and Communication Engineering graduate. It features a modern, responsive design showcasing his work, skills, and experience. The application includes sections for hero introduction, about me, skills, projects, work experience, photography gallery, and a contact form with backend integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (January 2025)

- Updated all personal information for Yash Bhushan
- Customized hero section with name, tagline, and social links
- Updated about section with education and background details
- Modified skills section to reflect actual technical skills
- Updated professional experience with ML intern and prompt engineer roles
- Added 3 personal projects: Virtual Canvas, IoT Food Detection, Shop It ecommerce
- Updated all contact information and social media links
- Prepared for GitHub deployment with documentation and workflow files

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Query for server state, React Context for theme
- **Animations**: Framer Motion for smooth animations
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Storage**: PostgreSQL sessions with connect-pg-simple
- **Development**: Hot reload with Vite middleware integration

### UI Component System
- **Design System**: shadcn/ui with Radix UI primitives
- **Theme**: CSS variables with light/dark mode support
- **Icons**: Lucide React icons and React Icons
- **Typography**: System fonts with proper font stacks

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling to sections
- **Hero Section**: Profile image, introduction, and call-to-action buttons
- **About Section**: Personal information cards with icons
- **Skills Section**: Categorized technical skills with technology icons
- **Projects Section**: Portfolio projects with GitHub and live demo links
- **Experience Section**: Professional work history timeline
- **Photography Section**: Image gallery with hover effects
- **Contact Section**: Form with client-side validation and API integration
- **Footer**: Social links and copyright information

### Backend Routes
- **Contact API**: POST `/api/contact` - Handles contact form submissions with validation

### Database Schema
- **Contact Messages**: Stores form submissions with name, email, subject, message, and timestamp
- **Schema Validation**: Zod schemas for type-safe data validation

## Data Flow

### Contact Form Flow
1. User fills out contact form on frontend
2. Form data validated using React Hook Form with Zod resolver
3. Submitted data sent to `/api/contact` endpoint
4. Backend validates data using shared Zod schema
5. Message stored in database (currently using in-memory storage)
6. Success/error response sent back to frontend
7. Toast notification shown to user

### Theme Management
1. Theme preference stored in localStorage
2. Theme context provides current theme and toggle function
3. CSS variables updated dynamically for theme switching
4. System preference detection on initial load

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with TypeScript support
- **Styling**: Tailwind CSS, shadcn/ui, Radix UI primitives
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Hookform resolvers
- **Animations**: Framer Motion for smooth transitions
- **Validation**: Zod for runtime type checking
- **Icons**: Lucide React, React Icons (including brand icons)
- **Utilities**: clsx, class-variance-authority for conditional styling

### Backend Dependencies
- **Server**: Express.js with TypeScript
- **Database**: Drizzle ORM with PostgreSQL support
- **Database Client**: Neon serverless for PostgreSQL connection
- **Session Management**: connect-pg-simple for PostgreSQL sessions
- **Validation**: Zod for shared schema validation
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build Tool**: Vite with React plugin
- **Database Migrations**: Drizzle Kit for schema management
- **Error Handling**: Replit runtime error overlay
- **Code Quality**: TypeScript strict mode configuration

## Deployment Strategy

### Build Process
- Frontend builds to `dist/public` directory using Vite
- Backend compiles to `dist/index.js` using esbuild
- Static assets served from build directory in production

### Environment Configuration
- **Development**: Vite dev server with Express middleware
- **Production**: Compiled Express server serving static frontend
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Scripts
- `npm run dev`: Development mode with hot reload
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server
- `npm run db:push`: Database schema deployment

### Database Setup
- Drizzle configured for PostgreSQL with migrations support
- Schema defined in shared directory for type safety
- Environment variable required for database connection
- Automatic migration support via Drizzle Kit

The application is designed for easy deployment on platforms like Replit, Vercel, or similar services with PostgreSQL database support.