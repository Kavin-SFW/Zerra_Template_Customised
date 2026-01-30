/**
 * Hr - Sales Templates
 * 
 * Generated template configurations for Hr industry, Sales department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("hr", "sales");
export const templates: DepartmentTemplates = buildDepartmentTemplates("hr", "sales", baseKPIs);
