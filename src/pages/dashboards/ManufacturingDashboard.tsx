/**
 * Manufacturing Dashboard
 * 
 * Comprehensive manufacturing dashboard with multiple KPIs and various chart types
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
  ComposedChart, RadialBarChart, RadialBar, ScatterChart, Scatter
} from "recharts";
import { Factory, TrendingUp, AlertTriangle, CheckCircle, Clock, Target } from "lucide-react";

// Mock Data - Manufacturing KPIs
const manufacturingKPIs = [
  {
    title: "OEE (Overall Equipment Effectiveness)",
    value: "87.5%",
    change: 3.2,
    trend: "up" as const,
    target: "90%",
    changeLabel: "vs last month"
  },
  {
    title: "Production Output",
    value: "12,450",
    change: 8.5,
    trend: "up" as const,
    target: "12,000",
    changeLabel: "units this month"
  },
  {
    title: "Defect Rate",
    value: "0.85%",
    change: -15.5,
    trend: "down" as const,
    target: "1.0%",
    changeLabel: "vs last month"
  },
  {
    title: "Machine Utilization",
    value: "92.3%",
    change: 2.8,
    trend: "up" as const,
    target: "95%",
    changeLabel: "vs last month"
  },
  {
    title: "On-Time Delivery",
    value: "96.8%",
    change: 1.5,
    trend: "up" as const,
    target: "98%",
    changeLabel: "vs last month"
  },
  {
    title: "Cycle Time",
    value: "4.2 hrs",
    change: -8.3,
    trend: "down" as const,
    target: "4.0 hrs",
    changeLabel: "vs last month"
  },
  {
    title: "First Pass Yield",
    value: "94.5%",
    change: 2.1,
    trend: "up" as const,
    target: "95%",
    changeLabel: "vs last month"
  },
  {
    title: "Safety Incidents",
    value: "2",
    change: -33.3,
    trend: "down" as const,
    target: "0",
    changeLabel: "this month"
  },
  {
    title: "Energy Efficiency",
    value: "88.2%",
    change: 4.5,
    trend: "up" as const,
    target: "90%",
    changeLabel: "vs last month"
  },
  {
    title: "Cost per Unit",
    value: "$125",
    change: -5.2,
    trend: "down" as const,
    target: "$120",
    changeLabel: "vs last month"
  }
];

// Production Output Trend
const productionOutputData = [
  { month: "Jan", output: 10500, target: 11000, efficiency: 82.5 },
  { month: "Feb", output: 11200, target: 11000, efficiency: 85.2 },
  { month: "Mar", output: 10800, target: 11000, efficiency: 83.8 },
  { month: "Apr", output: 11500, target: 11500, efficiency: 87.5 },
  { month: "May", output: 12000, target: 12000, efficiency: 89.2 },
  { month: "Jun", output: 12450, target: 12000, efficiency: 87.5 },
];

// OEE by Production Line
const oeeByLineData = [
  { line: "Line A", oee: 92.5, availability: 95.2, performance: 96.8, quality: 98.5 },
  { line: "Line B", oee: 88.3, availability: 92.1, performance: 94.5, quality: 97.2 },
  { line: "Line C", oee: 85.8, availability: 90.5, performance: 93.2, quality: 96.5 },
  { line: "Line D", oee: 90.2, availability: 94.8, performance: 95.5, quality: 98.0 },
];

// Defect Analysis
const defectAnalysisData = [
  { category: "Dimensional", count: 45, cost: 12500, severity: "High" },
  { category: "Surface Finish", count: 32, cost: 8500, severity: "Medium" },
  { category: "Assembly", count: 28, cost: 10200, severity: "High" },
  { category: "Material", count: 15, cost: 4500, severity: "Low" },
  { category: "Packaging", count: 12, cost: 2800, severity: "Low" },
];

// Machine Utilization by Type
const machineUtilizationData = [
  { machine: "CNC Machines", utilization: 94.5, downtime: 2.1, maintenance: 3.4 },
  { machine: "Assembly Lines", utilization: 91.2, downtime: 3.5, maintenance: 5.3 },
  { machine: "Packaging", utilization: 88.8, downtime: 4.2, maintenance: 7.0 },
  { machine: "Quality Control", utilization: 85.5, downtime: 5.8, maintenance: 8.7 },
];

// Production Schedule Adherence
const scheduleAdherenceData = [
  { week: "W1", planned: 3000, actual: 2950, adherence: 98.3 },
  { week: "W2", planned: 3000, actual: 3020, adherence: 100.7 },
  { week: "W3", planned: 3000, actual: 2980, adherence: 99.3 },
  { week: "W4", planned: 3000, actual: 3050, adherence: 101.7 },
  { week: "W5", planned: 3000, actual: 3000, adherence: 100.0 },
  { week: "W6", planned: 3000, actual: 3100, adherence: 103.3 },
];

// Material Consumption
const materialConsumptionData = [
  { material: "Steel", consumed: 1250, budget: 1300, waste: 2.5 },
  { material: "Aluminum", consumed: 850, budget: 900, waste: 1.8 },
  { material: "Plastic", consumed: 650, budget: 700, waste: 3.2 },
  { material: "Electronics", consumed: 320, budget: 350, waste: 1.5 },
];

// Quality Metrics Trend
const qualityMetricsData = [
  { month: "Jan", fpy: 91.5, defectRate: 1.2, rework: 3.5 },
  { month: "Feb", fpy: 92.2, defectRate: 1.1, rework: 3.2 },
  { month: "Mar", fpy: 93.0, defectRate: 1.0, rework: 2.9 },
  { month: "Apr", fpy: 93.5, defectRate: 0.95, rework: 2.6 },
  { month: "May", fpy: 94.0, defectRate: 0.90, rework: 2.4 },
  { month: "Jun", fpy: 94.5, defectRate: 0.85, rework: 2.2 },
];

// Downtime Analysis
const downtimeData = [
  { reason: "Planned Maintenance", hours: 45, percentage: 35.2 },
  { reason: "Unplanned Breakdown", hours: 28, percentage: 21.9 },
  { reason: "Material Shortage", hours: 22, percentage: 17.2 },
  { reason: "Quality Issues", hours: 18, percentage: 14.1 },
  { reason: "Changeover", hours: 15, percentage: 11.7 },
];

// Energy Consumption
const energyConsumptionData = [
  { month: "Jan", consumption: 125000, cost: 12500, efficiency: 82.5 },
  { month: "Feb", consumption: 122000, cost: 12200, efficiency: 84.2 },
  { month: "Mar", consumption: 120000, cost: 12000, efficiency: 85.8 },
  { month: "Apr", consumption: 118000, cost: 11800, efficiency: 86.5 },
  { month: "May", consumption: 115000, cost: 11500, efficiency: 87.8 },
  { month: "Jun", consumption: 112000, cost: 11200, efficiency: 88.2 },
];

// Work-in-Progress (WIP)
const wipData = [
  { stage: "Raw Material", units: 2500, value: 312500 },
  { stage: "Machining", units: 1800, value: 225000 },
  { stage: "Assembly", units: 1200, value: 150000 },
  { stage: "Quality Check", units: 800, value: 100000 },
  { stage: "Packaging", units: 500, value: 62500 },
];

// Safety Metrics
const safetyMetricsData = [
  { month: "Jan", incidents: 4, nearMisses: 12, training: 45 },
  { month: "Feb", incidents: 3, nearMisses: 10, training: 48 },
  { month: "Mar", incidents: 3, nearMisses: 8, training: 50 },
  { month: "Apr", incidents: 2, nearMisses: 7, training: 52 },
  { month: "May", incidents: 2, nearMisses: 6, training: 55 },
  { month: "Jun", incidents: 2, nearMisses: 5, training: 58 },
];

// Cost Breakdown
const costBreakdownData = [
  { category: "Labor", value: 45, amount: 562500 },
  { category: "Materials", value: 30, amount: 375000 },
  { category: "Overhead", value: 15, amount: 187500 },
  { category: "Energy", value: 6, amount: 75000 },
  { category: "Maintenance", value: 4, amount: 50000 },
];

// Production Efficiency by Shift
const shiftEfficiencyData = [
  { shift: "Morning", output: 4200, efficiency: 92.5, quality: 95.2 },
  { shift: "Afternoon", output: 4100, efficiency: 90.8, quality: 94.5 },
  { shift: "Night", output: 4150, efficiency: 91.5, quality: 94.0 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d"];

export default function ManufacturingDashboard() {
  return (
    <DashboardLayout>
      <FilterBar 
        title="Manufacturing Dashboard"
        subtitle="Comprehensive manufacturing performance metrics and analytics"
      />

      {/* KPI Cards - Power BI Style Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 mb-6">
        {manufacturingKPIs.map((kpi, index) => (
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

      {/* Row 1: Production Output & OEE by Line */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Production Output Trend - Large Chart */}
        <ChartCard 
          title="Production Output Trend" 
          subtitle="Monthly output vs target vs efficiency"
          className="lg:col-span-2"
        >
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={productionOutputData}>
              <defs>
                <linearGradient id="colorOutput" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0088FE" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#0088FE" stopOpacity={0}/>
                </linearGradient>
              </defs>
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
              <Area 
                yAxisId="left"
                type="monotone" 
                dataKey="output" 
                fill="url(#colorOutput)" 
                stroke="#0088FE" 
                strokeWidth={2}
                name="Output (units)"
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="target" 
                stroke="#FF8042" 
                strokeWidth={2} 
                strokeDasharray="5 5"
                dot={{ r: 4 }}
                name="Target (units)"
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="efficiency" 
                stroke="#00C49F" 
                strokeWidth={2}
                dot={{ r: 4 }}
                name="Efficiency (%)"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* OEE by Production Line */}
        <ChartCard title="OEE by Production Line" subtitle="Overall Equipment Effectiveness">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={oeeByLineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="line" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--popover))", 
                  border: "1px solid hsl(var(--border))", 
                  borderRadius: "8px" 
                }} 
              />
              <Legend />
              <Bar dataKey="oee" fill="#0088FE" radius={[4, 4, 0, 0]} name="OEE (%)" />
              <Bar dataKey="availability" fill="#00C49F" radius={[4, 4, 0, 0]} name="Availability (%)" />
              <Bar dataKey="performance" fill="#FFBB28" radius={[4, 4, 0, 0]} name="Performance (%)" />
              <Bar dataKey="quality" fill="#FF8042" radius={[4, 4, 0, 0]} name="Quality (%)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Row 2: Defect Analysis & Machine Utilization */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Defect Analysis */}
        <ChartCard title="Defect Analysis" subtitle="Defects by category and cost impact" className="lg:col-span-2">
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={defectAnalysisData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" fontSize={12} angle={-45} textAnchor="end" height={80} />
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
              <Bar yAxisId="left" dataKey="count" fill="#FF8042" radius={[4, 4, 0, 0]} name="Defect Count" />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="cost" 
                stroke="#0088FE" 
                strokeWidth={2}
                dot={{ r: 4 }}
                name="Cost ($)"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Machine Utilization */}
        <ChartCard title="Machine Utilization" subtitle="By machine type">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={machineUtilizationData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis dataKey="machine" type="category" stroke="hsl(var(--muted-foreground))" fontSize={11} width={120} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--popover))", 
                  border: "1px solid hsl(var(--border))", 
                  borderRadius: "8px" 
                }} 
              />
              <Legend />
              <Bar dataKey="utilization" fill="#00C49F" radius={[0, 4, 4, 0]} name="Utilization (%)" />
              <Bar dataKey="downtime" fill="#FF8042" radius={[0, 4, 4, 0]} name="Downtime (%)" />
              <Bar dataKey="maintenance" fill="#FFBB28" radius={[0, 4, 4, 0]} name="Maintenance (%)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Row 3: Schedule Adherence & Material Consumption */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* Production Schedule Adherence */}
        <ChartCard title="Production Schedule Adherence" subtitle="Planned vs actual output">
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={scheduleAdherenceData}>
              <defs>
                <linearGradient id="colorPlanned" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0088FE" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#0088FE" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00C49F" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#00C49F" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" fontSize={12} />
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
              <Area 
                yAxisId="left"
                type="monotone" 
                dataKey="planned" 
                fill="url(#colorPlanned)" 
                stroke="#0088FE" 
                strokeWidth={2}
                name="Planned (units)"
              />
              <Area 
                yAxisId="left"
                type="monotone" 
                dataKey="actual" 
                fill="url(#colorActual)" 
                stroke="#00C49F" 
                strokeWidth={2}
                name="Actual (units)"
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="adherence" 
                stroke="#FF8042" 
                strokeWidth={2}
                dot={{ r: 4 }}
                name="Adherence (%)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Material Consumption */}
        <ChartCard title="Material Consumption" subtitle="Consumed vs budget with waste %">
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={materialConsumptionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="material" stroke="hsl(var(--muted-foreground))" fontSize={12} />
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
              <Bar yAxisId="left" dataKey="consumed" fill="#0088FE" radius={[4, 4, 0, 0]} name="Consumed (tons)" />
              <Bar yAxisId="left" dataKey="budget" fill="#FFBB28" radius={[4, 4, 0, 0]} name="Budget (tons)" />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="waste" 
                stroke="#FF8042" 
                strokeWidth={2}
                dot={{ r: 4 }}
                name="Waste (%)"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Row 4: Quality Metrics & Downtime Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* Quality Metrics Trend */}
        <ChartCard title="Quality Metrics Trend" subtitle="First Pass Yield, Defect Rate, Rework">
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={qualityMetricsData}>
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
              <Area 
                yAxisId="left"
                type="monotone" 
                dataKey="fpy" 
                fill="#00C49F" 
                fillOpacity={0.3}
                stroke="#00C49F" 
                strokeWidth={2}
                name="First Pass Yield (%)"
              />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="defectRate" 
                stroke="#FF8042" 
                strokeWidth={2}
                dot={{ r: 4 }}
                name="Defect Rate (%)"
              />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="rework" 
                stroke="#FFBB28" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ r: 4 }}
                name="Rework (%)"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Downtime Analysis */}
        <ChartCard title="Downtime Analysis" subtitle="Breakdown by reason">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={downtimeData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis dataKey="reason" type="category" stroke="hsl(var(--muted-foreground))" fontSize={12} width={140} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--popover))", 
                  border: "1px solid hsl(var(--border))", 
                  borderRadius: "8px" 
                }} 
              />
              <Legend />
              <Bar dataKey="hours" fill="#FF8042" radius={[0, 4, 4, 0]} name="Hours" />
              <Bar dataKey="percentage" fill="#8884d8" radius={[0, 4, 4, 0]} name="Percentage (%)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Row 5: Energy Consumption & WIP Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* Energy Consumption */}
        <ChartCard title="Energy Consumption" subtitle="Monthly consumption, cost, and efficiency">
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={energyConsumptionData}>
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
              <Bar yAxisId="left" dataKey="consumption" fill="#0088FE" radius={[4, 4, 0, 0]} name="Consumption (kWh)" />
              <Bar yAxisId="left" dataKey="cost" fill="#FFBB28" radius={[4, 4, 0, 0]} name="Cost ($)" />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="efficiency" 
                stroke="#00C49F" 
                strokeWidth={2}
                dot={{ r: 4 }}
                name="Efficiency (%)"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Work-in-Progress (WIP) */}
        <ChartCard title="Work-in-Progress (WIP)" subtitle="Units and value by production stage">
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={wipData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="stage" stroke="hsl(var(--muted-foreground))" fontSize={12} angle={-45} textAnchor="end" height={80} />
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
              <Bar yAxisId="left" dataKey="units" fill="#8884d8" radius={[4, 4, 0, 0]} name="Units" />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="value" 
                stroke="#00C49F" 
                strokeWidth={2}
                dot={{ r: 4 }}
                name="Value ($)"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Row 6: Safety Metrics & Cost Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* Safety Metrics */}
        <ChartCard title="Safety Metrics" subtitle="Incidents, near misses, and training">
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={safetyMetricsData}>
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
              <Bar yAxisId="left" dataKey="incidents" fill="#FF8042" radius={[4, 4, 0, 0]} name="Incidents" />
              <Bar yAxisId="left" dataKey="nearMisses" fill="#FFBB28" radius={[4, 4, 0, 0]} name="Near Misses" />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="training" 
                stroke="#00C49F" 
                strokeWidth={2}
                dot={{ r: 4 }}
                name="Training Hours"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Cost Breakdown Pie Chart */}
        <ChartCard title="Cost Breakdown" subtitle="Production cost distribution">
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={costBreakdownData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {costBreakdownData.map((entry, index) => (
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

      {/* Row 7: Shift Efficiency */}
      <div className="grid grid-cols-1 gap-4 mb-6">
        <ChartCard title="Production Efficiency by Shift" subtitle="Output, efficiency, and quality by shift">
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={shiftEfficiencyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="shift" stroke="hsl(var(--muted-foreground))" fontSize={12} />
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
              <Bar yAxisId="left" dataKey="output" fill="#0088FE" radius={[4, 4, 0, 0]} name="Output (units)" />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="efficiency" 
                stroke="#00C49F" 
                strokeWidth={2}
                dot={{ r: 4 }}
                name="Efficiency (%)"
              />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="quality" 
                stroke="#FF8042" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ r: 4 }}
                name="Quality (%)"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </DashboardLayout>
  );
}
