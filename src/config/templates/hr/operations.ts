/**
 * Hr - Operations Templates
 * 
 * Generated template configurations for Hr industry, Operations department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("hr", "operations");
export const templates: DepartmentTemplates = buildDepartmentTemplates("hr", "operations", baseKPIs);
