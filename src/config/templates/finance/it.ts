/**
 * Finance - It Templates
 * 
 * Generated template configurations for Finance industry, It department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("finance", "it");
export const templates: DepartmentTemplates = buildDepartmentTemplates("finance", "it", baseKPIs);
