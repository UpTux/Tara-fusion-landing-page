# TARA Fusion - Landing Page

![TARA Fusion](https://img.shields.io/badge/TARA-Fusion-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.1-black)
![React](https://img.shields.io/badge/React-19.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)

Welcome to the official landing page of **TARA Fusion** – an innovative, web-based tool for conducting Threat Analysis and Risk Assessment (TARA) for security-critical systems.

## 🎯 About TARA Fusion

TARA Fusion is a comprehensive platform that revolutionizes the security assessment process for complex systems. By combining an intuitive user interface, powerful analysis tools, and collaborative features, TARA Fusion enables security experts to systematically identify, assess, and mitigate threats.

### 🚀 Key Features

#### ✅ Visual Attack Tree Editor
Create and visualize attack paths with an intuitive graphical interface. The Attack Tree Editor allows you to:
- Visually represent complex attack scenarios
- Structure attack vectors hierarchically
- Model dependencies between attack steps
- Perform interactive analyses

#### 🤖 Threat Generation (PLANNED)
Leverage the power of artificial intelligence to discover potential threats:
- **Local AI Integration** – All AI functions run exclusively locally for maximum data security
- Automatic identification of threat scenarios
- Intelligent suggestions for attack vectors
- Context-based risk analysis

#### 📊 Comprehensive Risk Management
Manage all aspects of your security assessment in one place:
- **Threat Tracking** – Document and prioritize identified threats
- **Asset Management** – Capture all resources worth protecting
- **Damage Scenarios** – Assess potential impacts
- **Mitigation Strategies** – Plan and track countermeasures

#### 👥 Multi-User Collaboration
Work efficiently as a team:
- Role-based access control (RBAC)
- Team and organization management
- Collaborative editing of TARA projects
- Version control and change tracking

#### 📄 Documentation Export
Seamless integration into your technical documentation:
- Export in **sphinx-needs** compatible format
- Automatic generation of security documentation
- Integration into existing documentation systems
- Traceable audit trails

#### 📚 Threat Catalog Management
Build reusable knowledge databases:
- Create and maintain threat catalogs
- Share best practices within your organization
- Use predefined threat templates
- Continuous expansion of the knowledge base

## 🌐 About This Landing Page

This landing page was developed using cutting-edge web technologies to optimally present TARA Fusion:

### Technology Stack

- **Framework:** Next.js 15.1 with Static Site Generation (SSG)
- **UI Library:** React 19.2
- **Language:** TypeScript 5.8
- **Styling:** Tailwind CSS 3.4
- **Deployment:** GitHub Pages

### Landing Page Features

- 🎨 **Modern, Responsive Design** – Optimized for all devices
- ⚡ **Optimal Performance** – Through SSG and modern build optimizations
- 🔍 **SEO-Optimized** – For maximum visibility
- ♿ **Accessible** – Following WCAG guidelines
- 🌙 **Dark/Light Mode** – User-friendly theme support

## 🛠️ Local Development

### Prerequisites

- **Node.js** (Version 18.x or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Tara-fusion-landing-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   
   Create a `.env.local` file based on `.env.example`:
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Gemini API Key (if required):
   ```
   NEXT_PUBLIC_MAILERLITE_API_TOKEN=your_api_token_here
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```
   
   The application is now accessible at `http://localhost:3000`.

### Build & Deployment

#### Local Build

```bash
npm run build
```

This command creates an optimized production version of the application in the `out/` directory.

#### Production Server (local testing)

```bash
npm run start
```

#### GitHub Pages Deployment

The landing page is configured for automatic deployment to GitHub Pages. With every push to the `main` branch, the page is automatically rebuilt and deployed.

## 📁 Project Structure

```
Tara-fusion-landing-page/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root Layout
│   ├── page.tsx           # Homepage
│   └── privacy/           # Privacy Policy Page
├── components/            # Reusable React Components
│   ├── Footer.tsx
│   ├── ThemeCompare.tsx
│   └── ...
├── sections/              # Main sections of the landing page
│   ├── Showcase.tsx
│   └── ...
├── public/                # Static Assets
├── .env.example           # Environment variables example
├── next.config.ts         # Next.js Configuration
├── tailwind.config.ts     # Tailwind CSS Configuration
└── tsconfig.json          # TypeScript Configuration
```

## 🤝 Contributing

We welcome contributions to improve the landing page! Please note:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

For questions or feedback about TARA Fusion, please visit our website or contact us directly.

---

**TARA Fusion** – Security through systematic analysis.