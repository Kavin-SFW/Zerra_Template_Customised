/**
 * Manufacturing - Quality Templates
 * 
 * Generated template configurations for Manufacturing industry, Quality department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("manufacturing", "quality");
export const templates: DepartmentTemplates = buildDepartmentTemplates("manufacturing", "quality", baseKPIs);
