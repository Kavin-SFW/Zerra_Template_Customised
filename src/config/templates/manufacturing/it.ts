/**
 * Manufacturing - It Templates
 * 
 * Generated template configurations for Manufacturing industry, It department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("manufacturing", "it");
export const templates: DepartmentTemplates = buildDepartmentTemplates("manufacturing", "it", baseKPIs);
