/**
 * Industry & Department Specific Chart Generator
 * 
 * Generates unique, context-aware charts for each template category
 * based on industry, department, and template type
 */

import { ChartConfig } from "../departmentData";
import { TemplateCategory } from "./types";

/**
 * Generate industry and department-specific charts
 * Uses the new V2 generator for unique charts per department-template combination
 */
import { generateUniqueCharts as generateUniqueChartsV2 } from "./chartGeneratorV2";

export function generateIndustryDepartmentCharts(
  category: TemplateCategory,
  industryId: string,
  departmentId: string
): ChartConfig[] {
  // Use the new V2 generator that ensures uniqueness
  return generateUniqueChartsV2(category, industryId, departmentId);
}

/**
 * Get chart generator for specific industry-department combination
 */
function getChartGenerator(industryId: string, departmentId: string) {
  // Manufacturing industry
  if (industryId === "manufacturing") {
    if (departmentId === "production") {
      return manufacturingProductionCharts();
    } else if (departmentId === "research") {
      return manufacturingResearchCharts();
    } else if (departmentId === "supply-chain") {
      return manufacturingSupplyChainCharts();
    }
  }
  
  // Healthcare industry
  if (industryId === "healthcare") {
    if (departmentId === "clinical") {
      return healthcareClinicalCharts();
    }
  }
  
  // Retail industry
  if (industryId === "retail") {
    if (departmentId === "store-ops") {
      return retailStoreOpsCharts();
    } else if (departmentId === "supply-chain") {
      return retailSupplyChainCharts();
    }
  }
  
  // Finance industry
  if (industryId === "finance") {
    if (departmentId === "treasury") {
      return financeTreasuryCharts();
    } else if (departmentId === "risk") {
      return financeRiskCharts();
    }
  }
  
  // HR industry
  if (industryId === "hr") {
    if (departmentId === "talent") {
      return hrTalentCharts();
    }
  }
  
  // Department-specific chart generators (accounts, hr, sales, operations, it, etc.)
  // These work across all industries but are department-specific
  return getDepartmentSpecificCharts(industryId, departmentId);
}

/**
 * Manufacturing - Production Charts
 */
function manufacturingProductionCharts() {
  return {
    executiveOverview: (months: string[]) => [
      {
        title: "Production Output Overview",
        subtitle: "Monthly production volume and efficiency",
        type: "area" as const,
        data: months.map((m, i) => ({
          month: m,
          output: 10000 + i * 500,
          target: 10500 + i * 400,
          efficiency: 85 + i * 1.5,
        })),
        dataKeys: ["output", "target", "efficiency"],
        xAxisKey: "month",
      },
      {
        title: "OEE by Production Line",
        subtitle: "Overall Equipment Effectiveness",
        type: "bar" as const,
        data: [
          { line: "Line A", oee: 88, target: 85 },
          { line: "Line B", oee: 92, target: 85 },
          { line: "Line C", oee: 85, target: 85 },
          { line: "Line D", oee: 90, target: 85 },
        ],
        dataKeys: ["oee", "target"],
        xAxisKey: "line",
      },
    ],
    operationalPerformance: (months: string[]) => [
      {
        title: "Real-Time Production Rate",
        subtitle: "Units per hour",
        type: "line" as const,
        data: months.map((m, i) => ({
          month: m,
          rate: 450 + i * 15,
          target: 500,
        })),
        dataKeys: ["rate", "target"],
        xAxisKey: "month",
      },
      {
        title: "Machine Utilization",
        subtitle: "By equipment type",
        type: "bar" as const,
        data: [
          { equipment: "CNC", utilization: 92 },
          { equipment: "Assembly", utilization: 88 },
          { equipment: "Packaging", utilization: 85 },
        ],
        dataKeys: ["utilization"],
        xAxisKey: "equipment",
      },
    ],
    financialImpact: (months: string[]) => [
      {
        title: "Production Cost Analysis",
        subtitle: "Cost per unit trends",
        type: "area" as const,
        data: months.map((m, i) => ({
          month: m,
          material: 25 - i * 0.5,
          labor: 15 - i * 0.3,
          overhead: 10 - i * 0.2,
        })),
        dataKeys: ["material", "labor", "overhead"],
        xAxisKey: "month",
        stacked: true,
      },
      {
        title: "Production ROI",
        subtitle: "Return on production investment",
        type: "line" as const,
        data: months.map((m, i) => ({
          month: m,
          roi: 18 + i * 0.8,
          target: 20,
        })),
        dataKeys: ["roi", "target"],
        xAxisKey: "month",
      },
    ],
    riskCompliance: (months: string[]) => [
      {
        title: "Safety Incidents",
        subtitle: "By severity level",
        type: "bar" as const,
        data: [
          { severity: "Critical", count: 0 },
          { severity: "High", count: 2 },
          { severity: "Medium", count: 5 },
          { severity: "Low", count: 12 },
        ],
        dataKeys: ["count"],
        xAxisKey: "severity",
      },
      {
        title: "Compliance Score",
        subtitle: "Quality and safety compliance",
        type: "line" as const,
        data: months.map((m, i) => ({
          month: m,
          compliance: 95 + i * 0.3,
          target: 98,
        })),
        dataKeys: ["compliance", "target"],
        xAxisKey: "month",
      },
    ],
    forecastingPlanning: (months: string[]) => [
      {
        title: "Production Forecast",
        subtitle: "Projected vs planned output",
        type: "area" as const,
        data: [
          ...months.slice(0, 3).map((m, i) => ({
            month: m,
            actual: 10000 + i * 500,
            forecast: 10000 + i * 500,
          })),
          ...months.slice(3).map((m, i) => ({
            month: m,
            actual: null,
            forecast: 11500 + (i + 3) * 600,
          })),
        ],
        dataKeys: ["actual", "forecast"],
        xAxisKey: "month",
      },
      {
        title: "Capacity Planning",
        subtitle: "Future capacity requirements",
        type: "line" as const,
        data: months.map((m, i) => ({
          month: m,
          required: 12000 + i * 800,
          available: 15000,
        })),
        dataKeys: ["required", "available"],
        xAxisKey: "month",
      },
    ],
    processOptimization: (months: string[]) => [
      {
        title: "Bottleneck Analysis",
        subtitle: "Process step performance",
        type: "bar" as const,
        data: [
          { step: "Raw Material", time: 2.5, target: 2.0 },
          { step: "Processing", time: 8.5, target: 7.0 },
          { step: "Quality Check", time: 1.5, target: 1.0 },
          { step: "Packaging", time: 3.0, target: 2.5 },
        ],
        dataKeys: ["time", "target"],
        xAxisKey: "step",
      },
      {
        title: "Optimization Impact",
        subtitle: "Before vs after improvements",
        type: "line" as const,
        data: months.map((m, i) => ({
          month: m,
          before: 100 - i * 3,
          after: 100 - i * 6,
        })),
        dataKeys: ["before", "after"],
        xAxisKey: "month",
      },
    ],
    teamPerformance: (months: string[]) => [
      {
        title: "Production Team Productivity",
        subtitle: "Output per team member",
        type: "area" as const,
        data: months.map((m, i) => ({
          month: m,
          productivity: 85 + i * 2,
          target: 90,
        })),
        dataKeys: ["productivity", "target"],
        xAxisKey: "month",
      },
      {
        title: "Team Performance Distribution",
        subtitle: "By shift",
        type: "bar" as const,
        data: [
          { shift: "Morning", performance: 92 },
          { shift: "Afternoon", performance: 88 },
          { shift: "Night", performance: 85 },
        ],
        dataKeys: ["performance"],
        xAxisKey: "shift",
      },
    ],
    customerImpact: (months: string[]) => [
      {
        title: "On-Time Delivery",
        subtitle: "Customer delivery performance",
        type: "line" as const,
        data: months.map((m, i) => ({
          month: m,
          delivery: 92 + i * 1,
          target: 95,
        })),
        dataKeys: ["delivery", "target"],
        xAxisKey: "month",
      },
      {
        title: "Quality Metrics",
        subtitle: "Customer satisfaction indicators",
        type: "bar" as const,
        data: [
          { metric: "Defect Rate", value: 0.8 },
          { metric: "Rework Rate", value: 2.5 },
          { metric: "Customer Returns", value: 1.2 },
        ],
        dataKeys: ["value"],
        xAxisKey: "metric",
      },
    ],
    anomalyDetection: (months: string[]) => [
      {
        title: "Production Anomalies",
        subtitle: "Unusual patterns detected",
        type: "line" as const,
        data: months.map((m, i) => ({
          month: m,
          normal: 100,
          anomaly: i === 2 || i === 4 ? 150 : 100,
        })),
        dataKeys: ["normal", "anomaly"],
        xAxisKey: "month",
      },
      {
        title: "Anomaly Distribution",
        subtitle: "By type",
        type: "bar" as const,
        data: [
          { type: "Equipment Failure", count: 2 },
          { type: "Quality Issue", count: 5 },
          { type: "Supply Delay", count: 3 },
        ],
        dataKeys: ["count"],
        xAxisKey: "type",
      },
    ],
    strategicInsights: (months: string[]) => [
      {
        title: "Long-Term Production Trends",
        subtitle: "Strategic growth analysis",
        type: "area" as const,
        data: months.map((m, i) => ({
          month: m,
          trend: 10000 + i * 800,
          benchmark: 10000 + i * 500,
        })),
        dataKeys: ["trend", "benchmark"],
        xAxisKey: "month",
      },
      {
        title: "Strategic Production Metrics",
        subtitle: "Key indicators",
        type: "bar" as const,
        data: [
          { metric: "Market Share", value: 25 },
          { metric: "Capacity Growth", value: 15 },
          { metric: "Innovation Index", value: 75 },
        ],
        dataKeys: ["value"],
        xAxisKey: "metric",
      },
    ],
  };
}

/**
 * Manufacturing - Research & Development Charts
 */
function manufacturingResearchCharts() {
  return {
    executiveOverview: (months: string[]) => [
      {
        title: "R&D Portfolio Overview",
        subtitle: "Projects and investment summary",
        type: "area" as const,
        data: months.map((m, i) => ({
          month: m,
          projects: 25 + i * 2,
          investment: 500000 + i * 50000,
        })),
        dataKeys: ["projects", "investment"],
        xAxisKey: "month",
      },
      {
        title: "R&D Projects by Stage",
        subtitle: "Pipeline distribution",
        type: "bar" as const,
        data: [
          { stage: "Discovery", count: 8 },
          { stage: "Development", count: 12 },
          { stage: "Testing", count: 5 },
        ],
        dataKeys: ["count"],
        xAxisKey: "stage",
      },
    ],
    operationalPerformance: (months: string[]) => [
      {
        title: "Research Progress Rate",
        subtitle: "Milestones achieved",
        type: "line" as const,
        data: months.map((m, i) => ({
          month: m,
          progress: 65 + i * 5,
          target: 75,
        })),
        dataKeys: ["progress", "target"],
        xAxisKey: "month",
      },
      {
        title: "Resource Allocation",
        subtitle: "By research area",
        type: "bar" as const,
        data: [
          { area: "Product Innovation", allocation: 40 },
          { area: "Process Improvement", allocation: 35 },
          { area: "Technology", allocation: 25 },
        ],
        dataKeys: ["allocation"],
        xAxisKey: "area",
      },
    ],
    financialImpact: (months: string[]) => [
      {
        title: "R&D Investment vs Returns",
        subtitle: "Financial impact analysis",
        type: "area" as const,
        data: months.map((m, i) => ({
          month: m,
          investment: 500000 + i * 25000,
          returns: 200000 + i * 30000,
        })),
        dataKeys: ["investment", "returns"],
        xAxisKey: "month",
      },
      {
        title: "R&D ROI",
        subtitle: "Return on research investment",
        type: "line" as const,
        data: months.map((m, i) => ({
          month: m,
          roi: 25 + i * 1.5,
          target: 30,
        })),
        dataKeys: ["roi", "target"],
        xAxisKey: "month",
      },
    ],
    riskCompliance: (months: string[]) => [
      {
        title: "Research Risk Assessment",
        subtitle: "By project risk level",
        type: "bar" as const,
        data: [
          { level: "High Risk", count: 3 },
          { level: "Medium Risk", count: 8 },
          { level: "Low Risk", count: 14 },
        ],
        dataKeys: ["count"],
        xAxisKey: "level",
      },
      {
        title: "IP Compliance",
        subtitle: "Intellectual property compliance",
        type: "line" as const,
        data: months.map((m, i) => ({
          month: m,
          compliance: 98 + i * 0.1,
          target: 100,
        })),
        dataKeys: ["compliance", "target"],
        xAxisKey: "month",
      },
    ],
    forecastingPlanning: (months: string[]) => [
      {
        title: "R&D Pipeline Forecast",
        subtitle: "Projected project outcomes",
        type: "area" as const,
        data: [
          ...months.slice(0, 3).map((m, i) => ({
            month: m,
            actual: 25 + i * 2,
            forecast: 25 + i * 2,
          })),
          ...months.slice(3).map((m, i) => ({
            month: m,
            actual: null,
            forecast: 31 + (i + 3) * 3,
          })),
        ],
        dataKeys: ["actual", "forecast"],
        xAxisKey: "month",
      },
      {
        title: "Innovation Roadmap",
        subtitle: "Future research priorities",
        type: "line" as const,
        data: months.map((m, i) => ({
          month: m,
          planned: 30 + i * 2,
          capacity: 35,
        })),
        dataKeys: ["planned", "capacity"],
        xAxisKey: "month",
      },
    ],
    processOptimization: (months: string[]) => [
      {
        title: "Research Process Efficiency",
        subtitle: "Time to market analysis",
        type: "bar" as const,
        data: [
          { phase: "Discovery", time: 6, target: 4 },
          { phase: "Development", time: 12, target: 10 },
          { phase: "Testing", time: 8, target: 6 },
        ],
        dataKeys: ["time", "target"],
        xAxisKey: "phase",
      },
      {
        title: "Process Improvement Impact",
        subtitle: "Time reduction over months",
        type: "line" as const,
        data: months.map((m, i) => ({
          month: m,
          before: 26 - i * 0.5,
          after: 26 - i * 1.2,
        })),
        dataKeys: ["before", "after"],
        xAxisKey: "month",
      },
    ],
    teamPerformance: (months: string[]) => [
      {
        title: "Research Team Productivity",
        subtitle: "Output per researcher",
        type: "area" as const,
        data: months.map((m, i) => ({
          month: m,
          productivity: 75 + i * 2.5,
          target: 80,
        })),
        dataKeys: ["productivity", "target"],
        xAxisKey: "month",
      },
      {
        title: "Team Expertise Distribution",
        subtitle: "By research domain",
        type: "bar" as const,
        data: [
          { domain: "Engineering", count: 15 },
          { domain: "Science", count: 12 },
          { domain: "Technology", count: 8 },
        ],
        dataKeys: ["count"],
        xAxisKey: "domain",
      },
    ],
    customerImpact: (months: string[]) => [
      {
        title: "Innovation Impact",
        subtitle: "Customer-facing innovations",
        type: "line" as const,
        data: months.map((m, i) => ({
          month: m,
          innovations: 5 + i * 0.5,
          target: 8,
        })),
        dataKeys: ["innovations", "target"],
        xAxisKey: "month",
      },
      {
        title: "Market Impact Metrics",
        subtitle: "Customer value indicators",
        type: "bar" as const,
        data: [
          { metric: "New Products", value: 8 },
          { metric: "Patents Filed", value: 12 },
          { metric: "Market Share", value: 15 },
        ],
        dataKeys: ["value"],
        xAxisKey: "metric",
      },
    ],
    anomalyDetection: (months: string[]) => [
      {
        title: "Research Anomalies",
        subtitle: "Unusual patterns in R&D",
        type: "line" as const,
        data: months.map((m, i) => ({
          month: m,
          normal: 100,
          anomaly: i === 1 || i === 3 ? 180 : 100,
        })),
        dataKeys: ["normal", "anomaly"],
        xAxisKey: "month",
      },
      {
        title: "Anomaly Types",
        subtitle: "By category",
        type: "bar" as const,
        data: [
          { type: "Project Delay", count: 3 },
          { type: "Budget Overrun", count: 2 },
          { type: "Technical Issue", count: 4 },
        ],
        dataKeys: ["count"],
        xAxisKey: "type",
      },
    ],
    strategicInsights: (months: string[]) => [
      {
        title: "Long-Term R&D Strategy",
        subtitle: "Strategic research trends",
        type: "area" as const,
        data: months.map((m, i) => ({
          month: m,
          strategy: 500000 + i * 60000,
          benchmark: 500000 + i * 40000,
        })),
        dataKeys: ["strategy", "benchmark"],
        xAxisKey: "month",
      },
      {
        title: "Strategic R&D Metrics",
        subtitle: "Key strategic indicators",
        type: "bar" as const,
        data: [
          { metric: "Innovation Index", value: 85 },
          { metric: "Market Leadership", value: 75 },
          { metric: "Future Readiness", value: 80 },
        ],
        dataKeys: ["value"],
        xAxisKey: "metric",
      },
    ],
  };
}

/**
 * Department-specific charts that adapt based on department type
 * Each department gets unique charts for each template category
 */
function getDepartmentSpecificCharts(industryId: string, departmentId: string) {
  // Department-specific chart configurations
  const deptConfig = getDepartmentChartConfig(departmentId);
  const deptName = formatDepartmentName(departmentId);
  
  return {
    executiveOverview: (months: string[]) => [
      {
        title: deptConfig.executive.title,
        subtitle: deptConfig.executive.subtitle,
        type: deptConfig.executive.type,
        data: months.map((m, i) => ({
          month: m,
          ...deptConfig.executive.dataGenerator(i),
        })),
        dataKeys: deptConfig.executive.dataKeys,
        xAxisKey: "month",
      },
      {
        title: deptConfig.executive.secondTitle,
        subtitle: deptConfig.executive.secondSubtitle,
        type: deptConfig.executive.secondType,
        data: deptConfig.executive.secondData,
        dataKeys: deptConfig.executive.secondDataKeys,
        xAxisKey: deptConfig.executive.secondXAxis,
      },
    ],
    operationalPerformance: (months: string[]) => [
      {
        title: "Operational Metrics",
        subtitle: "Daily performance",
        type: "line" as const,
        data: months.map((m, i) => ({
          month: m,
          performance: 85 + i * 1.5,
          target: 90,
        })),
        dataKeys: ["performance", "target"],
        xAxisKey: "month",
      },
      {
        title: "Process Distribution",
        subtitle: "By process type",
        type: "bar" as const,
        data: [
          { process: "Process A", value: 45 },
          { process: "Process B", value: 35 },
          { process: "Process C", value: 20 },
        ],
        dataKeys: ["value"],
        xAxisKey: "process",
      },
    ],
    financialImpact: (months: string[]) => [
      {
        title: "Financial Performance",
        subtitle: "Revenue and costs",
        type: "area" as const,
        data: months.map((m, i) => ({
          month: m,
          revenue: 500 + i * 20,
          cost: 350 + i * 15,
        })),
        dataKeys: ["revenue", "cost"],
        xAxisKey: "month",
      },
      {
        title: "ROI Analysis",
        subtitle: "Return on investment",
        type: "line" as const,
        data: months.map((m, i) => ({
          month: m,
          roi: 15 + i * 0.5,
          target: 18,
        })),
        dataKeys: ["roi", "target"],
        xAxisKey: "month",
      },
    ],
    riskCompliance: (months: string[]) => [
      {
        title: "Risk Distribution",
        subtitle: "By risk level",
        type: "bar" as const,
        data: [
          { level: "High", count: 5 },
          { level: "Medium", count: 12 },
          { level: "Low", count: 45 },
        ],
        dataKeys: ["count"],
        xAxisKey: "level",
      },
      {
        title: "Compliance Trend",
        subtitle: "Compliance over time",
        type: "line" as const,
        data: months.map((m, i) => ({
          month: m,
          compliance: 92 + i * 0.5,
          target: 95,
        })),
        dataKeys: ["compliance", "target"],
        xAxisKey: "month",
      },
    ],
    forecastingPlanning: (months: string[]) => [
      {
        title: "Forecast vs Actual",
        subtitle: "Predictive analytics",
        type: "area" as const,
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
      },
      {
        title: "Growth Projections",
        subtitle: "Future trends",
        type: "line" as const,
        data: months.map((m, i) => ({
          month: m,
          projected: 100 + i * 8,
          baseline: 100 + i * 3,
        })),
        dataKeys: ["projected", "baseline"],
        xAxisKey: "month",
      },
    ],
    processOptimization: (months: string[]) => [
      {
        title: "Process Bottlenecks",
        subtitle: "Performance analysis",
        type: "bar" as const,
        data: [
          { step: "Step 1", time: 45, target: 30 },
          { step: "Step 2", time: 60, target: 40 },
          { step: "Step 3", time: 35, target: 25 },
        ],
        dataKeys: ["time", "target"],
        xAxisKey: "step",
      },
      {
        title: "Optimization Impact",
        subtitle: "Before vs after",
        type: "line" as const,
        data: months.map((m, i) => ({
          month: m,
          before: 100 - i * 2,
          after: 100 - i * 5,
        })),
        dataKeys: ["before", "after"],
        xAxisKey: "month",
      },
    ],
    teamPerformance: (months: string[]) => [
      {
        title: "Team Productivity",
        subtitle: "Performance metrics",
        type: "area" as const,
        data: months.map((m, i) => ({
          month: m,
          productivity: 75 + i * 2,
          target: 80,
        })),
        dataKeys: ["productivity", "target"],
        xAxisKey: "month",
      },
      {
        title: "Team Distribution",
        subtitle: "By performance level",
        type: "bar" as const,
        data: [
          { level: "High", count: 15 },
          { level: "Medium", count: 25 },
          { level: "Low", count: 5 },
        ],
        dataKeys: ["count"],
        xAxisKey: "level",
      },
    ],
    customerImpact: (months: string[]) => [
      {
        title: "Customer Satisfaction",
        subtitle: "CSAT trends",
        type: "line" as const,
        data: months.map((m, i) => ({
          month: m,
          satisfaction: 85 + i * 1,
          target: 90,
        })),
        dataKeys: ["satisfaction", "target"],
        xAxisKey: "month",
      },
      {
        title: "Customer Metrics",
        subtitle: "Key indicators",
        type: "bar" as const,
        data: [
          { metric: "Retention", value: 92 },
          { metric: "Churn", value: 8 },
          { metric: "NPS", value: 65 },
        ],
        dataKeys: ["value"],
        xAxisKey: "metric",
      },
    ],
    anomalyDetection: (months: string[]) => [
      {
        title: "Anomaly Detection",
        subtitle: "Unusual patterns",
        type: "line" as const,
        data: months.map((m, i) => ({
          month: m,
          normal: 100,
          anomaly: i === 2 || i === 4 ? 150 : 100,
        })),
        dataKeys: ["normal", "anomaly"],
        xAxisKey: "month",
      },
      {
        title: "Anomaly Distribution",
        subtitle: "By severity",
        type: "bar" as const,
        data: [
          { severity: "Critical", count: 2 },
          { severity: "Warning", count: 5 },
          { severity: "Info", count: 12 },
        ],
        dataKeys: ["count"],
        xAxisKey: "severity",
      },
    ],
    strategicInsights: (months: string[]) => [
      {
        title: "Strategic Trends",
        subtitle: "Long-term analysis",
        type: "area" as const,
        data: months.map((m, i) => ({
          month: m,
          trend: 100 + i * 10,
          benchmark: 100 + i * 5,
        })),
        dataKeys: ["trend", "benchmark"],
        xAxisKey: "month",
      },
      {
        title: "Strategic Metrics",
        subtitle: "Key indicators",
        type: "bar" as const,
        data: [
          { metric: "Growth", value: 120 },
          { metric: "Market Share", value: 85 },
          { metric: "Innovation", value: 75 },
        ],
        dataKeys: ["value"],
        xAxisKey: "metric",
      },
    ],
  };
}

// Add more specific chart generators for other industries/departments
// For brevity, I'll add a few key ones and the pattern is clear

/**
 * Format department name for display
 */
function formatDepartmentName(departmentId: string): string {
  return departmentId
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Get department-specific chart configuration
 */
function getDepartmentChartConfig(departmentId: string) {
  const configs: Record<string, any> = {
    accounts: {
      executive: {
        title: "Financial Overview",
        subtitle: "Revenue, expenses, and profit trends",
        type: "area" as const,
        dataGenerator: (i: number) => ({
          revenue: 1000000 + i * 50000,
          expenses: 700000 + i * 30000,
          profit: 300000 + i * 20000,
        }),
        dataKeys: ["revenue", "expenses", "profit"],
        secondTitle: "Budget vs Actual",
        secondSubtitle: "By category",
        secondType: "bar" as const,
        secondData: [
          { category: "Operations", budget: 500000, actual: 480000 },
          { category: "Marketing", budget: 200000, actual: 210000 },
          { category: "Technology", budget: 300000, actual: 290000 },
        ],
        secondDataKeys: ["budget", "actual"],
        secondXAxis: "category",
      },
      operational: {
        title: "Daily Financial Operations",
        subtitle: "Transaction volume and processing",
        type: "line" as const,
        dataGenerator: (i: number) => ({
          transactions: 1000 + i * 50,
          processed: 950 + i * 45,
        }),
        dataKeys: ["transactions", "processed"],
        secondTitle: "Payment Methods",
        secondSubtitle: "Distribution",
        secondType: "bar" as const,
        secondData: [
          { method: "Credit", volume: 45 },
          { method: "Debit", volume: 35 },
          { method: "Cash", volume: 20 },
        ],
        secondDataKeys: ["volume"],
        secondXAxis: "method",
      },
      // Add more categories...
    },
    hr: {
      executive: {
        title: "Workforce Overview",
        subtitle: "Headcount and engagement trends",
        type: "area" as const,
        dataGenerator: (i: number) => ({
          headcount: 500 + i * 10,
          engaged: 425 + i * 8,
          active: 475 + i * 9,
        }),
        dataKeys: ["headcount", "engaged", "active"],
        secondTitle: "Department Distribution",
        secondSubtitle: "By department",
        secondType: "bar" as const,
        secondData: [
          { dept: "Engineering", count: 150 },
          { dept: "Sales", count: 100 },
          { dept: "Operations", count: 80 },
        ],
        secondDataKeys: ["count"],
        secondXAxis: "dept",
      },
      operational: {
        title: "Recruitment Pipeline",
        subtitle: "Hiring metrics",
        type: "line" as const,
        dataGenerator: (i: number) => ({
          candidates: 200 + i * 15,
          interviews: 50 + i * 3,
        }),
        dataKeys: ["candidates", "interviews"],
        secondTitle: "Time to Hire",
        secondSubtitle: "By role",
        secondType: "bar" as const,
        secondData: [
          { role: "Engineer", days: 28 },
          { role: "Manager", days: 35 },
          { role: "Executive", days: 45 },
        ],
        secondDataKeys: ["days"],
        secondXAxis: "role",
      },
    },
    sales: {
      executive: {
        title: "Sales Performance Overview",
        subtitle: "Revenue and pipeline trends",
        type: "area" as const,
        dataGenerator: (i: number) => ({
          revenue: 2000000 + i * 100000,
          pipeline: 5000000 + i * 200000,
          closed: 1500000 + i * 80000,
        }),
        dataKeys: ["revenue", "pipeline", "closed"],
        secondTitle: "Sales by Region",
        secondSubtitle: "Geographic distribution",
        secondType: "bar" as const,
        secondData: [
          { region: "North", sales: 800000 },
          { region: "South", sales: 600000 },
          { region: "East", sales: 400000 },
        ],
        secondDataKeys: ["sales"],
        secondXAxis: "region",
      },
      operational: {
        title: "Sales Activity",
        subtitle: "Daily sales metrics",
        type: "line" as const,
        dataGenerator: (i: number) => ({
          calls: 500 + i * 20,
          meetings: 150 + i * 5,
        }),
        dataKeys: ["calls", "meetings"],
        secondTitle: "Conversion Funnel",
        secondSubtitle: "By stage",
        secondType: "bar" as const,
        secondData: [
          { stage: "Leads", count: 1000 },
          { stage: "Qualified", count: 400 },
          { stage: "Proposals", count: 150 },
          { stage: "Closed", count: 50 },
        ],
        secondDataKeys: ["count"],
        secondXAxis: "stage",
      },
    },
    // Add more departments...
  };
  
  // Return config for department or default
  if (configs[departmentId]) {
    return expandConfig(configs[departmentId]);
  }
  
  // Default config for unknown departments
  return expandConfig({
    executive: {
      title: `${formatDepartmentName(departmentId)} Overview`,
      subtitle: "Key metrics summary",
      type: "area" as const,
      dataGenerator: (i: number) => ({
        value: 100 + i * 5,
        target: 110 + i * 4,
      }),
      dataKeys: ["value", "target"],
      secondTitle: "Performance by Category",
      secondSubtitle: "Department breakdown",
      secondType: "bar" as const,
      secondData: [
        { category: "Category A", value: 85 },
        { category: "Category B", value: 92 },
        { category: "Category C", value: 88 },
      ],
      secondDataKeys: ["value"],
      secondXAxis: "category",
    },
    operational: {
      title: "Operational Metrics",
      subtitle: "Daily performance",
      type: "line" as const,
      dataGenerator: (i: number) => ({
        performance: 85 + i * 1.5,
        target: 90,
      }),
      dataKeys: ["performance", "target"],
      secondTitle: "Process Distribution",
      secondSubtitle: "By process type",
      secondType: "bar" as const,
      secondData: [
        { process: "Process A", value: 45 },
        { process: "Process B", value: 35 },
        { process: "Process C", value: 20 },
      ],
      secondDataKeys: ["value"],
      secondXAxis: "process",
    },
  });
}

/**
 * Expand config to include all template categories
 */
function expandConfig(baseConfig: any) {
  return {
    executiveOverview: baseConfig.executive,
    operationalPerformance: baseConfig.operational,
    financialImpact: baseConfig.financial || baseConfig.executive,
    riskCompliance: baseConfig.risk || baseConfig.executive,
    forecastingPlanning: baseConfig.forecast || baseConfig.executive,
    processOptimization: baseConfig.process || baseConfig.operational,
    teamPerformance: baseConfig.team || baseConfig.operational,
    customerImpact: baseConfig.customer || baseConfig.executive,
    anomalyDetection: baseConfig.anomaly || baseConfig.operational,
    strategicInsights: baseConfig.strategic || baseConfig.executive,
  };
}

function manufacturingSupplyChainCharts() {
  return getDepartmentSpecificCharts("manufacturing", "supply-chain");
}

function healthcareClinicalCharts() {
  return getDepartmentSpecificCharts("healthcare", "clinical");
}

function retailStoreOpsCharts() {
  return getDepartmentSpecificCharts("retail", "store-ops");
}

function retailSupplyChainCharts() {
  return getDepartmentSpecificCharts("retail", "supply-chain");
}

function financeTreasuryCharts() {
  return getDepartmentSpecificCharts("finance", "treasury");
}

function financeRiskCharts() {
  return getDepartmentSpecificCharts("finance", "risk");
}

function hrTalentCharts() {
  return getDepartmentSpecificCharts("hr", "talent");
}
