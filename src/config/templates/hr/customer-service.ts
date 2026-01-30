/**
 * Hr - Customer Service Templates
 * 
 * Generated template configurations for Hr industry, Customer Service department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("hr", "customer-service");
export const templates: DepartmentTemplates = buildDepartmentTemplates("hr", "customer-service", baseKPIs);
