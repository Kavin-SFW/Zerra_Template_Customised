/**
 * Manufacturing - Hr Templates
 * 
 * Generated template configurations for Manufacturing industry, Hr department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("manufacturing", "hr");
export const templates: DepartmentTemplates = buildDepartmentTemplates("manufacturing", "hr", baseKPIs);
