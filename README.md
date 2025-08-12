# Calculator App

This is a fully functional calculator application built with React, TypeScript, and Vite. The calculator features a clean, modern UI with responsive design and supports all basic arithmetic operations.

## Features

- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Percentage calculations
- Sign toggling (+/-)
- Error handling (e.g., division by zero)
- Responsive design that works on different screen sizes
- Comprehensive test suite

## Project Structure

```
calculator/
├── .gitignore
├── README.md
├── GITHUB_INSTRUCTIONS.md
├── DEPLOYMENT_INSTRUCTIONS.md
├── PROJECT_SUMMARY.md
├── package.json
├── vite.config.ts
├── vitest.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── index.html
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── vite-env.d.ts
│   ├── styles/
│   │   ├── index.css
│   │   └── App.css
│   ├── assets/
│   │   ├── vite.svg
│   │   └── react.svg
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Screen.tsx
│   │   │   └── Button.tsx
│   │   └── layout/
│   │       └── ButtonBox.tsx
│   ├── __tests__/
│   │   ├── components/
│   │   │   └── App.test.tsx
│   │   └── utils/
│   └── setupTests.ts
```

This project was built with:
- React for the UI components
- TypeScript for type safety
- Vite for fast development and building
- Math.js for reliable calculation engine
- Vitest and React Testing Library for testing

## Deployment

For deployment instructions, see:
- [DEPLOYMENT_INSTRUCTIONS.md](DEPLOYMENT_INSTRUCTIONS.md) for deployment to Netlify
- [GITHUB_INSTRUCTIONS.md](GITHUB_INSTRUCTIONS.md) for pushing to GitHub

## Development

To run the development server:
```bash
npm run dev
```

To build for production:
```bash
npm run build
```

To run tests:
```bash
npm test
```
