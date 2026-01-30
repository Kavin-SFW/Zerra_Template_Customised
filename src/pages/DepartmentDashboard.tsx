import { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { FilterBar } from "@/components/dashboard/FilterBar";
import { TemplateSelector } from "@/components/dashboard/TemplateSelector";
import { KPICard } from "@/components/dashboard/KPICard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { DataTable } from "@/components/dashboard/DataTable";
import { AIInsightsPanel } from "@/components/dashboard/AIInsightsPanel";
import { getIndustry, getDepartment } from "@/config/industries";
import { getTemplateConfig, DEFAULT_TEMPLATE_ID, validateRouteParams } from "@/config/templates/getTemplateConfig";
import { DepartmentConfig } from "@/config/departmentData";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, LineChart, Line, Legend
} from "recharts";

export default function DepartmentDashboard() {
  const params = useParams<{ industryId: string; departmentId: string; templateId?: string }>();
  const navigate = useNavigate();
  const [config, setConfig] = useState<DepartmentConfig | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Validate route params
  const validatedParams = validateRouteParams(params);
  if (!validatedParams) {
    return <Navigate to="/" replace />;
  }
  
  const { industryId, departmentId, templateId } = validatedParams;
  
  if (!industryId || !departmentId) {
    return <Navigate to="/" replace />;
  }

  const industry = getIndustry(industryId);
  const department = getDepartment(industryId, departmentId);
  
  if (!industry || !department) {
    return <Navigate to="/" replace />;
  }

  // Redirect if templateId is missing
  useEffect(() => {
    if (!templateId) {
      navigate(`/dashboard/${industryId}/${departmentId}/${DEFAULT_TEMPLATE_ID}`, { replace: true });
      return;
    }
    
    // Load template config
    loadTemplateConfig();
  }, [industryId, departmentId, templateId]);

  const loadTemplateConfig = async () => {
    setLoading(true);
    try {
      const result = await getTemplateConfig(industryId, departmentId, templateId);
      if (result) {
        setConfig(result.config);
      } else {
        // Fallback to default template
        const defaultResult = await getTemplateConfig(industryId, departmentId, DEFAULT_TEMPLATE_ID);
        if (defaultResult) {
          setConfig(defaultResult.config);
          navigate(`/dashboard/${industryId}/${departmentId}/${DEFAULT_TEMPLATE_ID}`, { replace: true });
        }
      }
    } catch (error) {
      console.error("Error loading template config:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading || !config) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-muted-foreground">Loading dashboard...</div>
        </div>
      </DashboardLayout>
    );
  }

  const renderChart = (chart: typeof config.charts[0], index: number) => {
    const colors = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))", "hsl(var(--chart-5))"];

    switch (chart.type) {
      case "area":
        return (
          <ChartCard key={index} title={chart.title} subtitle={chart.subtitle}>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={chart.data}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey={chart.xAxisKey} stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--popover))", border: "1px solid hsl(var(--border))", borderRadius: "8px" }} />
                <Legend />
                {chart.dataKeys.map((key, i) => (
                  <Area key={key} type="monotone" dataKey={key} stroke={colors[i % colors.length]} fill={colors[i % colors.length]} fillOpacity={0.3} stackId={chart.stacked ? "1" : undefined} />
                ))}
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>
        );
      case "bar":
        return (
          <ChartCard key={index} title={chart.title} subtitle={chart.subtitle}>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={chart.data}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey={chart.xAxisKey} stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--popover))", border: "1px solid hsl(var(--border))", borderRadius: "8px" }} />
                <Legend />
                {chart.dataKeys.map((key, i) => (
                  <Bar key={key} dataKey={key} fill={colors[i % colors.length]} radius={[4, 4, 0, 0]} />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        );
      case "line":
        return (
          <ChartCard key={index} title={chart.title} subtitle={chart.subtitle}>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={chart.data}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey={chart.xAxisKey} stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--popover))", border: "1px solid hsl(var(--border))", borderRadius: "8px" }} />
                <Legend />
                {chart.dataKeys.map((key, i) => (
                  <Line key={key} type="monotone" dataKey={key} stroke={colors[i % colors.length]} strokeWidth={2} dot={{ r: 4 }} />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        );
      default:
        return (
          <ChartCard key={index} title={chart.title} subtitle={chart.subtitle}>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={chart.data}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey={chart.xAxisKey} stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--popover))", border: "1px solid hsl(var(--border))", borderRadius: "8px" }} />
                {chart.dataKeys.map((key, i) => (
                  <Bar key={key} dataKey={key} fill={colors[i % colors.length]} radius={[4, 4, 0, 0]} />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        );
    }
  };

  return (
    <DashboardLayout>
      <FilterBar 
        title={`${industry.name} - ${department.name}`}
        subtitle={department.description}
      />

      {/* Template Selector */}
      <div className="mb-6">
        <TemplateSelector />
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
        {config.kpis.map((kpi, index) => (
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

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
        {config.charts.map((chart, index) => renderChart(chart, index))}
      </div>

      {/* AI Insights & Table */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <AIInsightsPanel insights={config.insights} className="lg:col-span-1" />
        <DataTable
          title={config.table.title}
          columns={config.table.columns.map(col => ({
            ...col,
            render: col.key === 'status' || col.key === 'priority' || col.key === 'severity' ? (v) => (
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                String(v).toLowerCase().includes('critical') || String(v).toLowerCase().includes('overdue') || String(v).toLowerCase().includes('high') ? "bg-destructive/20 text-destructive" :
                String(v).toLowerCase().includes('warning') || String(v).toLowerCase().includes('pending') || String(v).toLowerCase().includes('medium') || String(v).toLowerCase().includes('at risk') ? "bg-warning/20 text-warning" :
                String(v).toLowerCase().includes('completed') || String(v).toLowerCase().includes('on track') || String(v).toLowerCase().includes('adequate') || String(v).toLowerCase().includes('low') ? "bg-success/20 text-success" :
                "bg-muted text-muted-foreground"
              }`}>
                {v as string}
              </span>
            ) : undefined
          }))}
          data={config.table.data}
          searchKey={config.table.searchKey}
          className="lg:col-span-2"
        />
      </div>
    </DashboardLayout>
  );
}
