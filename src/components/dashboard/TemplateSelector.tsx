/**
 * Template Selector Component
 * 
 * Allows users to switch between different dashboard templates
 */

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DepartmentTemplate } from "@/config/templates/types";
import { getAvailableTemplates, DEFAULT_TEMPLATE_ID } from "@/config/templates/getTemplateConfig";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Clock, 
  TrendingUp, 
  AlertTriangle,
  Target,
  Zap,
  BarChart3,
  Heart,
  Search,
  Lightbulb,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TemplateSelectorProps {
  className?: string;
}

const audienceIcons = {
  executive: Users,
  manager: BarChart3,
  analyst: Search,
  operator: Zap,
};

const audienceColors = {
  executive: "bg-purple-500/20 text-purple-600 dark:text-purple-400",
  manager: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
  analyst: "bg-green-500/20 text-green-600 dark:text-green-400",
  operator: "bg-orange-500/20 text-orange-600 dark:text-orange-400",
};

const timeframeColors = {
  "real-time": "bg-red-500/20 text-red-600 dark:text-red-400",
  daily: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400",
  weekly: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
  monthly: "bg-green-500/20 text-green-600 dark:text-green-400",
  quarterly: "bg-purple-500/20 text-purple-600 dark:text-purple-400",
};

export function TemplateSelector({ className }: TemplateSelectorProps) {
  const { industryId, departmentId, templateId } = useParams<{
    industryId: string;
    departmentId: string;
    templateId?: string;
  }>();
  const navigate = useNavigate();
  const [templates, setTemplates] = useState<DepartmentTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState<string>(
    templateId || DEFAULT_TEMPLATE_ID
  );

  useEffect(() => {
    if (industryId && departmentId) {
      loadTemplates();
    }
  }, [industryId, departmentId]);

  useEffect(() => {
    if (templateId) {
      setSelectedTemplate(templateId);
    }
  }, [templateId]);

  const loadTemplates = async () => {
    if (!industryId || !departmentId) return;
    
    setLoading(true);
    try {
      const availableTemplates = await getAvailableTemplates(industryId, departmentId);
      setTemplates(availableTemplates);
    } catch (error) {
      console.error("Error loading templates:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleTemplateChange = (newTemplateId: string) => {
    setSelectedTemplate(newTemplateId);
    if (industryId && departmentId) {
      navigate(`/dashboard/${industryId}/${departmentId}/${newTemplateId}`, {
        replace: true,
      });
    }
  };

  const currentTemplate = templates.find((t) => t.id === selectedTemplate) || templates[0];

  if (loading || templates.length === 0) {
    return (
      <div className={cn("glass-card p-4", className)}>
        <div className="text-sm text-muted-foreground">Loading templates...</div>
      </div>
    );
  }

  return (
    <Card className={cn("glass-card", className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">Dashboard Template</CardTitle>
            <CardDescription>Select a template to view different perspectives</CardDescription>
          </div>
          <Select value={selectedTemplate} onValueChange={handleTemplateChange}>
            <SelectTrigger className="w-[250px]">
              <SelectValue placeholder="Select template" />
            </SelectTrigger>
            <SelectContent>
              {templates.map((template) => (
                <SelectItem key={template.id} value={template.id}>
                  {template.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      {currentTemplate && (
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">{currentTemplate.description}</p>
            <div className="flex flex-wrap gap-2">
              <Badge className={audienceColors[currentTemplate.audience]}>
                {React.createElement(audienceIcons[currentTemplate.audience], {
                  className: "w-3 h-3 mr-1",
                })}
                {currentTemplate.audience.charAt(0).toUpperCase() + currentTemplate.audience.slice(1)}
              </Badge>
              <Badge className={timeframeColors[currentTemplate.timeframe]}>
                <Clock className="w-3 h-3 mr-1" />
                {currentTemplate.timeframe.charAt(0).toUpperCase() + currentTemplate.timeframe.slice(1)}
              </Badge>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
}
