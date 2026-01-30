/**
 * Hr - Legal Templates
 * 
 * Generated template configurations for Hr industry, Legal department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("hr", "legal");
export const templates: DepartmentTemplates = buildDepartmentTemplates("hr", "legal", baseKPIs);
