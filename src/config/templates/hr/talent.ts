/**
 * Hr - Talent Templates
 * 
 * Generated template configurations for Hr industry, Talent department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("hr", "talent");
export const templates: DepartmentTemplates = buildDepartmentTemplates("hr", "talent", baseKPIs);
