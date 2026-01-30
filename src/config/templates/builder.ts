/**
 * Template Builder
 * 
 * Builds complete template configurations for departments
 */

import { DepartmentTemplate, TemplateCategory } from "./types";
import { DepartmentConfig } from "../departmentData";
import { generateKPIs, generateCharts, generateTable, generateInsights } from "./generator";

/**
 * Template metadata for each category
 */
const TEMPLATE_METADATA: Record<TemplateCategory, {
  name: string;
  description: string;
  audience: "executive" | "manager" | "analyst" | "operator";
  timeframe: "real-time" | "daily" | "weekly" | "monthly" | "quarterly";
}> = {
  "executive-overview": {
    name: "Executive Overview",
    description: "High-level executive dashboard with key business metrics and strategic insights",
    audience: "executive",
    timeframe: "quarterly",
  },
  "operational-performance": {
    name: "Operational Performance",
    description: "Day-to-day operational metrics and efficiency indicators",
    audience: "operator",
    timeframe: "real-time",
  },
  "financial-impact": {
    name: "Financial Impact",
    description: "Financial performance, revenue, costs, and ROI analysis",
    audience: "manager",
    timeframe: "monthly",
  },
  "risk-compliance": {
    name: "Risk & Compliance",
    description: "Risk exposure, compliance status, and audit metrics",
    audience: "manager",
    timeframe: "weekly",
  },
  "forecasting-planning": {
    name: "Forecasting & Planning",
    description: "Predictive analytics and future projections",
    audience: "manager",
    timeframe: "monthly",
  },
  "process-optimization": {
    name: "Process Optimization",
    description: "Process bottlenecks, workflow analysis, and optimization opportunities",
    audience: "operator",
    timeframe: "daily",
  },
  "team-performance": {
    name: "Team Performance",
    description: "Workforce metrics, productivity, and team analytics",
    audience: "analyst",
    timeframe: "weekly",
  },
  "customer-impact": {
    name: "Customer Impact",
    description: "Customer satisfaction, retention, and experience metrics",
    audience: "manager",
    timeframe: "weekly",
  },
  "anomaly-detection": {
    name: "Anomaly Detection",
    description: "AI-driven anomaly detection and unusual pattern identification",
    audience: "analyst",
    timeframe: "real-time",
  },
  "strategic-insights": {
    name: "Strategic Insights",
    description: "Long-term trends and strategic business intelligence",
    audience: "executive",
    timeframe: "quarterly",
  },
};

/**
 * Build all templates for a department
 */
export function buildDepartmentTemplates(
  industryId: string,
  departmentId: string,
  baseKPIs: Record<string, { value: number; change: number }>
): Record<string, DepartmentTemplate> {
  const templates: Record<string, DepartmentTemplate> = {};
  
  // Generate all 10 standard templates
  const categories: TemplateCategory[] = [
    "executive-overview",
    "operational-performance",
    "financial-impact",
    "risk-compliance",
    "forecasting-planning",
    "process-optimization",
    "team-performance",
    "customer-impact",
    "anomaly-detection",
    "strategic-insights",
  ];
  
  for (const category of categories) {
    const metadata = TEMPLATE_METADATA[category];
    
    // Generate config
    const config: DepartmentConfig = {
      kpis: generateKPIs(category, industryId, departmentId, baseKPIs),
      charts: generateCharts(category, industryId, departmentId),
      table: generateTable(category, industryId, departmentId),
      insights: generateInsights(category, industryId, departmentId),
    };
    
    // Create template
    templates[category] = {
      id: category,
      name: metadata.name,
      description: metadata.description,
      category,
      audience: metadata.audience,
      timeframe: metadata.timeframe,
      config,
    };
  }
  
  return templates;
}

/**
 * Get base KPIs for a department based on industry
 */
export function getBaseKPIs(industryId: string, departmentId: string): Record<string, { value: number; change: number }> {
  // Industry-specific base values
  const industryMultipliers: Record<string, number> = {
    finance: 1.5,
    banking: 2.0,
    insurance: 1.8,
    manufacturing: 1.2,
    retail: 1.0,
    healthcare: 1.3,
    hr: 0.8,
  };
  
  const multiplier = industryMultipliers[industryId] || 1.0;
  
  // Department-specific KPIs
  const departmentKPIs: Record<string, Record<string, { value: number; change: number }>> = {
    accounts: {
      "Total Revenue": { value: 1000000 * multiplier, change: 12.5 },
      "Profit Margin": { value: 18.5, change: 2.3 },
      "Cash Flow": { value: 250000 * multiplier, change: 8.5 },
      "Days Sales Outstanding": { value: 42, change: -3.2 },
      "Expense Ratio": { value: 65.5, change: -1.8 },
      "Budget Variance": { value: 2.5, change: -0.5 },
    },
    hr: {
      "Headcount": { value: 500 * multiplier, change: 5.2 },
      "Attrition Rate": { value: 12.5, change: -2.1 },
      "Time to Hire": { value: 28, change: -3.5 },
      "Employee Satisfaction": { value: 82.5, change: 4.2 },
      "Training Completion": { value: 88.0, change: 6.5 },
      "Cost per Hire": { value: 15000, change: -5.8 },
    },
    sales: {
      "Total Revenue": { value: 2000000 * multiplier, change: 15.5 },
      "Conversion Rate": { value: 3.5, change: 0.8 },
      "Average Deal Size": { value: 50000 * multiplier, change: 8.2 },
      "Sales Cycle": { value: 45, change: -5.5 },
      "Pipeline Value": { value: 5000000 * multiplier, change: 12.3 },
      "Win Rate": { value: 28.5, change: 3.2 },
    },
    operations: {
      "Operational Efficiency": { value: 87.5, change: 2.8 },
      "Process Throughput": { value: 1250, change: 8.5 },
      "Cycle Time": { value: 4.5, change: -12.5 },
      "Quality Score": { value: 94.2, change: 1.5 },
      "Resource Utilization": { value: 78.5, change: 3.2 },
      "Cost per Unit": { value: 125, change: -5.2 },
    },
    it: {
      "System Uptime": { value: 99.5, change: 0.2 },
      "Response Time": { value: 125, change: -15.5 },
      "Deployment Frequency": { value: 12, change: 25.0 },
      "Bug Rate": { value: 2.5, change: -18.5 },
      "Code Coverage": { value: 78.5, change: 5.2 },
      "Security Score": { value: 92.0, change: 3.5 },
    },
    "customer-service": {
      "Customer Satisfaction": { value: 88.5, change: 3.2 },
      "First Response Time": { value: 2.5, change: -15.5 },
      "Resolution Rate": { value: 92.5, change: 4.8 },
      "Ticket Volume": { value: 1250, change: -8.2 },
      "Average Handle Time": { value: 8.5, change: -12.5 },
      "Customer Retention": { value: 94.2, change: 2.5 },
    },
    procurement: {
      "Cost Savings": { value: 250000 * multiplier, change: 15.5 },
      "Vendor Performance": { value: 87.5, change: 3.2 },
      "Purchase Order Cycle": { value: 5.5, change: -8.5 },
      "Supplier Diversity": { value: 35.5, change: 5.2 },
      "Contract Compliance": { value: 94.5, change: 2.8 },
      "Inventory Turnover": { value: 8.5, change: 1.2 },
    },
    quality: {
      "Quality Score": { value: 95.5, change: 2.5 },
      "Defect Rate": { value: 1.2, change: -18.5 },
      "Compliance Rate": { value: 98.5, change: 1.2 },
      "Audit Findings": { value: 3, change: -25.0 },
      "Process Adherence": { value: 92.5, change: 3.5 },
      "Customer Complaints": { value: 0.5, change: -33.3 },
    },
    legal: {
      "Contract Compliance": { value: 96.5, change: 1.5 },
      "Legal Risk Score": { value: 8.5, change: -12.5 },
      "Contract Turnaround": { value: 5.5, change: -15.5 },
      "Regulatory Compliance": { value: 98.0, change: 2.2 },
      "Dispute Resolution Time": { value: 30, change: -18.5 },
      "Legal Cost": { value: 125000 * multiplier, change: -5.2 },
    },
    executive: {
      "Total Revenue": { value: 5000000 * multiplier, change: 18.5 },
      "Net Profit": { value: 750000 * multiplier, change: 22.5 },
      "Market Share": { value: 15.5, change: 2.8 },
      "Customer Growth": { value: 25.5, change: 8.5 },
      "Employee Count": { value: 2500 * multiplier, change: 12.5 },
      "Brand Value": { value: 100000000 * multiplier, change: 15.2 },
    },
  };
  
  // Department-specific mappings for industry-specific departments
  const industrySpecificKPIs: Record<string, Record<string, { value: number; change: number }>> = {
    production: {
      "Production Output": { value: 10000 * multiplier, change: 8.5 },
      "OEE": { value: 85.5, change: 3.2 },
      "Defect Rate": { value: 1.2, change: -15.5 },
      "Throughput": { value: 1250, change: 12.5 },
      "Equipment Utilization": { value: 78.5, change: 5.2 },
      "Cost per Unit": { value: 125, change: -8.5 },
    },
    treasury: {
      "Cash Position": { value: 5000000 * multiplier, change: 5.5 },
      "Investment Returns": { value: 8.5, change: 1.2 },
      "Liquidity Ratio": { value: 2.5, change: 0.3 },
      "Debt to Equity": { value: 0.65, change: -0.05 },
      "Working Capital": { value: 2000000 * multiplier, change: 8.5 },
      "Risk Exposure": { value: 12.5, change: -2.5 },
    },
    clinical: {
      "Patient Admissions": { value: 500 * multiplier, change: 5.5 },
      "Bed Occupancy": { value: 85.5, change: 2.8 },
      "Average Length of Stay": { value: 4.5, change: -0.5 },
      "Readmission Rate": { value: 8.5, change: -2.5 },
      "Patient Satisfaction": { value: 88.5, change: 3.2 },
      "Clinical Outcomes": { value: 92.5, change: 4.5 },
    },
    "store-ops": {
      "Sales per Square Foot": { value: 450, change: 8.5 },
      "Inventory Turnover": { value: 6.5, change: 1.2 },
      "Foot Traffic": { value: 2500 * multiplier, change: 12.5 },
      "Conversion Rate": { value: 25.5, change: 3.2 },
      "Average Transaction": { value: 85, change: 5.5 },
      "Store Performance": { value: 87.5, change: 4.8 },
    },
    talent: {
      "Time to Fill": { value: 28, change: -5.5 },
      "Quality of Hire": { value: 85.5, change: 5.2 },
      "Retention Rate": { value: 88.5, change: 3.5 },
      "Internal Mobility": { value: 15.5, change: 4.2 },
      "Diversity Index": { value: 65.5, change: 8.5 },
      "Employee Engagement": { value: 82.5, change: 5.5 },
    },
    research: {
      "R&D Investment": { value: 500000 * multiplier, change: 12.5 },
      "Projects in Pipeline": { value: 25, change: 5.5 },
      "Innovation Index": { value: 78.5, change: 8.5 },
      "Time to Market": { value: 18, change: -12.5 },
      "Patent Applications": { value: 12, change: 15.5 },
      "Research ROI": { value: 125, change: 8.5 },
    },
    "supply-chain": {
      "On-Time Delivery": { value: 94.5, change: 2.5 },
      "Inventory Accuracy": { value: 98.5, change: 1.2 },
      "Supply Chain Cost": { value: 15.5, change: -3.5 },
      "Vendor Performance": { value: 87.5, change: 4.2 },
      "Order Fulfillment": { value: 96.5, change: 3.5 },
      "Lead Time": { value: 12, change: -8.5 },
    },
    risk: {
      "Risk Score": { value: 15.5, change: -2.5 },
      "Compliance Rate": { value: 96.5, change: 2.5 },
      "Audit Findings": { value: 3, change: -25.0 },
      "Risk Exposure": { value: 8.5, change: -12.5 },
      "Control Effectiveness": { value: 92.5, change: 3.5 },
      "Regulatory Compliance": { value: 98.0, change: 1.5 },
    },
    lending: {
      "Loan Portfolio": { value: 50000000 * multiplier, change: 15.5 },
      "NPA Ratio": { value: 2.5, change: -0.5 },
      "Credit Risk Score": { value: 85.5, change: 3.2 },
      "Disbursement Rate": { value: 1250000 * multiplier, change: 12.5 },
      "Recovery Rate": { value: 92.5, change: 4.5 },
      "Portfolio Yield": { value: 12.5, change: 1.2 },
    },
    underwriting: {
      "Policy Issuance": { value: 5000 * multiplier, change: 8.5 },
      "Underwriting Profit": { value: 15.5, change: 2.5 },
      "Claims Ratio": { value: 65.5, change: -3.5 },
      "Policy Retention": { value: 88.5, change: 3.2 },
      "Risk Assessment": { value: 92.5, change: 4.5 },
      "Premium Growth": { value: 12.5, change: 5.5 },
    },
    fulfillment: {
      "Order Volume": { value: 50000 * multiplier, change: 25.5 },
      "Fulfillment Rate": { value: 96.5, change: 2.5 },
      "Average Delivery Time": { value: 2.5, change: -15.5 },
      "Shipping Cost": { value: 8.5, change: -5.5 },
      "Order Accuracy": { value: 99.5, change: 0.5 },
      "Customer Satisfaction": { value: 92.5, change: 4.5 },
    },
    product: {
      "Active Users": { value: 100000 * multiplier, change: 25.5 },
      "Feature Adoption": { value: 65.5, change: 12.5 },
      "System Uptime": { value: 99.8, change: 0.2 },
      "Response Time": { value: 125, change: -15.5 },
      "Bug Rate": { value: 0.5, change: -25.0 },
      "User Satisfaction": { value: 88.5, change: 5.5 },
    },
    platform: {
      "GMV": { value: 10000000 * multiplier, change: 35.5 },
      "Active Sellers": { value: 5000 * multiplier, change: 15.5 },
      "Active Buyers": { value: 50000 * multiplier, change: 25.5 },
      "Transaction Volume": { value: 500000 * multiplier, change: 30.5 },
      "Platform Fee": { value: 3.5, change: 0.2 },
      "Marketplace Health": { value: 87.5, change: 5.5 },
    },
    rd: {
      "R&D Investment": { value: 1000000 * multiplier, change: 15.5 },
      "Clinical Trials": { value: 12, change: 3.5 },
      "Pipeline Value": { value: 50000000 * multiplier, change: 25.5 },
      "Time to Market": { value: 36, change: -8.5 },
      "Success Rate": { value: 65.5, change: 5.5 },
      "Innovation Index": { value: 82.5, change: 8.5 },
    },
    fleet: {
      "Fleet Utilization": { value: 85.5, change: 5.5 },
      "On-Time Delivery": { value: 94.5, change: 3.2 },
      "Fuel Efficiency": { value: 8.5, change: 2.5 },
      "Maintenance Cost": { value: 125000 * multiplier, change: -5.5 },
      "Route Optimization": { value: 92.5, change: 4.5 },
      "Driver Performance": { value: 88.5, change: 3.5 },
    },
    generation: {
      "Power Generation": { value: 5000 * multiplier, change: 8.5 },
      "Grid Stability": { value: 98.5, change: 1.2 },
      "Energy Efficiency": { value: 85.5, change: 3.5 },
      "Outage Duration": { value: 0.5, change: -25.0 },
      "Renewable Mix": { value: 35.5, change: 8.5 },
      "Cost per kWh": { value: 5.5, change: -2.5 },
    },
    network: {
      "Network Uptime": { value: 99.9, change: 0.1 },
      "Data Throughput": { value: 5000 * multiplier, change: 25.5 },
      "Latency": { value: 25, change: -15.5 },
      "Coverage": { value: 95.5, change: 2.5 },
      "Subscriber Growth": { value: 12.5, change: 8.5 },
      "Network Quality": { value: 92.5, change: 3.5 },
    },
    projects: {
      "Projects Active": { value: 25, change: 5.5 },
      "On-Time Completion": { value: 85.5, change: 4.5 },
      "Budget Adherence": { value: 92.5, change: 2.5 },
      "Resource Utilization": { value: 78.5, change: 5.5 },
      "Quality Score": { value: 88.5, change: 3.5 },
      "Client Satisfaction": { value: 90.5, change: 4.5 },
    },
    academics: {
      "Enrollment": { value: 5000 * multiplier, change: 8.5 },
      "Graduation Rate": { value: 85.5, change: 3.5 },
      "Student Satisfaction": { value: 88.5, change: 4.5 },
      "Course Completion": { value: 92.5, change: 2.5 },
      "Research Output": { value: 125, change: 12.5 },
      "Employability": { value: 90.5, change: 5.5 },
    },
    reservations: {
      "Occupancy Rate": { value: 85.5, change: 5.5 },
      "ADR": { value: 150, change: 8.5 },
      "RevPAR": { value: 128, change: 12.5 },
      "Booking Conversion": { value: 25.5, change: 4.5 },
      "Guest Satisfaction": { value: 88.5, change: 3.5 },
      "Revenue Growth": { value: 15.5, change: 8.5 },
    },
    farming: {
      "Crop Yield": { value: 5000 * multiplier, change: 12.5 },
      "Harvest Efficiency": { value: 88.5, change: 4.5 },
      "Cost per Acre": { value: 2500, change: -5.5 },
      "Water Usage": { value: 85.5, change: -8.5 },
      "Soil Health": { value: 92.5, change: 3.5 },
      "Profit Margin": { value: 25.5, change: 8.5 },
    },
    "public-services": {
      "Service Delivery": { value: 92.5, change: 4.5 },
      "Citizen Satisfaction": { value: 85.5, change: 5.5 },
      "Response Time": { value: 2.5, change: -15.5 },
      "Budget Utilization": { value: 88.5, change: 3.5 },
      "Compliance Rate": { value: 96.5, change: 2.5 },
      "Efficiency Index": { value: 87.5, change: 4.5 },
    },
  };
  
  // Check industry-specific departments first
  if (industrySpecificKPIs[departmentId]) {
    return industrySpecificKPIs[departmentId];
  }
  
  // Check department-specific KPIs
  if (departmentKPIs[departmentId]) {
    return departmentKPIs[departmentId];
  }
  
  // Default KPIs if department not found
  const defaultKPIs: Record<string, { value: number; change: number }> = {
    "Total Revenue": { value: 1000000 * multiplier, change: 12.5 },
    "Profit Margin": { value: 18.5, change: 2.3 },
    "Operational Efficiency": { value: 87.5, change: 2.8 },
    "Customer Satisfaction": { value: 88.5, change: 3.2 },
    "Risk Score": { value: 15.0, change: -2.5 },
    "Growth Rate": { value: 25.0, change: 5.5 },
  };
  
  return defaultKPIs;
}
