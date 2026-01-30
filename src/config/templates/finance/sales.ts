/**
 * Finance - Sales Templates
 * 
 * Generated template configurations for Finance industry, Sales department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("finance", "sales");
export const templates: DepartmentTemplates = buildDepartmentTemplates("finance", "sales", baseKPIs);
