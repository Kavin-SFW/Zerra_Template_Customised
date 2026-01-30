/**
 * Finance - Risk Templates
 * 
 * Generated template configurations for Finance industry, Risk department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("finance", "risk");
export const templates: DepartmentTemplates = buildDepartmentTemplates("finance", "risk", baseKPIs);
