/**
 * Enhanced Chart Generator V2
 * 
 * Generates unique charts for each department-template combination
 * Uses department ID and template category to create distinct charts
 */

import { ChartConfig } from "../departmentData";
import { TemplateCategory } from "./types";

/**
 * Generate unique charts based on department and template category
 */
export function generateUniqueCharts(
  category: TemplateCategory,
  industryId: string,
  departmentId: string
): ChartConfig[] {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  // Create a unique seed based on department and category
  const seed = hashString(`${industryId}-${departmentId}-${category}`);

  // Get department-specific chart configuration
  const baseCharts = getDepartmentChartTemplates(
    departmentId,
    category,
    months,
    seed
  );

  // Ensure we always return 10 charts per template
  const charts: ChartConfig[] = [...baseCharts];

  // If we have fewer than 10 base charts, derive additional variants
  // by slightly transforming the numeric fields so each chart is still
  // realistic but visually distinct.
  let variantIndex = 1;
  while (charts.length < 10 && baseCharts.length > 0) {
    const base = baseCharts[charts.length % baseCharts.length];

    const factor = 1 + 0.03 * variantIndex; // 3% adjustment per variant

    const derivedData = base.data.map((point) => {
      const next: Record<string, string | number> = {};
      for (const [key, value] of Object.entries(point)) {
        if (typeof value === "number") {
          next[key] = Number((value * factor).toFixed(2));
        } else {
          next[key] = value;
        }
      }
      return next;
    });

    charts.push({
      ...base,
      title: `${base.title} – View ${variantIndex + 1}`,
      data: derivedData,
    });

    variantIndex++;
  }

  // In the unlikely case there were no base charts, return an empty array
  // (caller already guards against missing configs).
  return charts.slice(0, 10);
}

/**
 * Hash string to number for consistent seeding
 */
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

/**
 * Get department-specific chart templates
 */
function getDepartmentChartTemplates(
  departmentId: string,
  category: TemplateCategory,
  months: string[],
  seed: number
): ChartConfig[] {
  // Department-specific chart configurations
  const deptConfigs: Record<string, Record<TemplateCategory, () => ChartConfig[]>> = {
    production: {
      "executive-overview": () => [
        {
          title: "Production Output Overview",
          subtitle: "Monthly production volume and efficiency",
          type: "area",
          data: months.map((m, i) => ({
            month: m,
            output: 10000 + i * 500 + (seed % 1000),
            target: 10500 + i * 400,
            efficiency: 85 + i * 1.5,
          })),
          dataKeys: ["output", "target", "efficiency"],
          xAxisKey: "month",
        },
        {
          title: "OEE by Production Line",
          subtitle: "Overall Equipment Effectiveness",
          type: "bar",
          data: [
            { line: "Line A", oee: 88 + (seed % 5), target: 85 },
            { line: "Line B", oee: 92 + (seed % 3), target: 85 },
            { line: "Line C", oee: 85 + (seed % 4), target: 85 },
            { line: "Line D", oee: 90 + (seed % 2), target: 85 },
          ],
          dataKeys: ["oee", "target"],
          xAxisKey: "line",
        },
      ],
      "operational-performance": () => [
        {
          title: "Real-Time Production Rate",
          subtitle: "Units per hour",
          type: "line",
          data: months.map((m, i) => ({
            month: m,
            rate: 450 + i * 15 + (seed % 50),
            target: 500,
          })),
          dataKeys: ["rate", "target"],
          xAxisKey: "month",
        },
        {
          title: "Machine Utilization",
          subtitle: "By equipment type",
          type: "bar",
          data: [
            { equipment: "CNC", utilization: 92 + (seed % 5) },
            { equipment: "Assembly", utilization: 88 + (seed % 4) },
            { equipment: "Packaging", utilization: 85 + (seed % 3) },
          ],
          dataKeys: ["utilization"],
          xAxisKey: "equipment",
        },
      ],
      "financial-impact": () => [
        {
          title: "Production Cost Analysis",
          subtitle: "Cost per unit trends",
          type: "area",
          data: months.map((m, i) => ({
            month: m,
            material: 25 - i * 0.5 + (seed % 3) / 10,
            labor: 15 - i * 0.3 + (seed % 2) / 10,
            overhead: 10 - i * 0.2 + (seed % 1) / 10,
          })),
          dataKeys: ["material", "labor", "overhead"],
          xAxisKey: "month",
          stacked: true,
        },
        {
          title: "Production ROI",
          subtitle: "Return on production investment",
          type: "line",
          data: months.map((m, i) => ({
            month: m,
            roi: 18 + i * 0.8 + (seed % 5) / 10,
            target: 20,
          })),
          dataKeys: ["roi", "target"],
          xAxisKey: "month",
        },
      ],
      "risk-compliance": () => [
        {
          title: "Safety Incidents",
          subtitle: "By severity level",
          type: "bar",
          data: [
            { severity: "Critical", count: 0 + (seed % 2) },
            { severity: "High", count: 2 + (seed % 3) },
            { severity: "Medium", count: 5 + (seed % 4) },
            { severity: "Low", count: 12 + (seed % 5) },
          ],
          dataKeys: ["count"],
          xAxisKey: "severity",
        },
        {
          title: "Compliance Score",
          subtitle: "Quality and safety compliance",
          type: "line",
          data: months.map((m, i) => ({
            month: m,
            compliance: 95 + i * 0.3 + (seed % 3) / 10,
            target: 98,
          })),
          dataKeys: ["compliance", "target"],
          xAxisKey: "month",
        },
      ],
      "forecasting-planning": () => [
        {
          title: "Production Forecast",
          subtitle: "Projected vs planned output",
          type: "area",
          data: [
            ...months.slice(0, 3).map((m, i) => ({
              month: m,
              actual: 10000 + i * 500 + (seed % 1000),
              forecast: 10000 + i * 500 + (seed % 1000),
            })),
            ...months.slice(3).map((m, i) => ({
              month: m,
              actual: null,
              forecast: 11500 + (i + 3) * 600 + (seed % 1500),
            })),
          ],
          dataKeys: ["actual", "forecast"],
          xAxisKey: "month",
        },
        {
          title: "Capacity Planning",
          subtitle: "Future capacity requirements",
          type: "line",
          data: months.map((m, i) => ({
            month: m,
            required: 12000 + i * 800 + (seed % 2000),
            available: 15000,
          })),
          dataKeys: ["required", "available"],
          xAxisKey: "month",
        },
      ],
      "process-optimization": () => [
        {
          title: "Bottleneck Analysis",
          subtitle: "Process step performance",
          type: "bar",
          data: [
            { step: "Raw Material", time: 2.5 + (seed % 5) / 10, target: 2.0 },
            { step: "Processing", time: 8.5 + (seed % 8) / 10, target: 7.0 },
            { step: "Quality Check", time: 1.5 + (seed % 3) / 10, target: 1.0 },
            { step: "Packaging", time: 3.0 + (seed % 4) / 10, target: 2.5 },
          ],
          dataKeys: ["time", "target"],
          xAxisKey: "step",
        },
        {
          title: "Optimization Impact",
          subtitle: "Before vs after improvements",
          type: "line",
          data: months.map((m, i) => ({
            month: m,
            before: 100 - i * 3 + (seed % 10),
            after: 100 - i * 6 + (seed % 15),
          })),
          dataKeys: ["before", "after"],
          xAxisKey: "month",
        },
      ],
      "team-performance": () => [
        {
          title: "Production Team Productivity",
          subtitle: "Output per team member",
          type: "area",
          data: months.map((m, i) => ({
            month: m,
            productivity: 85 + i * 2 + (seed % 8),
            target: 90,
          })),
          dataKeys: ["productivity", "target"],
          xAxisKey: "month",
        },
        {
          title: "Team Performance Distribution",
          subtitle: "By shift",
          type: "bar",
          data: [
            { shift: "Morning", performance: 92 + (seed % 5) },
            { shift: "Afternoon", performance: 88 + (seed % 4) },
            { shift: "Night", performance: 85 + (seed % 3) },
          ],
          dataKeys: ["performance"],
          xAxisKey: "shift",
        },
      ],
      "customer-impact": () => [
        {
          title: "On-Time Delivery",
          subtitle: "Customer delivery performance",
          type: "line",
          data: months.map((m, i) => ({
            month: m,
            delivery: 92 + i * 1 + (seed % 5),
            target: 95,
          })),
          dataKeys: ["delivery", "target"],
          xAxisKey: "month",
        },
        {
          title: "Quality Metrics",
          subtitle: "Customer satisfaction indicators",
          type: "bar",
          data: [
            { metric: "Defect Rate", value: 0.8 + (seed % 5) / 10 },
            { metric: "Rework Rate", value: 2.5 + (seed % 3) / 10 },
            { metric: "Customer Returns", value: 1.2 + (seed % 2) / 10 },
          ],
          dataKeys: ["value"],
          xAxisKey: "metric",
        },
      ],
      "anomaly-detection": () => [
        {
          title: "Production Anomalies",
          subtitle: "Unusual patterns detected",
          type: "line",
          data: months.map((m, i) => ({
            month: m,
            normal: 100,
            anomaly: (i === 2 || i === 4) ? 150 + (seed % 20) : 100,
          })),
          dataKeys: ["normal", "anomaly"],
          xAxisKey: "month",
        },
        {
          title: "Anomaly Distribution",
          subtitle: "By type",
          type: "bar",
          data: [
            { type: "Equipment Failure", count: 2 + (seed % 3) },
            { type: "Quality Issue", count: 5 + (seed % 4) },
            { type: "Supply Delay", count: 3 + (seed % 2) },
          ],
          dataKeys: ["count"],
          xAxisKey: "type",
        },
      ],
      "strategic-insights": () => [
        {
          title: "Long-Term Production Trends",
          subtitle: "Strategic growth analysis",
          type: "area",
          data: months.map((m, i) => ({
            month: m,
            trend: 10000 + i * 800 + (seed % 2000),
            benchmark: 10000 + i * 500,
          })),
          dataKeys: ["trend", "benchmark"],
          xAxisKey: "month",
        },
        {
          title: "Strategic Production Metrics",
          subtitle: "Key indicators",
          type: "bar",
          data: [
            { metric: "Market Share", value: 25 + (seed % 10) },
            { metric: "Capacity Growth", value: 15 + (seed % 8) },
            { metric: "Innovation Index", value: 75 + (seed % 15) },
          ],
          dataKeys: ["value"],
          xAxisKey: "metric",
        },
      ],
    },
    // Add more departments following the same pattern...
  };
  
  // Get department config or use generic
  const deptConfig = deptConfigs[departmentId];
  if (deptConfig && deptConfig[category]) {
    return deptConfig[category]();
  }
  
  // Generic fallback - still unique per department-category combination
  return generateGenericCharts(departmentId, category, months, seed);
}

/**
 * Generate generic charts with department-specific variations
 */
function generateGenericCharts(
  departmentId: string,
  category: TemplateCategory,
  months: string[],
  seed: number
): ChartConfig[] {
  const deptName = departmentId.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  
  const baseValue = 100 + (seed % 1000);
  const variation = seed % 50;
  
  const chartTemplates: Record<TemplateCategory, () => ChartConfig[]> = {
    "executive-overview": () => [
      {
        title: `${deptName} Overview`,
        subtitle: "Key metrics summary",
        type: "area",
        data: months.map((m, i) => ({
          month: m,
          value: baseValue + i * 5 + variation,
          target: baseValue * 1.1 + i * 4,
        })),
        dataKeys: ["value", "target"],
        xAxisKey: "month",
      },
      {
        title: `${deptName} Performance`,
        subtitle: "By category",
        type: "bar",
        data: [
          { category: "Category A", value: 85 + (seed % 10) },
          { category: "Category B", value: 92 + (seed % 8) },
          { category: "Category C", value: 88 + (seed % 6) },
        ],
        dataKeys: ["value"],
        xAxisKey: "category",
      },
    ],
    "operational-performance": () => [
      {
        title: `${deptName} Operations`,
        subtitle: "Daily performance metrics",
        type: "line",
        data: months.map((m, i) => ({
          month: m,
          performance: 85 + i * 1.5 + (seed % 10),
          target: 90,
        })),
        dataKeys: ["performance", "target"],
        xAxisKey: "month",
      },
      {
        title: `${deptName} Process Distribution`,
        subtitle: "By process type",
        type: "bar",
        data: [
          { process: "Process A", value: 45 + (seed % 10) },
          { process: "Process B", value: 35 + (seed % 8) },
          { process: "Process C", value: 20 + (seed % 6) },
        ],
        dataKeys: ["value"],
        xAxisKey: "process",
      },
    ],
    // Add all other categories...
    "financial-impact": () => [
      {
        title: `${deptName} Financial Impact`,
        subtitle: "Revenue and costs",
        type: "area",
        data: months.map((m, i) => ({
          month: m,
          revenue: baseValue * 5 + i * 20 + variation,
          cost: baseValue * 3.5 + i * 15,
        })),
        dataKeys: ["revenue", "cost"],
        xAxisKey: "month",
      },
      {
        title: `${deptName} ROI Analysis`,
        subtitle: "Return on investment",
        type: "line",
        data: months.map((m, i) => ({
          month: m,
          roi: 15 + i * 0.5 + (seed % 5) / 10,
          target: 18,
        })),
        dataKeys: ["roi", "target"],
        xAxisKey: "month",
      },
    ],
    "risk-compliance": () => [
      {
        title: `${deptName} Risk Distribution`,
        subtitle: "By risk level",
        type: "bar",
        data: [
          { level: "High", count: 5 + (seed % 5) },
          { level: "Medium", count: 12 + (seed % 8) },
          { level: "Low", count: 45 + (seed % 10) },
        ],
        dataKeys: ["count"],
        xAxisKey: "level",
      },
      {
        title: `${deptName} Compliance Trend`,
        subtitle: "Compliance over time",
        type: "line",
        data: months.map((m, i) => ({
          month: m,
          compliance: 92 + i * 0.5 + (seed % 5) / 10,
          target: 95,
        })),
        dataKeys: ["compliance", "target"],
        xAxisKey: "month",
      },
    ],
    "forecasting-planning": () => [
      {
        title: `${deptName} Forecast`,
        subtitle: "Projected trends",
        type: "area",
        data: [
          ...months.slice(0, 3).map((m, i) => ({
            month: m,
            actual: baseValue + i * 5 + variation,
            forecast: baseValue + i * 5 + variation,
          })),
          ...months.slice(3).map((m, i) => ({
            month: m,
            actual: null,
            forecast: baseValue * 1.15 + (i + 3) * 6 + variation * 1.2,
          })),
        ],
        dataKeys: ["actual", "forecast"],
        xAxisKey: "month",
      },
      {
        title: `${deptName} Growth Projections`,
        subtitle: "Future trends",
        type: "line",
        data: months.map((m, i) => ({
          month: m,
          projected: baseValue + i * 8 + variation,
          baseline: baseValue + i * 3,
        })),
        dataKeys: ["projected", "baseline"],
        xAxisKey: "month",
      },
    ],
    "process-optimization": () => [
      {
        title: `${deptName} Process Bottlenecks`,
        subtitle: "Performance analysis",
        type: "bar",
        data: [
          { step: "Step 1", time: 45 + (seed % 10), target: 30 },
          { step: "Step 2", time: 60 + (seed % 12), target: 40 },
          { step: "Step 3", time: 35 + (seed % 8), target: 25 },
        ],
        dataKeys: ["time", "target"],
        xAxisKey: "step",
      },
      {
        title: `${deptName} Optimization Impact`,
        subtitle: "Before vs after",
        type: "line",
        data: months.map((m, i) => ({
          month: m,
          before: baseValue - i * 2 + variation,
          after: baseValue - i * 5 + variation * 0.8,
        })),
        dataKeys: ["before", "after"],
        xAxisKey: "month",
      },
    ],
    "team-performance": () => [
      {
        title: `${deptName} Team Productivity`,
        subtitle: "Performance metrics",
        type: "area",
        data: months.map((m, i) => ({
          month: m,
          productivity: 75 + i * 2 + (seed % 10),
          target: 80,
        })),
        dataKeys: ["productivity", "target"],
        xAxisKey: "month",
      },
      {
        title: `${deptName} Team Distribution`,
        subtitle: "By performance level",
        type: "bar",
        data: [
          { level: "High", count: 15 + (seed % 5) },
          { level: "Medium", count: 25 + (seed % 8) },
          { level: "Low", count: 5 + (seed % 3) },
        ],
        dataKeys: ["count"],
        xAxisKey: "level",
      },
    ],
    "customer-impact": () => [
      {
        title: `${deptName} Customer Satisfaction`,
        subtitle: "CSAT trends",
        type: "line",
        data: months.map((m, i) => ({
          month: m,
          satisfaction: 85 + i * 1 + (seed % 8),
          target: 90,
        })),
        dataKeys: ["satisfaction", "target"],
        xAxisKey: "month",
      },
      {
        title: `${deptName} Customer Metrics`,
        subtitle: "Key indicators",
        type: "bar",
        data: [
          { metric: "Retention", value: 92 + (seed % 5) },
          { metric: "Churn", value: 8 - (seed % 3) },
          { metric: "NPS", value: 65 + (seed % 10) },
        ],
        dataKeys: ["value"],
        xAxisKey: "metric",
      },
    ],
    "anomaly-detection": () => [
      {
        title: `${deptName} Anomaly Detection`,
        subtitle: "Unusual patterns",
        type: "line",
        data: months.map((m, i) => ({
          month: m,
          normal: baseValue,
          anomaly: (i === 2 || i === 4) ? baseValue * 1.5 + variation : baseValue,
        })),
        dataKeys: ["normal", "anomaly"],
        xAxisKey: "month",
      },
      {
        title: `${deptName} Anomaly Distribution`,
        subtitle: "By severity",
        type: "bar",
        data: [
          { severity: "Critical", count: 2 + (seed % 3) },
          { severity: "Warning", count: 5 + (seed % 4) },
          { severity: "Info", count: 12 + (seed % 6) },
        ],
        dataKeys: ["count"],
        xAxisKey: "severity",
      },
    ],
    "strategic-insights": () => [
      {
        title: `${deptName} Strategic Trends`,
        subtitle: "Long-term analysis",
        type: "area",
        data: months.map((m, i) => ({
          month: m,
          trend: baseValue + i * 10 + variation,
          benchmark: baseValue + i * 5,
        })),
        dataKeys: ["trend", "benchmark"],
        xAxisKey: "month",
      },
      {
        title: `${deptName} Strategic Metrics`,
        subtitle: "Key indicators",
        type: "bar",
        data: [
          { metric: "Growth", value: 120 + (seed % 20) },
          { metric: "Market Share", value: 85 + (seed % 15) },
          { metric: "Innovation", value: 75 + (seed % 10) },
        ],
        dataKeys: ["value"],
        xAxisKey: "metric",
      },
    ],
  };
  
  return chartTemplates[category]();
}
