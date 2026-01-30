/**
 * Healthcare - Sales Templates
 * 
 * Generated template configurations for Healthcare industry, Sales department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("healthcare", "sales");
export const templates: DepartmentTemplates = buildDepartmentTemplates("healthcare", "sales", baseKPIs);
