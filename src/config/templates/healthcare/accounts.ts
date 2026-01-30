/**
 * Healthcare - Accounts Templates
 * 
 * Generated template configurations for Healthcare industry, Accounts department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("healthcare", "accounts");
export const templates: DepartmentTemplates = buildDepartmentTemplates("healthcare", "accounts", baseKPIs);
