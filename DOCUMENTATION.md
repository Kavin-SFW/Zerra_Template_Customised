# Zerra Dashboard Templates - Complete Documentation

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Project Overview](#project-overview)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Features](#features)
6. [Installation & Setup](#installation--setup)
7. [Configuration](#configuration)
8. [Architecture](#architecture)
9. [Components Documentation](#components-documentation)
10. [Dashboard System](#dashboard-system)
11. [Data Configuration](#data-configuration)
12. [Routing](#routing)
13. [Styling & Theming](#styling--theming)
14. [Development Guide](#development-guide)
15. [Deployment](#deployment)
16. [API Reference](#api-reference)
17. [Troubleshooting](#troubleshooting)

---

## 🚀 Quick Start

### Prerequisites
- **Node.js**: Version 18.x or higher
- **npm/yarn/bun**: Package manager

### Installation Steps

```bash
# 1. Clone the repository
git clone <repository-url>
cd zerra-chart-templates-main

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# Navigate to http://localhost:8080
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Development build
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

---

## 📖 Project Overview

**Zerra Dashboard Templates** is a production-ready, plug-and-play dashboard template system built for executives, operations leaders, and data analysts across multiple industries. The project provides comprehensive, industry-specific dashboard templates with real-time analytics, AI-driven insights, and predictive forecasting capabilities.

### Key Highlights

- ✅ **5+ Industry Templates**: Pre-built dashboards for Finance, E-Commerce, SaaS, Manufacturing, Banking, Insurance, Retail, Healthcare, and more
- ✅ **Universal Department Support**: Common departments (Finance, HR, Sales, Operations, IT, etc.) work across all industries
- ✅ **AI-Powered Insights**: Automated anomaly detection, predictions, recommendations, and trend analysis
- ✅ **Responsive Design**: Modern, glass-morphism UI with dark mode support
- ✅ **Production-Ready**: Built with TypeScript, React, and best practices
- ✅ **Dynamic Dashboard System**: Flexible configuration-based dashboard rendering

---

## 🛠 Technology Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI library |
| **TypeScript** | 5.8.3 | Type-safe development |
| **Vite** | 5.4.19 | Build tool and dev server |
| **React Router DOM** | 6.30.1 | Client-side routing |

### UI Framework & Components

| Library | Purpose |
|---------|---------|
| **shadcn/ui** | Accessible component library built on Radix UI |
| **Tailwind CSS** | 3.4.17 | Utility-first CSS framework |
| **Radix UI** | Unstyled, accessible component primitives |
| **Lucide React** | Icon library |

### Data Visualization

| Library | Version | Purpose |
|---------|---------|---------|
| **Recharts** | 2.15.4 | Composable charting library for React |
| **Chart Types** | - | Area, Bar, Line, Pie, Gauge, Heatmap, Funnel |

### State Management & Data Fetching

| Library | Version | Purpose |
|---------|---------|---------|
| **TanStack Query** | 5.83.0 | Server state management |
| **React Hook Form** | 7.61.1 | Form state management |
| **Zod** | 3.25.76 | Schema validation |

### Additional Libraries

- **date-fns** (3.6.0): Date utility functions
- **class-variance-authority**: Component variant management
- **clsx & tailwind-merge**: Conditional class name utilities
- **sonner**: Toast notifications

---

## 📁 Project Structure

```
zerra-chart-templates-main/
├── public/                    # Static assets
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/           # React components
│   │   ├── dashboard/        # Dashboard-specific components
│   │   │   ├── AIInsightsPanel.tsx    # AI insights display
│   │   │   ├── ChartCard.tsx          # Chart wrapper component
│   │   │   ├── DataTable.tsx          # Sortable data table
│   │   │   ├── FilterBar.tsx          # Dashboard filter bar
│   │   │   ├── GaugeChart.tsx         # Gauge chart component
│   │   │   └── KPICard.tsx            # KPI metric card
│   │   ├── layout/           # Layout components
│   │   │   ├── DashboardLayout.tsx    # Main dashboard layout
│   │   │   └── Sidebar.tsx            # Navigation sidebar
│   │   ├── ui/               # shadcn/ui components (40+ components)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── table.tsx
│   │   │   └── ... (40+ more)
│   │   └── NavLink.tsx       # Navigation link component
│   ├── config/               # Configuration files
│   │   ├── departmentData.ts # Department dashboard configurations
│   │   └── industries.ts     # Industry and department definitions
│   ├── hooks/                # Custom React hooks
│   │   ├── use-mobile.tsx    # Mobile detection hook
│   │   └── use-toast.ts      # Toast notification hook
│   ├── lib/                  # Utility functions
│   │   └── utils.ts          # Common utilities (cn, etc.)
│   ├── pages/                # Page components
│   │   ├── dashboards/       # Industry-specific dashboard pages
│   │   │   ├── FinanceDashboard.tsx
│   │   │   ├── HealthcareDashboard.tsx
│   │   │   ├── HRDashboard.tsx
│   │   │   ├── ManufacturingDashboard.tsx
│   │   │   └── RetailDashboard.tsx
│   │   ├── DepartmentDashboard.tsx  # Dynamic department dashboard
│   │   ├── Index.tsx         # Home page
│   │   └── NotFound.tsx      # 404 page
│   ├── App.tsx               # Root component with routing
│   ├── App.css               # Global styles
│   ├── index.css             # Base styles and CSS variables
│   └── main.tsx              # Application entry point
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── components.json           # shadcn/ui configuration
```

---

## ✨ Features

### 1. Multi-Industry Support

The application supports **multiple industries**, each with industry-specific departments:

- **Manufacturing**: Production, OEE, quality metrics
- **Finance**: Treasury, investments, financial reporting
- **Healthcare**: Clinical operations, patient care, bed management
- **Retail**: Store operations, inventory, sales performance
- **HR & People Analytics**: Talent management, recruitment, engagement

### 2. Universal Departments

Common departments available across all industries:

- **Accounts & Finance**: Financial reporting, budgeting, accounts management
- **Human Resources**: Workforce management, recruitment, employee analytics
- **Sales & Marketing**: Revenue tracking, campaigns, customer acquisition
- **Operations**: Day-to-day operations and process efficiency
- **IT & Engineering**: Technology infrastructure and development metrics
- **Procurement**: Vendor management and purchasing analytics
- **Quality Assurance**: Quality control and compliance metrics
- **Customer Service**: Support tickets, satisfaction, response times
- **Legal & Compliance**: Contract management and regulatory compliance
- **Executive Summary**: C-suite overview with key business metrics

### 3. Dashboard Components

#### KPI Cards
- Display key performance indicators
- Show trend indicators (up/down)
- Percentage change tracking
- Target comparison
- Color-coded status

#### Charts
- **Area Charts**: For time-series data with trends
- **Bar Charts**: For categorical comparisons
- **Line Charts**: For continuous data tracking
- **Stacked Charts**: For multi-series data
- Responsive and interactive with tooltips

#### Data Tables
- Sortable columns
- Search functionality
- Status badges with color coding
- Pagination support
- Responsive design

#### AI Insights Panel
- **Prediction**: Forecasts and projections
- **Anomaly**: Unusual patterns detected
- **Recommendation**: Actionable suggestions
- **Trend**: Historical pattern analysis
- Impact levels: High, Medium, Low

### 4. UI/UX Features

- **Glass Morphism Design**: Modern, translucent card design
- **Dark Mode Support**: Full dark/light theme support
- **Responsive Layout**: Mobile, tablet, and desktop optimized
- **Smooth Animations**: Fade-in animations and transitions
- **Accessible**: Built with ARIA-compliant components
- **Toast Notifications**: User feedback system

---

## 🔧 Installation & Setup

### Prerequisites

- **Node.js**: Version 18.x or higher
- **npm** or **yarn** or **bun**: Package manager
- **Git**: Version control

### Step-by-Step Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd zerra-chart-templates-main
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:8080` (or the port shown in terminal)

### Environment Setup

Currently, no environment variables are required. To add custom configuration:

1. Create `.env` file in root directory
2. Add variables: `VITE_API_URL=...`
3. Access in code: `import.meta.env.VITE_API_URL`

---

## ⚙️ Configuration

### Vite Configuration (`vite.config.ts`)

```typescript
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), componentTagger()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

**Key Settings:**
- **Port**: 8080 (configurable)
- **Path Alias**: `@` maps to `./src` directory
- **Component Tagger**: Enabled in development mode

### Tailwind Configuration (`tailwind.config.ts`)

The project uses a custom color system with CSS variables:

- **Primary Colors**: Theme primary color
- **Success/Warning/Destructive**: Status colors
- **Chart Colors**: 6 chart color variants
- **Sidebar Colors**: Sidebar-specific theming

### TypeScript Configuration

- **Strict Mode**: Enabled
- **Path Aliases**: `@/*` mapped to `src/*`
- **React JSX**: Automatic JSX runtime

---

## 🏗 Architecture

### Application Flow

```
User → Index Page → Select Industry → Department Dashboard
                                      ↓
                    ┌─────────────────┴─────────────────┐
                    │                                     │
            Industry Config                    Department Config
            (industries.ts)                   (departmentData.ts)
                    │                                     │
                    └─────────────────┬─────────────────┘
                                      ↓
                            Render Dashboard
                    (KPIs + Charts + Tables + Insights)
```

### Component Hierarchy

```
App
├── QueryClientProvider (React Query)
├── TooltipProvider
├── Toaster (Toast notifications)
├── BrowserRouter
    └── Routes
        ├── Index (Home page)
        ├── DepartmentDashboard (Dynamic dashboard)
        └── NotFound (404 page)
```

### Data Flow

1. **Route Parameters**: `industryId` and `departmentId` from URL
2. **Config Lookup**: Fetch industry and department configs
3. **Data Rendering**: Map config to UI components
4. **User Interaction**: Filter, search, sort operations

---

## 🧩 Components Documentation

### Dashboard Components

#### `KPICard`

Displays a single KPI metric with trend indicators.

**Props:**
```typescript
interface KPICardProps {
  title: string;           // KPI title
  value: string;           // Current value (formatted)
  change: number;          // Percentage change
  trend: "up" | "down";   // Trend direction
  target?: string;         // Optional target value
  changeLabel?: string;   // Optional change label
}
```

**Usage:**
```tsx
<KPICard
  title="Total Revenue"
  value="₹48.2Cr"
  change={12.4}
  trend="up"
  target="₹45Cr"
/>
```

#### `ChartCard`

Wrapper component for charts with title, subtitle, and actions.

**Props:**
```typescript
interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;      // Chart component
  actions?: ReactNode;
  className?: string;
  fullHeight?: boolean;
}
```

**Usage:**
```tsx
<ChartCard title="Revenue Trend" subtitle="Monthly comparison">
  <ResponsiveContainer width="100%" height={280}>
    <AreaChart data={data}>
      {/* Chart configuration */}
    </AreaChart>
  </ResponsiveContainer>
</ChartCard>
```

#### `DataTable`

Sortable, searchable data table with status badges.

**Props:**
```typescript
interface DataTableProps {
  title: string;
  columns: TableColumn[];   // Column definitions
  data: Record<string, any>[];  // Table data
  searchKey: string;        // Key for search functionality
  className?: string;
}
```

**Features:**
- Column sorting
- Global search
- Status badge rendering
- Responsive design

#### `AIInsightsPanel`

Displays AI-generated insights with categorization.

**Props:**
```typescript
interface AIInsightsPanelProps {
  insights: InsightConfig[];
  className?: string;
}
```

**Insight Types:**
- `prediction`: Forecasts and projections
- `anomaly`: Unusual patterns
- `recommendation`: Actionable suggestions
- `trend`: Historical patterns

**Impact Levels:**
- `high`: Critical insights
- `medium`: Important insights
- `low`: Informational insights

#### `FilterBar`

Top bar with title, subtitle, and filter controls.

**Props:**
```typescript
interface FilterBarProps {
  title: string;
  subtitle?: string;
  // Additional filter controls can be added
}
```

### Layout Components

#### `DashboardLayout`

Main layout wrapper with sidebar and content area.

**Features:**
- Responsive sidebar
- Content area with padding
- Mobile-friendly navigation

#### `Sidebar`

Navigation sidebar with industry and department links.

**Features:**
- Collapsible on mobile
- Active route highlighting
- Icon-based navigation

### UI Components (shadcn/ui)

The project includes 40+ pre-built UI components from shadcn/ui:

- **Forms**: Input, Textarea, Select, Checkbox, Radio, Switch
- **Overlays**: Dialog, Sheet, Popover, Tooltip, Hover Card
- **Navigation**: Tabs, Accordion, Breadcrumb, Navigation Menu
- **Feedback**: Toast, Alert, Progress, Skeleton
- **Data Display**: Table, Card, Badge, Avatar
- **Layout**: Separator, Scroll Area, Resizable Panels

All components are located in `src/components/ui/` and follow shadcn/ui patterns.

---

## 📊 Dashboard System

### Industry Selection

Users start at the home page (`Index.tsx`) which displays all industries in a grid layout. Each industry card shows:
- Industry icon
- Industry name
- Description
- Hover effects

### Department Navigation

After selecting an industry, users can navigate to specific departments. Each industry has:
1. **Core Department**: Industry-specific (e.g., "Production" for Manufacturing)
2. **Universal Departments**: Common across all industries
3. **Conditional Departments**: Added based on industry type
   - R&D: For tech/pharma/manufacturing
   - Supply Chain: For physical goods industries
   - Risk Management: For financial industries

### Dynamic Dashboard Rendering

The `DepartmentDashboard` component:
1. Extracts `industryId` and `departmentId` from URL params
2. Validates and fetches industry/department configs
3. Retrieves department-specific data configuration
4. Renders:
   - Filter bar with title/subtitle
   - 6 KPI cards in a responsive grid
   - 2 chart cards (side-by-side on desktop)
   - AI Insights panel + Data table (1:2 ratio on desktop)

### Chart Types

The system supports multiple chart types:

1. **Area Chart**: Time-series data with filled areas
2. **Bar Chart**: Categorical comparisons
3. **Line Chart**: Continuous data tracking
4. **Stacked Charts**: Multi-series data (area/bar)

Charts are rendered using Recharts with:
- Responsive containers
- Custom tooltips
- Themed colors
- Grid lines
- Legends

---

## 📝 Data Configuration

### Industry Configuration (`src/config/industries.ts`)

Defines industries and their departments:

```typescript
interface Industry {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
  departments: Department[];
}

interface Department {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
}
```

**Example:**
```typescript
{
  id: "finance",
  name: "Finance",
  icon: Wallet,
  color: "hsl(142, 71%, 45%)",
  departments: [
    { id: "treasury", name: "Treasury & Investments", ... },
    { id: "accounts", name: "Accounts & Finance", ... },
    // ... more departments
  ]
}
```

### Department Data Configuration (`src/config/departmentData.ts`)

Contains dashboard data for each department:

```typescript
interface DepartmentConfig {
  kpis: KPIConfig[];        // 6 KPI cards
  charts: ChartConfig[];    // 2 chart configurations
  table: TableConfig;       // Data table config
  insights: InsightConfig[]; // 4 AI insights
}
```

**KPI Configuration:**
```typescript
interface KPIConfig {
  title: string;
  value: string;           // Formatted value (e.g., "₹48.2Cr")
  change: number;          // Percentage change
  trend: "up" | "down";
  target?: string;         // Optional target
  changeLabel?: string;     // Optional label
}
```

**Chart Configuration:**
```typescript
interface ChartConfig {
  title: string;
  subtitle: string;
  type: "area" | "bar" | "line" | "pie" | "gauge" | "heatmap" | "funnel";
  data: ChartDataPoint[];   // Array of data points
  dataKeys: string[];       // Keys to plot
  xAxisKey?: string;        // X-axis key
  stacked?: boolean;        // Stacked chart option
}
```

**Table Configuration:**
```typescript
interface TableConfig {
  title: string;
  columns: TableColumn[];
  data: Record<string, any>[];
  searchKey: string;        // Key for search
}
```

**Insight Configuration:**
```typescript
interface InsightConfig {
  type: "prediction" | "anomaly" | "recommendation" | "trend";
  title: string;
  description: string;
  impact: "high" | "medium" | "low";
}
```

### Adding New Department Data

To add data for a new department:

1. **Create config object** in `departmentData.ts`:
   ```typescript
   export const newDepartmentConfig: DepartmentConfig = {
     kpis: [/* 6 KPIs */],
     charts: [/* 2 charts */],
     table: { /* table config */ },
     insights: [/* 4 insights */],
   };
   ```

2. **Add to config map**:
   ```typescript
   export const departmentConfigMap: Record<string, DepartmentConfig> = {
     // ... existing configs
     "new-department": newDepartmentConfig,
   };
   ```

3. **Update `getDepartmentConfig`** if needed for custom logic.

---

## 🧭 Routing

### Route Structure

```
/                                    → Index (Home page)
/dashboard/:industryId/:departmentId → Department Dashboard
*                                   → NotFound (404)
```

### Route Parameters

- `industryId`: Industry identifier (e.g., "finance", "ecommerce")
- `departmentId`: Department identifier (e.g., "accounts", "hr")

### Navigation

Navigation is handled by React Router:
- **Link components**: For internal navigation
- **Programmatic navigation**: Using `useNavigate()` hook
- **Route guards**: Automatic redirects for invalid routes

### Example Routes

- `/dashboard/finance/accounts` → Finance industry, Accounts department
- `/dashboard/ecommerce/sales` → E-Commerce industry, Sales department
- `/dashboard/manufacturing/production` → Manufacturing, Production department

---

## 🎨 Styling & Theming

### CSS Variables

The project uses CSS variables for theming (defined in `src/index.css`):

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* ... more variables */
}
```

### Dark Mode

Dark mode is supported via the `dark` class on the root element. Variables are defined for both light and dark themes.

### Tailwind Classes

Common utility classes used:

- **Layout**: `flex`, `grid`, `container`
- **Spacing**: `p-*`, `m-*`, `gap-*`
- **Colors**: `bg-*`, `text-*`, `border-*`
- **Effects**: `glass-card`, `glass-card-hover` (custom classes)
- **Animations**: `animate-fade-in`, `animate-pulse`

### Custom Classes

**Glass Card Effect:**
```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

**Responsive Grid:**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns (depending on component)

---

## 👨‍💻 Development Guide

### Adding a New Industry

1. **Add industry definition** in `src/config/industries.ts`:
   ```typescript
   {
     id: "new-industry",
     name: "New Industry",
     icon: NewIcon,
     color: "hsl(...)",
     departments: buildDepartments("new-industry"),
   }
   ```

2. **Add core department** to `industryCoreMap`:
   ```typescript
   new-industry: {
     id: "core-dept",
     name: "Core Department",
     icon: CoreIcon,
     description: "...",
   }
   ```

3. **Update `buildDepartments`** if conditional departments needed

4. **Add industry card** to `Index.tsx` industries array

### Adding a New Chart Type

1. **Update `ChartConfig` type** to include new type
2. **Add render case** in `DepartmentDashboard.tsx`:
   ```typescript
   case "new-chart-type":
     return (
       <ChartCard title={chart.title}>
         <NewChartComponent data={chart.data} />
       </ChartCard>
     );
   ```

### Customizing Colors

1. **Update CSS variables** in `src/index.css`
2. **Update Tailwind config** if needed
3. **Chart colors** use CSS variables: `hsl(var(--chart-1))` through `hsl(var(--chart-6))`

### Adding Real Data Integration

To connect to real APIs:

1. **Create API service** in `src/services/`
2. **Use React Query** for data fetching:
   ```typescript
   const { data } = useQuery({
     queryKey: ['department', industryId, departmentId],
     queryFn: () => fetchDepartmentData(industryId, departmentId),
   });
   ```
3. **Transform API response** to match `DepartmentConfig` interface
4. **Update `getDepartmentConfig`** to fetch from API

### Code Style Guidelines

- Use TypeScript for all new files
- Follow existing component patterns
- Use functional components with hooks
- Prefer composition over inheritance
- Keep components focused and single-purpose
- Use TypeScript interfaces for props
- Add JSDoc comments for complex logic

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Deployment Options

#### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

#### Netlify

1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run: `netlify deploy --prod`
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

#### Docker

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["npm", "run", "preview"]
```

#### Static Hosting

1. Build: `npm run build`
2. Upload `dist/` folder to hosting service
3. Configure SPA routing (redirect all routes to `index.html`)

---

## 📚 API Reference

### Configuration Functions

#### `getIndustry(id: string): Industry | undefined`

Retrieves industry configuration by ID.

**Parameters:**
- `id`: Industry identifier

**Returns:** Industry object or undefined

**Example:**
```typescript
const industry = getIndustry("finance");
```

#### `getDepartment(industryId: string, departmentId: string): Department | undefined`

Retrieves department configuration.

**Parameters:**
- `industryId`: Industry identifier
- `departmentId`: Department identifier

**Returns:** Department object or undefined

**Example:**
```typescript
const dept = getDepartment("finance", "accounts");
```

#### `getDepartmentConfig(industryId: string, departmentId: string): DepartmentConfig`

Retrieves dashboard data configuration for a department.

**Parameters:**
- `industryId`: Industry identifier
- `departmentId`: Department identifier

**Returns:** DepartmentConfig with KPIs, charts, table, and insights

**Example:**
```typescript
const config = getDepartmentConfig("finance", "accounts");
```

### Utility Functions

#### `cn(...classes: ClassValue[]): string`

Merges class names using `clsx` and `tailwind-merge`.

**Example:**
```typescript
cn("base-class", condition && "conditional-class", className);
```

---

## 🔍 Troubleshooting

### Common Issues

#### Port Already in Use

**Error:** `Port 8080 is already in use`

**Solution:**
1. Change port in `vite.config.ts`:
   ```typescript
   server: { port: 3000 }
   ```
2. Or kill process using port 8080:
   ```bash
   lsof -ti:8080 | xargs kill -9
   ```

#### TypeScript Errors

**Error:** Type errors in components

**Solution:**
1. Ensure all imports are correct
2. Check `tsconfig.json` paths
3. Run `npm run lint` to identify issues
4. Restart TypeScript server in your IDE

#### Build Failures

**Error:** Build fails with module not found

**Solution:**
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Check for missing dependencies
4. Verify Node.js version compatibility

#### Chart Not Rendering

**Error:** Charts appear blank

**Solution:**
1. Verify data structure matches `ChartConfig`
2. Check `dataKeys` match data object keys
3. Ensure `ResponsiveContainer` has height
4. Check browser console for errors

#### Routing Issues

**Error:** 404 on page refresh

**Solution:**
1. Configure server to redirect all routes to `index.html`
2. For Vercel: Add `vercel.json` with rewrites
3. For Netlify: Add `_redirects` file
4. For Nginx: Configure try_files directive

---

## 📞 Support & Resources

### Documentation

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Recharts Documentation](https://recharts.org)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [React Router Documentation](https://reactrouter.com)

### Community

- [React Community](https://react.dev/community)
- [Vite Discord](https://chat.vitejs.dev)
- [Tailwind CSS Discord](https://tailwindcss.com/discord)

---

## 📝 Changelog

### Version 1.0.0

- Initial release
- Multiple industry templates
- Universal department support
- AI insights panel
- Responsive design
- Dark mode support
- Dynamic dashboard system

---

## 📄 License

[Add your license information here]

---

**Last Updated:** December 2024

**Maintained by:** Zerra Team

---

## 🎯 Quick Reference

### Key Files

- **Routing**: `src/App.tsx`
- **Home Page**: `src/pages/Index.tsx`
- **Dashboard**: `src/pages/DepartmentDashboard.tsx`
- **Industry Config**: `src/config/industries.ts`
- **Department Data**: `src/config/departmentData.ts`
- **Styles**: `src/index.css`

### Common Tasks

- **Add Industry**: Edit `src/config/industries.ts` and `src/pages/Index.tsx`
- **Add Department Data**: Edit `src/config/departmentData.ts`
- **Customize Theme**: Edit `src/index.css` CSS variables
- **Add Chart Type**: Edit `src/pages/DepartmentDashboard.tsx`
- **Add Component**: Create in `src/components/`

---

*For questions or contributions, please refer to the project repository.*
