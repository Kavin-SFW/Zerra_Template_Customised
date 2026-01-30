/**
 * Healthcare - Operations Templates
 * 
 * Generated template configurations for Healthcare industry, Operations department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("healthcare", "operations");
export const templates: DepartmentTemplates = buildDepartmentTemplates("healthcare", "operations", baseKPIs);
