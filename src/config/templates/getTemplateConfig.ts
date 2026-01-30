/**
 * Template Configuration Loader
 * 
 * Validates and loads template configurations with strong typing
 * and fallback mechanisms
 */

import { z } from "zod";
import { getIndustry, getDepartment } from "../industries";
import { DepartmentConfig } from "../departmentData";
import { DepartmentTemplate, TemplateCategory } from "./types";
import { templateImportMap } from "./index";

/**
 * Route parameter validation schema
 */
export const RouteParamsSchema = z.object({
  industryId: z.string().min(1),
  departmentId: z.string().min(1),
  templateId: z.string().min(1).optional(),
});

export type RouteParams = z.infer<typeof RouteParamsSchema>;

/**
 * Standard template categories in order of priority
 */
const STANDARD_TEMPLATES: TemplateCategory[] = [
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

/**
 * Default template ID (executive-overview)
 */
export const DEFAULT_TEMPLATE_ID = "executive-overview";

/**
 * Load template configuration dynamically
 * 
 * @param industryId - Industry identifier
 * @param departmentId - Department identifier
 * @param templateId - Template identifier (optional, defaults to executive-overview)
 * @returns Template configuration or null if invalid
 */
export async function getTemplateConfig(
  industryId: string,
  departmentId: string,
  templateId?: string
): Promise<{ template: DepartmentTemplate; config: DepartmentConfig } | null> {
  // Validate industry and department
  const industry = getIndustry(industryId);
  const department = getDepartment(industryId, departmentId);
  
  if (!industry || !department) {
    return null;
  }
  
  // Use default template if not provided
  const effectiveTemplateId = templateId || DEFAULT_TEMPLATE_ID;
  
  try {
    // Dynamically import template file using the import map
    let templateModule;
    try {
      const importKey = `${industryId}/${departmentId}`;
      const importFn = templateImportMap[importKey];
      
      if (importFn) {
        templateModule = await importFn();
      } else {
        console.warn(`No import mapping found for ${importKey}`);
        templateModule = null;
      }
    } catch (error) {
      console.warn(`Failed to load template file for ${industryId}/${departmentId}:`, error);
      templateModule = null;
    }
    
    if (!templateModule) {
      // Fallback: generate default template
      return await generateDefaultTemplate(industryId, departmentId, effectiveTemplateId);
    }
    
    // Get templates from module
    const templates = templateModule.templates as Record<string, DepartmentTemplate> | undefined;
    
    if (!templates || typeof templates !== "object") {
      return await generateDefaultTemplate(industryId, departmentId, effectiveTemplateId);
    }
    
    // Get specific template or fallback to executive-overview
    let template = templates[effectiveTemplateId];
    
    if (!template) {
      // Try to find executive-overview as fallback
      template = templates[DEFAULT_TEMPLATE_ID];
      
      if (!template) {
        // Use first available template
        const firstTemplate = Object.values(templates)[0];
        if (firstTemplate) {
          template = firstTemplate;
        } else {
          return await generateDefaultTemplate(industryId, departmentId, effectiveTemplateId);
        }
      }
    }
    
    return {
      template,
      config: template.config,
    };
  } catch (error) {
    console.error(`Error loading template ${effectiveTemplateId} for ${industryId}/${departmentId}:`, error);
    return await generateDefaultTemplate(industryId, departmentId, effectiveTemplateId);
  }
}

/**
 * Generate default template configuration
 */
async function generateDefaultTemplate(
  industryId: string,
  departmentId: string,
  templateId: string
): Promise<{ template: DepartmentTemplate; config: DepartmentConfig } | null> {
  // Import generator utilities using dynamic import
  const generatorModule = await import("./generator");
  const { generateKPIs, generateCharts, generateTable, generateInsights } = generatorModule;
  
  const category = templateId as TemplateCategory;
  
  // Generate default config
  const config: DepartmentConfig = {
    kpis: generateKPIs(category, industryId, departmentId, {
      "Total Revenue": { value: 1000000, change: 12.5 },
      "Profit Margin": { value: 18.5, change: 2.3 },
      "Customer Satisfaction": { value: 87.5, change: 3.2 },
      "Operational Efficiency": { value: 92.0, change: 1.8 },
      "Risk Score": { value: 15.0, change: -2.5 },
      "Growth Rate": { value: 25.0, change: 5.5 },
    }),
    charts: generateCharts(category, industryId, departmentId),
    table: generateTable(category, industryId, departmentId),
    insights: generateInsights(category, industryId, departmentId),
  };
  
  const template: DepartmentTemplate = {
    id: templateId,
    name: formatTemplateName(templateId),
    description: getTemplateDescription(templateId),
    category: category,
    audience: getDefaultAudience(templateId),
    timeframe: getDefaultTimeframe(templateId),
    config,
  };
  
  return { template, config };
}

/**
 * Get all available templates for a department
 */
export async function getAvailableTemplates(
  industryId: string,
  departmentId: string
): Promise<DepartmentTemplate[]> {
  try {
    const templateModule = await import(
      `./${industryId}/${departmentId}.ts`
    ).catch(() => null);
    
    if (!templateModule || !templateModule.templates) {
      // Return default templates
      return STANDARD_TEMPLATES.map(category => ({
        id: category,
        name: formatTemplateName(category),
        description: getTemplateDescription(category),
        category,
        audience: getDefaultAudience(category),
        timeframe: getDefaultTimeframe(category),
        config: {} as DepartmentConfig, // Will be loaded on demand
      }));
    }
    
    return Object.values(templateModule.templates as Record<string, DepartmentTemplate>);
  } catch (error) {
    console.error(`Error loading templates for ${industryId}/${departmentId}:`, error);
    return [];
  }
}

/**
 * Format template ID to display name
 */
function formatTemplateName(templateId: string): string {
  return templateId
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Get template description
 */
function getTemplateDescription(templateId: string): string {
  const descriptions: Record<string, string> = {
    "executive-overview": "High-level executive dashboard with key business metrics and strategic insights",
    "operational-performance": "Day-to-day operational metrics and efficiency indicators",
    "financial-impact": "Financial performance, revenue, costs, and ROI analysis",
    "risk-compliance": "Risk exposure, compliance status, and audit metrics",
    "forecasting-planning": "Predictive analytics and future projections",
    "process-optimization": "Process bottlenecks, workflow analysis, and optimization opportunities",
    "team-performance": "Workforce metrics, productivity, and team analytics",
    "customer-impact": "Customer satisfaction, retention, and experience metrics",
    "anomaly-detection": "AI-driven anomaly detection and unusual pattern identification",
    "strategic-insights": "Long-term trends and strategic business intelligence",
  };
  
  return descriptions[templateId] || "Dashboard template with key metrics and insights";
}

/**
 * Get default audience for template category
 */
function getDefaultAudience(templateId: string): "executive" | "manager" | "analyst" | "operator" {
  if (templateId === "executive-overview" || templateId === "strategic-insights") {
    return "executive";
  }
  if (templateId === "operational-performance" || templateId === "process-optimization") {
    return "operator";
  }
  if (templateId === "financial-impact" || templateId === "forecasting-planning") {
    return "manager";
  }
  return "analyst";
}

/**
 * Get default timeframe for template category
 */
function getDefaultTimeframe(templateId: string): "real-time" | "daily" | "weekly" | "monthly" | "quarterly" {
  if (templateId === "anomaly-detection" || templateId === "operational-performance") {
    return "real-time";
  }
  if (templateId === "executive-overview" || templateId === "strategic-insights") {
    return "quarterly";
  }
  if (templateId === "forecasting-planning") {
    return "monthly";
  }
  return "weekly";
}

/**
 * Validate route parameters
 */
export function validateRouteParams(params: unknown): RouteParams | null {
  try {
    return RouteParamsSchema.parse(params);
  } catch {
    return null;
  }
}
