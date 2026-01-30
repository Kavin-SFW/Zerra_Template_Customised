/**
 * Finance - Hr Templates
 * 
 * Generated template configurations for Finance industry, Hr department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("finance", "hr");
export const templates: DepartmentTemplates = buildDepartmentTemplates("finance", "hr", baseKPIs);
