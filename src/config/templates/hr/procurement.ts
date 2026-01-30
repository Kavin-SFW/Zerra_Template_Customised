/**
 * Hr - Procurement Templates
 * 
 * Generated template configurations for Hr industry, Procurement department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("hr", "procurement");
export const templates: DepartmentTemplates = buildDepartmentTemplates("hr", "procurement", baseKPIs);
