/**
 * Hr - Quality Templates
 * 
 * Generated template configurations for Hr industry, Quality department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("hr", "quality");
export const templates: DepartmentTemplates = buildDepartmentTemplates("hr", "quality", baseKPIs);
