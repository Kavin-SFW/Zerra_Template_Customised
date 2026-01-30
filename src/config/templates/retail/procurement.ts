/**
 * Retail - Procurement Templates
 * 
 * Generated template configurations for Retail industry, Procurement department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("retail", "procurement");
export const templates: DepartmentTemplates = buildDepartmentTemplates("retail", "procurement", baseKPIs);
