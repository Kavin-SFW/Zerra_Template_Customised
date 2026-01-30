/**
 * Healthcare - Quality Templates
 * 
 * Generated template configurations for Healthcare industry, Quality department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("healthcare", "quality");
export const templates: DepartmentTemplates = buildDepartmentTemplates("healthcare", "quality", baseKPIs);
