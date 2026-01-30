/**
 * Healthcare - Hr Templates
 * 
 * Generated template configurations for Healthcare industry, Hr department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("healthcare", "hr");
export const templates: DepartmentTemplates = buildDepartmentTemplates("healthcare", "hr", baseKPIs);
