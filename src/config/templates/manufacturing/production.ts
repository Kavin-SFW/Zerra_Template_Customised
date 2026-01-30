/**
 * Manufacturing - Production Templates
 * 
 * Generated template configurations for Manufacturing industry, Production department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("manufacturing", "production");
export const templates: DepartmentTemplates = buildDepartmentTemplates("manufacturing", "production", baseKPIs);
