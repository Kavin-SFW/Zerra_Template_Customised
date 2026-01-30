/**
 * Manufacturing - Research Templates
 * 
 * Generated template configurations for Manufacturing industry, Research department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("manufacturing", "research");
export const templates: DepartmentTemplates = buildDepartmentTemplates("manufacturing", "research", baseKPIs);
