/**
 * Finance - Operations Templates
 * 
 * Generated template configurations for Finance industry, Operations department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("finance", "operations");
export const templates: DepartmentTemplates = buildDepartmentTemplates("finance", "operations", baseKPIs);
