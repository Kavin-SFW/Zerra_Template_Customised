/**
 * Sales Dashboard
 * 
 * Comprehensive sales dashboard with multiple KPIs and various chart types
 * Power BI-style layout with professional design
 */

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { FilterBar } from "@/components/dashboard/FilterBar";
import { KPICard } from "@/components/dashboard/KPICard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { GaugeChart } from "@/components/dashboard/GaugeChart";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ComposedChart, RadialBarChart, RadialBar, FunnelChart, Funnel, LabelList
} from "recharts";
import { TrendingUp, DollarSign, Users, Target, ShoppingCart, Percent } from "lucide-react";

// Mock Data - Sales KPIs
const salesKPIs = [
  {
    title: "Total Revenue",
    value: "$2.48M",
    change: 18.5,
    trend: "up" as const,
    target: "$2.5M",
    changeLabel: "vs last month"
  },
  {
    title: "New Deals",
    value: "142",
    change: 12.3,
    trend: "up" as const,
    target: "150",
    changeLabel: "vs last month"
  },
  {
    title: "Conversion Rate",
    value: "24.8%",
    change: 3.2,
    trend: "up" as const,
    target: "25%",
    changeLabel: "vs last month"
  },
  {
    title: "Average Deal Size",
    value: "$17.5K",
    change: 5.8,
    trend: "up" as const,
    target: "$18K",
    changeLabel: "vs last month"
  },
  {
    title: "Sales Cycle",
    value: "32 days",
    change: -8.5,
    trend: "down" as const,
    target: "30 days",
    changeLabel: "vs last month"
  },
  {
    title: "Win Rate",
    value: "68.5%",
    change: 4.2,
    trend: "up" as const,
    target: "70%",
    changeLabel: "vs last month"
  },
  {
    title: "Pipeline Value",
    value: "$8.2M",
    change: 15.3,
    trend: "up" as const,
    target: "$8.5M",
    changeLabel: "vs last month"
  },
  {
    title: "Quota Attainment",
    value: "98.5%",
    change: 2.8,
    trend: "up" as const,
    target: "100%",
    changeLabel: "vs last month"
  }
];

// Monthly Revenue Trend
const monthlyRevenueData = [
  { month: "Jan", revenue: 1850000, target: 2000000, profit: 450000 },
  { month: "Feb", revenue: 2100000, target: 2000000, profit: 520000 },
  { month: "Mar", revenue: 1950000, target: 2000000, profit: 480000 },
  { month: "Apr", revenue: 2250000, target: 2200000, profit: 560000 },
  { month: "May", revenue: 2400000, target: 2300000, profit: 600000 },
  { month: "Jun", revenue: 2480000, target: 2500000, profit: 620000 },
];

// Sales by Region
const salesByRegionData = [
  { region: "North", sales: 850000, target: 800000, growth: 12.5 },
  { region: "South", sales: 720000, target: 700000, growth: 8.3 },
  { region: "East", sales: 580000, target: 600000, growth: 15.2 },
  { region: "West", sales: 330000, target: 350000, growth: 5.8 },
];

// Sales Funnel
const salesFunnelData = [
  { name: "Leads", value: 5000, fill: "#8884d8" },
  { name: "Qualified", value: 3200, fill: "#83a6ed" },
  { name: "Proposals", value: 1800, fill: "#8dd1e1" },
  { name: "Negotiation", value: 950, fill: "#82ca9d" },
  { name: "Closed Won", value: 680, fill: "#a4de6c" },
];

// Product Performance
const productPerformanceData = [
  { product: "Product A", revenue: 850000, units: 1250, margin: 32.5 },
  { product: "Product B", revenue: 720000, units: 980, margin: 28.8 },
  { product: "Product C", revenue: 580000, units: 750, margin: 35.2 },
  { product: "Product D", revenue: 330000, units: 420, margin: 30.5 },
];

// Sales Rep Performance
const salesRepData = [
  { rep: "John Smith", sales: 420000, quota: 400000, deals: 28 },
  { rep: "Sarah Johnson", sales: 385000, quota: 400000, deals: 25 },
  { rep: "Mike Davis", sales: 360000, quota: 350000, deals: 22 },
  { rep: "Emily Brown", sales: 340000, quota: 350000, deals: 20 },
  { rep: "David Wilson", sales: 320000, quota: 300000, deals: 18 },
  { rep: "Lisa Anderson", sales: 280000, quota: 300000, deals: 16 },
];

// Conversion Rate Trend
const conversionRateData = [
  { week: "W1", rate: 22.5, target: 25 },
  { week: "W2", rate: 23.8, target: 25 },
  { week: "W3", rate: 24.2, target: 25 },
  { week: "W4", rate: 24.8, target: 25 },
  { week: "W5", rate: 25.1, target: 25 },
  { week: "W6", rate: 24.9, target: 25 },
];

// Deal Size Distribution
const dealSizeData = [
  { range: "$0-10K", count: 45, value: 315000 },
  { range: "$10-25K", count: 68, value: 1190000 },
  { range: "$25-50K", count: 22, value: 825000 },
  { range: "$50-100K", count: 5, value: 375000 },
  { range: "$100K+", count: 2, value: 250000 },
];

// Sales Cycle Analysis
const salesCycleData = [
  { stage: "Discovery", avgDays: 5, deals: 1800 },
  { stage: "Qualification", avgDays: 8, deals: 1200 },
  { stage: "Proposal", avgDays: 12, deals: 950 },
  { stage: "Negotiation", avgDays: 5, deals: 680 },
  { stage: "Closed", avgDays: 2, deals: 680 },
];

// Customer Acquisition Cost
const cacData = [
  { month: "Jan", cac: 450, ltv: 8500, ratio: 18.9 },
  { month: "Feb", cac: 420, ltv: 8800, ratio: 21.0 },
  { month: "Mar", cac: 480, ltv: 9200, ratio: 19.2 },
  { month: "Apr", cac: 440, ltv: 9500, ratio: 21.6 },
  { month: "May", cac: 410, ltv: 9800, ratio: 23.9 },
  { month: "Jun", cac: 395, ltv: 10000, ratio: 25.3 },
];

// Win/Loss Analysis
const winLossData = [
  { reason: "Price", won: 45, lost: 28 },
  { reason: "Features", won: 38, lost: 32 },
  { reason: "Timing", won: 52, lost: 18 },
  { reason: "Competitor", won: 28, lost: 42 },
  { reason: "Budget", won: 35, lost: 25 },
];

// Monthly Pipeline Trend
const pipelineData = [
  { month: "Jan", pipeline: 7200000, closed: 1850000 },
  { month: "Feb", pipeline: 7500000, closed: 2100000 },
  { month: "Mar", pipeline: 7800000, closed: 1950000 },
  { month: "Apr", pipeline: 8000000, closed: 2250000 },
  { month: "May", pipeline: 8200000, closed: 2400000 },
  { month: "Jun", pipeline: 8200000, closed: 2480000 },
];

// Product Mix Pie Chart
const productMixData = [
  { name: "Product A", value: 850000, percentage: 34.3 },
  { name: "Product B", value: 720000, percentage: 29.0 },
  { name: "Product C", value: 580000, percentage: 23.4 },
  { name: "Product D", value: 330000, percentage: 13.3 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d"];

export default function SalesDashboard() {
  return (
    <DashboardLayout>
      <FilterBar 
        title="Sales Dashboard"
        subtitle="Comprehensive sales performance metrics and analytics"
      />

      {/* KPI Cards - Power BI Style Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-6">
        {salesKPIs.map((kpi, index) => (
          <KPICard
            key={index}
            title={kpi.title}
            value={kpi.value}
            change={kpi.change}
            trend={kpi.trend}
            target={kpi.target}
            changeLabel={kpi.changeLabel}
          />
        ))}
      </div>

      {/* Row 1: Revenue Trend & Sales by Region */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Monthly Revenue Trend - Large Chart */}
        <ChartCard 
          title="Monthly Revenue Trend" 
          subtitle="Revenue vs Target vs Profit"
          className="lg:col-span-2"
        >
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={monthlyRevenueData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0088FE" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#0088FE" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--popover))", 
                  border: "1px solid hsl(var(--border))", 
                  borderRadius: "8px" 
                }} 
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                fill="url(#colorRevenue)" 
                stroke="#0088FE" 
                strokeWidth={2}
                name="Revenue"
              />
              <Line 
                type="monotone" 
                dataKey="target" 
                stroke="#FF8042" 
                strokeWidth={2} 
                strokeDasharray="5 5"
                dot={{ r: 4 }}
                name="Target"
              />
              <Bar dataKey="profit" fill="#00C49F" name="Profit" radius={[4, 4, 0, 0]} />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Sales by Region */}
        <ChartCard title="Sales by Region" subtitle="Performance by geographic area">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={salesByRegionData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis dataKey="region" type="category" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--popover))", 
                  border: "1px solid hsl(var(--border))", 
                  borderRadius: "8px" 
                }} 
              />
              <Legend />
              <Bar dataKey="sales" fill="#0088FE" radius={[0, 4, 4, 0]} name="Sales" />
              <Bar dataKey="target" fill="#FF8042" radius={[0, 4, 4, 0]} name="Target" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Row 2: Sales Funnel & Product Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Sales Funnel */}
        <ChartCard title="Sales Funnel" subtitle="Deal progression through stages">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={salesFunnelData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis dataKey="name" type="category" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--popover))", 
                  border: "1px solid hsl(var(--border))", 
                  borderRadius: "8px" 
                }} 
              />
              <Bar dataKey="value" fill="#8884d8" radius={[0, 4, 4, 0]}>
                {salesFunnelData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Product Performance */}
        <ChartCard title="Product Performance" subtitle="Revenue by product" className="lg:col-span-2">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={productPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="product" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--popover))", 
                  border: "1px solid hsl(var(--border))", 
                  borderRadius: "8px" 
                }} 
              />
              <Legend />
              <Bar yAxisId="left" dataKey="revenue" fill="#0088FE" radius={[4, 4, 0, 0]} name="Revenue ($)" />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="margin" 
                stroke="#FF8042" 
                strokeWidth={2}
                dot={{ r: 4 }}
                name="Margin (%)"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Row 3: Sales Rep Performance & Conversion Rate */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* Sales Rep Performance */}
        <ChartCard title="Sales Rep Performance" subtitle="Top performers vs quota">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={salesRepData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="rep" stroke="hsl(var(--muted-foreground))" fontSize={11} angle={-45} textAnchor="end" height={80} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--popover))", 
                  border: "1px solid hsl(var(--border))", 
                  borderRadius: "8px" 
                }} 
              />
              <Legend />
              <Bar dataKey="sales" fill="#00C49F" radius={[4, 4, 0, 0]} name="Sales" />
              <Bar dataKey="quota" fill="#FFBB28" radius={[4, 4, 0, 0]} name="Quota" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Conversion Rate Trend */}
        <ChartCard title="Conversion Rate Trend" subtitle="Weekly conversion rate vs target">
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={conversionRateData}>
              <defs>
                <linearGradient id="colorConversion" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00C49F" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#00C49F" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--popover))", 
                  border: "1px solid hsl(var(--border))", 
                  borderRadius: "8px" 
                }} 
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="rate" 
                fill="url(#colorConversion)" 
                stroke="#00C49F" 
                strokeWidth={2}
                name="Conversion Rate (%)"
              />
              <Line 
                type="monotone" 
                dataKey="target" 
                stroke="#FF8042" 
                strokeWidth={2} 
                strokeDasharray="5 5"
                dot={{ r: 4 }}
                name="Target (%)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Row 4: Deal Size Distribution & Sales Cycle */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* Deal Size Distribution */}
        <ChartCard title="Deal Size Distribution" subtitle="Number of deals by size range">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={dealSizeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="range" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--popover))", 
                  border: "1px solid hsl(var(--border))", 
                  borderRadius: "8px" 
                }} 
              />
              <Legend />
              <Bar yAxisId="left" dataKey="count" fill="#8884d8" radius={[4, 4, 0, 0]} name="Deal Count" />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="value" 
                stroke="#FF8042" 
                strokeWidth={2}
                dot={{ r: 4 }}
                name="Total Value ($)"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Sales Cycle Analysis */}
        <ChartCard title="Sales Cycle Analysis" subtitle="Average days and deals by stage">
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={salesCycleData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="stage" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--popover))", 
                  border: "1px solid hsl(var(--border))", 
                  borderRadius: "8px" 
                }} 
              />
              <Legend />
              <Bar yAxisId="left" dataKey="avgDays" fill="#0088FE" radius={[4, 4, 0, 0]} name="Avg Days" />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="deals" 
                stroke="#00C49F" 
                strokeWidth={2}
                dot={{ r: 4 }}
                name="Deals"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Row 5: CAC Analysis & Pipeline Trend */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* Customer Acquisition Cost */}
        <ChartCard title="Customer Acquisition Cost (CAC)" subtitle="CAC, LTV, and Ratio trends">
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={cacData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--popover))", 
                  border: "1px solid hsl(var(--border))", 
                  borderRadius: "8px" 
                }} 
              />
              <Legend />
              <Bar yAxisId="left" dataKey="cac" fill="#FF8042" radius={[4, 4, 0, 0]} name="CAC ($)" />
              <Bar yAxisId="left" dataKey="ltv" fill="#00C49F" radius={[4, 4, 0, 0]} name="LTV ($)" />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="ratio" 
                stroke="#0088FE" 
                strokeWidth={2}
                dot={{ r: 4 }}
                name="LTV:CAC Ratio"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Pipeline Trend */}
        <ChartCard title="Pipeline Trend" subtitle="Monthly pipeline vs closed deals">
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={pipelineData}>
              <defs>
                <linearGradient id="colorPipeline" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorClosed" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00C49F" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#00C49F" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--popover))", 
                  border: "1px solid hsl(var(--border))", 
                  borderRadius: "8px" 
                }} 
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="pipeline" 
                fill="url(#colorPipeline)" 
                stroke="#8884d8" 
                strokeWidth={2}
                name="Pipeline ($)"
              />
              <Area 
                type="monotone" 
                dataKey="closed" 
                fill="url(#colorClosed)" 
                stroke="#00C49F" 
                strokeWidth={2}
                name="Closed ($)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Row 6: Win/Loss Analysis & Product Mix */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* Win/Loss Analysis */}
        <ChartCard title="Win/Loss Analysis" subtitle="Deals won vs lost by reason">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={winLossData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="reason" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--popover))", 
                  border: "1px solid hsl(var(--border))", 
                  borderRadius: "8px" 
                }} 
              />
              <Legend />
              <Bar dataKey="won" stackId="a" fill="#00C49F" radius={[4, 0, 0, 4]} name="Won" />
              <Bar dataKey="lost" stackId="a" fill="#FF8042" radius={[0, 4, 4, 0]} name="Lost" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Product Mix Pie Chart */}
        <ChartCard title="Product Mix" subtitle="Revenue distribution by product">
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={productMixData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percentage }) => `${name}: ${percentage}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {productMixData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--popover))", 
                  border: "1px solid hsl(var(--border))", 
                  borderRadius: "8px" 
                }} 
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </DashboardLayout>
  );
}
