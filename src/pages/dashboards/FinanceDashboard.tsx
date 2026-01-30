import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { FilterBar } from "@/components/dashboard/FilterBar";
import { KPICard } from "@/components/dashboard/KPICard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { DataTable } from "@/components/dashboard/DataTable";
import { AIInsightsPanel } from "@/components/dashboard/AIInsightsPanel";
import { GaugeChart } from "@/components/dashboard/GaugeChart";
import { DollarSign, TrendingUp, Wallet, PiggyBank, BarChart3, ArrowUpRight } from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, Legend
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 4200000, profit: 890000 },
  { month: "Feb", revenue: 4500000, profit: 950000 },
  { month: "Mar", revenue: 4800000, profit: 1020000 },
  { month: "Apr", revenue: 5100000, profit: 1100000 },
  { month: "May", revenue: 5400000, profit: 1180000 },
  { month: "Jun", revenue: 5800000, profit: 1260000 },
  { month: "Jul", revenue: 6100000, profit: 1350000 },
  { month: "Aug", revenue: 6400000, profit: 1420000 },
  { month: "Sep", revenue: 6800000, profit: 1510000 },
  { month: "Oct", revenue: 7200000, profit: 1620000 },
  { month: "Nov", revenue: 7600000, profit: 1720000 },
  { month: "Dec", revenue: 8100000, profit: 1840000 },
];

const expenseBreakdown = [
  { name: "Operations", value: 35, color: "hsl(var(--chart-1))" },
  { name: "Marketing", value: 22, color: "hsl(var(--chart-2))" },
  { name: "R&D", value: 18, color: "hsl(var(--chart-3))" },
  { name: "Admin", value: 15, color: "hsl(var(--chart-4))" },
  { name: "Other", value: 10, color: "hsl(var(--chart-5))" },
];

const costCenterData = [
  { name: "Sales", budget: 2400000, actual: 2180000 },
  { name: "Marketing", budget: 1800000, actual: 1920000 },
  { name: "Engineering", budget: 3200000, actual: 2950000 },
  { name: "Operations", budget: 2100000, actual: 2050000 },
  { name: "HR", budget: 800000, actual: 780000 },
];

const transactionData = [
  { id: "TXN-001", date: "2024-01-15", type: "Revenue", category: "Product Sales", amount: "₹1,04,50,000", status: "Completed" },
  { id: "TXN-002", date: "2024-01-15", type: "Expense", category: "Marketing", amount: "₹37,66,000", status: "Completed" },
  { id: "TXN-003", date: "2024-01-14", type: "Revenue", category: "Services", amount: "₹74,66,000", status: "Completed" },
  { id: "TXN-004", date: "2024-01-14", type: "Expense", category: "Operations", amount: "₹27,33,000", status: "Pending" },
  { id: "TXN-005", date: "2024-01-13", type: "Revenue", category: "Licensing", amount: "₹56,25,000", status: "Completed" },
  { id: "TXN-006", date: "2024-01-13", type: "Expense", category: "R&D", amount: "₹48,58,000", status: "Completed" },
  { id: "TXN-007", date: "2024-01-12", type: "Revenue", category: "Subscriptions", amount: "₹1,95,08,000", status: "Completed" },
  { id: "TXN-008", date: "2024-01-12", type: "Expense", category: "Payroll", amount: "₹1,50,42,000", status: "Completed" },
];

const insights = [
  {
    type: "prediction" as const,
    title: "Revenue Forecast",
    description: "Based on current trends, Q1 revenue is projected to exceed target by 12%, reaching ₹204Cr.",
    impact: "high" as const,
  },
  {
    type: "anomaly" as const,
    title: "Marketing Spend Alert",
    description: "Marketing expenses are 6.7% over budget this month. Consider reviewing campaign ROI.",
    impact: "medium" as const,
  },
  {
    type: "recommendation" as const,
    title: "Cost Optimization",
    description: "Engineering has consistent underspend. Reallocating ₹2.08Cr to R&D could accelerate product roadmap.",
    impact: "medium" as const,
  },
  {
    type: "trend" as const,
    title: "Profit Margin Improvement",
    description: "Net profit margin has improved by 2.3% over the last quarter due to operational efficiencies.",
    impact: "high" as const,
  },
];

const formatCurrency = (value: number) => {
  if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
  if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
  if (value >= 1000) return `₹${(value / 1000).toFixed(0)}K`;
  return `₹${value}`;
};

export default function FinanceDashboard() {
  return (
    <DashboardLayout>
      <FilterBar 
        title="Finance Dashboard" 
        subtitle="Financial performance and cost center analysis"
      />

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        <KPICard
          title="Total Revenue"
          value="₹67.5Cr"
          change={12.5}
          trend="up"
          target="₹62.5Cr"
          icon={<DollarSign className="w-4 h-4" />}
        />
        <KPICard
          title="Net Profit"
          value="₹15.3Cr"
          change={8.2}
          trend="up"
          target="₹14.2Cr"
          icon={<TrendingUp className="w-4 h-4" />}
        />
        <KPICard
          title="Operating Costs"
          value="₹35Cr"
          change={-3.1}
          trend="down"
          icon={<Wallet className="w-4 h-4" />}
        />
        <KPICard
          title="Cash Flow"
          value="₹20Cr"
          change={15.3}
          trend="up"
          icon={<PiggyBank className="w-4 h-4" />}
        />
        <KPICard
          title="ROI"
          value="22.7%"
          change={4.8}
          trend="up"
          target="20%"
          icon={<BarChart3 className="w-4 h-4" />}
        />
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <ChartCard title="Revenue & Profit Trend" subtitle="Monthly performance" className="lg:col-span-2">
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-4))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--chart-4))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={formatCurrency} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
                formatter={(value: number) => [formatCurrency(value), ""]}
              />
              <Area type="monotone" dataKey="revenue" stroke="hsl(var(--chart-1))" fill="url(#colorRevenue)" strokeWidth={2} name="Revenue" />
              <Area type="monotone" dataKey="profit" stroke="hsl(var(--chart-4))" fill="url(#colorProfit)" strokeWidth={2} name="Profit" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Expense Breakdown" subtitle="By category">
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={expenseBreakdown}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {expenseBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
                formatter={(value: number) => [`${value}%`, ""]}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-3 mt-2 justify-center">
            {expenseBreakdown.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-xs text-muted-foreground">{item.name}</span>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <ChartCard title="Cost Center Analysis" subtitle="Budget vs Actual" className="lg:col-span-2">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={costCenterData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={formatCurrency} />
              <YAxis type="category" dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} width={80} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
                formatter={(value: number) => [formatCurrency(value), ""]}
              />
              <Legend />
              <Bar dataKey="budget" fill="hsl(var(--chart-2))" name="Budget" radius={[0, 4, 4, 0]} />
              <Bar dataKey="actual" fill="hsl(var(--chart-1))" name="Actual" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <div className="glass-card p-5 flex flex-col items-center justify-center">
          <h3 className="text-sm font-medium text-foreground mb-6">Financial Health Score</h3>
          <GaugeChart value={87} label="Overall Health" size="lg" />
          <div className="grid grid-cols-2 gap-4 mt-6 w-full">
            <div className="text-center">
              <div className="text-lg font-semibold text-success">22.7%</div>
              <div className="text-xs text-muted-foreground">Profit Margin</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-primary">1.8x</div>
              <div className="text-xs text-muted-foreground">Current Ratio</div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights & Table */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <AIInsightsPanel insights={insights} className="lg:col-span-1" />
        
        <DataTable
          title="Recent Transactions"
          columns={[
            { key: "id", label: "ID", sortable: true },
            { key: "date", label: "Date", sortable: true },
            { key: "type", label: "Type", render: (v) => (
              <span className={v === "Revenue" ? "text-success" : "text-warning"}>{v as string}</span>
            )},
            { key: "category", label: "Category" },
            { key: "amount", label: "Amount", sortable: true },
            { key: "status", label: "Status", render: (v) => (
              <span className={`px-2 py-0.5 rounded-full text-xs ${v === "Completed" ? "bg-success/20 text-success" : "bg-warning/20 text-warning"}`}>
                {v as string}
              </span>
            )},
          ]}
          data={transactionData}
          searchKey="category"
          className="lg:col-span-2"
        />
      </div>
    </DashboardLayout>
  );
}
