/**
 * Template Factory
 * 
 * Generates template file content for a given industry and department
 */

import { buildDepartmentTemplates, getBaseKPIs } from "./builder";

/**
 * Generate template file content
 */
export function generateTemplateFile(
  industryId: string,
  departmentId: string
): string {
  const baseKPIs = getBaseKPIs(industryId, departmentId);
  const templates = buildDepartmentTemplates(industryId, departmentId, baseKPIs);
  
  // Format department name for display
  const deptName = departmentId
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  
  const industryName = industryId
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  
  return `/**
 * ${industryName} - ${deptName} Templates
 * 
 * Generated template configurations for ${industryName} industry, ${deptName} department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "./types";

export const templates: DepartmentTemplates = ${JSON.stringify(templates, null, 2)};
`;
}
