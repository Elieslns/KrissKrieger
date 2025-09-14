# Lawyer Website Application

## Overview

This is a professional law firm website for Cabinet Maître Kriss KRIEGER, a French lawyer specializing in real estate law, family law, and civil liability. The application is built as a full-stack TypeScript web application featuring a modern React frontend with a Node.js/Express backend. The site provides information about the lawyer's services, expertise areas, fee structure, and includes a contact form for potential clients to reach out.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side is built with **React 18** using TypeScript and leverages modern UI libraries:
- **Vite** as the build tool and development server for fast development and optimized production builds
- **shadcn/ui** component library built on Radix UI primitives for accessible, customizable components
- **Tailwind CSS** for utility-first styling with custom CSS variables for theming
- **React Hook Form** with Zod validation for type-safe form handling
- **TanStack Query** for server state management and caching
- **Wouter** as a lightweight client-side router
- Single-page application (SPA) with smooth scrolling navigation between sections

### Backend Architecture
The server-side uses **Express.js** with TypeScript:
- RESTful API design with `/api` prefix for all endpoints
- Rate limiting implemented for contact form submissions (5 requests per 15-minute window per IP)
- Input validation using Zod schemas shared between client and server
- Error handling middleware with proper HTTP status codes
- Session-based architecture ready (connect-pg-simple for PostgreSQL sessions)

### Data Storage Solutions
- **PostgreSQL** database using Neon serverless infrastructure
- **Drizzle ORM** for type-safe database operations and migrations
- Schema definitions shared between client and server via `shared/schema.ts`
- In-memory storage fallback (`MemStorage`) for development/testing environments
- Database migrations managed through `drizzle-kit`

### Authentication and Authorization
The application includes infrastructure for user authentication:
- User schema with username/password fields
- Session management setup with PostgreSQL store
- Authentication endpoints prepared but not currently utilized in the main application flow
- Secure password handling patterns implemented

### Email Integration
- **SendGrid** integration for transactional emails
- HTML email templates with proper escaping for security
- Graceful degradation when email service is unavailable
- Contact form submissions saved to database regardless of email delivery status

## External Dependencies

### Core Frameworks and Libraries
- **React 18** - Frontend framework
- **Express.js** - Backend web framework
- **Vite** - Build tool and development server
- **TypeScript** - Type safety across the stack

### Database and ORM
- **@neondatabase/serverless** - Serverless PostgreSQL database driver
- **drizzle-orm** - Type-safe ORM
- **drizzle-kit** - Database migration tools
- **connect-pg-simple** - PostgreSQL session store for Express

### UI and Styling
- **@radix-ui/react-\*** - Accessible UI primitives (multiple components)
- **tailwindcss** - Utility-first CSS framework
- **class-variance-authority** - Utility for creating variant-based component APIs
- **clsx** and **tailwind-merge** - Conditional className utilities

### Form Handling and Validation
- **react-hook-form** - Form library with TypeScript support
- **@hookform/resolvers** - Resolvers for external validation libraries
- **zod** - Schema validation library
- **drizzle-zod** - Integration between Drizzle and Zod

### State Management and Data Fetching
- **@tanstack/react-query** - Server state management and caching
- **wouter** - Lightweight client-side routing

### Email Service
- **@sendgrid/mail** - Email delivery service

### Development and Build Tools
- **tsx** - TypeScript execution for development
- **esbuild** - JavaScript bundler for production server build
- **@replit/vite-plugin-\*** - Replit-specific development plugins
- **postcss** and **autoprefixer** - CSS processing tools

### Utilities
- **date-fns** - Date manipulation library
- **cmdk** - Command menu component
- **nanoid** - Unique ID generation
- **lucide-react** - Icon library