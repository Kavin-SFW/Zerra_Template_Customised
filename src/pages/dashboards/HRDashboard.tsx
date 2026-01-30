import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { FilterBar } from "@/components/dashboard/FilterBar";
import { KPICard } from "@/components/dashboard/KPICard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { DataTable } from "@/components/dashboard/DataTable";
import { AIInsightsPanel } from "@/components/dashboard/AIInsightsPanel";
import { GaugeChart } from "@/components/dashboard/GaugeChart";
import { UserCircle, Users, Clock, TrendingUp, UserMinus, Target } from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend, Cell
} from "recharts";

const attritionData = [
  { month: "Jan", joined: 45, left: 12, headcount: 1245 },
  { month: "Feb", joined: 38, left: 15, headcount: 1268 },
  { month: "Mar", joined: 52, left: 18, headcount: 1302 },
  { month: "Apr", joined: 42, left: 14, headcount: 1330 },
  { month: "May", joined: 55, left: 22, headcount: 1363 },
  { month: "Jun", joined: 48, left: 16, headcount: 1395 },
];

const departmentData = [
  { department: "Engineering", headcount: 450, engagement: 78, productivity: 92, color: "hsl(var(--chart-1))" },
  { department: "Sales", headcount: 280, engagement: 82, productivity: 88, color: "hsl(var(--chart-2))" },
  { department: "Marketing", headcount: 120, engagement: 85, productivity: 86, color: "hsl(var(--chart-3))" },
  { department: "Operations", headcount: 350, engagement: 74, productivity: 90, color: "hsl(var(--chart-4))" },
  { department: "HR", headcount: 45, engagement: 88, productivity: 84, color: "hsl(var(--chart-5))" },
  { department: "Finance", headcount: 150, engagement: 76, productivity: 91, color: "hsl(var(--chart-6))" },
];

const openPositions = [
  { id: "REQ-456", title: "Senior Software Engineer", department: "Engineering", days: 28, applicants: 145 },
  { id: "REQ-457", title: "Product Manager", department: "Product", days: 21, applicants: 82 },
  { id: "REQ-458", title: "Sales Executive", department: "Sales", days: 14, applicants: 64 },
  { id: "REQ-459", title: "Data Analyst", department: "Analytics", days: 35, applicants: 112 },
  { id: "REQ-460", title: "UX Designer", department: "Design", days: 18, applicants: 58 },
];

const insights = [
  {
    type: "prediction" as const,
    title: "Attrition Risk",
    description: "AI identifies 28 employees with high attrition risk in Engineering. Retention intervention recommended.",
    impact: "high" as const,
  },
  {
    type: "anomaly" as const,
    title: "Engagement Drop",
    description: "Operations department engagement dropped 8% this month. Manager feedback session needed.",
    impact: "high" as const,
  },
  {
    type: "recommendation" as const,
    title: "Hiring Efficiency",
    description: "REQ-459 open for 35 days. Consider expanding job board presence or adjusting requirements.",
    impact: "medium" as const,
  },
  {
    type: "trend" as const,
    title: "Productivity Up",
    description: "Company-wide productivity improved 5% after flexible work policy implementation.",
    impact: "medium" as const,
  },
];

export default function HRDashboard() {
  return (
    <DashboardLayout>
      <FilterBar 
        title="HR & People Analytics Dashboard" 
        subtitle="Workforce metrics and talent management"
      />

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
        <KPICard
          title="Total Headcount"
          value="1,395"
          change={2.4}
          trend="up"
          icon={<Users className="w-4 h-4" />}
        />
        <KPICard
          title="Attrition Rate"
          value="12.8%"
          change={-1.5}
          trend="up"
          target="<15%"
          icon={<UserMinus className="w-4 h-4" />}
        />
        <KPICard
          title="Time to Hire"
          value="24 days"
          change={-15}
          trend="up"
          target="<30 days"
          icon={<Clock className="w-4 h-4" />}
        />
        <KPICard
          title="Engagement Score"
          value="78%"
          change={3}
          trend="up"
          target=">75%"
          icon={<Target className="w-4 h-4" />}
        />
        <KPICard
          title="Productivity Index"
          value="89%"
          change={5}
          trend="up"
          icon={<TrendingUp className="w-4 h-4" />}
        />
        <KPICard
          title="Open Positions"
          value="24"
          change={-8}
          trend="up"
          icon={<UserCircle className="w-4 h-4" />}
        />
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <ChartCard title="Headcount Trend" subtitle="Hiring and attrition" className="lg:col-span-2">
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={attritionData}>
              <defs>
                <linearGradient id="colorHeadcount" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
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
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Legend />
              <Area yAxisId="right" type="monotone" dataKey="headcount" stroke="hsl(var(--chart-1))" fill="url(#colorHeadcount)" strokeWidth={2} name="Headcount" />
              <Bar yAxisId="left" dataKey="joined" fill="hsl(var(--success))" name="Joined" radius={[4, 4, 0, 0]} />
              <Bar yAxisId="left" dataKey="left" fill="hsl(var(--destructive))" name="Left" radius={[4, 4, 0, 0]} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <div className="glass-card p-5 flex flex-col items-center justify-center">
          <h3 className="text-sm font-medium text-foreground mb-6">Overall Engagement</h3>
          <GaugeChart value={78} label="Engagement Score" size="lg" />
          <div className="grid grid-cols-2 gap-4 mt-6 w-full">
            <div className="text-center">
              <div className="text-lg font-semibold text-success">89%</div>
              <div className="text-xs text-muted-foreground">Productivity</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-primary">4.2/5</div>
              <div className="text-xs text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Department Performance & Open Positions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <ChartCard title="Department Performance" subtitle="Engagement & Productivity">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={departmentData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[0, 100]} />
              <YAxis type="category" dataKey="department" stroke="hsl(var(--muted-foreground))" fontSize={11} width={80} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Legend />
              <Bar dataKey="engagement" fill="hsl(var(--chart-1))" name="Engagement %" radius={[0, 2, 2, 0]} />
              <Bar dataKey="productivity" fill="hsl(var(--chart-4))" name="Productivity %" radius={[0, 2, 2, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <DataTable
          title="Open Positions"
          columns={[
            { key: "title", label: "Position" },
            { key: "department", label: "Dept" },
            { key: "days", label: "Days Open", sortable: true, render: (v) => (
              <span className={(v as number) > 30 ? "text-destructive" : (v as number) > 21 ? "text-warning" : "text-foreground"}>
                {v} days
              </span>
            )},
            { key: "applicants", label: "Applicants" },
          ]}
          data={openPositions}
          searchKey="title"
          pageSize={4}
        />
      </div>

      {/* AI Insights */}
      <AIInsightsPanel insights={insights} />
    </DashboardLayout>
  );
}