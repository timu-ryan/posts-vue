# Vue Posts Playground

A small learning-oriented Vue 3 single page application that fetches posts from JSONPlaceholder and showcases routing, global state management, custom UI components, and reusable directives.

## Feature Highlights
- Browse, search, and sort posts backed by the JSONPlaceholder REST API
- Lazy pagination with the option to append more posts on demand
- Detail view per post and dedicated routes for main, about, posts, and Vuex-specific examples
- Reusable `MyButton`, `MyInput`, `MyDialog`, and `MySelect` components registered globally
- Utility mixins and custom directives (`v-focus`, `v-intersection`) to encapsulate shared logic

## Tech Stack
- Vue 3 with the Options API
- Vue Router 4 for client-side navigation
- Vuex 4 namespaced modules for state management
- Axios for network requests
- Scoped component styles

## Getting Started
### Prerequisites
- Node.js 16 or newer
- npm (ships with Node.js)

### Installation
```bash
npm install
```

### Development server
```bash
npm run serve
```
The app becomes available at `http://localhost:8080` by default.

### Production build
```bash
npm run build
```
Bundled assets are emitted into `dist/`.

## Available Scripts
- `npm run serve` starts the hot-reloading development server.
- `npm run build` creates a production-ready build.

## Project Layout
```
src/
├── components/
│   ├── UI/                 # Global UI primitives (button, input, dialog, select)
│   ├── NavBar.vue          # Application header
│   ├── PostForm.vue        # Form for composing a new post
│   ├── PostItem.vue        # Single post card with actions
│   └── PostList.vue        # Post list wrapper
├── directives/             # Custom directives (focus, intersection observer)
├── mixins/                 # Reusable logic (toggle mixin)
├── pages/                  # Route targets (main, about, posts, post detail, Vuex demo)
├── router/router.js        # Route configuration
├── store/                  # Vuex store and post module
├── App.vue                 # Root component
└── main.js                 # App bootstrap and plugin registration
```

## Architecture Notes
- Posts are loaded in `src/store/postModule.js`, which wraps Axios calls to `https://jsonplaceholder.typicode.com/posts` and keeps pagination metadata.
- UI components are registered globally via `src/components/UI/index.js` so they are drop-in across the app.
- `src/directives` gathers custom directives used for auto-focusing inputs and infinite scroll triggers.

## Customisation Tips
- Adjust page size, initial sort order, or API endpoints inside `src/store/postModule.js`.
- Add new navigation items in `src/components/NavBar.vue` and define their routes in `src/router/router.js`.
- Extend the UI kit by adding a component to `src/components/UI/` and exporting it from `src/components/UI/index.js`.

## Contributing
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/my-improvement`.
3. Commit with a concise message: `git commit -m "Describe your change"`.
4. Push the branch: `git push origin feature/my-improvement`.
5. Open a pull request for review.

## License
This project is provided for educational purposes.
