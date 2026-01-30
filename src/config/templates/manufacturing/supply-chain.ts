/**
 * Manufacturing - Supply Chain Templates
 * 
 * Generated template configurations for Manufacturing industry, Supply Chain department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("manufacturing", "supply-chain");
export const templates: DepartmentTemplates = buildDepartmentTemplates("manufacturing", "supply-chain", baseKPIs);
