/**
 * Hr - Hr Templates
 * 
 * Generated template configurations for Hr industry, Hr department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("hr", "hr");
export const templates: DepartmentTemplates = buildDepartmentTemplates("hr", "hr", baseKPIs);
