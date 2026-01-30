/**
 * Finance - Quality Templates
 * 
 * Generated template configurations for Finance industry, Quality department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("finance", "quality");
export const templates: DepartmentTemplates = buildDepartmentTemplates("finance", "quality", baseKPIs);
