/**
 * Retail - Supply Chain Templates
 * 
 * Generated template configurations for Retail industry, Supply Chain department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("retail", "supply-chain");
export const templates: DepartmentTemplates = buildDepartmentTemplates("retail", "supply-chain", baseKPIs);
