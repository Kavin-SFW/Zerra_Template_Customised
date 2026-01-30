import {
  Factory,
  Wallet,
  Building2,
  Shield,
  ShoppingCart,
  Store,
  Code2,
  Users,
  Heart,
  FlaskConical,
  Truck,
  Zap,
  Radio,
  UserCircle,
  Hammer,
  GraduationCap,
  Hotel,
  Wheat,
  Landmark,
  Calculator,
  DollarSign,
  Cog,
  Wrench,
  FlaskRound,
  Scale,
  ShoppingBag,
  Headphones,
  ClipboardList,
  Shield as ShieldIcon,
  BarChart3,
  TrendingUp,
  Target,
  LucideIcon,
} from "lucide-react";

export interface Department {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
}

export interface Industry {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
  departments: Department[];
}

// Universal departments that apply to all industries
const universalDepartments: Department[] = [
  { id: "accounts", name: "Accounts & Finance", icon: Calculator, description: "Financial reporting, budgeting, and accounts management" },
  { id: "hr", name: "Human Resources", icon: UserCircle, description: "Workforce management, recruitment, and employee analytics" },
  { id: "sales", name: "Sales & Marketing", icon: TrendingUp, description: "Revenue tracking, campaigns, and customer acquisition" },
  { id: "operations", name: "Operations", icon: Cog, description: "Day-to-day operations and process efficiency" },
  { id: "it", name: "IT & Engineering", icon: Code2, description: "Technology infrastructure and development metrics" },
  { id: "procurement", name: "Procurement", icon: ShoppingBag, description: "Vendor management and purchasing analytics" },
  { id: "quality", name: "Quality Assurance", icon: ClipboardList, description: "Quality control and compliance metrics" },
  { id: "customer-service", name: "Customer Service", icon: Headphones, description: "Support tickets, satisfaction, and response times" },
  { id: "legal", name: "Legal & Compliance", icon: Scale, description: "Contract management and regulatory compliance" },
  { id: "executive", name: "Executive Summary", icon: BarChart3, description: "C-suite overview with key business metrics" },
];

// Industry-specific core department
const industryCoreMap: Record<string, Department> = {
  manufacturing: { id: "production", name: "Production & Manufacturing", icon: Factory, description: "Production lines, equipment, and output metrics" },
  finance: { id: "treasury", name: "Treasury & Investments", icon: DollarSign, description: "Cash management, investments, and risk analysis" },
  banking: { id: "lending", name: "Lending & Credit", icon: Building2, description: "Loan portfolio, credit risk, and disbursements" },
  insurance: { id: "underwriting", name: "Underwriting & Claims", icon: Shield, description: "Policy underwriting and claims processing" },
  ecommerce: { id: "fulfillment", name: "Fulfillment & Logistics", icon: Truck, description: "Order processing and delivery management" },
  retail: { id: "store-ops", name: "Store Operations", icon: Store, description: "Store performance and inventory management" },
  saas: { id: "product", name: "Product & Engineering", icon: Code2, description: "Product metrics, deployments, and SLA tracking" },
  marketplace: { id: "platform", name: "Platform & Ecosystem", icon: Users, description: "Buyer-seller dynamics and marketplace health" },
  healthcare: { id: "clinical", name: "Clinical Operations", icon: Heart, description: "Patient care, bed management, and clinical outcomes" },
  pharma: { id: "rd", name: "R&D & Clinical Trials", icon: FlaskConical, description: "Research pipeline and trial progress" },
  logistics: { id: "fleet", name: "Fleet & Transportation", icon: Truck, description: "Vehicle management and route optimization" },
  energy: { id: "generation", name: "Power Generation", icon: Zap, description: "Energy production and grid management" },
  telecom: { id: "network", name: "Network Operations", icon: Radio, description: "Network performance and infrastructure" },
  hr: { id: "talent", name: "Talent Management", icon: UserCircle, description: "Recruitment, retention, and workforce planning" },
  construction: { id: "projects", name: "Project Management", icon: Hammer, description: "Construction projects and resource allocation" },
  education: { id: "academics", name: "Academic Affairs", icon: GraduationCap, description: "Enrollment, courses, and student outcomes" },
  hospitality: { id: "reservations", name: "Reservations & Revenue", icon: Hotel, description: "Booking management and revenue optimization" },
  agriculture: { id: "farming", name: "Farm Operations", icon: Wheat, description: "Crop management and yield analytics" },
  government: { id: "public-services", name: "Public Services", icon: Landmark, description: "Citizen services and municipal operations" },
};

// R&D department for applicable industries
const rdDepartment: Department = { 
  id: "research", 
  name: "Research & Development", 
  icon: FlaskRound, 
  description: "Innovation pipeline and research metrics" 
};

// Supply Chain for applicable industries
const supplyChainDepartment: Department = {
  id: "supply-chain",
  name: "Supply Chain",
  icon: Truck,
  description: "Supply chain visibility and vendor performance"
};

// Risk Management for financial industries
const riskDepartment: Department = {
  id: "risk",
  name: "Risk Management",
  icon: ShieldIcon,
  description: "Risk assessment and mitigation strategies"
};

// Build industry-specific department lists
function buildDepartments(industryId: string): Department[] {
  const core = industryCoreMap[industryId];
  const departments = [core, ...universalDepartments];
  
  // Add R&D for tech/pharma/manufacturing
  if (["manufacturing", "pharma", "saas", "telecom", "energy"].includes(industryId)) {
    departments.splice(1, 0, rdDepartment);
  }
  
  // Add Supply Chain for physical goods industries
  if (["manufacturing", "retail", "ecommerce", "logistics", "pharma", "agriculture"].includes(industryId)) {
    departments.splice(2, 0, supplyChainDepartment);
  }
  
  // Add Risk Management for financial industries
  if (["banking", "insurance", "finance"].includes(industryId)) {
    departments.splice(1, 0, riskDepartment);
  }
  
  return departments;
}

export const industries: Industry[] = [
  { id: "manufacturing", name: "Manufacturing", icon: Factory, color: "hsl(24, 95%, 53%)", departments: buildDepartments("manufacturing") },
  { id: "healthcare", name: "Healthcare", icon: Heart, color: "hsl(350, 89%, 60%)", departments: buildDepartments("healthcare") },
  { id: "retail", name: "Retail", icon: Store, color: "hsl(339, 90%, 51%)", departments: buildDepartments("retail") },
  { id: "finance", name: "Finance", icon: Wallet, color: "hsl(142, 71%, 45%)", departments: buildDepartments("finance") },
  { id: "hr", name: "HR & People Analytics", icon: UserCircle, color: "hsl(291, 64%, 42%)", departments: buildDepartments("hr") },
];

export function getIndustry(id: string): Industry | undefined {
  return industries.find(i => i.id === id);
}

export function getDepartment(industryId: string, departmentId: string): Department | undefined {
  const industry = getIndustry(industryId);
  return industry?.departments.find(d => d.id === departmentId);
}
