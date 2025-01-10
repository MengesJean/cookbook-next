# Cookbook - Recipe Management System

A modern web application for managing your recipes and cookbooks. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 📚 Book Management
  - Create, edit, and delete cookbooks
  - Upload cover images
  - Organize recipes by book
- 🍳 Recipe Management
  - Create and edit detailed recipes
  - Add ingredients with quantities and units
  - Step-by-step cooking instructions
  - Image upload support
- 🎨 Modern UI/UX
  - Responsive design
  - Dark/Light mode support
  - Drag and drop image uploads
  - Real-time form validation
  - Toast notifications
  - Confirmation dialogs

## Tech Stack

- **Frontend**
  - Next.js 14 (App Router)
  - TypeScript
  - Tailwind CSS
  - React Hook Form
  - Zod Validation
  - React Dropzone
- **Backend**
  - NestJS
  - PostgreSQL
  - TypeORM
  - File Upload handling

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL database
- NestJS backend running

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/cookbook.git
cd cookbook/frontend
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                   # Next.js app router pages
├── components/
│   ├── books/            # Book-related components
│   ├── recipes/          # Recipe-related components
│   └── ui/               # Reusable UI components
├── hooks/                # Custom React hooks
├── lib/
│   ├── actions/          # Server actions
│   ├── schemas/          # Zod validation schemas
│   ├── types/            # TypeScript types
│   └── utils/            # Utility functions
└── styles/               # Global styles
```

## Key Components

- `ImageUpload`: Handles image upload with preview
- `FormField`: Reusable form field wrapper
- `Confirm`: Custom confirmation dialog
- `Repeater`: Dynamic form field array component

## Form Validation

We use Zod for form validation with schemas defined in `src/lib/schemas/`. Example:

```typescript
const bookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  imagePreview: z.any().optional(),
});
```

## API Integration

Server actions in `src/lib/actions/` handle API communication:

- `book.actions.ts`: Book CRUD operations
- `recipe.actions.ts`: Recipe management

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- React Hook Form for form handling
- All other open-source contributors
