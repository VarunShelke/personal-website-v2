# Personal Website v2

A modern, responsive personal portfolio website built with React and Vite, showcasing professional experience, projects, and skills. This is the second iteration of my personal website, featuring improved performance, accessibility, and user experience.

## 🚀 Live Demo

Visit the live website: [varunshelke.com](https://varunshelke.com)

## 📋 Project Description

This personal portfolio website serves as a comprehensive showcase of my professional journey as a software engineer. The site features:

- **Interactive Hero Section** - Dynamic introduction with animated elements
- **About Section** - Personal background and technical skills
- **Experience Timeline** - Professional work history with detailed descriptions
- **Featured Projects** - Highlighted projects with live demos and source code
- **Project Archive** - Complete portfolio of work and side projects
- **Contact Section** - Multiple ways to get in touch

The website is designed with a focus on performance, accessibility, and modern web standards, featuring smooth animations, responsive design, and SEO optimization.

## 🛠️ Technologies Used

### Frontend Framework & Build Tools
- **React 18.3.1** - Modern React with hooks and functional components
- **Vite 7.1.2** - Fast build tool and development server
- **JavaScript (ES6+)** - Modern JavaScript features and syntax

### Styling & UI
- **Styled Components 6.1.19** - CSS-in-JS styling solution
- **CSS3** - Custom properties, Grid, Flexbox, and animations
- **Responsive Design** - Mobile-first approach with breakpoints

### Routing & Navigation
- **React Router DOM 6.28.0** - Client-side routing and navigation

### Animations & Interactions
- **Anime.js 3.1.0** - Lightweight JavaScript animation library
- **ScrollReveal 4.0.9** - Scroll-triggered animations
- **React Transition Group 4.4.5** - Transition components for React

### SEO & Meta Management
- **React Helmet Async 2.0.5** - Document head management
- **Structured Data** - JSON-LD schema markup for better SEO
- **Open Graph & Twitter Cards** - Social media optimization

### Development Tools
- **ESLint 9.33.0** - Code linting and formatting
- **Vite Plugin React 5.0.0** - React support for Vite
- **Path Aliases** - Clean import statements with @ prefixes

### Utilities & Helpers
- **Lodash 4.17.21** - Utility functions
- **PropTypes 15.8.1** - Runtime type checking for React props

### Deployment & Hosting
- **AWS Amplify** - Continuous deployment and hosting
- **Node.js 22.18.0** - Runtime environment

## 📁 Project Structure

```
personal-website-v2/
├── public/                     # Static assets
│   ├── images/                # Project images and photos
│   ├── *.pdf                  # Resume and project documents
│   └── favicon files          # Website icons
├── src/
│   ├── components/            # Reusable React components
│   │   ├── sections/          # Page sections (Hero, About, etc.)
│   │   ├── icons/             # SVG icon components
│   │   ├── Layout.jsx         # Main layout wrapper
│   │   ├── Nav.jsx            # Navigation component
│   │   └── ...
│   ├── data/                  # Static data files
│   │   ├── jobs.js            # Work experience data
│   │   ├── projects.js        # Project information
│   │   └── featured.js        # Featured projects
│   ├── hooks/                 # Custom React hooks
│   │   ├── useScrollDirection.js
│   │   ├── usePrefersReducedMotion.js
│   │   └── ...
│   ├── pages/                 # Page components
│   │   ├── Home.jsx           # Main landing page
│   │   ├── Archive.jsx        # Project archive
│   │   └── 404.jsx            # Error page
│   ├── styles/                # Styling files
│   │   ├── GlobalStyle.js     # Global CSS styles
│   │   ├── mixins.js          # Reusable style mixins
│   │   ├── variables.js       # CSS custom properties
│   │   └── fonts.js           # Font definitions
│   ├── fonts/                 # Custom font files
│   ├── images/                # Source images
│   ├── utils/                 # Utility functions
│   └── config/                # Configuration files
├── dist/                      # Build output directory
├── amplify.yml                # AWS Amplify build configuration
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

## 🚀 Getting Started

### Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18.0.0 or higher)
- **npm** (version 8.0.0 or higher) or **yarn**
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/VarunShelke/personal-website-v2.git
   cd personal-website-v2
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:3000` to view the website in development mode.

### Available Scripts

- **`npm run dev`** - Starts the development server with hot reload
- **`npm run build`** - Creates an optimized production build
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check for code issues

### Environment Setup

The project uses Vite's built-in environment variable support. Create a `.env.local` file in the root directory for any environment-specific variables:

```env
# Example environment variables
VITE_GOOGLE_ANALYTICS_ID=your-ga-id
VITE_CONTACT_EMAIL=your-email@example.com
```

## 🔧 Configuration

### Vite Configuration

The project uses a custom Vite configuration with:

- **Path aliases** for cleaner imports (`@components`, `@styles`, etc.)
- **Build optimization** with manual chunk splitting
- **Development server** configuration with auto-open browser
- **CSS source maps** for better debugging

### Path Aliases

The following aliases are configured for cleaner imports:

```javascript
'@components' → 'src/components'
'@config' → 'src/config'
'@fonts' → 'src/fonts'
'@hooks' → 'src/hooks'
'@images' → 'src/images'
'@pages' → 'src/pages'
'@styles' → 'src/styles'
'@utils' → 'src/utils'
'@data' → 'src/data'
```

### Styling Configuration

The project uses:
- **CSS Custom Properties** for consistent theming
- **Styled Components** for component-scoped styling
- **Responsive breakpoints** for mobile-first design
- **Animation configurations** for smooth user interactions

## 🎨 Customization

### Updating Content

1. **Personal Information**: Edit `src/config/index.js`
2. **Work Experience**: Update `src/data/jobs.js`
3. **Projects**: Modify `src/data/projects.js` and `src/data/featured.js`
4. **Styling**: Customize colors and themes in `src/styles/variables.js`

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `src/pages/Home.jsx`
3. Update navigation links in `src/config/index.js`

### Modifying Animations

- **ScrollReveal**: Configure in `src/config/index.js` (`srConfig`)
- **Anime.js**: Used in various components for micro-interactions
- **CSS Transitions**: Defined in `src/styles/TransitionStyles.js`

## 📱 Features

### Performance Optimizations
- **Code splitting** with dynamic imports
- **Image optimization** and lazy loading
- **Font preloading** for critical resources
- **Minified and compressed** production builds

### Accessibility
- **Semantic HTML** structure
- **ARIA labels** and roles
- **Keyboard navigation** support
- **Screen reader** compatibility
- **Reduced motion** preferences respected

### SEO Optimization
- **Meta tags** for search engines
- **Open Graph** and Twitter Card support
- **Structured data** (JSON-LD) markup
- **Sitemap** generation
- **Google Analytics** integration

### Responsive Design
- **Mobile-first** approach
- **Flexible grid** system
- **Touch-friendly** interactions
- **Cross-browser** compatibility

## 🚀 Deployment

### AWS Amplify (Recommended)

The project is configured for deployment on AWS Amplify:

1. **Connect your repository** to AWS Amplify
2. **Use the provided** `amplify.yml` configuration
3. **Set environment variables** in the Amplify console
4. **Deploy automatically** on every push to main branch

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting provider

### Other Hosting Options

The built files can be deployed to:
- **Netlify** - Drag and drop the `dist` folder
- **Vercel** - Connect your GitHub repository
- **GitHub Pages** - Use GitHub Actions for deployment
- **Traditional hosting** - Upload `dist` folder contents

## 🤝 Contributing

While this is a personal website, I welcome suggestions and improvements:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/improvement`)
3. **Commit your changes** (`git commit -am 'Add some improvement'`)
4. **Push to the branch** (`git push origin feature/improvement`)
5. **Create a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Varun Shelke**
- Website: [varunshelke.com](https://varunshelke.com)
- GitHub: [@VarunShelke](https://github.com/VarunShelke)
- LinkedIn: [vashelke](https://www.linkedin.com/in/vashelke)
- Email: Varun.Shelke@pitt.edu

## 🙏 Acknowledgments

- **Design inspiration** from various portfolio websites
- **React community** for excellent documentation and resources
- **Open source libraries** that made this project possible
- **AWS Amplify** for seamless deployment and hosting

## 📊 Project Stats

- **Performance Score**: 95+ (Lighthouse)
- **Accessibility Score**: 100 (Lighthouse)
- **SEO Score**: 100 (Lighthouse)
- **Best Practices**: 100 (Lighthouse)

---

⭐ **Star this repository** if you found it helpful!
