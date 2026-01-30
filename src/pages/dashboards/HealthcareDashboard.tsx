/**
 * Healthcare Dashboard
 * 
 * Comprehensive healthcare dashboard with multiple KPIs and various chart types
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
  ComposedChart, RadialBarChart, RadialBar
} from "recharts";
import { Heart, Users, Activity, Clock, AlertCircle, CheckCircle, TrendingUp } from "lucide-react";

// Mock Data - Healthcare KPIs
const healthcareKPIs = [
  {
    title: "Patient Admissions",
    value: "1,245",
    change: 8.5,
    trend: "up" as const,
    target: "1,200",
    changeLabel: "this month"
  },
  {
    title: "Bed Occupancy Rate",
    value: "87.5%",
    change: 2.3,
    trend: "up" as const,
    target: "85%",
    changeLabel: "vs last month"
  },
  {
    title: "Average Length of Stay",
    value: "4.2 days",
    change: -5.5,
    trend: "down" as const,
    target: "4.0 days",
    changeLabel: "vs last month"
  },
  {
    title: "Readmission Rate",
    value: "8.2%",
    change: -12.5,
    trend: "down" as const,
    target: "8.0%",
    changeLabel: "vs last month"
  },
  {
    title: "Patient Satisfaction",
    value: "92.5%",
    change: 3.2,
    trend: "up" as const,
    target: "90%",
    changeLabel: "vs last month"
  },
  {
    title: "Emergency Wait Time",
    value: "18 min",
    change: -15.5,
    trend: "down" as const,
    target: "15 min",
    changeLabel: "avg wait time"
  },
  {
    title: "Surgery Success Rate",
    value: "96.8%",
    change: 1.5,
    trend: "up" as const,
    target: "95%",
    changeLabel: "vs last month"
  },
  {
    title: "Staff Utilization",
    value: "88.3%",
    change: 2.8,
    trend: "up" as const,
    target: "90%",
    changeLabel: "vs last month"
  },
  {
    title: "Revenue per Patient",
    value: "$8,450",
    change: 5.2,
    trend: "up" as const,
    target: "$8,500",
    changeLabel: "vs last month"
  },
  {
    title: "Infection Rate",
    value: "1.2%",
    change: -20.0,
    trend: "down" as const,
    target: "1.0%",
    changeLabel: "vs last month"
  }
];

// Patient Flow Data
const patientFlowData = [
  { month: "Jan", admissions: 1150, discharges: 1120, emergency: 320, beds: 450 },
  { month: "Feb", admissions: 1180, discharges: 1150, emergency: 335, beds: 455 },
  { month: "Mar", admissions: 1200, discharges: 1180, emergency: 350, beds: 460 },
  { month: "Apr", admissions: 1220, discharges: 1200, emergency: 365, beds: 465 },
  { month: "May", admissions: 1235, discharges: 1215, emergency: 380, beds: 470 },
  { month: "Jun", admissions: 1245, discharges: 1230, emergency: 395, beds: 475 },
];

// Bed Occupancy by Department
const bedOccupancyData = [
  { department: "ICU", occupancy: 95.5, capacity: 50, available: 2 },
  { department: "Cardiology", occupancy: 88.2, capacity: 80, available: 9 },
  { department: "Orthopedics", occupancy: 82.5, capacity: 60, available: 10 },
  { department: "General Medicine", occupancy: 85.8, capacity: 120, available: 17 },
  { department: "Pediatrics", occupancy: 78.5, capacity: 40, available: 8 },
  { department: "Surgery", occupancy: 90.2, capacity: 100, available: 9 },
];

// Patient Satisfaction by Department
const satisfactionData = [
  { department: "Emergency", satisfaction: 88.5, nps: 65, complaints: 12 },
  { department: "Cardiology", satisfaction: 94.2, nps: 78, complaints: 5 },
  { department: "Orthopedics", satisfaction: 91.8, nps: 72, complaints: 8 },
  { department: "General Medicine", satisfaction: 89.5, nps: 68, complaints: 15 },
  { department: "Pediatrics", satisfaction: 96.5, nps: 85, complaints: 3 },
  { department: "Surgery", satisfaction: 93.2, nps: 75, complaints: 6 },
];

// Length of Stay by Department
const lengthOfStayData = [
  { department: "ICU", avgLOS: 5.2, target: 5.0, cases: 125 },
  { department: "Cardiology", avgLOS: 4.8, target: 4.5, cases: 180 },
  { department: "Orthopedics", avgLOS: 6.5, target: 6.0, cases: 95 },
  { department: "General Medicine", avgLOS: 3.8, target: 3.5, cases: 320 },
  { department: "Pediatrics", avgLOS: 3.2, target: 3.0, cases: 150 },
  { department: "Surgery", avgLOS: 4.5, target: 4.2, cases: 200 },
];

// Readmission Analysis
const readmissionData = [
  { month: "Jan", rate: 9.5, target: 8.0, cases: 110 },
  { month: "Feb", rate: 9.2, target: 8.0, cases: 108 },
  { month: "Mar", rate: 8.8, target: 8.0, cases: 105 },
  { month: "Apr", rate: 8.5, target: 8.0, cases: 103 },
  { month: "May", rate: 8.3, target: 8.0, cases: 102 },
  { month: "Jun", rate: 8.2, target: 8.0, cases: 101 },
];

// Surgery Performance
const surgeryData = [
  { type: "Cardiac", procedures: 85, success: 98.8, avgTime: 4.5 },
  { type: "Orthopedic", procedures: 120, success: 96.5, avgTime: 3.2 },
  { type: "General", procedures: 180, success: 97.2, avgTime: 2.8 },
  { type: "Neurological", procedures: 45, success: 95.5, avgTime: 6.2 },
  { type: "Emergency", procedures: 95, success: 94.8, avgTime: 2.5 },
];

// Emergency Department Metrics
const emergencyMetricsData = [
  { hour: "00:00", arrivals: 8, waitTime: 25, treated: 7 },
  { hour: "06:00", arrivals: 12, waitTime: 20, treated: 11 },
  { hour: "12:00", arrivals: 28, waitTime: 15, treated: 26 },
  { hour: "18:00", arrivals: 35, waitTime: 18, treated: 32 },
  { hour: "00:00", arrivals: 10, waitTime: 22, treated: 9 },
];

// Staff Utilization
const staffUtilizationData = [
  { role: "Nurses", utilization: 92.5, fte: 180, required: 195 },
  { role: "Doctors", utilization: 88.3, fte: 85, required: 95 },
  { role: "Technicians", utilization: 85.2, fte: 45, required: 50 },
  { role: "Support Staff", utilization: 78.5, fte: 120, required: 140 },
];

// Revenue by Service Type
const revenueByServiceData = [
  { service: "Inpatient", revenue: 8500000, patients: 850, avgRevenue: 10000 },
  { service: "Outpatient", revenue: 4200000, patients: 2100, avgRevenue: 2000 },
  { service: "Emergency", revenue: 1800000, patients: 1200, avgRevenue: 1500 },
  { service: "Surgery", revenue: 3200000, patients: 400, avgRevenue: 8000 },
  { service: "Diagnostics", revenue: 1500000, patients: 3000, avgRevenue: 500 },
];

// Quality Indicators
const qualityIndicatorsData = [
  { month: "Jan", infectionRate: 1.5, mortalityRate: 2.2, safetyScore: 88.5 },
  { month: "Feb", infectionRate: 1.4, mortalityRate: 2.1, safetyScore: 89.2 },
  { month: "Mar", infectionRate: 1.3, mortalityRate: 2.0, safetyScore: 90.0 },
  { month: "Apr", infectionRate: 1.3, mortalityRate: 1.9, safetyScore: 90.5 },
  { month: "May", infectionRate: 1.2, mortalityRate: 1.8, safetyScore: 91.2 },
  { month: "Jun", infectionRate: 1.2, mortalityRate: 1.8, safetyScore: 91.8 },
];

// Patient Demographics
const patientDemographicsData = [
  { ageGroup: "0-18", count: 320, percentage: 25.7 },
  { ageGroup: "19-35", count: 280, percentage: 22.5 },
  { ageGroup: "36-50", count: 250, percentage: 20.1 },
  { ageGroup: "51-65", count: 220, percentage: 17.7 },
  { ageGroup: "65+", count: 175, percentage: 14.0 },
];

// Operating Room Utilization
const orUtilizationData = [
  { or: "OR 1", utilization: 92.5, procedures: 85, hours: 680 },
  { or: "OR 2", utilization: 88.3, procedures: 78, hours: 650 },
  { or: "OR 3", utilization: 85.2, procedures: 72, hours: 620 },
  { or: "OR 4", utilization: 90.8, procedures: 80, hours: 665 },
  { or: "OR 5", utilization: 87.5, procedures: 75, hours: 640 },
];

// Medication Errors
const medicationErrorsData = [
  { month: "Jan", errors: 12, severity: "Low", prevented: 8 },
  { month: "Feb", errors: 10, severity: "Low", prevented: 7 },
  { month: "Mar", errors: 8, severity: "Low", prevented: 6 },
  { month: "Apr", errors: 7, severity: "Low", prevented: 5 },
  { month: "May", errors: 6, severity: "Low", prevented: 4 },
  { month: "Jun", errors: 5, severity: "Low", prevented: 4 },
];

// Cost per Patient
const costPerPatientData = [
  { department: "ICU", cost: 12500, revenue: 15000, margin: 20.0 },
  { department: "Cardiology", cost: 8500, revenue: 12000, margin: 29.2 },
  { department: "Orthopedics", cost: 7200, revenue: 10000, margin: 28.0 },
  { department: "General Medicine", cost: 4500, revenue: 6000, margin: 25.0 },
  { department: "Pediatrics", cost: 3800, revenue: 5500, margin: 30.9 },
  { department: "Surgery", cost: 6800, revenue: 9500, margin: 28.4 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d", "#ffc658"];

export default function HealthcareDashboard() {
  return (
    <DashboardLayout>
      <FilterBar 
        title="Healthcare Dashboard"
        subtitle="Comprehensive healthcare performance metrics and analytics"
      />

      {/* KPI Cards - Power BI Style Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 mb-6">
        {healthcareKPIs.map((kpi, index) => (
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

      {/* Row 1: Patient Flow & Bed Occupancy */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Patient Flow Trend - Large Chart */}
        <ChartCard 
          title="Patient Flow Trend" 
          subtitle="Admissions, discharges, emergency, and bed capacity"
          className="lg:col-span-2"
        >
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={patientFlowData}>
              <defs>
                <linearGradient id="colorAdmissions" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0088FE" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#0088FE" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorDischarges" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00C49F" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#00C49F" stopOpacity={0}/>
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
                dataKey="admissions" 
                fill="url(#colorAdmissions)" 
                stroke="#0088FE" 
                strokeWidth={2}
                name="Admissions"
              />
              <Area 
                yAxisId="left"
                type="monotone" 
                dataKey="discharges" 
                fill="url(#colorDischarges)" 
                stroke="#00C49F" 
                strokeWidth={2}
                name="Discharges"
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="emergency" 
                stroke="#FF8042" 
                strokeWidth={2}
                dot={{ r: 4 }}
                name="Emergency"
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="beds" 
                stroke="#8884d8" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ r: 4 }}
                name="Bed Capacity"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Bed Occupancy by Department */}
        <ChartCard title="Bed Occupancy by Department" subtitle="Current occupancy rates">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={bedOccupancyData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis dataKey="department" type="category" stroke="hsl(var(--muted-foreground))" fontSize={11} width={100} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--popover))", 
                  border: "1px solid hsl(var(--border))", 
                  borderRadius: "8px" 
                }} 
              />
              <Legend />
              <Bar dataKey="occupancy" fill="#0088FE" radius={[0, 4, 4, 0]} name="Occupancy (%)" />
              <Bar dataKey="available" fill="#00C49F" radius={[0, 4, 4, 0]} name="Available Beds" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Row 2: Patient Satisfaction & Length of Stay */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Patient Satisfaction by Department */}
        <ChartCard title="Patient Satisfaction" subtitle="By department with NPS" className="lg:col-span-2">
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={satisfactionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="department" stroke="hsl(var(--muted-foreground))" fontSize={12} angle={-45} textAnchor="end" height={80} />
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
              <Bar yAxisId="left" dataKey="satisfaction" fill="#00C49F" radius={[4, 4, 0, 0]} name="Satisfaction (%)" />
              <Bar yAxisId="left" dataKey="nps" fill="#0088FE" radius={[4, 4, 0, 0]} name="NPS Score" />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="complaints" 
                stroke="#FF8042" 
                strokeWidth={2}
                dot={{ r: 4 }}
                name="Complaints"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Length of Stay by Department */}
        <ChartCard title="Average Length of Stay" subtitle="By department">
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={lengthOfStayData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="department" stroke="hsl(var(--muted-foreground))" fontSize={11} angle={-45} textAnchor="end" height={80} />
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
              <Bar yAxisId="left" dataKey="avgLOS" fill="#8884d8" radius={[4, 4, 0, 0]} name="Avg LOS (days)" />
              <Line 
                yAxisId="left" 
                type="monotone" 
                dataKey="target" 
                stroke="#FF8042" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ r: 4 }}
                name="Target (days)"
              />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="cases" 
                stroke="#00C49F" 
                strokeWidth={2}
                dot={{ r: 4 }}
                name="Cases"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Row 3: Readmission Rate & Surgery Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* Readmission Rate Trend */}
        <ChartCard title="Readmission Rate Trend" subtitle="Monthly readmission rate vs target">
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={readmissionData}>
              <defs>
                <linearGradient id="colorReadmission" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF8042" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#FF8042" stopOpacity={0}/>
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
                dataKey="rate" 
                fill="url(#colorReadmission)" 
                stroke="#FF8042" 
                strokeWidth={2}
                name="Readmission Rate (%)"
              />
              <Line 
                yAxisId="left" 
                type="monotone" 
                dataKey="target" 
                stroke="#00C49F" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ r: 4 }}
                name="Target (%)"
              />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="cases" 
                stroke="#0088FE" 
                strokeWidth={2}
                dot={{ r: 4 }}
                name="Readmission Cases"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Surgery Performance */}
        <ChartCard title="Surgery Performance" subtitle="Procedures, success rate, and avg time">
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={surgeryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="type" stroke="hsl(var(--muted-foreground))" fontSize={12} />
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
              <Bar yAxisId="left" dataKey="procedures" fill="#0088FE" radius={[4, 4, 0, 0]} name="Procedures" />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="success" 
                stroke="#00C49F" 
                strokeWidth={2}
                dot={{ r: 4 }}
                name="Success Rate (%)"
              />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="avgTime" 
                stroke="#FF8042" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ r: 4 }}
                name="Avg Time (hrs)"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Row 4: Staff Utilization & Revenue by Service */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* Staff Utilization */}
        <ChartCard title="Staff Utilization" subtitle="By role with FTE vs required">
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={staffUtilizationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="role" stroke="hsl(var(--muted-foreground))" fontSize={12} />
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
              <Bar yAxisId="left" dataKey="utilization" fill="#00C49F" radius={[4, 4, 0, 0]} name="Utilization (%)" />
              <Bar yAxisId="right" dataKey="fte" fill="#0088FE" radius={[4, 4, 0, 0]} name="Current FTE" />
              <Bar yAxisId="right" dataKey="required" fill="#FFBB28" radius={[4, 4, 0, 0]} name="Required FTE" />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Revenue by Service Type */}
        <ChartCard title="Revenue by Service Type" subtitle="Revenue, patients, and avg revenue">
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={revenueByServiceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="service" stroke="hsl(var(--muted-foreground))" fontSize={12} />
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
                dataKey="patients" 
                stroke="#00C49F" 
                strokeWidth={2}
                dot={{ r: 4 }}
                name="Patients"
              />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="avgRevenue" 
                stroke="#FF8042" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ r: 4 }}
                name="Avg Revenue ($)"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Row 5: Quality Indicators & Patient Demographics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* Quality Indicators */}
        <ChartCard title="Quality Indicators" subtitle="Infection rate, mortality rate, and safety score">
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={qualityIndicatorsData}>
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
              <Line 
                yAxisId="left" 
                type="monotone" 
                dataKey="infectionRate" 
                stroke="#FF8042" 
                strokeWidth={2}
                dot={{ r: 4 }}
                name="Infection Rate (%)"
              />
              <Line 
                yAxisId="left" 
                type="monotone" 
                dataKey="mortalityRate" 
                stroke="#FFBB28" 
                strokeWidth={2}
                dot={{ r: 4 }}
                name="Mortality Rate (%)"
              />
              <Area 
                yAxisId="right"
                type="monotone" 
                dataKey="safetyScore" 
                fill="#00C49F" 
                fillOpacity={0.3}
                stroke="#00C49F" 
                strokeWidth={2}
                name="Safety Score"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Patient Demographics Pie Chart */}
        <ChartCard title="Patient Demographics" subtitle="Distribution by age group">
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={patientDemographicsData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ ageGroup, percentage }) => `${ageGroup}: ${percentage}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="count"
              >
                {patientDemographicsData.map((entry, index) => (
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

      {/* Row 6: Operating Room Utilization & Medication Errors */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* Operating Room Utilization */}
        <ChartCard title="Operating Room Utilization" subtitle="By OR with procedures and hours">
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={orUtilizationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="or" stroke="hsl(var(--muted-foreground))" fontSize={12} />
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
              <Bar yAxisId="left" dataKey="utilization" fill="#0088FE" radius={[4, 4, 0, 0]} name="Utilization (%)" />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="procedures" 
                stroke="#00C49F" 
                strokeWidth={2}
                dot={{ r: 4 }}
                name="Procedures"
              />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="hours" 
                stroke="#FF8042" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ r: 4 }}
                name="Hours"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Medication Errors */}
        <ChartCard title="Medication Errors" subtitle="Monthly errors and prevented incidents">
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={medicationErrorsData}>
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
              <Bar dataKey="errors" fill="#FF8042" radius={[4, 4, 0, 0]} name="Errors" />
              <Bar dataKey="prevented" fill="#00C49F" radius={[4, 4, 0, 0]} name="Prevented" />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Row 7: Cost per Patient */}
      <div className="grid grid-cols-1 gap-4 mb-6">
        <ChartCard title="Cost per Patient Analysis" subtitle="Cost, revenue, and margin by department">
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={costPerPatientData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="department" stroke="hsl(var(--muted-foreground))" fontSize={12} angle={-45} textAnchor="end" height={80} />
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
              <Bar yAxisId="left" dataKey="cost" fill="#FF8042" radius={[4, 4, 0, 0]} name="Cost ($)" />
              <Bar yAxisId="left" dataKey="revenue" fill="#00C49F" radius={[4, 4, 0, 0]} name="Revenue ($)" />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="margin" 
                stroke="#0088FE" 
                strokeWidth={2}
                dot={{ r: 4 }}
                name="Margin (%)"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </DashboardLayout>
  );
}
