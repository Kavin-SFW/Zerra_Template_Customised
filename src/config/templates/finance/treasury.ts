/**
 * Finance - Treasury Templates
 * 
 * Generated template configurations for Finance industry, Treasury department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("finance", "treasury");
export const templates: DepartmentTemplates = buildDepartmentTemplates("finance", "treasury", baseKPIs);
