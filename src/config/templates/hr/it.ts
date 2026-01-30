/**
 * Hr - It Templates
 * 
 * Generated template configurations for Hr industry, It department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("hr", "it");
export const templates: DepartmentTemplates = buildDepartmentTemplates("hr", "it", baseKPIs);
