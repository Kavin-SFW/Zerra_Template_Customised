/**
 * Retail - Store Ops Templates
 * 
 * Generated template configurations for Retail industry, Store Ops department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("retail", "store-ops");
export const templates: DepartmentTemplates = buildDepartmentTemplates("retail", "store-ops", baseKPIs);
