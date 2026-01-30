/**
 * Retail - Quality Templates
 * 
 * Generated template configurations for Retail industry, Quality department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("retail", "quality");
export const templates: DepartmentTemplates = buildDepartmentTemplates("retail", "quality", baseKPIs);
