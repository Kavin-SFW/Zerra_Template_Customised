/**
 * Healthcare - Clinical Templates
 * 
 * Generated template configurations for Healthcare industry, Clinical department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("healthcare", "clinical");
export const templates: DepartmentTemplates = buildDepartmentTemplates("healthcare", "clinical", baseKPIs);
