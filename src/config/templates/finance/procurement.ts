/**
 * Finance - Procurement Templates
 * 
 * Generated template configurations for Finance industry, Procurement department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("finance", "procurement");
export const templates: DepartmentTemplates = buildDepartmentTemplates("finance", "procurement", baseKPIs);
