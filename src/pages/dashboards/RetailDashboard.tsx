import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { FilterBar } from "@/components/dashboard/FilterBar";
import { KPICard } from "@/components/dashboard/KPICard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { DataTable } from "@/components/dashboard/DataTable";
import { AIInsightsPanel } from "@/components/dashboard/AIInsightsPanel";
import { Store, TrendingUp, Package, ShoppingCart, BarChart3, AlertTriangle } from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, Legend
} from "recharts";

const salesData = [
  { month: "Jan", sales: 245, target: 230, growth: 6.5 },
  { month: "Feb", sales: 268, target: 250, growth: 7.2 },
  { month: "Mar", sales: 295, target: 280, growth: 5.4 },
  { month: "Apr", sales: 312, target: 300, growth: 4.0 },
  { month: "May", sales: 345, target: 320, growth: 7.8 },
  { month: "Jun", sales: 378, target: 350, growth: 8.0 },
];

const storePerformance = [
  { store: "Mumbai Central", sales: 45.2, target: 42, footfall: 12500, conversion: 4.2 },
  { store: "Delhi CP", sales: 38.5, target: 40, footfall: 11200, conversion: 3.8 },
  { store: "Bangalore MG Road", sales: 42.8, target: 38, footfall: 10800, conversion: 4.5 },
  { store: "Chennai Phoenix", sales: 35.2, target: 35, footfall: 9500, conversion: 3.9 },
  { store: "Hyderabad Banjara", sales: 32.1, target: 32, footfall: 8900, conversion: 4.0 },
  { store: "Pune FC Road", sales: 28.5, target: 30, footfall: 7800, conversion: 3.6 },
];

const categoryData = [
  { category: "Apparel", sales: 125, growth: 12, color: "hsl(var(--chart-1))" },
  { category: "Electronics", sales: 98, growth: 8, color: "hsl(var(--chart-2))" },
  { category: "Home & Living", sales: 72, growth: 15, color: "hsl(var(--chart-3))" },
  { category: "Beauty", sales: 45, growth: 22, color: "hsl(var(--chart-4))" },
  { category: "Food & Grocery", sales: 38, growth: 5, color: "hsl(var(--chart-5))" },
];

const inventoryAlerts = [
  { sku: "SKU-45678", product: "Nike Air Max", store: "Mumbai Central", stock: 5, status: "Critical" },
  { sku: "SKU-45679", product: "Levi's 501", store: "Delhi CP", stock: 12, status: "Low" },
  { sku: "SKU-45680", product: "Samsung TV 55\"", store: "Bangalore MG Road", stock: 3, status: "Critical" },
  { sku: "SKU-45681", product: "Apple Watch SE", store: "Chennai Phoenix", stock: 8, status: "Low" },
  { sku: "SKU-45682", product: "Dyson V12", store: "Hyderabad Banjara", stock: 2, status: "Critical" },
];

const insights = [
  {
    type: "prediction" as const,
    title: "Weekend Sales Forecast",
    description: "Expected 28% surge in footfall this weekend. Recommend additional staff at Mumbai and Bangalore stores.",
    impact: "high" as const,
  },
  {
    type: "anomaly" as const,
    title: "Stock-out Alert",
    description: "5 high-demand SKUs at critical levels across stores. Potential ₹12L revenue at risk.",
    impact: "high" as const,
  },
  {
    type: "recommendation" as const,
    title: "Category Optimization",
    description: "Beauty category showing 22% growth. Consider expanding shelf space by 15% in top stores.",
    impact: "medium" as const,
  },
  {
    type: "trend" as const,
    title: "Conversion Improvement",
    description: "Store-wide conversion rate improved to 4.0% from 3.6% after new display implementation.",
    impact: "medium" as const,
  },
];

export default function RetailDashboard() {
  return (
    <DashboardLayout>
      <FilterBar 
        title="Retail Dashboard" 
        subtitle="Store performance and inventory analytics"
      />

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
        <KPICard
          title="Total Sales"
          value="₹378Cr"
          change={8.0}
          trend="up"
          target="₹350Cr"
          icon={<TrendingUp className="w-4 h-4" />}
        />
        <KPICard
          title="Same Store Growth"
          value="6.8%"
          change={1.2}
          trend="up"
          target=">5%"
          icon={<Store className="w-4 h-4" />}
        />
        <KPICard
          title="Inventory Turnover"
          value="8.2x"
          change={0.5}
          trend="up"
          target=">7x"
          icon={<Package className="w-4 h-4" />}
        />
        <KPICard
          title="Stock-out Rate"
          value="2.8%"
          change={-0.6}
          trend="up"
          target="<3%"
          icon={<AlertTriangle className="w-4 h-4" />}
        />
        <KPICard
          title="Avg Basket Size"
          value="₹2,450"
          change={5.2}
          trend="up"
          icon={<ShoppingCart className="w-4 h-4" />}
        />
        <KPICard
          title="Conversion Rate"
          value="4.0%"
          change={0.4}
          trend="up"
          target=">3.5%"
          icon={<BarChart3 className="w-4 h-4" />}
        />
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <ChartCard title="Sales vs Target" subtitle="Monthly performance (₹ Crores)" className="lg:col-span-2">
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={salesData}>
              <defs>
                <linearGradient id="colorRetailSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(v) => `₹${v}Cr`} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
                formatter={(value: number) => [`₹${value}Cr`, ""]}
              />
              <Legend />
              <Area type="monotone" dataKey="sales" stroke="hsl(var(--chart-1))" fill="url(#colorRetailSales)" strokeWidth={2} name="Actual Sales" />
              <Area type="monotone" dataKey="target" stroke="hsl(var(--muted))" fill="transparent" strokeWidth={2} strokeDasharray="5 5" name="Target" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Category Performance" subtitle="Sales by category (₹ Crores)">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={categoryData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis type="category" dataKey="category" stroke="hsl(var(--muted-foreground))" fontSize={11} width={90} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
                formatter={(value: number) => [`₹${value}Cr`, "Sales"]}
              />
              <Bar dataKey="sales" radius={[0, 4, 4, 0]}>
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Store Performance & Inventory */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <DataTable
          title="Store Performance"
          columns={[
            { key: "store", label: "Store", sortable: true },
            { key: "sales", label: "Sales (₹Cr)", sortable: true, render: (v) => `₹${v}Cr` },
            { key: "footfall", label: "Footfall", render: (v) => (v as number).toLocaleString() },
            { key: "conversion", label: "Conv %", render: (v) => (
              <span className={(v as number) >= 4 ? "text-success" : "text-warning"}>{v}%</span>
            )},
          ]}
          data={storePerformance}
          searchKey="store"
          pageSize={4}
        />

        <DataTable
          title="Inventory Alerts"
          columns={[
            { key: "product", label: "Product" },
            { key: "store", label: "Store" },
            { key: "stock", label: "Stock", sortable: true },
            { key: "status", label: "Status", render: (v) => (
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                v === "Critical" ? "bg-destructive/20 text-destructive" : "bg-warning/20 text-warning"
              }`}>
                {v as string}
              </span>
            )},
          ]}
          data={inventoryAlerts}
          searchKey="product"
          pageSize={4}
        />
      </div>

      {/* AI Insights */}
      <AIInsightsPanel insights={insights} />
    </DashboardLayout>
  );
}