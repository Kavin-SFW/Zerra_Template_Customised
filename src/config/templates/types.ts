/**
 * Template System Types
 * 
 * Defines the structure for multi-template dashboard system
 * where each department can have 10+ purpose-built templates
 */

import { DepartmentConfig } from "../departmentData";

/**
 * Template audience types
 */
export type TemplateAudience = "executive" | "manager" | "analyst" | "operator";

/**
 * Template timeframe types
 */
export type TemplateTimeframe = "real-time" | "daily" | "weekly" | "monthly" | "quarterly";

/**
 * Standard template categories
 */
export type TemplateCategory =
  | "executive-overview"
  | "operational-performance"
  | "financial-impact"
  | "risk-compliance"
  | "forecasting-planning"
  | "process-optimization"
  | "team-performance"
  | "customer-impact"
  | "anomaly-detection"
  | "strategic-insights";

/**
 * Department Template Definition
 */
export interface DepartmentTemplate {
  id: string;
  name: string;
  description: string;
  category: TemplateCategory;
  audience: TemplateAudience;
  timeframe: TemplateTimeframe;
  config: DepartmentConfig;
}

/**
 * Collection of templates for a department
 */
export type DepartmentTemplates = Record<string, DepartmentTemplate>;

/**
 * Template registry for an industry-department combination
 */
export interface TemplateRegistry {
  industryId: string;
  departmentId: string;
  templates: DepartmentTemplates;
}

/**
 * Template metadata (for UI display)
 */
export interface TemplateMetadata {
  id: string;
  name: string;
  description: string;
  category: TemplateCategory;
  audience: TemplateAudience;
  timeframe: TemplateTimeframe;
}
