/**
 * Manufacturing - Executive Templates
 * 
 * Generated template configurations for Manufacturing industry, Executive department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("manufacturing", "executive");
export const templates: DepartmentTemplates = buildDepartmentTemplates("manufacturing", "executive", baseKPIs);
