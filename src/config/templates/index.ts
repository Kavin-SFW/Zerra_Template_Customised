/**
 * Template Index
 * 
 * Central registry for template imports to help with dynamic loading
 */

// Re-export types and utilities
export * from "./types";
export * from "./getTemplateConfig";
export * from "./generator";
export * from "./builder";

/**
 * Template import map for dynamic loading
 * This helps Vite understand which templates to bundle
 */
export const templateImportMap: Record<string, () => Promise<any>> = {
  // Manufacturing
  "manufacturing/production": () => import("./manufacturing/production"),
  "manufacturing/research": () => import("./manufacturing/research"),
  "manufacturing/supply-chain": () => import("./manufacturing/supply-chain"),
  "manufacturing/accounts": () => import("./manufacturing/accounts"),
  "manufacturing/hr": () => import("./manufacturing/hr"),
  "manufacturing/sales": () => import("./manufacturing/sales"),
  "manufacturing/operations": () => import("./manufacturing/operations"),
  "manufacturing/it": () => import("./manufacturing/it"),
  "manufacturing/procurement": () => import("./manufacturing/procurement"),
  "manufacturing/quality": () => import("./manufacturing/quality"),
  "manufacturing/customer-service": () => import("./manufacturing/customer-service"),
  "manufacturing/legal": () => import("./manufacturing/legal"),
  "manufacturing/executive": () => import("./manufacturing/executive"),
  
  // Healthcare
  "healthcare/clinical": () => import("./healthcare/clinical"),
  "healthcare/accounts": () => import("./healthcare/accounts"),
  "healthcare/hr": () => import("./healthcare/hr"),
  "healthcare/sales": () => import("./healthcare/sales"),
  "healthcare/operations": () => import("./healthcare/operations"),
  "healthcare/it": () => import("./healthcare/it"),
  "healthcare/procurement": () => import("./healthcare/procurement"),
  "healthcare/quality": () => import("./healthcare/quality"),
  "healthcare/customer-service": () => import("./healthcare/customer-service"),
  "healthcare/legal": () => import("./healthcare/legal"),
  "healthcare/executive": () => import("./healthcare/executive"),
  
  // Retail
  "retail/store-ops": () => import("./retail/store-ops"),
  "retail/supply-chain": () => import("./retail/supply-chain"),
  "retail/accounts": () => import("./retail/accounts"),
  "retail/hr": () => import("./retail/hr"),
  "retail/sales": () => import("./retail/sales"),
  "retail/operations": () => import("./retail/operations"),
  "retail/it": () => import("./retail/it"),
  "retail/procurement": () => import("./retail/procurement"),
  "retail/quality": () => import("./retail/quality"),
  "retail/customer-service": () => import("./retail/customer-service"),
  "retail/legal": () => import("./retail/legal"),
  "retail/executive": () => import("./retail/executive"),
  
  // Finance
  "finance/treasury": () => import("./finance/treasury"),
  "finance/risk": () => import("./finance/risk"),
  "finance/accounts": () => import("./finance/accounts"),
  "finance/hr": () => import("./finance/hr"),
  "finance/sales": () => import("./finance/sales"),
  "finance/operations": () => import("./finance/operations"),
  "finance/it": () => import("./finance/it"),
  "finance/procurement": () => import("./finance/procurement"),
  "finance/quality": () => import("./finance/quality"),
  "finance/customer-service": () => import("./finance/customer-service"),
  "finance/legal": () => import("./finance/legal"),
  "finance/executive": () => import("./finance/executive"),
  
  // HR
  "hr/talent": () => import("./hr/talent"),
  "hr/accounts": () => import("./hr/accounts"),
  "hr/hr": () => import("./hr/hr"),
  "hr/sales": () => import("./hr/sales"),
  "hr/operations": () => import("./hr/operations"),
  "hr/it": () => import("./hr/it"),
  "hr/procurement": () => import("./hr/procurement"),
  "hr/quality": () => import("./hr/quality"),
  "hr/customer-service": () => import("./hr/customer-service"),
  "hr/legal": () => import("./hr/legal"),
  "hr/executive": () => import("./hr/executive"),
};
