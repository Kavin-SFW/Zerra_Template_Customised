/**
 * Healthcare - Legal Templates
 * 
 * Generated template configurations for Healthcare industry, Legal department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("healthcare", "legal");
export const templates: DepartmentTemplates = buildDepartmentTemplates("healthcare", "legal", baseKPIs);
