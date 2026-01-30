/**
 * Manufacturing - Procurement Templates
 * 
 * Generated template configurations for Manufacturing industry, Procurement department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("manufacturing", "procurement");
export const templates: DepartmentTemplates = buildDepartmentTemplates("manufacturing", "procurement", baseKPIs);
