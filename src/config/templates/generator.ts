/**
 * Template Data Generator
 * 
 * Generates realistic, business-appropriate data for dashboard templates
 */

import {
  KPIConfig,
  ChartConfig,
  TableConfig,
  InsightConfig,
  DepartmentConfig,
} from "../departmentData";
import { TemplateCategory, TemplateAudience, TemplateTimeframe } from "./types";
import { generateIndustryDepartmentCharts } from "./chartGenerator";

/**
 * Generate realistic KPI values based on template context
 */
export function generateKPIs(
  category: TemplateCategory,
  industryId: string,
  departmentId: string,
  baseValues: Record<string, { value: number; change: number }>
): KPIConfig[] {
  const kpis: KPIConfig[] = [];
  const keys = Object.keys(baseValues);
  
  // Ensure we have at least 6 KPIs
  const requiredKPIs = Math.max(6, keys.length);
  
  for (let i = 0; i < requiredKPIs; i++) {
    const key = keys[i % keys.length];
    const base = baseValues[key] || { value: 100, change: 5 };
    
    // Adjust based on category
    let value = base.value;
    let change = base.change;
    
    switch (category) {
      case "executive-overview":
        value *= 1.0; // Keep as-is for executive view
        break;
      case "operational-performance":
        value *= 0.95; // Slightly lower for operational focus
        break;
      case "financial-impact":
        value *= 1.1; // Higher for financial focus
        break;
      case "risk-compliance":
        value *= 0.9; // Lower for risk view
        change = Math.abs(change) * -1; // Negative trend for risk
        break;
      case "forecasting-planning":
        value *= 1.05; // Optimistic for forecasting
        change = Math.abs(change) * 1.2; // Higher growth
        break;
      case "process-optimization":
        value *= 0.98;
        change = Math.abs(change) * 0.8; // Moderate improvement
        break;
      case "team-performance":
        value *= 0.92;
        break;
      case "customer-impact":
        value *= 1.08;
        change = Math.abs(change) * 1.1;
        break;
      case "anomaly-detection":
        value *= 0.85; // Lower values indicate anomalies
        change = Math.abs(change) * -1.5; // Negative trend
        break;
      case "strategic-insights":
        value *= 1.15; // Higher for strategic view
        change = Math.abs(change) * 1.3;
        break;
    }
    
    kpis.push({
      title: key,
      value: formatValue(value, industryId, departmentId),
      change: Number(change.toFixed(1)),
      trend: change >= 0 ? "up" : "down",
      target: formatValue(value * 1.1, industryId, departmentId),
    });
  }
  
  return kpis.slice(0, 6); // Ensure exactly 6 KPIs
}

/**
 * Generate charts based on template category
 * Now uses industry and department-specific chart generator
 */
export function generateCharts(
  category: TemplateCategory,
  industryId: string,
  departmentId: string
): ChartConfig[] {
  // Use the new industry-specific chart generator
  return generateIndustryDepartmentCharts(category, industryId, departmentId);
}

/**
 * Legacy chart generation (kept for backward compatibility)
 * @deprecated Use generateIndustryDepartmentCharts instead
 */
function generateChartsLegacy(
  category: TemplateCategory,
  industryId: string,
  departmentId: string
): ChartConfig[] {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const charts: ChartConfig[] = [];
  
  switch (category) {
    case "executive-overview":
      charts.push({
        title: "Executive Summary",
        subtitle: "Key metrics overview",
        type: "area",
        data: months.map((m, i) => ({
          month: m,
          revenue: 100 + i * 5,
          profit: 20 + i * 1,
        })),
        dataKeys: ["revenue", "profit"],
        xAxisKey: "month",
      });
      charts.push({
        title: "Performance Trends",
        subtitle: "Quarterly comparison",
        type: "bar",
        data: months.map((m, i) => ({
          month: m,
          current: 100 + i * 3,
          previous: 95 + i * 2,
        })),
        dataKeys: ["current", "previous"],
        xAxisKey: "month",
      });
      break;
      
    case "operational-performance":
      charts.push({
        title: "Operational Efficiency",
        subtitle: "Daily performance metrics",
        type: "line",
        data: months.map((m, i) => ({
          month: m,
          efficiency: 85 + i * 1.5,
          target: 90,
        })),
        dataKeys: ["efficiency", "target"],
        xAxisKey: "month",
      });
      charts.push({
        title: "Process Metrics",
        subtitle: "By category",
        type: "bar",
        data: [
          { category: "Processing", value: 95 },
          { category: "Quality", value: 88 },
          { category: "Delivery", value: 92 },
        ],
        dataKeys: ["value"],
        xAxisKey: "category",
      });
      break;
      
    case "financial-impact":
      charts.push({
        title: "Revenue Impact",
        subtitle: "Financial performance",
        type: "area",
        data: months.map((m, i) => ({
          month: m,
          revenue: 500 + i * 20,
          cost: 350 + i * 15,
          profit: 150 + i * 5,
        })),
        dataKeys: ["revenue", "cost", "profit"],
        xAxisKey: "month",
        stacked: true,
      });
      charts.push({
        title: "ROI Analysis",
        subtitle: "Return on investment",
        type: "line",
        data: months.map((m, i) => ({
          month: m,
          roi: 15 + i * 0.5,
          target: 18,
        })),
        dataKeys: ["roi", "target"],
        xAxisKey: "month",
      });
      break;
      
    case "risk-compliance":
      charts.push({
        title: "Risk Exposure",
        subtitle: "Risk levels by category",
        type: "bar",
        data: [
          { category: "High", value: 5 },
          { category: "Medium", value: 12 },
          { category: "Low", value: 45 },
        ],
        dataKeys: ["value"],
        xAxisKey: "category",
      });
      charts.push({
        title: "Compliance Status",
        subtitle: "Audit results",
        type: "line",
        data: months.map((m, i) => ({
          month: m,
          compliance: 92 + i * 0.5,
          target: 95,
        })),
        dataKeys: ["compliance", "target"],
        xAxisKey: "month",
      });
      break;
      
    case "forecasting-planning":
      charts.push({
        title: "Forecast vs Actual",
        subtitle: "Predictive analytics",
        type: "area",
        data: [
          ...months.slice(0, 3).map((m, i) => ({
            month: m,
            actual: 100 + i * 5,
            forecast: 100 + i * 5,
          })),
          ...months.slice(3).map((m, i) => ({
            month: m,
            actual: null,
            forecast: 115 + (i + 3) * 6,
          })),
        ],
        dataKeys: ["actual", "forecast"],
        xAxisKey: "month",
      });
      charts.push({
        title: "Growth Projections",
        subtitle: "Future trends",
        type: "line",
        data: months.map((m, i) => ({
          month: m,
          projected: 100 + i * 8,
          baseline: 100 + i * 3,
        })),
        dataKeys: ["projected", "baseline"],
        xAxisKey: "month",
      });
      break;
      
    case "process-optimization":
      charts.push({
        title: "Process Bottlenecks",
        subtitle: "Performance analysis",
        type: "bar",
        data: [
          { process: "Step 1", time: 45, target: 30 },
          { process: "Step 2", time: 60, target: 40 },
          { process: "Step 3", time: 35, target: 25 },
        ],
        dataKeys: ["time", "target"],
        xAxisKey: "process",
      });
      charts.push({
        title: "Optimization Impact",
        subtitle: "Before vs after",
        type: "line",
        data: months.map((m, i) => ({
          month: m,
          before: 100 - i * 2,
          after: 100 - i * 5,
        })),
        dataKeys: ["before", "after"],
        xAxisKey: "month",
      });
      break;
      
    case "team-performance":
      charts.push({
        title: "Team Productivity",
        subtitle: "Performance metrics",
        type: "area",
        data: months.map((m, i) => ({
          month: m,
          productivity: 75 + i * 2,
          target: 80,
        })),
        dataKeys: ["productivity", "target"],
        xAxisKey: "month",
      });
      charts.push({
        title: "Team Distribution",
        subtitle: "By performance level",
        type: "bar",
        data: [
          { level: "High", count: 15 },
          { level: "Medium", count: 25 },
          { level: "Low", count: 5 },
        ],
        dataKeys: ["count"],
        xAxisKey: "level",
      });
      break;
      
    case "customer-impact":
      charts.push({
        title: "Customer Satisfaction",
        subtitle: "CSAT trends",
        type: "line",
        data: months.map((m, i) => ({
          month: m,
          satisfaction: 85 + i * 1,
          target: 90,
        })),
        dataKeys: ["satisfaction", "target"],
        xAxisKey: "month",
      });
      charts.push({
        title: "Customer Metrics",
        subtitle: "Key indicators",
        type: "bar",
        data: [
          { metric: "Retention", value: 92 },
          { metric: "Churn", value: 8 },
          { metric: "NPS", value: 65 },
        ],
        dataKeys: ["value"],
        xAxisKey: "metric",
      });
      break;
      
    case "anomaly-detection":
      charts.push({
        title: "Anomaly Detection",
        subtitle: "Unusual patterns",
        type: "line",
        data: months.map((m, i) => ({
          month: m,
          normal: 100,
          anomaly: i === 2 || i === 4 ? 150 : 100,
        })),
        dataKeys: ["normal", "anomaly"],
        xAxisKey: "month",
      });
      charts.push({
        title: "Anomaly Distribution",
        subtitle: "By severity",
        type: "bar",
        data: [
          { severity: "Critical", count: 2 },
          { severity: "Warning", count: 5 },
          { severity: "Info", count: 12 },
        ],
        dataKeys: ["count"],
        xAxisKey: "severity",
      });
      break;
      
    case "strategic-insights":
      charts.push({
        title: "Strategic Trends",
        subtitle: "Long-term analysis",
        type: "area",
        data: months.map((m, i) => ({
          month: m,
          trend: 100 + i * 10,
          benchmark: 100 + i * 5,
        })),
        dataKeys: ["trend", "benchmark"],
        xAxisKey: "month",
      });
      charts.push({
        title: "Strategic Metrics",
        subtitle: "Key indicators",
        type: "bar",
        data: [
          { metric: "Growth", value: 120 },
          { metric: "Market Share", value: 85 },
          { metric: "Innovation", value: 75 },
        ],
        dataKeys: ["value"],
        xAxisKey: "metric",
      });
      break;
  }
  
  return charts.slice(0, 2); // Ensure exactly 2 charts
}

/**
 * Generate table data based on category
 */
export function generateTable(
  category: TemplateCategory,
  industryId: string,
  departmentId: string
): TableConfig {
  const baseColumns = [
    { key: "id", label: "ID", sortable: true },
    { key: "name", label: "Name", sortable: true },
    { key: "status", label: "Status", sortable: true },
    { key: "value", label: "Value", sortable: true },
  ];
  
  const baseData = Array.from({ length: 10 }, (_, i) => ({
    id: `#${1000 + i}`,
    name: `Item ${i + 1}`,
    status: i % 3 === 0 ? "Active" : i % 3 === 1 ? "Pending" : "Completed",
    value: (100 + i * 10).toFixed(2),
  }));
  
  return {
    title: "Data Overview",
    columns: baseColumns,
    data: baseData,
    searchKey: "name",
  };
}

/**
 * Generate AI insights based on category
 */
export function generateInsights(
  category: TemplateCategory,
  industryId: string,
  departmentId: string
): InsightConfig[] {
  const insights: InsightConfig[] = [];
  
  switch (category) {
    case "executive-overview":
      insights.push({
        type: "trend",
        title: "Positive Growth Trend",
        description: "Overall metrics show consistent upward trajectory",
        impact: "high",
      });
      insights.push({
        type: "recommendation",
        title: "Focus on Efficiency",
        description: "Consider optimizing operational processes",
        impact: "medium",
      });
      insights.push({
        type: "prediction",
        title: "Q4 Projection",
        description: "Expected 15% growth in next quarter",
        impact: "high",
      });
      insights.push({
        type: "anomaly",
        title: "Unusual Pattern Detected",
        description: "Minor deviation in department metrics",
        impact: "low",
      });
      break;
      
    case "operational-performance":
      insights.push({
        type: "recommendation",
        title: "Process Optimization",
        description: "Identify bottlenecks in workflow",
        impact: "high",
      });
      insights.push({
        type: "trend",
        title: "Performance Improvement",
        description: "Operational metrics trending upward",
        impact: "medium",
      });
      insights.push({
        type: "prediction",
        title: "Efficiency Forecast",
        description: "Expected 8% improvement next month",
        impact: "medium",
      });
      insights.push({
        type: "anomaly",
        title: "Performance Dip",
        description: "Temporary decrease in efficiency",
        impact: "low",
      });
      break;
      
    case "financial-impact":
      insights.push({
        type: "prediction",
        title: "Revenue Growth",
        description: "Projected 12% increase in revenue",
        impact: "high",
      });
      insights.push({
        type: "recommendation",
        title: "Cost Optimization",
        description: "Opportunity to reduce operational costs",
        impact: "high",
      });
      insights.push({
        type: "trend",
        title: "Profit Margin Trend",
        description: "Steady improvement in profitability",
        impact: "medium",
      });
      insights.push({
        type: "anomaly",
        title: "Budget Variance",
        description: "Minor deviation from budget forecast",
        impact: "low",
      });
      break;
      
    case "risk-compliance":
      insights.push({
        type: "anomaly",
        title: "Risk Alert",
        description: "Increased risk exposure detected",
        impact: "high",
      });
      insights.push({
        type: "recommendation",
        title: "Compliance Review",
        description: "Schedule audit for compliance check",
        impact: "high",
      });
      insights.push({
        type: "trend",
        title: "Compliance Trend",
        description: "Compliance metrics improving",
        impact: "medium",
      });
      insights.push({
        type: "prediction",
        title: "Risk Forecast",
        description: "Expected reduction in risk levels",
        impact: "low",
      });
      break;
      
    case "forecasting-planning":
      insights.push({
        type: "prediction",
        title: "Growth Forecast",
        description: "Strong growth projected for next quarter",
        impact: "high",
      });
      insights.push({
        type: "recommendation",
        title: "Resource Planning",
        description: "Adjust resources based on forecast",
        impact: "high",
      });
      insights.push({
        type: "trend",
        title: "Forecast Accuracy",
        description: "Historical forecasts showing high accuracy",
        impact: "medium",
      });
      insights.push({
        type: "anomaly",
        title: "Forecast Variance",
        description: "Minor deviation from projected values",
        impact: "low",
      });
      break;
      
    default:
      // Default insights for other categories
      insights.push({
        type: "trend",
        title: "Positive Trend",
        description: "Metrics showing improvement",
        impact: "medium",
      });
      insights.push({
        type: "recommendation",
        title: "Optimization Opportunity",
        description: "Potential for process improvement",
        impact: "medium",
      });
      insights.push({
        type: "prediction",
        title: "Future Projection",
        description: "Expected positive outcomes",
        impact: "low",
      });
      insights.push({
        type: "anomaly",
        title: "Pattern Detected",
        description: "Unusual pattern in data",
        impact: "low",
      });
  }
  
  return insights.slice(0, 4); // Ensure exactly 4 insights
}

/**
 * Format value based on industry/department context
 */
function formatValue(value: number, industryId: string, departmentId: string): string {
  // Financial industries use currency
  if (["finance", "banking", "insurance"].includes(industryId)) {
    if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
    if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
    return `₹${value.toFixed(0)}`;
  }
  
  // Percentage for certain metrics
  if (departmentId.includes("quality") || departmentId.includes("efficiency")) {
    return `${value.toFixed(1)}%`;
  }
  
  // Default formatting
  if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
  return value.toFixed(0);
}
