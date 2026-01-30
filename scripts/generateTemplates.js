/**
 * Template Generator Script
 * 
 * Generates all template files for all industries and departments
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import the template factory (we'll need to compile TypeScript first, or use a different approach)
// For now, let's create a simpler approach - generate the files directly

const industries = [
  { id: 'manufacturing', departments: ['production', 'research', 'supply-chain', 'accounts', 'hr', 'sales', 'operations', 'it', 'procurement', 'quality', 'customer-service', 'legal', 'executive'] },
  { id: 'healthcare', departments: ['clinical', 'accounts', 'hr', 'sales', 'operations', 'it', 'procurement', 'quality', 'customer-service', 'legal', 'executive'] },
  { id: 'retail', departments: ['store-ops', 'supply-chain', 'accounts', 'hr', 'sales', 'operations', 'it', 'procurement', 'quality', 'customer-service', 'legal', 'executive'] },
  { id: 'finance', departments: ['treasury', 'risk', 'accounts', 'hr', 'sales', 'operations', 'it', 'procurement', 'quality', 'customer-service', 'legal', 'executive'] },
  { id: 'hr', departments: ['talent', 'accounts', 'hr', 'sales', 'operations', 'it', 'procurement', 'quality', 'customer-service', 'legal', 'executive'] },
];

const templateCategories = [
  'executive-overview',
  'operational-performance',
  'financial-impact',
  'risk-compliance',
  'forecasting-planning',
  'process-optimization',
  'team-performance',
  'customer-impact',
  'anomaly-detection',
  'strategic-insights',
];

function generateTemplateFileContent(industryId, departmentId) {
  const deptName = departmentId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  const industryName = industryId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Generate a placeholder template structure
  // In production, this would use the actual builder
  const templates = {};
  
  templateCategories.forEach(category => {
    const categoryName = category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    templates[category] = {
      id: category,
      name: categoryName,
      description: `Template for ${category}`,
      category: category,
      audience: category.includes('executive') || category.includes('strategic') ? 'executive' : 
                category.includes('operational') || category.includes('process') ? 'operator' :
                category.includes('financial') || category.includes('forecasting') ? 'manager' : 'analyst',
      timeframe: category.includes('anomaly') || category.includes('operational') ? 'real-time' :
                 category.includes('executive') || category.includes('strategic') ? 'quarterly' :
                 category.includes('forecasting') ? 'monthly' : 'weekly',
      config: {
        kpis: Array.from({ length: 6 }, (_, i) => ({
          title: `KPI ${i + 1}`,
          value: `${(100 + i * 10).toFixed(1)}`,
          change: (5 + i * 2).toFixed(1),
          trend: i % 2 === 0 ? 'up' : 'down',
        })),
        charts: [
          {
            title: 'Chart 1',
            subtitle: 'Subtitle 1',
            type: 'area',
            data: [],
            dataKeys: ['value'],
            xAxisKey: 'month',
          },
          {
            title: 'Chart 2',
            subtitle: 'Subtitle 2',
            type: 'bar',
            data: [],
            dataKeys: ['value'],
            xAxisKey: 'category',
          },
        ],
        table: {
          title: 'Data Table',
          columns: [
            { key: 'id', label: 'ID', sortable: true },
            { key: 'name', label: 'Name', sortable: true },
            { key: 'status', label: 'Status', sortable: true },
          ],
          data: [],
          searchKey: 'name',
        },
        insights: Array.from({ length: 4 }, (_, i) => ({
          type: ['prediction', 'anomaly', 'recommendation', 'trend'][i],
          title: `Insight ${i + 1}`,
          description: `Description for insight ${i + 1}`,
          impact: i === 0 ? 'high' : i === 1 ? 'medium' : 'low',
        })),
      },
    };
  });
  
  return `/**
 * ${industryName} - ${deptName} Templates
 * 
 * Generated template configurations for ${industryName} industry, ${deptName} department
 * Contains 10+ purpose-built dashboard templates
 */

import { DepartmentTemplates } from "../types";
import { buildDepartmentTemplates, getBaseKPIs } from "../builder";

// Build templates using the builder
const baseKPIs = getBaseKPIs("${industryId}", "${departmentId}");
export const templates: DepartmentTemplates = buildDepartmentTemplates("${industryId}", "${departmentId}", baseKPIs);
`;
}

// Generate all template files
industries.forEach(industry => {
  industry.departments.forEach(department => {
    const dir = path.join(__dirname, '..', 'src', 'config', 'templates', industry.id);
    const filePath = path.join(dir, `${department}.ts`);
    
    // Ensure directory exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Generate file content
    const content = generateTemplateFileContent(industry.id, department);
    
    // Write file
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Generated: ${industry.id}/${department}.ts`);
  });
});

console.log('Template generation complete!');
