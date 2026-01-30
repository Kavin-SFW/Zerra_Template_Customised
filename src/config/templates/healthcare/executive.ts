/**
 * Healthcare - Executive Templates
 * 
 * Generated template configurations for Healthcare industry, Executive department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("healthcare", "executive");
export const templates: DepartmentTemplates = buildDepartmentTemplates("healthcare", "executive", baseKPIs);
