/**
 * Manufacturing - Accounts Templates
 * 
 * Generated template configurations for Manufacturing industry, Accounts department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("manufacturing", "accounts");
export const templates: DepartmentTemplates = buildDepartmentTemplates("manufacturing", "accounts", baseKPIs);
