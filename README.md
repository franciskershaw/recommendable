# Recommendable

A modern web application for managing and organizing recommendations across different categories. Built with React, TypeScript, and Vite.

## 🌟 Features

- **Category Management**: Organise recommendations into different categories (Films, TV, Music, Places, Events)
- **Recommendation Status**: Track both active and archived recommendations
- **Sorting Options**: Multiple sorting capabilities including:
  - Most Recent/Oldest
  - Name (A-Z/Z-A)
  - Recommender (A-Z/Z-A)
- **Responsive Design**: Fully responsive layout with optimized mobile and desktop experiences
- **Authentication**: Support for both Google OAuth and local authentication

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **State Management**: TanStack Query (React Query)
- **Styling**:
  - Tailwind CSS
  - shadcn/ui components
  - Radix UI primitives
- **Form Handling**: React Hook Form with Zod validation
- **Notifications**: Sonner for toast notifications

## 🏗️ Project Structure

The project follows a feature-based structure:

```
src/
├── components/ # Shared UI components
├── pages/ # Page components
├── hooks/ # Custom React hooks
├── context/ # React context providers
├── types/ # TypeScript type definitions
├── constants/ # Shared constants
└── lib/ # Utility functions
```

## 🚀 Key Features Implementation

### Recommendation Management

- Create, read, update, and delete recommendations
- Archive and unarchive functionality
- Category-based organization
- Rich sorting capabilities

### UI/UX Features

- Responsive navigation with collapsible sidebar
- Mobile-optimized bottom controls
- Toast notifications for user feedback
- Loading states and error handling
- Tooltip-enhanced action buttons

### Data Management

- Optimistic updates for better user experience
- Efficient cache management with TanStack Query
- Type-safe API interactions

## 🔧 Setup and Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with required environment variables:

```bash
VITE_API_URL=your_api_url_here
```

4. Start the development server:

```bash
npm run dev
```

## 🌐 Environment Variables

- `VITE_API_URL`: Backend API URL

## 📦 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint
- `npm run prettier`: Format code with Prettier

## 🎨 Styling

The project uses a combination of Tailwind CSS and shadcn/ui components, providing:

- Consistent design system
- Dark/light theme support
- Custom color schemes
- Responsive layouts
- Accessible components

## 🔐 Authentication

The application supports:

- Google OAuth integration
- Local authentication system
- Protected routes
- Persistent sessions

## 📄 License

This project is licensed under the MIT License.
