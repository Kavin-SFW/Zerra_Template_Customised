/**
 * Hr - Accounts Templates
 * 
 * Generated template configurations for Hr industry, Accounts department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("hr", "accounts");
export const templates: DepartmentTemplates = buildDepartmentTemplates("hr", "accounts", baseKPIs);
