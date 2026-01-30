/**
 * Finance - Accounts Templates
 * 
 * Generated template configurations for Finance industry, Accounts department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("finance", "accounts");
export const templates: DepartmentTemplates = buildDepartmentTemplates("finance", "accounts", baseKPIs);
