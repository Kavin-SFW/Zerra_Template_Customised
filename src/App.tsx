import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DepartmentDashboard from "./pages/DepartmentDashboard";
import SalesDashboard from "./pages/dashboards/SalesDashboard";
import ManufacturingDashboard from "./pages/dashboards/ManufacturingDashboard";
import HealthcareDashboard from "./pages/dashboards/HealthcareDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sales" element={<SalesDashboard />} />
          <Route path="/manufacturing" element={<ManufacturingDashboard />} />
          <Route path="/healthcare" element={<HealthcareDashboard />} />
          <Route path="/dashboard/:industryId/:departmentId/:templateId?" element={<DepartmentDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
