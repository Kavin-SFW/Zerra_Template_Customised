/**
 * Retail - Hr Templates
 * 
 * Generated template configurations for Retail industry, Hr department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("retail", "hr");
export const templates: DepartmentTemplates = buildDepartmentTemplates("retail", "hr", baseKPIs);
