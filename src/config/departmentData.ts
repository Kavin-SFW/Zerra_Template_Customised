// Department-specific dashboard data configurations
// This file contains KPIs, chart data, table data, and AI insights for each department

export interface KPIConfig {
  title: string;
  value: string;
  change: number;
  trend: "up" | "down";
  target?: string;
  changeLabel?: string;
}

export interface ChartDataPoint {
  [key: string]: string | number;
}

export interface ChartConfig {
  title: string;
  subtitle: string;
  type: "area" | "bar" | "line" | "pie" | "gauge" | "heatmap" | "funnel";
  data: ChartDataPoint[];
  dataKeys: string[];
  colors?: string[];
  xAxisKey?: string;
  stacked?: boolean;
}

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
}

export interface TableConfig {
  title: string;
  columns: TableColumn[];
  data: Record<string, string | number>[];
  searchKey: string;
}

export interface InsightConfig {
  type: "prediction" | "anomaly" | "recommendation" | "trend";
  title: string;
  description: string;
  impact: "high" | "medium" | "low";
}

export interface DepartmentConfig {
  kpis: KPIConfig[];
  charts: ChartConfig[];
  table: TableConfig;
  insights: InsightConfig[];
}

// Helper to generate realistic data
const generateTimeSeriesData = (baseValue: number, variance: number, labels: string[]) => {
  return labels.map(label => ({
    period: label,
    value: Math.round(baseValue + (Math.random() - 0.5) * variance),
    target: baseValue,
  }));
};

// Chart generation function - Industry-aware chart generation
export function generateDepartmentCharts(industryId: string, departmentId: string): ChartConfig[] {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const quarters = ["Q1 FY23", "Q2 FY23", "Q3 FY23", "Q4 FY23", "Q1 FY24", "Q2 FY24"];
  const weeks = ["W1", "W2", "W3", "W4", "W5", "W6"];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Industry-specific chart generation logic
  const charts: ChartConfig[] = [];

  // Accounts & Finance Department
  if (departmentId === "accounts") {
    // 1. Volume: Revenue vs Expenses Trend
    charts.push({
      title: "Revenue vs Expenses Trend",
      subtitle: "Monthly comparison (₹ Cr)",
      type: "area",
      data: months.map((month, i) => ({
        month,
        revenue: 42 + i * 1.2 + Math.random() * 2,
        expenses: 34 + i * 0.6 + Math.random() * 1.5,
        profit: 8 + i * 0.3 + Math.random() * 1,
      })),
      dataKeys: ["revenue", "expenses", "profit"],
      xAxisKey: "month",
    });

    // 2. Trend: Cash Flow Analysis
    charts.push({
      title: "Cash Flow Analysis",
      subtitle: "Operating, investing, financing (₹ Cr)",
      type: "line",
      data: months.map((month, i) => ({
        month,
        operating: 4.2 + i * 0.2 + Math.random() * 0.5,
        investing: -1.5 + i * 0.1 + Math.random() * 0.3,
        financing: -0.8 + i * 0.05 + Math.random() * 0.2,
      })),
      dataKeys: ["operating", "investing", "financing"],
      xAxisKey: "month",
    });

    // 3. Breakdown: Expense Breakdown by Category
    charts.push({
      title: "Expense Breakdown",
      subtitle: "By category (₹ Cr)",
      type: "bar",
      data: [
        { category: "Salaries", amount: 42, budget: 40 },
        { category: "Operations", amount: 28, budget: 30 },
        { category: "Marketing", amount: 15, budget: 12 },
        { category: "Technology", amount: 10, budget: 11 },
        { category: "Others", amount: 5, budget: 5 },
      ],
      dataKeys: ["amount", "budget"],
      xAxisKey: "category",
    });

    // 4. Efficiency: Days Sales Outstanding (DSO)
    charts.push({
      title: "Days Sales Outstanding",
      subtitle: "DSO trend vs target",
      type: "line",
      data: months.map((month, i) => ({
        month,
        dso: 45 - i * 1.2 + Math.random() * 2,
        target: 40,
      })),
      dataKeys: ["dso", "target"],
      xAxisKey: "month",
    });

    // 5. Cost/Revenue: Profit Margin Analysis
    charts.push({
      title: "Profit Margin Analysis",
      subtitle: "Gross, operating, net margins (%)",
      type: "area",
      data: months.map((month, i) => ({
        month,
        gross: 35 + i * 0.3 + Math.random() * 0.5,
        operating: 24 + i * 0.2 + Math.random() * 0.4,
        net: 18 + i * 0.15 + Math.random() * 0.3,
      })),
      dataKeys: ["gross", "operating", "net"],
      xAxisKey: "month",
    });

    // 6. Risk/Quality: Accounts Receivable Aging
    charts.push({
      title: "Accounts Receivable Aging",
      subtitle: "By aging bucket (₹ Cr)",
      type: "bar",
      data: [
        { bucket: "0-30 days", amount: 3.2, target: 4.0 },
        { bucket: "31-60 days", amount: 2.1, target: 1.5 },
        { bucket: "61-90 days", amount: 1.2, target: 0.8 },
        { bucket: "90+ days", amount: 0.3, target: 0.2 },
      ],
      dataKeys: ["amount", "target"],
      xAxisKey: "bucket",
    });

    // 7. Forecast: Revenue Forecast
    charts.push({
      title: "Revenue Forecast",
      subtitle: "Actual vs projected (₹ Cr)",
      type: "area",
      data: [
        ...months.slice(0, 3).map((month, i) => ({
          month,
          actual: 42 + i * 1.2,
          forecast: 42 + i * 1.2,
        })),
        ...months.slice(3).map((month, i) => ({
          month,
          actual: null,
          forecast: 46 + (i + 3) * 1.3,
        })),
      ],
      dataKeys: ["actual", "forecast"],
      xAxisKey: "month",
    });

    // 8. Distribution: Revenue by Business Unit
    if (["finance", "banking", "insurance"].includes(industryId)) {
      charts.push({
        title: "Revenue by Business Unit",
        subtitle: "Current quarter breakdown",
        type: "bar",
        data: [
          { unit: "Retail Banking", revenue: 18 },
          { unit: "Corporate Banking", revenue: 24 },
          { unit: "Wealth Management", revenue: 12 },
          { unit: "Investment Banking", revenue: 8 },
        ],
        dataKeys: ["revenue"],
        xAxisKey: "unit",
      });
    } else {
      charts.push({
        title: "Working Capital Trend",
        subtitle: "Monthly working capital (₹ Cr)",
        type: "line",
        data: months.map((month, i) => ({
          month,
          workingCapital: 12 + i * 0.5 + Math.random() * 0.8,
          target: 15,
        })),
        dataKeys: ["workingCapital", "target"],
        xAxisKey: "month",
      });
    }
  }

  // HR Department
  else if (departmentId === "hr") {
    charts.push({
      title: "Headcount Trend",
      subtitle: "Monthly employee count",
      type: "area",
      data: months.map((month, i) => ({
        month,
        count: 2654 + i * 32 + Math.random() * 20,
        hires: 45 + Math.random() * 15,
        exits: 16 + Math.random() * 10,
      })),
      dataKeys: ["count", "hires", "exits"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Attrition Trend",
      subtitle: "Monthly attrition rate (%)",
      type: "line",
      data: months.map((month, i) => ({
        month,
        attrition: 14 - i * 0.3 + Math.random() * 0.5,
        target: 12,
      })),
      dataKeys: ["attrition", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Department Distribution",
      subtitle: "Headcount by department",
      type: "bar",
      data: [
        { dept: "Engineering", count: 892, budget: 900 },
        { dept: "Sales", count: 456, budget: 450 },
        { dept: "Operations", count: 623, budget: 600 },
        { dept: "Support", count: 384, budget: 400 },
        { dept: "Marketing", count: 245, budget: 250 },
        { dept: "Finance", count: 247, budget: 240 },
      ],
      dataKeys: ["count", "budget"],
      xAxisKey: "dept",
    });

    charts.push({
      title: "Time to Hire Trend",
      subtitle: "Average days to fill position",
      type: "line",
      data: months.map((month, i) => ({
        month,
        days: 32 - i * 0.8 + Math.random() * 2,
        target: 30,
      })),
      dataKeys: ["days", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Employee Satisfaction Trend",
      subtitle: "Monthly satisfaction score",
      type: "area",
      data: months.map((month, i) => ({
        month,
        satisfaction: 4.0 + i * 0.03 + Math.random() * 0.1,
        target: 4.2,
      })),
      dataKeys: ["satisfaction", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Hiring Funnel",
      subtitle: "Candidates by stage",
      type: "bar",
      data: [
        { stage: "Applied", count: 5420 },
        { stage: "Screened", count: 2180 },
        { stage: "Interviewed", count: 845 },
        { stage: "Offered", count: 186 },
        { stage: "Hired", count: 124 },
      ],
      dataKeys: ["count"],
      xAxisKey: "stage",
    });

    charts.push({
      title: "Training Hours Trend",
      subtitle: "Monthly training hours per employee",
      type: "line",
      data: months.map((month, i) => ({
        month,
        hours: 15 + i * 0.6 + Math.random() * 0.5,
        target: 18,
      })),
      dataKeys: ["hours", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Compensation Distribution",
      subtitle: "By level (₹ Lakhs)",
      type: "bar",
      data: [
        { level: "Entry", avg: 8.5, market: 8.0 },
        { level: "Mid", avg: 18.2, market: 17.5 },
        { level: "Senior", avg: 35.5, market: 34.0 },
        { level: "Executive", avg: 68.0, market: 65.0 },
      ],
      dataKeys: ["avg", "market"],
      xAxisKey: "level",
    });
  }

  // Sales & Marketing Department
  else if (departmentId === "sales") {
    charts.push({
      title: "Revenue by Channel",
      subtitle: "Monthly breakdown (₹ Cr)",
      type: "area",
      data: months.map((month, i) => ({
        month,
        direct: 18 + i * 1.3 + Math.random() * 0.8,
        partners: 12 + i * 0.8 + Math.random() * 0.6,
        online: 8 + i * 0.8 + Math.random() * 0.5,
        referral: 4 + i * 0.5 + Math.random() * 0.3,
      })),
      dataKeys: ["direct", "partners", "online", "referral"],
      xAxisKey: "month",
      stacked: true,
    });

    charts.push({
      title: "Sales Pipeline Trend",
      subtitle: "Pipeline value by stage (₹ Cr)",
      type: "line",
      data: months.map((month, i) => ({
        month,
        qualified: 85 + i * 3 + Math.random() * 2,
        proposal: 42 + i * 2 + Math.random() * 1.5,
        negotiation: 28 + i * 1.5 + Math.random() * 1,
      })),
      dataKeys: ["qualified", "proposal", "negotiation"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Sales Funnel",
      subtitle: "Deals by stage",
      type: "bar",
      data: [
        { stage: "Leads", value: 5420 },
        { stage: "Qualified", value: 2180 },
        { stage: "Proposal", value: 845 },
        { stage: "Negotiation", value: 412 },
        { stage: "Closed Won", value: 186 },
      ],
      dataKeys: ["value"],
      xAxisKey: "stage",
    });

    charts.push({
      title: "Conversion Rate Trend",
      subtitle: "Lead to customer conversion (%)",
      type: "line",
      data: months.map((month, i) => ({
        month,
        conversion: 3.2 + i * 0.1 + Math.random() * 0.15,
        target: 3.5,
      })),
      dataKeys: ["conversion", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Revenue by Product",
      subtitle: "Current quarter (₹ Cr)",
      type: "bar",
      data: [
        { product: "Product A", revenue: 18, target: 16 },
        { product: "Product B", revenue: 15, target: 14 },
        { product: "Product C", revenue: 12, target: 13 },
        { product: "Product D", revenue: 8, target: 7 },
      ],
      dataKeys: ["revenue", "target"],
      xAxisKey: "product",
    });

    charts.push({
      title: "Customer Acquisition Cost",
      subtitle: "CAC by channel (₹)",
      type: "bar",
      data: [
        { channel: "Direct", cac: 4200, target: 5000 },
        { channel: "Partners", cac: 3800, target: 4500 },
        { channel: "Online", cac: 3200, target: 4000 },
        { channel: "Referral", cac: 2800, target: 3500 },
      ],
      dataKeys: ["cac", "target"],
      xAxisKey: "channel",
    });

    charts.push({
      title: "Win Rate Trend",
      subtitle: "Monthly win rate (%)",
      type: "line",
      data: months.map((month, i) => ({
        month,
        winRate: 24 + i * 0.7 + Math.random() * 0.8,
        target: 25,
      })),
      dataKeys: ["winRate", "target"],
      xAxisKey: "month",
    });

    if (["ecommerce", "retail", "marketplace"].includes(industryId)) {
      charts.push({
        title: "Average Order Value Trend",
        subtitle: "Monthly AOV (₹)",
        type: "area",
        data: months.map((month, i) => ({
          month,
          aov: 2850 + i * 50 + Math.random() * 100,
          target: 3000,
        })),
        dataKeys: ["aov", "target"],
        xAxisKey: "month",
      });
    } else {
      charts.push({
        title: "Deal Size Distribution",
        subtitle: "By deal size (₹ Cr)",
        type: "bar",
        data: [
          { size: "<₹50L", count: 45 },
          { size: "₹50L-₹2Cr", count: 28 },
          { size: "₹2Cr-₹5Cr", count: 12 },
          { size: ">₹5Cr", count: 5 },
        ],
        dataKeys: ["count"],
        xAxisKey: "size",
      });
    }
  }

  // Operations Department
  else if (departmentId === "operations") {
    charts.push({
      title: "Process Efficiency Trend",
      subtitle: "Weekly performance (%)",
      type: "line",
      data: weeks.map((week, i) => ({
        week,
        efficiency: 91 + i * 0.5 + Math.random() * 0.8,
        target: 92,
      })),
      dataKeys: ["efficiency", "target"],
      xAxisKey: "week",
    });

    charts.push({
      title: "Process Cycle Time",
      subtitle: "Average days per process",
      type: "line",
      data: weeks.map((week, i) => ({
        week,
        cycleTime: 4.8 - i * 0.1 + Math.random() * 0.2,
        target: 4.2,
      })),
      dataKeys: ["cycleTime", "target"],
      xAxisKey: "week",
    });

    charts.push({
      title: "Resource Allocation",
      subtitle: "By function",
      type: "bar",
      data: [
        { function: "Processing", allocated: 45, utilized: 42 },
        { function: "Quality Check", allocated: 20, utilized: 19 },
        { function: "Documentation", allocated: 15, utilized: 14 },
        { function: "Support", allocated: 12, utilized: 11 },
        { function: "Admin", allocated: 8, utilized: 7 },
      ],
      dataKeys: ["allocated", "utilized"],
      xAxisKey: "function",
    });

    charts.push({
      title: "SLA Compliance Trend",
      subtitle: "Monthly compliance rate (%)",
      type: "area",
      data: months.map((month, i) => ({
        month,
        compliance: 97 + i * 0.25 + Math.random() * 0.3,
        target: 98,
      })),
      dataKeys: ["compliance", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Cost per Transaction",
      subtitle: "Monthly cost trend (₹)",
      type: "line",
      data: months.map((month, i) => ({
        month,
        cost: 152 - i * 1.5 + Math.random() * 3,
        target: 140,
      })),
      dataKeys: ["cost", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Backlog Trend",
      subtitle: "Pending items count",
      type: "area",
      data: weeks.map((week, i) => ({
        week,
        backlog: 280 - i * 8 + Math.random() * 15,
        target: 200,
      })),
      dataKeys: ["backlog", "target"],
      xAxisKey: "week",
    });

    charts.push({
      title: "Process Volume",
      subtitle: "Monthly transactions",
      type: "bar",
      data: months.map((month, i) => ({
        month,
        volume: 12500 + i * 500 + Math.random() * 300,
      })),
      dataKeys: ["volume"],
      xAxisKey: "month",
    });

    if (["manufacturing", "logistics"].includes(industryId)) {
      charts.push({
        title: "Equipment Utilization",
        subtitle: "By equipment type (%)",
        type: "bar",
        data: [
          { equipment: "Line A", utilization: 92, target: 90 },
          { equipment: "Line B", utilization: 88, target: 90 },
          { equipment: "Line C", utilization: 85, target: 90 },
        ],
        dataKeys: ["utilization", "target"],
        xAxisKey: "equipment",
      });
    } else {
      charts.push({
        title: "Resource Utilization Trend",
        subtitle: "Monthly utilization (%)",
        type: "line",
        data: months.map((month, i) => ({
          month,
          utilization: 82 + i * 0.8 + Math.random() * 1,
          target: 85,
        })),
        dataKeys: ["utilization", "target"],
        xAxisKey: "month",
      });
    }
  }

  // IT & Engineering Department
  else if (departmentId === "it") {
    charts.push({
      title: "System Uptime Trend",
      subtitle: "Monthly uptime (%)",
      type: "line",
      data: months.map((month, i) => ({
        month,
        uptime: 99.95 + i * 0.003 + Math.random() * 0.01,
        target: 99.9,
      })),
      dataKeys: ["uptime", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Response Time Trend",
      subtitle: "Average response time (ms)",
      type: "line",
      data: days.map((day, i) => ({
        day,
        responseTime: 145 + Math.random() * 20 - 10,
        target: 150,
      })),
      dataKeys: ["responseTime", "target"],
      xAxisKey: "day",
    });

    charts.push({
      title: "Incident Distribution",
      subtitle: "By severity",
      type: "bar",
      data: [
        { severity: "Critical", count: 2 },
        { severity: "High", count: 8 },
        { severity: "Medium", count: 28 },
        { severity: "Low", count: 45 },
      ],
      dataKeys: ["count"],
      xAxisKey: "severity",
    });

    charts.push({
      title: "MTTR Trend",
      subtitle: "Mean time to resolve (minutes)",
      type: "line",
      data: months.map((month, i) => ({
        month,
        mttr: 24 - i * 1 + Math.random() * 2,
        target: 30,
      })),
      dataKeys: ["mttr", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Deployment Frequency",
      subtitle: "Weekly deployments",
      type: "bar",
      data: weeks.map((week, i) => ({
        week,
        deployments: 10 + i * 0.3 + Math.random() * 1,
      })),
      dataKeys: ["deployments"],
      xAxisKey: "week",
    });

    charts.push({
      title: "Sprint Velocity",
      subtitle: "Story points per sprint",
      type: "line",
      data: [
        { sprint: "S1", velocity: 78, target: 80 },
        { sprint: "S2", velocity: 82, target: 80 },
        { sprint: "S3", velocity: 84, target: 80 },
        { sprint: "S4", velocity: 86, target: 80 },
        { sprint: "S5", velocity: 84, target: 80 },
        { sprint: "S6", velocity: 88, target: 80 },
      ],
      dataKeys: ["velocity", "target"],
      xAxisKey: "sprint",
    });

    charts.push({
      title: "Tech Debt Ratio",
      subtitle: "Tech debt vs total code (%)",
      type: "area",
      data: months.map((month, i) => ({
        month,
        techDebt: 15 - i * 0.5 + Math.random() * 0.3,
        target: 12,
      })),
      dataKeys: ["techDebt", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Infrastructure Cost",
      subtitle: "Monthly cloud spend (₹ Lakhs)",
      type: "bar",
      data: months.map((month, i) => ({
        month,
        cost: 45 + i * 1.2 + Math.random() * 2,
        budget: 50,
      })),
      dataKeys: ["cost", "budget"],
      xAxisKey: "month",
    });
  }

  // Customer Service Department
  else if (departmentId === "customer-service") {
    charts.push({
      title: "Ticket Volume Trend",
      subtitle: "Daily tickets by channel",
      type: "area",
      data: days.map((day, i) => ({
        day,
        email: 180 + Math.random() * 30 - 15,
        chat: 320 + Math.random() * 40 - 20,
        phone: 95 + Math.random() * 15 - 7,
        social: 45 + Math.random() * 15 - 7,
      })),
      dataKeys: ["email", "chat", "phone", "social"],
      xAxisKey: "day",
      stacked: true,
    });

    charts.push({
      title: "CSAT Score Trend",
      subtitle: "Monthly customer satisfaction",
      type: "line",
      data: months.map((month, i) => ({
        month,
        csat: 4.4 + i * 0.03 + Math.random() * 0.1,
        target: 4.5,
      })),
      dataKeys: ["csat", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Issue Categories",
      subtitle: "Distribution of ticket types",
      type: "bar",
      data: [
        { category: "Billing", count: 420 },
        { category: "Technical", count: 385 },
        { category: "Product Info", count: 312 },
        { category: "Returns", count: 245 },
        { category: "Account", count: 198 },
      ],
      dataKeys: ["count"],
      xAxisKey: "category",
    });

    charts.push({
      title: "First Response Time",
      subtitle: "Average minutes to first response",
      type: "line",
      data: months.map((month, i) => ({
        month,
        frt: 10 - i * 0.3 + Math.random() * 0.5,
        target: 8,
      })),
      dataKeys: ["frt", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Resolution Time Trend",
      subtitle: "Average hours to resolve",
      type: "area",
      data: months.map((month, i) => ({
        month,
        resolution: 5.2 - i * 0.15 + Math.random() * 0.3,
        target: 4.2,
      })),
      dataKeys: ["resolution", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "First Contact Resolution",
      subtitle: "FCR rate (%)",
      type: "line",
      data: months.map((month, i) => ({
        month,
        fcr: 67 + i * 0.8 + Math.random() * 0.5,
        target: 70,
      })),
      dataKeys: ["fcr", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Agent Performance",
      subtitle: "Tickets per agent",
      type: "bar",
      data: [
        { agent: "Team A", tickets: 125, target: 120 },
        { agent: "Team B", tickets: 118, target: 120 },
        { agent: "Team C", tickets: 132, target: 120 },
        { agent: "Team D", tickets: 115, target: 120 },
      ],
      dataKeys: ["tickets", "target"],
      xAxisKey: "agent",
    });

    charts.push({
      title: "NPS Trend",
      subtitle: "Monthly Net Promoter Score",
      type: "area",
      data: months.map((month, i) => ({
        month,
        nps: 50 + i * 1.3 + Math.random() * 1,
        target: 55,
      })),
      dataKeys: ["nps", "target"],
      xAxisKey: "month",
    });
  }

  // Procurement Department
  else if (departmentId === "procurement") {
    charts.push({
      title: "Spend by Category",
      subtitle: "Monthly procurement (₹ Cr)",
      type: "area",
      data: months.map((month, i) => ({
        month,
        rawMaterials: 45 + i * 1.8 + Math.random() * 1.5,
        services: 28 + i * 0.8 + Math.random() * 0.8,
        equipment: 15 + i * 0.8 + Math.random() * 1,
        others: 8 + i * 0.6 + Math.random() * 0.5,
      })),
      dataKeys: ["rawMaterials", "services", "equipment", "others"],
      xAxisKey: "month",
      stacked: true,
    });

    charts.push({
      title: "Cost Savings Trend",
      subtitle: "Monthly savings (₹ Cr)",
      type: "line",
      data: months.map((month, i) => ({
        month,
        savings: 0.8 + i * 0.2 + Math.random() * 0.15,
        target: 1.0,
      })),
      dataKeys: ["savings", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Vendor Performance",
      subtitle: "Top vendors by score",
      type: "bar",
      data: [
        { vendor: "Vendor A", score: 92, onTime: 96 },
        { vendor: "Vendor B", score: 89, onTime: 94 },
        { vendor: "Vendor C", score: 87, onTime: 91 },
        { vendor: "Vendor D", score: 85, onTime: 88 },
        { vendor: "Vendor E", score: 82, onTime: 85 },
      ],
      dataKeys: ["score", "onTime"],
      xAxisKey: "vendor",
    });

    charts.push({
      title: "PO Cycle Time",
      subtitle: "Average days to process PO",
      type: "line",
      data: months.map((month, i) => ({
        month,
        cycleTime: 3.8 - i * 0.1 + Math.random() * 0.15,
        target: 3.2,
      })),
      dataKeys: ["cycleTime", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Spend by Vendor",
      subtitle: "Top 5 vendors (₹ Cr)",
      type: "bar",
      data: [
        { vendor: "Tata Steel", spend: 28 },
        { vendor: "HUL", spend: 18 },
        { vendor: "Asian Paints", spend: 12 },
        { vendor: "JSW Steel", spend: 9 },
        { vendor: "Godrej", spend: 6 },
      ],
      dataKeys: ["spend"],
      xAxisKey: "vendor",
    });

    charts.push({
      title: "Contract Compliance",
      subtitle: "Compliance rate (%)",
      type: "area",
      data: months.map((month, i) => ({
        month,
        compliance: 91 + i * 0.5 + Math.random() * 0.4,
        target: 94,
      })),
      dataKeys: ["compliance", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Price Variance Analysis",
      subtitle: "Price vs market (%)",
      type: "bar",
      data: [
        { category: "Steel", variance: -2.5 },
        { category: "Chemicals", variance: 1.2 },
        { category: "Electronics", variance: -0.8 },
        { category: "Packaging", variance: 3.1 },
      ],
      dataKeys: ["variance"],
      xAxisKey: "category",
    });

    charts.push({
      title: "Purchase Order Volume",
      subtitle: "Monthly PO count",
      type: "bar",
      data: months.map((month, i) => ({
        month,
        volume: 450 + i * 25 + Math.random() * 20,
      })),
      dataKeys: ["volume"],
      xAxisKey: "month",
    });
  }

  // Quality Assurance Department
  else if (departmentId === "quality") {
    charts.push({
      title: "Defect Rate Trend",
      subtitle: "Monthly defect rate (%)",
      type: "line",
      data: months.map((month, i) => ({
        month,
        defectRate: 1.2 - i * 0.07 + Math.random() * 0.05,
        target: 1.0,
      })),
      dataKeys: ["defectRate", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "First Pass Yield",
      subtitle: "Monthly yield (%)",
      type: "area",
      data: months.map((month, i) => ({
        month,
        yield: 95.5 + i * 0.3 + Math.random() * 0.2,
        target: 96,
      })),
      dataKeys: ["yield", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Defect Distribution",
      subtitle: "By category",
      type: "bar",
      data: [
        { category: "Dimensional", count: 28 },
        { category: "Surface Finish", count: 22 },
        { category: "Material", count: 15 },
        { category: "Assembly", count: 12 },
        { category: "Packaging", count: 8 },
      ],
      dataKeys: ["count"],
      xAxisKey: "category",
    });

    charts.push({
      title: "Inspection Volume",
      subtitle: "Monthly inspections",
      type: "bar",
      data: months.map((month, i) => ({
        month,
        inspections: 1250 + i * 50 + Math.random() * 30,
      })),
      dataKeys: ["inspections"],
      xAxisKey: "month",
    });

    charts.push({
      title: "CAPA Closure Rate",
      subtitle: "Monthly closure rate (%)",
      type: "line",
      data: months.map((month, i) => ({
        month,
        closure: 80 + i * 1.3 + Math.random() * 0.8,
        target: 85,
      })),
      dataKeys: ["closure", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Audit Score Trend",
      subtitle: "Monthly audit score",
      type: "area",
      data: months.map((month, i) => ({
        month,
        score: 90 + i * 0.7 + Math.random() * 0.5,
        target: 94,
      })),
      dataKeys: ["score", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Customer Complaints",
      subtitle: "Monthly complaint count",
      type: "line",
      data: months.map((month, i) => ({
        month,
        complaints: 18 - i * 1 + Math.random() * 1.5,
        target: 12,
      })),
      dataKeys: ["complaints", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Quality Cost",
      subtitle: "Cost of quality (₹ Lakhs)",
      type: "bar",
      data: months.map((month, i) => ({
        month,
        cost: 45 - i * 1.2 + Math.random() * 1.5,
        budget: 40,
      })),
      dataKeys: ["cost", "budget"],
      xAxisKey: "month",
    });
  }

  // Legal & Compliance Department
  else if (departmentId === "legal") {
    charts.push({
      title: "Contract Status",
      subtitle: "By lifecycle stage",
      type: "bar",
      data: [
        { stage: "Draft", count: 45 },
        { stage: "In Review", count: 78 },
        { stage: "Negotiation", count: 34 },
        { stage: "Active", count: 645 },
        { stage: "Expiring Soon", count: 28 },
        { stage: "Expired", count: 17 },
      ],
      dataKeys: ["count"],
      xAxisKey: "stage",
    });

    charts.push({
      title: "Compliance Score Trend",
      subtitle: "Monthly compliance (%)",
      type: "line",
      data: months.map((month, i) => ({
        month,
        score: 94 + i * 0.3 + Math.random() * 0.2,
        target: 95,
      })),
      dataKeys: ["score", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Compliance by Area",
      subtitle: "Audit scores",
      type: "bar",
      data: [
        { area: "Data Privacy", score: 98, target: 95 },
        { area: "Financial", score: 96, target: 95 },
        { area: "Labor Laws", score: 94, target: 95 },
        { area: "Environmental", score: 92, target: 95 },
        { area: "Industry Specific", score: 95, target: 95 },
      ],
      dataKeys: ["score", "target"],
      xAxisKey: "area",
    });

    charts.push({
      title: "Contract Volume",
      subtitle: "Monthly new contracts",
      type: "bar",
      data: months.map((month, i) => ({
        month,
        contracts: 28 + i * 2 + Math.random() * 3,
      })),
      dataKeys: ["contracts"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Legal Spend Trend",
      subtitle: "Monthly spend (₹ Lakhs)",
      type: "area",
      data: months.map((month, i) => ({
        month,
        spend: 20 - i * 0.3 + Math.random() * 0.5,
        budget: 20,
      })),
      dataKeys: ["spend", "budget"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Dispute Resolution Time",
      subtitle: "Average days to resolve",
      type: "line",
      data: months.map((month, i) => ({
        month,
        days: 45 - i * 1.5 + Math.random() * 2,
        target: 40,
      })),
      dataKeys: ["days", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Regulatory Filings",
      subtitle: "Filing compliance (%)",
      type: "area",
      data: months.map((month) => ({
        month,
        compliance: 100,
        target: 100,
      })),
      dataKeys: ["compliance", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Contract Value Distribution",
      subtitle: "By contract value (₹ Cr)",
      type: "bar",
      data: [
        { range: "<₹1Cr", count: 320 },
        { range: "₹1-5Cr", count: 245 },
        { range: "₹5-10Cr", count: 156 },
        { range: ">₹10Cr", count: 126 },
      ],
      dataKeys: ["count"],
      xAxisKey: "range",
    });
  }

  // Executive Summary
  else if (departmentId === "executive") {
    charts.push({
      title: "Business Performance",
      subtitle: "Quarterly trends (₹ Cr)",
      type: "area",
      data: quarters.map((quarter, i) => ({
        quarter,
        revenue: 98 + i * 7.5 + Math.random() * 2,
        profit: 14 + i * 1.8 + Math.random() * 0.5,
        target: 95 + i * 7.5,
      })),
      dataKeys: ["revenue", "profit", "target"],
      xAxisKey: "quarter",
    });

    charts.push({
      title: "Revenue by Segment",
      subtitle: "Current quarter breakdown",
      type: "bar",
      data: [
        { segment: "Enterprise", revenue: 58, target: 55 },
        { segment: "SMB", revenue: 42, target: 40 },
        { segment: "Consumer", revenue: 28, target: 30 },
        { segment: "Government", revenue: 14, target: 12 },
      ],
      dataKeys: ["revenue", "target"],
      xAxisKey: "segment",
    });

    charts.push({
      title: "EBITDA Margin Trend",
      subtitle: "Quarterly margin (%)",
      type: "line",
      data: quarters.map((quarter, i) => ({
        quarter,
        margin: 14 + i * 0.4 + Math.random() * 0.2,
        target: 15,
      })),
      dataKeys: ["margin", "target"],
      xAxisKey: "quarter",
    });

    charts.push({
      title: "Market Share Trend",
      subtitle: "Quarterly market share (%)",
      type: "area",
      data: quarters.map((quarter, i) => ({
        quarter,
        share: 22 + i * 0.4 + Math.random() * 0.3,
        target: 24,
      })),
      dataKeys: ["share", "target"],
      xAxisKey: "quarter",
    });

    charts.push({
      title: "Customer NPS Trend",
      subtitle: "Quarterly NPS score",
      type: "line",
      data: quarters.map((quarter, i) => ({
        quarter,
        nps: 54 + i * 2 + Math.random() * 1,
        target: 55,
      })),
      dataKeys: ["nps", "target"],
      xAxisKey: "quarter",
    });

    charts.push({
      title: "Employee Satisfaction",
      subtitle: "Quarterly satisfaction score",
      type: "area",
      data: quarters.map((quarter, i) => ({
        quarter,
        satisfaction: 3.9 + i * 0.1 + Math.random() * 0.05,
        target: 4.3,
      })),
      dataKeys: ["satisfaction", "target"],
      xAxisKey: "quarter",
    });

    charts.push({
      title: "Cash Position Trend",
      subtitle: "Quarterly cash (₹ Cr)",
      type: "line",
      data: quarters.map((quarter, i) => ({
        quarter,
        cash: 125 + i * 5 + Math.random() * 2,
        target: 145,
      })),
      dataKeys: ["cash", "target"],
      xAxisKey: "quarter",
    });

    charts.push({
      title: "Revenue Forecast",
      subtitle: "Actual vs projected (₹ Cr)",
      type: "area",
      data: [
        ...quarters.slice(0, 4).map((quarter, i) => ({
          quarter,
          actual: 98 + i * 7.5,
          forecast: 98 + i * 7.5,
        })),
        ...quarters.slice(4).map((quarter, i) => ({
          quarter,
          actual: null,
          forecast: 132 + (i + 4) * 8,
        })),
      ],
      dataKeys: ["actual", "forecast"],
      xAxisKey: "quarter",
    });
  }

  // Research & Development
  else if (departmentId === "research") {
    charts.push({
      title: "R&D Investment Trend",
      subtitle: "Quarterly spend (₹ Cr)",
      type: "area",
      data: quarters.slice(0, 4).map((quarter, i) => ({
        quarter,
        spend: 14 + i * 1.2 + Math.random() * 0.3,
        budget: 15 + i * 1,
      })),
      dataKeys: ["spend", "budget"],
      xAxisKey: "quarter",
    });

    charts.push({
      title: "Project Pipeline",
      subtitle: "By development stage",
      type: "bar",
      data: [
        { stage: "Ideation", count: 45 },
        { stage: "Research", count: 28 },
        { stage: "Development", count: 18 },
        { stage: "Testing", count: 12 },
        { stage: "Launch Ready", count: 6 },
      ],
      dataKeys: ["count"],
      xAxisKey: "stage",
    });

    charts.push({
      title: "Time to Market",
      subtitle: "Average months per project",
      type: "line",
      data: months.map((month, i) => ({
        month,
        ttm: 9.2 - i * 0.15 + Math.random() * 0.2,
        target: 8.2,
      })),
      dataKeys: ["ttm", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Success Rate Trend",
      subtitle: "Project success rate (%)",
      type: "area",
      data: quarters.slice(0, 4).map((quarter, i) => ({
        quarter,
        success: 60 + i * 2 + Math.random() * 1,
        target: 65,
      })),
      dataKeys: ["success", "target"],
      xAxisKey: "quarter",
    });

    charts.push({
      title: "Patents Filed",
      subtitle: "Quarterly patent filings",
      type: "bar",
      data: quarters.slice(0, 4).map((quarter, i) => ({
        quarter,
        patents: 2 + i * 0.5 + Math.random() * 0.5,
      })),
      dataKeys: ["patents"],
      xAxisKey: "quarter",
    });

    charts.push({
      title: "Innovation Index",
      subtitle: "Quarterly innovation score",
      type: "line",
      data: quarters.slice(0, 4).map((quarter, i) => ({
        quarter,
        index: 72 + i * 1.5 + Math.random() * 0.8,
        target: 78,
      })),
      dataKeys: ["index", "target"],
      xAxisKey: "quarter",
    });

    charts.push({
      title: "R&D Headcount",
      subtitle: "Quarterly team size",
      type: "area",
      data: quarters.slice(0, 4).map((quarter, i) => ({
        quarter,
        headcount: 85 + i * 5 + Math.random() * 2,
      })),
      dataKeys: ["headcount"],
      xAxisKey: "quarter",
    });

    charts.push({
      title: "Project Budget Utilization",
      subtitle: "Budget vs actual (%)",
      type: "bar",
      data: [
        { project: "Project A", utilized: 85, budget: 100 },
        { project: "Project B", utilized: 92, budget: 100 },
        { project: "Project C", utilized: 78, budget: 100 },
        { project: "Project D", utilized: 88, budget: 100 },
      ],
      dataKeys: ["utilized", "budget"],
      xAxisKey: "project",
    });
  }

  // Supply Chain Department
  else if (departmentId === "supply-chain") {
    charts.push({
      title: "Inventory Levels",
      subtitle: "By category (₹ Cr)",
      type: "area",
      data: months.map((month, i) => ({
        month,
        rawMaterial: 18 + Math.random() * 2 - 1,
        wip: 8 + Math.random() * 1 - 0.5,
        finished: 12 + Math.random() * 1.5 - 0.75,
      })),
      dataKeys: ["rawMaterial", "wip", "finished"],
      xAxisKey: "month",
      stacked: true,
    });

    charts.push({
      title: "On-Time Delivery",
      subtitle: "Monthly OTD rate (%)",
      type: "line",
      data: months.map((month, i) => ({
        month,
        otd: 92 + i * 0.4 + Math.random() * 0.3,
        target: 93,
      })),
      dataKeys: ["otd", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Supplier Performance",
      subtitle: "Delivery & quality scores",
      type: "bar",
      data: [
        { supplier: "Vendor A", delivery: 96, quality: 98 },
        { supplier: "Vendor B", delivery: 92, quality: 95 },
        { supplier: "Vendor C", delivery: 88, quality: 92 },
        { supplier: "Vendor D", delivery: 94, quality: 96 },
        { supplier: "Vendor E", delivery: 90, quality: 94 },
      ],
      dataKeys: ["delivery", "quality"],
      xAxisKey: "supplier",
    });

    charts.push({
      title: "Inventory Turnover",
      subtitle: "Monthly turnover ratio",
      type: "area",
      data: months.map((month, i) => ({
        month,
        turnover: 7.2 + i * 0.15 + Math.random() * 0.1,
        target: 8.2,
      })),
      dataKeys: ["turnover", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Supplier Lead Time",
      subtitle: "Average days",
      type: "line",
      data: months.map((month, i) => ({
        month,
        leadTime: 14 - i * 0.3 + Math.random() * 0.4,
        target: 12,
      })),
      dataKeys: ["leadTime", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Stock-out Rate",
      subtitle: "Monthly stock-out (%)",
      type: "line",
      data: months.map((month, i) => ({
        month,
        stockout: 2.9 - i * 0.13 + Math.random() * 0.1,
        target: 2.1,
      })),
      dataKeys: ["stockout", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Supply Chain Cost",
      subtitle: "Monthly cost (₹ Cr)",
      type: "bar",
      data: months.map((month, i) => ({
        month,
        cost: 25 - i * 0.08 + Math.random() * 0.3,
        budget: 24.5,
      })),
      dataKeys: ["cost", "budget"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Perfect Order Rate",
      subtitle: "Monthly perfect orders (%)",
      type: "area",
      data: months.map((month, i) => ({
        month,
        perfect: 88 + i * 0.5 + Math.random() * 0.4,
        target: 91,
      })),
      dataKeys: ["perfect", "target"],
      xAxisKey: "month",
    });
  }

  // Risk Management Department
  else if (departmentId === "risk") {
    charts.push({
      title: "Risk Score Trend",
      subtitle: "Monthly risk score",
      type: "line",
      data: months.map((month, i) => ({
        month,
        score: 72 - i * 2.8 + Math.random() * 1,
        threshold: 70,
      })),
      dataKeys: ["score", "threshold"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Risk Distribution",
      subtitle: "By category",
      type: "bar",
      data: [
        { category: "Credit Risk", count: 12, severity: 8 },
        { category: "Market Risk", count: 8, severity: 7 },
        { category: "Operational", count: 15, severity: 5 },
        { category: "Compliance", count: 6, severity: 6 },
        { category: "Strategic", count: 4, severity: 9 },
      ],
      dataKeys: ["count", "severity"],
      xAxisKey: "category",
    });

    charts.push({
      title: "Capital at Risk",
      subtitle: "Monthly exposure (₹ Cr)",
      type: "area",
      data: months.map((month, i) => ({
        month,
        capital: 135 - i * 1.7 + Math.random() * 1.5,
        limit: 125,
      })),
      dataKeys: ["capital", "limit"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Mitigation Rate",
      subtitle: "Monthly mitigation (%)",
      type: "line",
      data: months.map((month, i) => ({
        month,
        mitigation: 66 + i * 2 + Math.random() * 1,
        target: 75,
      })),
      dataKeys: ["mitigation", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Compliance Score",
      subtitle: "Monthly compliance (%)",
      type: "area",
      data: months.map((month, i) => ({
        month,
        compliance: 94 + i * 0.3 + Math.random() * 0.2,
        target: 95,
      })),
      dataKeys: ["compliance", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Open Risks",
      subtitle: "Monthly risk count",
      type: "bar",
      data: months.map((month, i) => ({
        month,
        risks: 42 - i * 1.3 + Math.random() * 2,
        target: 30,
      })),
      dataKeys: ["risks", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Audit Findings",
      subtitle: "Monthly findings count",
      type: "line",
      data: months.map((month, i) => ({
        month,
        findings: 8 - i * 0.5 + Math.random() * 0.5,
        target: 5,
      })),
      dataKeys: ["findings", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Risk by Severity",
      subtitle: "Risk distribution",
      type: "bar",
      data: [
        { severity: "Critical", count: 2 },
        { severity: "High", count: 8 },
        { severity: "Medium", count: 15 },
        { severity: "Low", count: 9 },
      ],
      dataKeys: ["count"],
      xAxisKey: "severity",
    });
  }

  // Industry-specific departments
  // Production & Manufacturing
  else if (departmentId === "production") {
    charts.push({
      title: "Production Output",
      subtitle: "Monthly units produced",
      type: "area",
      data: months.map((month, i) => ({
        month,
        output: 12500 + i * 300 + Math.random() * 200,
        target: 13000 + i * 250,
      })),
      dataKeys: ["output", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "OEE Trend",
      subtitle: "Overall Equipment Effectiveness (%)",
      type: "line",
      data: months.map((month, i) => ({
        month,
        oee: 82 + i * 0.5 + Math.random() * 0.8,
        target: 85,
      })),
      dataKeys: ["oee", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Production by Line",
      subtitle: "Output by production line",
      type: "bar",
      data: [
        { line: "Line A", output: 5200, capacity: 5500 },
        { line: "Line B", output: 4800, capacity: 5000 },
        { line: "Line C", output: 4500, capacity: 4800 },
      ],
      dataKeys: ["output", "capacity"],
      xAxisKey: "line",
    });

    charts.push({
      title: "Defect Rate",
      subtitle: "Monthly defect rate (%)",
      type: "line",
      data: months.map((month, i) => ({
        month,
        defects: 1.8 - i * 0.15 + Math.random() * 0.1,
        target: 1.0,
      })),
      dataKeys: ["defects", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Equipment Utilization",
      subtitle: "By equipment type (%)",
      type: "bar",
      data: [
        { equipment: "Machines", utilization: 88, target: 90 },
        { equipment: "Assembly", utilization: 85, target: 90 },
        { equipment: "Packaging", utilization: 92, target: 90 },
      ],
      dataKeys: ["utilization", "target"],
      xAxisKey: "equipment",
    });

    charts.push({
      title: "Production Cost",
      subtitle: "Cost per unit (₹)",
      type: "area",
      data: months.map((month, i) => ({
        month,
        cost: 1250 - i * 15 + Math.random() * 20,
        target: 1200,
      })),
      dataKeys: ["cost", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Cycle Time",
      subtitle: "Average production cycle (hours)",
      type: "line",
      data: months.map((month, i) => ({
        month,
        cycleTime: 8.5 - i * 0.12 + Math.random() * 0.2,
        target: 8.0,
      })),
      dataKeys: ["cycleTime", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Production Forecast",
      subtitle: "Projected output (units)",
      type: "area",
      data: [
        ...months.slice(0, 3).map((month, i) => ({
          month,
          actual: 12500 + i * 300,
          forecast: 12500 + i * 300,
        })),
        ...months.slice(3).map((month, i) => ({
          month,
          actual: null,
          forecast: 13400 + (i + 3) * 350,
        })),
      ],
      dataKeys: ["actual", "forecast"],
      xAxisKey: "month",
    });
  }

  // Treasury & Investments (Finance industry)
  else if (departmentId === "treasury") {
    charts.push({
      title: "Cash Position Trend",
      subtitle: "Monthly cash balance (₹ Cr)",
      type: "area",
      data: months.map((month, i) => ({
        month,
        cash: 125 + i * 3.5 + Math.random() * 2,
        target: 145,
      })),
      dataKeys: ["cash", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Investment Portfolio",
      subtitle: "By asset class (₹ Cr)",
      type: "bar",
      data: [
        { asset: "Equities", value: 45, target: 50 },
        { asset: "Bonds", value: 38, target: 40 },
        { asset: "Cash", value: 25, target: 20 },
        { asset: "Others", value: 17, target: 15 },
      ],
      dataKeys: ["value", "target"],
      xAxisKey: "asset",
    });

    charts.push({
      title: "ROI Trend",
      subtitle: "Return on investment (%)",
      type: "line",
      data: months.map((month, i) => ({
        month,
        roi: 8.5 + i * 0.2 + Math.random() * 0.3,
        target: 9.0,
      })),
      dataKeys: ["roi", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Liquidity Ratio",
      subtitle: "Current ratio trend",
      type: "area",
      data: months.map((month, i) => ({
        month,
        ratio: 2.1 + i * 0.05 + Math.random() * 0.08,
        target: 2.0,
      })),
      dataKeys: ["ratio", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Debt Structure",
      subtitle: "By maturity (₹ Cr)",
      type: "bar",
      data: [
        { maturity: "<1 Year", amount: 15 },
        { maturity: "1-3 Years", amount: 28 },
        { maturity: "3-5 Years", amount: 22 },
        { maturity: ">5 Years", amount: 18 },
      ],
      dataKeys: ["amount"],
      xAxisKey: "maturity",
    });

    charts.push({
      title: "Interest Rate Exposure",
      subtitle: "Sensitivity analysis",
      type: "line",
      data: months.map((month, i) => ({
        month,
        exposure: 2.5 - i * 0.1 + Math.random() * 0.15,
        limit: 3.0,
      })),
      dataKeys: ["exposure", "limit"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Foreign Exchange Exposure",
      subtitle: "FX risk (₹ Cr)",
      type: "area",
      data: months.map((month, i) => ({
        month,
        exposure: 12 + Math.random() * 1.5 - 0.75,
        limit: 15,
      })),
      dataKeys: ["exposure", "limit"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Investment Performance",
      subtitle: "Monthly returns (%)",
      type: "bar",
      data: months.map((month, i) => ({
        month,
        returns: 0.7 + i * 0.05 + Math.random() * 0.1,
      })),
      dataKeys: ["returns"],
      xAxisKey: "month",
    });
  }

  // Lending & Credit (Banking industry)
  else if (departmentId === "lending") {
    charts.push({
      title: "Loan Portfolio Size",
      subtitle: "Total outstanding (₹ Cr)",
      type: "area",
      data: months.map((month, i) => ({
        month,
        portfolio: 1250 + i * 45 + Math.random() * 15,
        target: 1300 + i * 40,
      })),
      dataKeys: ["portfolio", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "NPA Trend",
      subtitle: "Non-performing assets (%)",
      type: "line",
      data: months.map((month, i) => ({
        month,
        npa: 3.2 - i * 0.08 + Math.random() * 0.1,
        target: 3.0,
      })),
      dataKeys: ["npa", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Loan Disbursements",
      subtitle: "Monthly disbursements (₹ Cr)",
      type: "bar",
      data: months.map((month, i) => ({
        month,
        disbursed: 85 + i * 3 + Math.random() * 2,
      })),
      dataKeys: ["disbursed"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Credit Risk Distribution",
      subtitle: "By risk category",
      type: "bar",
      data: [
        { category: "Low Risk", count: 420, amount: 850 },
        { category: "Medium Risk", count: 285, amount: 320 },
        { category: "High Risk", count: 95, amount: 80 },
      ],
      dataKeys: ["count", "amount"],
      xAxisKey: "category",
    });

    charts.push({
      title: "Interest Income",
      subtitle: "Monthly interest earned (₹ Cr)",
      type: "area",
      data: months.map((month, i) => ({
        month,
        income: 12.5 + i * 0.3 + Math.random() * 0.2,
        target: 13.0,
      })),
      dataKeys: ["income", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Loan Approval Rate",
      subtitle: "Monthly approval rate (%)",
      type: "line",
      data: months.map((month, i) => ({
        month,
        approval: 68 + i * 0.5 + Math.random() * 0.8,
        target: 70,
      })),
      dataKeys: ["approval", "target"],
      xAxisKey: "month",
    });

    charts.push({
      title: "Average Loan Size",
      subtitle: "By product type (₹ Lakhs)",
      type: "bar",
      data: [
        { product: "Home Loan", avg: 45 },
        { product: "Personal Loan", avg: 8 },
        { product: "Business Loan", avg: 125 },
        { product: "Auto Loan", avg: 12 },
      ],
      dataKeys: ["avg"],
      xAxisKey: "product",
    });

    charts.push({
      title: "Collection Efficiency",
      subtitle: "Monthly collection rate (%)",
      type: "area",
      data: months.map((month, i) => ({
        month,
        collection: 94 + i * 0.2 + Math.random() * 0.3,
        target: 95,
      })),
      dataKeys: ["collection", "target"],
      xAxisKey: "month",
    });
  }

  // For other industry-specific departments, return empty array
  // They will use the default config charts
  // This ensures backward compatibility and scalability

  // Default: Return empty array if department not found
  // This ensures backward compatibility
  return charts;
}

// Accounts & Finance Department - Universal
export const accountsFinanceConfig: DepartmentConfig = {
  kpis: [
    { title: "Total Revenue", value: "₹48.2Cr", change: 12.4, trend: "up", target: "₹45Cr" },
    { title: "Net Profit", value: "₹8.4Cr", change: 8.2, trend: "up", target: "₹7.5Cr" },
    { title: "Operating Expenses", value: "₹12.6Cr", change: -3.1, trend: "up" },
    { title: "Accounts Receivable", value: "₹6.8Cr", change: -5.2, trend: "up" },
    { title: "Cash Flow", value: "₹4.2Cr", change: 15.3, trend: "up" },
    { title: "EBITDA Margin", value: "24.5%", change: 2.1, trend: "up", target: ">22%" },
  ],
  charts: [
    {
      title: "Revenue vs Expenses Trend",
      subtitle: "Monthly comparison (₹ Cr)",
      type: "area",
      data: [
        { month: "Jan", revenue: 42, expenses: 34, profit: 8 },
        { month: "Feb", revenue: 44, expenses: 35, profit: 9 },
        { month: "Mar", revenue: 46, expenses: 36, profit: 10 },
        { month: "Apr", revenue: 45, expenses: 37, profit: 8 },
        { month: "May", revenue: 47, expenses: 36, profit: 11 },
        { month: "Jun", revenue: 48, expenses: 38, profit: 10 },
      ],
      dataKeys: ["revenue", "expenses", "profit"],
      xAxisKey: "month",
    },
    {
      title: "Expense Breakdown",
      subtitle: "By category",
      type: "bar",
      data: [
        { category: "Salaries", amount: 42 },
        { category: "Operations", amount: 28 },
        { category: "Marketing", amount: 15 },
        { category: "Technology", amount: 10 },
        { category: "Others", amount: 5 },
      ],
      dataKeys: ["amount"],
      xAxisKey: "category",
    },
  ],
  table: {
    title: "Pending Invoices",
    columns: [
      { key: "invoiceNo", label: "Invoice #", sortable: true },
      { key: "client", label: "Client", sortable: true },
      { key: "amount", label: "Amount", sortable: true },
      { key: "dueDate", label: "Due Date", sortable: true },
      { key: "status", label: "Status" },
    ],
    data: [
      { invoiceNo: "INV-2024-001", client: "Tata Motors", amount: "₹24.5L", dueDate: "15 Jan 2024", status: "Overdue" },
      { invoiceNo: "INV-2024-002", client: "Reliance Industries", amount: "₹18.2L", dueDate: "22 Jan 2024", status: "Pending" },
      { invoiceNo: "INV-2024-003", client: "Infosys Ltd", amount: "₹32.1L", dueDate: "28 Jan 2024", status: "Pending" },
      { invoiceNo: "INV-2024-004", client: "HDFC Bank", amount: "₹15.8L", dueDate: "05 Feb 2024", status: "Sent" },
      { invoiceNo: "INV-2024-005", client: "ITC Limited", amount: "₹28.4L", dueDate: "12 Feb 2024", status: "Draft" },
    ],
    searchKey: "client",
  },
  insights: [
    { type: "anomaly", title: "Expense Spike Detected", description: "Marketing expenses 34% above budget this quarter. Review campaign ROI for optimization.", impact: "high" },
    { type: "prediction", title: "Cash Flow Forecast", description: "Based on receivables trend, expect ₹2.1Cr cash inflow by month-end. 3 invoices at risk of delay.", impact: "medium" },
    { type: "recommendation", title: "Working Capital Optimization", description: "Reduce DSO by 5 days to unlock ₹85L additional working capital.", impact: "high" },
    { type: "trend", title: "Profit Margin Improvement", description: "Net profit margin improved 2.3% YoY due to operational efficiency gains.", impact: "medium" },
  ],
};

// Human Resources Department - Universal
export const hrDepartmentConfig: DepartmentConfig = {
  kpis: [
    { title: "Total Headcount", value: "2,847", change: 4.2, trend: "up" },
    { title: "Attrition Rate", value: "12.4%", change: -1.8, trend: "up", target: "<15%" },
    { title: "Time to Hire", value: "28 days", change: -12, trend: "up", target: "<30 days" },
    { title: "Employee Satisfaction", value: "4.2/5", change: 0.3, trend: "up", target: ">4.0" },
    { title: "Training Hours", value: "18.5 hrs", change: 22, trend: "up", changeLabel: "per employee" },
    { title: "Open Positions", value: "124", change: 15, trend: "down" },
  ],
  charts: [
    {
      title: "Headcount Trend",
      subtitle: "Monthly employee count",
      type: "area",
      data: [
        { month: "Jul", count: 2654, hires: 45, exits: 32 },
        { month: "Aug", count: 2689, hires: 52, exits: 17 },
        { month: "Sep", count: 2721, hires: 48, exits: 16 },
        { month: "Oct", count: 2768, hires: 62, exits: 15 },
        { month: "Nov", count: 2812, hires: 58, exits: 14 },
        { month: "Dec", count: 2847, hires: 51, exits: 16 },
      ],
      dataKeys: ["count"],
      xAxisKey: "month",
    },
    {
      title: "Department Distribution",
      subtitle: "Headcount by department",
      type: "bar",
      data: [
        { dept: "Engineering", count: 892 },
        { dept: "Sales", count: 456 },
        { dept: "Operations", count: 623 },
        { dept: "Support", count: 384 },
        { dept: "Marketing", count: 245 },
        { dept: "Finance", count: 247 },
      ],
      dataKeys: ["count"],
      xAxisKey: "dept",
    },
  ],
  table: {
    title: "Recent Joiners",
    columns: [
      { key: "name", label: "Name", sortable: true },
      { key: "department", label: "Department", sortable: true },
      { key: "role", label: "Role" },
      { key: "joiningDate", label: "Joining Date", sortable: true },
      { key: "status", label: "Onboarding Status" },
    ],
    data: [
      { name: "Priya Sharma", department: "Engineering", role: "Senior Developer", joiningDate: "08 Jan 2024", status: "In Progress" },
      { name: "Rahul Mehta", department: "Sales", role: "Account Executive", joiningDate: "08 Jan 2024", status: "In Progress" },
      { name: "Ananya Gupta", department: "Marketing", role: "Content Manager", joiningDate: "05 Jan 2024", status: "Completed" },
      { name: "Vikram Singh", department: "Operations", role: "Operations Lead", joiningDate: "02 Jan 2024", status: "Completed" },
      { name: "Neha Patel", department: "Finance", role: "Financial Analyst", joiningDate: "02 Jan 2024", status: "Completed" },
    ],
    searchKey: "name",
  },
  insights: [
    { type: "prediction", title: "Attrition Risk Alert", description: "15 employees in Engineering show high attrition risk indicators. Recommend retention interviews.", impact: "high" },
    { type: "trend", title: "Hiring Velocity Up", description: "Time-to-hire reduced by 5 days this quarter. Streamlined screening process showing results.", impact: "medium" },
    { type: "recommendation", title: "Skill Gap Analysis", description: "Cloud & AI skills underrepresented. Consider upskilling programs for 200+ engineers.", impact: "high" },
    { type: "anomaly", title: "Exit Interview Pattern", description: "60% of voluntary exits cite career growth. Review promotion pipeline.", impact: "medium" },
  ],
};

// Sales & Marketing Department - Universal
export const salesMarketingConfig: DepartmentConfig = {
  kpis: [
    { title: "Total Revenue", value: "₹52.8Cr", change: 18.4, trend: "up", target: "₹50Cr" },
    { title: "New Customers", value: "1,247", change: 24.2, trend: "up" },
    { title: "Conversion Rate", value: "3.8%", change: 0.6, trend: "up", target: ">3.5%" },
    { title: "CAC", value: "₹4,250", change: -8.2, trend: "up", target: "<₹5,000" },
    { title: "Pipeline Value", value: "₹128Cr", change: 32.1, trend: "up" },
    { title: "Win Rate", value: "28%", change: 4.5, trend: "up", target: ">25%" },
  ],
  charts: [
    {
      title: "Revenue by Channel",
      subtitle: "Monthly breakdown (₹ Cr)",
      type: "area",
      data: [
        { month: "Jul", direct: 18, partners: 12, online: 8, referral: 4 },
        { month: "Aug", direct: 19, partners: 13, online: 9, referral: 5 },
        { month: "Sep", direct: 21, partners: 14, online: 10, referral: 5 },
        { month: "Oct", direct: 22, partners: 15, online: 11, referral: 6 },
        { month: "Nov", direct: 24, partners: 16, online: 12, referral: 6 },
        { month: "Dec", direct: 26, partners: 17, online: 13, referral: 7 },
      ],
      dataKeys: ["direct", "partners", "online", "referral"],
      xAxisKey: "month",
      stacked: true,
    },
    {
      title: "Sales Pipeline",
      subtitle: "Deals by stage",
      type: "funnel",
      data: [
        { stage: "Leads", value: 5420 },
        { stage: "Qualified", value: 2180 },
        { stage: "Proposal", value: 845 },
        { stage: "Negotiation", value: 412 },
        { stage: "Closed Won", value: 186 },
      ],
      dataKeys: ["value"],
      xAxisKey: "stage",
    },
  ],
  table: {
    title: "Top Deals in Pipeline",
    columns: [
      { key: "company", label: "Company", sortable: true },
      { key: "value", label: "Deal Value", sortable: true },
      { key: "stage", label: "Stage" },
      { key: "probability", label: "Probability", sortable: true },
      { key: "closeDate", label: "Expected Close", sortable: true },
    ],
    data: [
      { company: "Wipro Technologies", value: "₹4.2Cr", stage: "Negotiation", probability: "75%", closeDate: "28 Jan 2024" },
      { company: "Mahindra & Mahindra", value: "₹3.8Cr", stage: "Proposal", probability: "50%", closeDate: "15 Feb 2024" },
      { company: "Bharti Airtel", value: "₹2.9Cr", stage: "Negotiation", probability: "80%", closeDate: "20 Jan 2024" },
      { company: "Larsen & Toubro", value: "₹2.5Cr", stage: "Qualified", probability: "30%", closeDate: "10 Mar 2024" },
      { company: "Tech Mahindra", value: "₹2.1Cr", stage: "Proposal", probability: "60%", closeDate: "05 Feb 2024" },
    ],
    searchKey: "company",
  },
  insights: [
    { type: "prediction", title: "Q1 Revenue Forecast", description: "Based on pipeline velocity, expect ₹58Cr revenue in Q1. 12% above target.", impact: "high" },
    { type: "anomaly", title: "Conversion Drop Alert", description: "Qualified-to-Proposal conversion dropped 15% this week. Review lead quality.", impact: "high" },
    { type: "recommendation", title: "Channel Optimization", description: "Partner channel showing 40% higher ROI. Consider reallocating ₹50L marketing budget.", impact: "medium" },
    { type: "trend", title: "Enterprise Segment Growth", description: "Enterprise deals up 45% YoY. Average deal size increased to ₹2.8Cr.", impact: "medium" },
  ],
};

// Operations Department - Universal
export const operationsConfig: DepartmentConfig = {
  kpis: [
    { title: "Operational Efficiency", value: "94.2%", change: 2.8, trend: "up", target: ">92%" },
    { title: "Process Cycle Time", value: "4.2 days", change: -15, trend: "up", target: "<5 days" },
    { title: "Resource Utilization", value: "87%", change: 5.2, trend: "up", target: ">85%" },
    { title: "SLA Compliance", value: "98.5%", change: 1.2, trend: "up", target: ">98%" },
    { title: "Cost per Transaction", value: "₹142", change: -8.5, trend: "up" },
    { title: "Backlog Items", value: "234", change: -22, trend: "up" },
  ],
  charts: [
    {
      title: "Process Efficiency Trend",
      subtitle: "Weekly performance",
      type: "line",
      data: [
        { week: "W1", efficiency: 91, target: 92 },
        { week: "W2", efficiency: 92, target: 92 },
        { week: "W3", efficiency: 93, target: 92 },
        { week: "W4", efficiency: 94, target: 92 },
        { week: "W5", efficiency: 93, target: 92 },
        { week: "W6", efficiency: 94, target: 92 },
      ],
      dataKeys: ["efficiency", "target"],
      xAxisKey: "week",
    },
    {
      title: "Resource Allocation",
      subtitle: "By function",
      type: "bar",
      data: [
        { function: "Processing", allocated: 45, utilized: 42 },
        { function: "Quality Check", allocated: 20, utilized: 19 },
        { function: "Documentation", allocated: 15, utilized: 14 },
        { function: "Support", allocated: 12, utilized: 11 },
        { function: "Admin", allocated: 8, utilized: 7 },
      ],
      dataKeys: ["allocated", "utilized"],
      xAxisKey: "function",
    },
  ],
  table: {
    title: "Active Processes",
    columns: [
      { key: "processId", label: "Process ID", sortable: true },
      { key: "name", label: "Process Name", sortable: true },
      { key: "status", label: "Status" },
      { key: "sla", label: "SLA Status" },
      { key: "eta", label: "ETA", sortable: true },
    ],
    data: [
      { processId: "PRC-4521", name: "Order Fulfillment Batch", status: "In Progress", sla: "On Track", eta: "2 hours" },
      { processId: "PRC-4520", name: "Invoice Processing", status: "In Progress", sla: "On Track", eta: "4 hours" },
      { processId: "PRC-4519", name: "Vendor Onboarding", status: "Pending Review", sla: "At Risk", eta: "1 day" },
      { processId: "PRC-4518", name: "Quality Audit", status: "Completed", sla: "Met", eta: "-" },
      { processId: "PRC-4517", name: "Compliance Check", status: "In Progress", sla: "On Track", eta: "6 hours" },
    ],
    searchKey: "name",
  },
  insights: [
    { type: "recommendation", title: "Bottleneck Identified", description: "Documentation phase causing 40% of delays. Consider automation for form filling.", impact: "high" },
    { type: "trend", title: "Efficiency Gains", description: "Process optimization reduced cycle time by 18% over 6 months.", impact: "medium" },
    { type: "prediction", title: "Capacity Planning", description: "Peak load expected next week. Recommend 15% additional temp staffing.", impact: "medium" },
    { type: "anomaly", title: "SLA Breach Risk", description: "3 processes at risk of SLA breach. Escalate to team leads immediately.", impact: "high" },
  ],
};

// IT & Engineering Department - Universal
export const itEngineeringConfig: DepartmentConfig = {
  kpis: [
    { title: "System Uptime", value: "99.97%", change: 0.02, trend: "up", target: ">99.9%" },
    { title: "Deployment Frequency", value: "12/week", change: 33, trend: "up" },
    { title: "MTTR", value: "18 min", change: -25, trend: "up", target: "<30 min" },
    { title: "Open Incidents", value: "23", change: -15, trend: "up" },
    { title: "Sprint Velocity", value: "84 pts", change: 8, trend: "up" },
    { title: "Tech Debt Ratio", value: "12%", change: -3, trend: "up", target: "<15%" },
  ],
  charts: [
    {
      title: "System Performance",
      subtitle: "Response time & availability",
      type: "line",
      data: [
        { day: "Mon", responseTime: 145, availability: 99.98 },
        { day: "Tue", responseTime: 152, availability: 99.95 },
        { day: "Wed", responseTime: 138, availability: 99.99 },
        { day: "Thu", responseTime: 162, availability: 99.97 },
        { day: "Fri", responseTime: 148, availability: 99.98 },
        { day: "Sat", responseTime: 125, availability: 99.99 },
        { day: "Sun", responseTime: 118, availability: 100 },
      ],
      dataKeys: ["responseTime"],
      xAxisKey: "day",
    },
    {
      title: "Incident Distribution",
      subtitle: "By severity",
      type: "bar",
      data: [
        { severity: "Critical", count: 2 },
        { severity: "High", count: 8 },
        { severity: "Medium", count: 28 },
        { severity: "Low", count: 45 },
      ],
      dataKeys: ["count"],
      xAxisKey: "severity",
    },
  ],
  table: {
    title: "Active Incidents",
    columns: [
      { key: "incidentId", label: "Incident ID", sortable: true },
      { key: "title", label: "Title", sortable: true },
      { key: "severity", label: "Severity" },
      { key: "assignee", label: "Assignee" },
      { key: "age", label: "Age", sortable: true },
    ],
    data: [
      { incidentId: "INC-1234", title: "Payment Gateway Timeout", severity: "Critical", assignee: "Amit Kumar", age: "2 hours" },
      { incidentId: "INC-1233", title: "Search Latency Spike", severity: "High", assignee: "Sneha Reddy", age: "4 hours" },
      { incidentId: "INC-1232", title: "Mobile App Crash on iOS 17", severity: "High", assignee: "Raj Patel", age: "1 day" },
      { incidentId: "INC-1231", title: "Email Notifications Delayed", severity: "Medium", assignee: "Priya Iyer", age: "2 days" },
      { incidentId: "INC-1230", title: "Dashboard Loading Slow", severity: "Low", assignee: "Karan Singh", age: "3 days" },
    ],
    searchKey: "title",
  },
  insights: [
    { type: "anomaly", title: "Memory Leak Detected", description: "Production server memory usage spiking. Recommend restart during next maintenance window.", impact: "high" },
    { type: "trend", title: "Deployment Success Rate", description: "Zero-downtime deployments achieved 98% of time. CI/CD improvements working.", impact: "medium" },
    { type: "prediction", title: "Capacity Alert", description: "Database storage at 78%. Will hit threshold in 45 days at current growth rate.", impact: "medium" },
    { type: "recommendation", title: "Tech Debt Priority", description: "Legacy auth module causing 35% of incidents. Prioritize migration in Q2.", impact: "high" },
  ],
};

// Customer Service Department - Universal
export const customerServiceConfig: DepartmentConfig = {
  kpis: [
    { title: "CSAT Score", value: "4.6/5", change: 0.2, trend: "up", target: ">4.5" },
    { title: "First Response Time", value: "8 min", change: -20, trend: "up", target: "<10 min" },
    { title: "Resolution Time", value: "4.2 hrs", change: -15, trend: "up", target: "<6 hrs" },
    { title: "Ticket Volume", value: "2,847", change: 12, trend: "down" },
    { title: "First Contact Resolution", value: "72%", change: 5, trend: "up", target: ">70%" },
    { title: "NPS Score", value: "58", change: 8, trend: "up", target: ">50" },
  ],
  charts: [
    {
      title: "Ticket Volume Trend",
      subtitle: "Daily tickets by channel",
      type: "area",
      data: [
        { day: "Mon", email: 180, chat: 320, phone: 95, social: 45 },
        { day: "Tue", email: 165, chat: 290, phone: 88, social: 52 },
        { day: "Wed", email: 195, chat: 340, phone: 102, social: 48 },
        { day: "Thu", email: 172, chat: 310, phone: 92, social: 55 },
        { day: "Fri", email: 188, chat: 335, phone: 98, social: 62 },
        { day: "Sat", email: 85, chat: 180, phone: 42, social: 38 },
        { day: "Sun", email: 72, chat: 155, phone: 35, social: 32 },
      ],
      dataKeys: ["email", "chat", "phone", "social"],
      xAxisKey: "day",
      stacked: true,
    },
    {
      title: "Issue Categories",
      subtitle: "Distribution of ticket types",
      type: "bar",
      data: [
        { category: "Billing", count: 420 },
        { category: "Technical", count: 385 },
        { category: "Product Info", count: 312 },
        { category: "Returns", count: 245 },
        { category: "Account", count: 198 },
      ],
      dataKeys: ["count"],
      xAxisKey: "category",
    },
  ],
  table: {
    title: "Recent Escalations",
    columns: [
      { key: "ticketId", label: "Ticket ID", sortable: true },
      { key: "customer", label: "Customer", sortable: true },
      { key: "issue", label: "Issue" },
      { key: "priority", label: "Priority" },
      { key: "age", label: "Age", sortable: true },
    ],
    data: [
      { ticketId: "TKT-8901", customer: "Rajesh Enterprises", issue: "Payment failure refund", priority: "Critical", age: "4 hours" },
      { ticketId: "TKT-8899", customer: "Sunita Exports", issue: "Order delivery delayed", priority: "High", age: "8 hours" },
      { ticketId: "TKT-8897", customer: "Global Tech Solutions", issue: "API integration error", priority: "High", age: "1 day" },
      { ticketId: "TKT-8895", customer: "Prime Industries", issue: "Invoice discrepancy", priority: "Medium", age: "2 days" },
      { ticketId: "TKT-8893", customer: "National Traders", issue: "Account access issue", priority: "Medium", age: "2 days" },
    ],
    searchKey: "customer",
  },
  insights: [
    { type: "anomaly", title: "Ticket Spike Alert", description: "Payment-related tickets up 45% since yesterday. Possible gateway issue.", impact: "high" },
    { type: "trend", title: "Chat Channel Growing", description: "Chat now handles 52% of tickets. Consider expanding chat team.", impact: "medium" },
    { type: "prediction", title: "Weekend Staffing", description: "Expected 25% volume increase next weekend. Recommend 3 additional agents.", impact: "medium" },
    { type: "recommendation", title: "Self-Service Opportunity", description: "40% of tickets are password resets. Implement automated reset flow.", impact: "high" },
  ],
};

// Procurement Department - Universal
export const procurementConfig: DepartmentConfig = {
  kpis: [
    { title: "Total Spend", value: "₹156Cr", change: 8.2, trend: "down" },
    { title: "Cost Savings", value: "₹12.4Cr", change: 24, trend: "up", target: "₹10Cr" },
    { title: "Active Vendors", value: "342", change: 15, trend: "up" },
    { title: "PO Cycle Time", value: "3.2 days", change: -18, trend: "up", target: "<4 days" },
    { title: "Contract Compliance", value: "94%", change: 3, trend: "up", target: ">90%" },
    { title: "Pending Approvals", value: "28", change: -12, trend: "up" },
  ],
  charts: [
    {
      title: "Spend by Category",
      subtitle: "Monthly procurement (₹ Cr)",
      type: "area",
      data: [
        { month: "Jul", rawMaterials: 45, services: 28, equipment: 15, others: 8 },
        { month: "Aug", rawMaterials: 48, services: 30, equipment: 12, others: 10 },
        { month: "Sep", rawMaterials: 52, services: 32, equipment: 18, others: 9 },
        { month: "Oct", rawMaterials: 50, services: 29, equipment: 14, others: 11 },
        { month: "Nov", rawMaterials: 54, services: 31, equipment: 16, others: 10 },
        { month: "Dec", rawMaterials: 56, services: 33, equipment: 20, others: 12 },
      ],
      dataKeys: ["rawMaterials", "services", "equipment", "others"],
      xAxisKey: "month",
      stacked: true,
    },
    {
      title: "Vendor Performance",
      subtitle: "Top vendors by score",
      type: "bar",
      data: [
        { vendor: "Tata Steel", score: 92, onTime: 96 },
        { vendor: "Hindustan Unilever", score: 89, onTime: 94 },
        { vendor: "Asian Paints", score: 87, onTime: 91 },
        { vendor: "JSW Steel", score: 85, onTime: 88 },
        { vendor: "Godrej Industries", score: 82, onTime: 85 },
      ],
      dataKeys: ["score", "onTime"],
      xAxisKey: "vendor",
    },
  ],
  table: {
    title: "Pending Purchase Orders",
    columns: [
      { key: "poNumber", label: "PO Number", sortable: true },
      { key: "vendor", label: "Vendor", sortable: true },
      { key: "amount", label: "Amount", sortable: true },
      { key: "status", label: "Status" },
      { key: "requiredBy", label: "Required By", sortable: true },
    ],
    data: [
      { poNumber: "PO-2024-1542", vendor: "Tata Steel", amount: "₹2.8Cr", status: "Pending Approval", requiredBy: "15 Jan 2024" },
      { poNumber: "PO-2024-1541", vendor: "Kirloskar Engines", amount: "₹1.5Cr", status: "Approved", requiredBy: "20 Jan 2024" },
      { poNumber: "PO-2024-1540", vendor: "Bharat Forge", amount: "₹95L", status: "In Transit", requiredBy: "18 Jan 2024" },
      { poNumber: "PO-2024-1539", vendor: "Thermax Ltd", amount: "₹1.2Cr", status: "Processing", requiredBy: "25 Jan 2024" },
      { poNumber: "PO-2024-1538", vendor: "Cummins India", amount: "₹78L", status: "Delivered", requiredBy: "10 Jan 2024" },
    ],
    searchKey: "vendor",
  },
  insights: [
    { type: "recommendation", title: "Consolidation Opportunity", description: "3 vendors supply similar items. Consolidating could save ₹1.2Cr annually.", impact: "high" },
    { type: "anomaly", title: "Price Variance Alert", description: "Steel prices 18% above market rate from one vendor. Negotiate or switch.", impact: "high" },
    { type: "trend", title: "Lead Time Improvement", description: "Average vendor lead time reduced by 4 days this quarter.", impact: "medium" },
    { type: "prediction", title: "Contract Renewals", description: "8 major contracts expiring in 60 days. Initiate renegotiation.", impact: "medium" },
  ],
};

// Quality Assurance Department - Universal
export const qualityConfig: DepartmentConfig = {
  kpis: [
    { title: "Defect Rate", value: "0.8%", change: -0.3, trend: "up", target: "<1%" },
    { title: "First Pass Yield", value: "97.2%", change: 1.5, trend: "up", target: ">96%" },
    { title: "Customer Complaints", value: "12", change: -25, trend: "up" },
    { title: "Audit Score", value: "94/100", change: 4, trend: "up", target: ">90" },
    { title: "CAPA Closure Rate", value: "88%", change: 8, trend: "up", target: ">85%" },
    { title: "Inspection Backlog", value: "45", change: -15, trend: "up" },
  ],
  charts: [
    {
      title: "Quality Metrics Trend",
      subtitle: "Monthly performance",
      type: "line",
      data: [
        { month: "Jul", defectRate: 1.2, firstPass: 95.5, target: 96 },
        { month: "Aug", defectRate: 1.1, firstPass: 96.0, target: 96 },
        { month: "Sep", defectRate: 1.0, firstPass: 96.2, target: 96 },
        { month: "Oct", defectRate: 0.95, firstPass: 96.8, target: 96 },
        { month: "Nov", defectRate: 0.85, firstPass: 97.0, target: 96 },
        { month: "Dec", defectRate: 0.8, firstPass: 97.2, target: 96 },
      ],
      dataKeys: ["defectRate", "firstPass"],
      xAxisKey: "month",
    },
    {
      title: "Defect Distribution",
      subtitle: "By category",
      type: "bar",
      data: [
        { category: "Dimensional", count: 28 },
        { category: "Surface Finish", count: 22 },
        { category: "Material", count: 15 },
        { category: "Assembly", count: 12 },
        { category: "Packaging", count: 8 },
      ],
      dataKeys: ["count"],
      xAxisKey: "category",
    },
  ],
  table: {
    title: "Open CAPAs",
    columns: [
      { key: "capaId", label: "CAPA ID", sortable: true },
      { key: "issue", label: "Issue Description", sortable: true },
      { key: "priority", label: "Priority" },
      { key: "owner", label: "Owner" },
      { key: "dueDate", label: "Due Date", sortable: true },
    ],
    data: [
      { capaId: "CAPA-2024-089", issue: "Surface finish defects in Batch 234", priority: "High", owner: "Quality Team A", dueDate: "20 Jan 2024" },
      { capaId: "CAPA-2024-088", issue: "Dimensional variance in component X", priority: "Medium", owner: "Production", dueDate: "25 Jan 2024" },
      { capaId: "CAPA-2024-087", issue: "Supplier material non-conformance", priority: "High", owner: "Procurement", dueDate: "18 Jan 2024" },
      { capaId: "CAPA-2024-086", issue: "Assembly process deviation", priority: "Low", owner: "Engineering", dueDate: "30 Jan 2024" },
      { capaId: "CAPA-2024-085", issue: "Packaging damage during transit", priority: "Medium", owner: "Logistics", dueDate: "22 Jan 2024" },
    ],
    searchKey: "issue",
  },
  insights: [
    { type: "trend", title: "Quality Improvement", description: "Defect rate down 35% over 6 months. New inspection protocols effective.", impact: "high" },
    { type: "anomaly", title: "Batch Alert", description: "Batch 456 showing 3x normal defect rate. Recommend hold for investigation.", impact: "high" },
    { type: "prediction", title: "Audit Preparation", description: "ISO audit in 45 days. 3 documentation gaps need attention.", impact: "medium" },
    { type: "recommendation", title: "Root Cause Analysis", description: "Surface finish issues linked to tool wear. Implement predictive replacement.", impact: "medium" },
  ],
};

// Legal & Compliance Department - Universal
export const legalComplianceConfig: DepartmentConfig = {
  kpis: [
    { title: "Compliance Score", value: "96%", change: 2, trend: "up", target: ">95%" },
    { title: "Active Contracts", value: "847", change: 12, trend: "up" },
    { title: "Pending Reviews", value: "34", change: -18, trend: "up" },
    { title: "Regulatory Filings", value: "100%", change: 0, trend: "up", target: "100%" },
    { title: "Legal Spend", value: "₹2.4Cr", change: -5, trend: "up" },
    { title: "Open Disputes", value: "8", change: -2, trend: "up" },
  ],
  charts: [
    {
      title: "Contract Status",
      subtitle: "By lifecycle stage",
      type: "bar",
      data: [
        { stage: "Draft", count: 45 },
        { stage: "In Review", count: 78 },
        { stage: "Negotiation", count: 34 },
        { stage: "Active", count: 645 },
        { stage: "Expiring Soon", count: 28 },
        { stage: "Expired", count: 17 },
      ],
      dataKeys: ["count"],
      xAxisKey: "stage",
    },
    {
      title: "Compliance by Area",
      subtitle: "Audit scores",
      type: "bar",
      data: [
        { area: "Data Privacy", score: 98 },
        { area: "Financial", score: 96 },
        { area: "Labor Laws", score: 94 },
        { area: "Environmental", score: 92 },
        { area: "Industry Specific", score: 95 },
      ],
      dataKeys: ["score"],
      xAxisKey: "area",
    },
  ],
  table: {
    title: "Contracts Expiring Soon",
    columns: [
      { key: "contractId", label: "Contract ID", sortable: true },
      { key: "party", label: "Counterparty", sortable: true },
      { key: "type", label: "Type" },
      { key: "value", label: "Value", sortable: true },
      { key: "expiryDate", label: "Expiry Date", sortable: true },
    ],
    data: [
      { contractId: "CTR-2021-456", party: "Microsoft India", type: "Software License", value: "₹1.8Cr/yr", expiryDate: "28 Jan 2024" },
      { contractId: "CTR-2022-234", party: "AWS", type: "Cloud Services", value: "₹2.4Cr/yr", expiryDate: "15 Feb 2024" },
      { contractId: "CTR-2021-789", party: "Jones Lang LaSalle", type: "Facility Lease", value: "₹4.5Cr/yr", expiryDate: "01 Mar 2024" },
      { contractId: "CTR-2022-567", party: "Deloitte", type: "Consulting", value: "₹85L", expiryDate: "10 Feb 2024" },
      { contractId: "CTR-2023-123", party: "ICICI Lombard", type: "Insurance", value: "₹45L/yr", expiryDate: "20 Feb 2024" },
    ],
    searchKey: "party",
  },
  insights: [
    { type: "prediction", title: "Renewal Alert", description: "12 high-value contracts expiring in 60 days. Total value ₹18Cr. Initiate renewals.", impact: "high" },
    { type: "anomaly", title: "Compliance Gap", description: "New data privacy regulation effective Feb 1. 2 policy updates required.", impact: "high" },
    { type: "recommendation", title: "Contract Consolidation", description: "5 software vendors provide overlapping services. Consolidate for ₹40L savings.", impact: "medium" },
    { type: "trend", title: "Dispute Resolution", description: "Average dispute resolution time improved by 30% this quarter.", impact: "medium" },
  ],
};

// Executive Summary - Universal
export const executiveConfig: DepartmentConfig = {
  kpis: [
    { title: "Revenue", value: "₹485Cr", change: 18.4, trend: "up", target: "₹450Cr" },
    { title: "EBITDA", value: "₹72.5Cr", change: 22.1, trend: "up", target: "₹65Cr" },
    { title: "Market Share", value: "24.5%", change: 2.3, trend: "up" },
    { title: "Customer NPS", value: "62", change: 8, trend: "up", target: ">55" },
    { title: "Employee Satisfaction", value: "4.3/5", change: 0.4, trend: "up" },
    { title: "Cash Position", value: "₹145Cr", change: 15, trend: "up" },
  ],
  charts: [
    {
      title: "Business Performance",
      subtitle: "Quarterly trends (₹ Cr)",
      type: "area",
      data: [
        { quarter: "Q1 FY23", revenue: 98, profit: 14, target: 95 },
        { quarter: "Q2 FY23", revenue: 105, profit: 16, target: 100 },
        { quarter: "Q3 FY23", revenue: 118, profit: 18, target: 110 },
        { quarter: "Q4 FY23", revenue: 125, profit: 20, target: 120 },
        { quarter: "Q1 FY24", revenue: 132, profit: 22, target: 125 },
        { quarter: "Q2 FY24", revenue: 142, profit: 25, target: 135 },
      ],
      dataKeys: ["revenue", "profit", "target"],
      xAxisKey: "quarter",
    },
    {
      title: "Revenue by Segment",
      subtitle: "Current quarter breakdown",
      type: "bar",
      data: [
        { segment: "Enterprise", revenue: 58 },
        { segment: "SMB", revenue: 42 },
        { segment: "Consumer", revenue: 28 },
        { segment: "Government", revenue: 14 },
      ],
      dataKeys: ["revenue"],
      xAxisKey: "segment",
    },
  ],
  table: {
    title: "Strategic Initiatives",
    columns: [
      { key: "initiative", label: "Initiative", sortable: true },
      { key: "owner", label: "Owner" },
      { key: "progress", label: "Progress", sortable: true },
      { key: "impact", label: "Expected Impact" },
      { key: "status", label: "Status" },
    ],
    data: [
      { initiative: "Digital Transformation", owner: "CTO", progress: "72%", impact: "₹25Cr savings", status: "On Track" },
      { initiative: "Market Expansion - South", owner: "CCO", progress: "45%", impact: "₹40Cr revenue", status: "On Track" },
      { initiative: "Product Innovation", owner: "CPO", progress: "60%", impact: "15% margin improvement", status: "At Risk" },
      { initiative: "ESG Initiative", owner: "CSO", progress: "38%", impact: "Carbon neutral by 2025", status: "On Track" },
      { initiative: "M&A Integration", owner: "CFO", progress: "85%", impact: "₹12Cr synergies", status: "Completed" },
    ],
    searchKey: "initiative",
  },
  insights: [
    { type: "prediction", title: "Revenue Forecast", description: "On track to exceed FY24 target by 8%. Q3 pipeline strong at ₹185Cr.", impact: "high" },
    { type: "trend", title: "Market Position", description: "Gained 2.3% market share this year. Now #2 in industry.", impact: "high" },
    { type: "anomaly", title: "Cost Alert", description: "Operating costs 5% above plan. Marketing spend driving variance.", impact: "medium" },
    { type: "recommendation", title: "Capital Allocation", description: "Strong cash position enables ₹50Cr strategic investment opportunity.", impact: "high" },
  ],
};

// Research & Development Department
export const rdConfig: DepartmentConfig = {
  kpis: [
    { title: "Active Projects", value: "24", change: 4, trend: "up" },
    { title: "R&D Spend", value: "₹18.5Cr", change: 15, trend: "up" },
    { title: "Patents Filed", value: "12", change: 50, trend: "up" },
    { title: "Time to Market", value: "8.2 months", change: -12, trend: "up", target: "<9 months" },
    { title: "Success Rate", value: "68%", change: 8, trend: "up", target: ">65%" },
    { title: "Innovation Index", value: "78/100", change: 6, trend: "up" },
  ],
  charts: [
    {
      title: "Project Pipeline",
      subtitle: "By development stage",
      type: "funnel",
      data: [
        { stage: "Ideation", count: 45 },
        { stage: "Research", count: 28 },
        { stage: "Development", count: 18 },
        { stage: "Testing", count: 12 },
        { stage: "Launch Ready", count: 6 },
      ],
      dataKeys: ["count"],
      xAxisKey: "stage",
    },
    {
      title: "R&D Investment Trend",
      subtitle: "Quarterly spend (₹ Cr)",
      type: "area",
      data: [
        { quarter: "Q1", spend: 14, headcount: 85 },
        { quarter: "Q2", spend: 15.5, headcount: 92 },
        { quarter: "Q3", spend: 17, headcount: 98 },
        { quarter: "Q4", spend: 18.5, headcount: 105 },
      ],
      dataKeys: ["spend"],
      xAxisKey: "quarter",
    },
  ],
  table: {
    title: "Active Research Projects",
    columns: [
      { key: "projectId", label: "Project ID", sortable: true },
      { key: "name", label: "Project Name", sortable: true },
      { key: "stage", label: "Stage" },
      { key: "lead", label: "Lead" },
      { key: "eta", label: "ETA", sortable: true },
    ],
    data: [
      { projectId: "RD-2024-01", name: "Next-Gen Battery Tech", stage: "Development", lead: "Dr. Sharma", eta: "Q3 2024" },
      { projectId: "RD-2024-02", name: "AI-Powered Analytics", stage: "Testing", lead: "Dr. Patel", eta: "Q2 2024" },
      { projectId: "RD-2023-15", name: "Green Manufacturing Process", stage: "Research", lead: "Dr. Gupta", eta: "Q4 2024" },
      { projectId: "RD-2024-03", name: "IoT Sensor Platform", stage: "Development", lead: "Dr. Reddy", eta: "Q3 2024" },
      { projectId: "RD-2024-04", name: "Sustainable Packaging", stage: "Ideation", lead: "Dr. Kumar", eta: "Q1 2025" },
    ],
    searchKey: "name",
  },
  insights: [
    { type: "prediction", title: "Patent Portfolio Growth", description: "On track for 20 patent filings this year. 3 high-value patents in final review.", impact: "high" },
    { type: "trend", title: "Innovation Velocity", description: "Time-to-market reduced by 15% YoY. Agile methodology adoption showing results.", impact: "medium" },
    { type: "recommendation", title: "Resource Allocation", description: "AI projects showing 2x ROI potential. Consider 25% budget reallocation.", impact: "high" },
    { type: "anomaly", title: "Project Delay", description: "Battery Tech project 2 weeks behind. Material supply issue identified.", impact: "medium" },
  ],
};

// Supply Chain Department
export const supplyChainConfig: DepartmentConfig = {
  kpis: [
    { title: "On-Time Delivery", value: "94.5%", change: 2.1, trend: "up", target: ">93%" },
    { title: "Inventory Turnover", value: "8.2x", change: 12, trend: "up", target: ">7x" },
    { title: "Supply Chain Cost", value: "₹24.5Cr", change: -5, trend: "up" },
    { title: "Supplier Lead Time", value: "12 days", change: -15, trend: "up", target: "<14 days" },
    { title: "Stock-out Rate", value: "2.1%", change: -0.8, trend: "up", target: "<3%" },
    { title: "Perfect Order Rate", value: "91%", change: 3, trend: "up", target: ">90%" },
  ],
  charts: [
    {
      title: "Inventory Levels",
      subtitle: "By category (₹ Cr)",
      type: "area",
      data: [
        { month: "Jul", rawMaterial: 18, wip: 8, finished: 12 },
        { month: "Aug", rawMaterial: 20, wip: 9, finished: 14 },
        { month: "Sep", rawMaterial: 17, wip: 7, finished: 11 },
        { month: "Oct", rawMaterial: 19, wip: 8, finished: 13 },
        { month: "Nov", rawMaterial: 16, wip: 7, finished: 10 },
        { month: "Dec", rawMaterial: 18, wip: 8, finished: 12 },
      ],
      dataKeys: ["rawMaterial", "wip", "finished"],
      xAxisKey: "month",
      stacked: true,
    },
    {
      title: "Supplier Performance",
      subtitle: "Delivery & quality scores",
      type: "bar",
      data: [
        { supplier: "Vendor A", delivery: 96, quality: 98 },
        { supplier: "Vendor B", delivery: 92, quality: 95 },
        { supplier: "Vendor C", delivery: 88, quality: 92 },
        { supplier: "Vendor D", delivery: 94, quality: 96 },
        { supplier: "Vendor E", delivery: 90, quality: 94 },
      ],
      dataKeys: ["delivery", "quality"],
      xAxisKey: "supplier",
    },
  ],
  table: {
    title: "Critical Stock Items",
    columns: [
      { key: "sku", label: "SKU", sortable: true },
      { key: "item", label: "Item Name", sortable: true },
      { key: "currentStock", label: "Current Stock", sortable: true },
      { key: "reorderPoint", label: "Reorder Point" },
      { key: "status", label: "Status" },
    ],
    data: [
      { sku: "RM-4521", item: "Steel Sheets 2mm", currentStock: "450 units", reorderPoint: "500 units", status: "Low Stock" },
      { sku: "RM-4522", item: "Copper Wire 1.5mm", currentStock: "280 units", reorderPoint: "300 units", status: "Critical" },
      { sku: "RM-4523", item: "Aluminum Ingots", currentStock: "1200 units", reorderPoint: "800 units", status: "Adequate" },
      { sku: "RM-4524", item: "Electronic Components", currentStock: "520 units", reorderPoint: "400 units", status: "Adequate" },
      { sku: "RM-4525", item: "Packaging Materials", currentStock: "180 units", reorderPoint: "200 units", status: "Low Stock" },
    ],
    searchKey: "item",
  },
  insights: [
    { type: "prediction", title: "Demand Forecast", description: "Q2 demand expected 20% higher. Initiate advance ordering for critical materials.", impact: "high" },
    { type: "anomaly", title: "Supply Risk", description: "Copper wire supplier facing delays. Alternative sourcing recommended.", impact: "high" },
    { type: "recommendation", title: "Inventory Optimization", description: "₹1.8Cr tied in slow-moving inventory. Consider liquidation or transfer.", impact: "medium" },
    { type: "trend", title: "Lead Time Improvement", description: "Average supplier lead time down 18% this quarter due to JIT initiatives.", impact: "medium" },
  ],
};

// Risk Management Department
export const riskConfig: DepartmentConfig = {
  kpis: [
    { title: "Risk Score", value: "Low", change: -15, trend: "up" },
    { title: "Open Risks", value: "34", change: -8, trend: "up" },
    { title: "Mitigation Rate", value: "78%", change: 12, trend: "up", target: ">75%" },
    { title: "Capital at Risk", value: "₹125Cr", change: -10, trend: "up" },
    { title: "Compliance Score", value: "96%", change: 2, trend: "up", target: ">95%" },
    { title: "Audit Findings", value: "5", change: -3, trend: "up" },
  ],
  charts: [
    {
      title: "Risk Distribution",
      subtitle: "By category",
      type: "bar",
      data: [
        { category: "Credit Risk", count: 12, severity: 8 },
        { category: "Market Risk", count: 8, severity: 7 },
        { category: "Operational", count: 15, severity: 5 },
        { category: "Compliance", count: 6, severity: 6 },
        { category: "Strategic", count: 4, severity: 9 },
      ],
      dataKeys: ["count", "severity"],
      xAxisKey: "category",
    },
    {
      title: "Risk Trend",
      subtitle: "Monthly risk score",
      type: "line",
      data: [
        { month: "Jul", score: 72, threshold: 70 },
        { month: "Aug", score: 68, threshold: 70 },
        { month: "Sep", score: 65, threshold: 70 },
        { month: "Oct", score: 62, threshold: 70 },
        { month: "Nov", score: 58, threshold: 70 },
        { month: "Dec", score: 55, threshold: 70 },
      ],
      dataKeys: ["score", "threshold"],
      xAxisKey: "month",
    },
  ],
  table: {
    title: "Top Risks",
    columns: [
      { key: "riskId", label: "Risk ID", sortable: true },
      { key: "description", label: "Description", sortable: true },
      { key: "category", label: "Category" },
      { key: "severity", label: "Severity" },
      { key: "owner", label: "Owner" },
    ],
    data: [
      { riskId: "RSK-001", description: "Interest rate volatility impact", category: "Market", severity: "High", owner: "Treasury" },
      { riskId: "RSK-002", description: "Key vendor concentration", category: "Operational", severity: "Medium", owner: "Procurement" },
      { riskId: "RSK-003", description: "Regulatory changes - DPDP Act", category: "Compliance", severity: "High", owner: "Legal" },
      { riskId: "RSK-004", description: "Cybersecurity threat landscape", category: "Operational", severity: "Critical", owner: "IT" },
      { riskId: "RSK-005", description: "Currency fluctuation exposure", category: "Market", severity: "Medium", owner: "Finance" },
    ],
    searchKey: "description",
  },
  insights: [
    { type: "prediction", title: "Emerging Risk", description: "AI regulation changes in Q2 may impact 3 business lines. Prepare compliance roadmap.", impact: "high" },
    { type: "anomaly", title: "Risk Concentration", description: "45% of credit exposure in single sector. Diversification recommended.", impact: "high" },
    { type: "trend", title: "Risk Reduction", description: "Overall risk score improved 23% YoY. Mitigation programs effective.", impact: "medium" },
    { type: "recommendation", title: "Insurance Review", description: "Current coverage gaps identified. ₹15Cr additional coverage recommended.", impact: "medium" },
  ],
};

// Map to retrieve department configs
export const departmentConfigMap: Record<string, DepartmentConfig> = {
  accounts: accountsFinanceConfig,
  hr: hrDepartmentConfig,
  sales: salesMarketingConfig,
  operations: operationsConfig,
  it: itEngineeringConfig,
  "customer-service": customerServiceConfig,
  procurement: procurementConfig,
  quality: qualityConfig,
  legal: legalComplianceConfig,
  executive: executiveConfig,
  research: rdConfig,
  "supply-chain": supplyChainConfig,
  risk: riskConfig,
};

export function getDepartmentConfig(industryId: string, departmentId: string): DepartmentConfig {
  // First check if there's a generic department config
  const genericConfig = departmentConfigMap[departmentId];
  if (genericConfig) {
    // Generate industry-aware charts (6-8 charts)
    const generatedCharts = generateDepartmentCharts(industryId, departmentId);
    
    // Merge generated charts with existing config
    return {
      ...genericConfig,
      charts: generatedCharts.length > 0 ? generatedCharts : genericConfig.charts,
    };
  }
  
  // Fall back to executive config for any unhandled department
  const fallbackConfig = executiveConfig;
  const generatedCharts = generateDepartmentCharts(industryId, departmentId);
  return {
    ...fallbackConfig,
    charts: generatedCharts.length > 0 ? generatedCharts : fallbackConfig.charts,
  };
}
