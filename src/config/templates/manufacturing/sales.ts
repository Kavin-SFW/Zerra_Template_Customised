/**
 * Manufacturing - Sales Templates
 * 
 * Generated template configurations for Manufacturing industry, Sales department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("manufacturing", "sales");
export const templates: DepartmentTemplates = buildDepartmentTemplates("manufacturing", "sales", baseKPIs);
