/**
 * Retail - Executive Templates
 * 
 * Generated template configurations for Retail industry, Executive department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("retail", "executive");
export const templates: DepartmentTemplates = buildDepartmentTemplates("retail", "executive", baseKPIs);
