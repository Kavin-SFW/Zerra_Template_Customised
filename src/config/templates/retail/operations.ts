/**
 * Retail - Operations Templates
 * 
 * Generated template configurations for Retail industry, Operations department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("retail", "operations");
export const templates: DepartmentTemplates = buildDepartmentTemplates("retail", "operations", baseKPIs);
