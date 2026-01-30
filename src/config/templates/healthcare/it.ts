/**
 * Healthcare - It Templates
 * 
 * Generated template configurations for Healthcare industry, It department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("healthcare", "it");
export const templates: DepartmentTemplates = buildDepartmentTemplates("healthcare", "it", baseKPIs);
