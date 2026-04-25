"use client"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SecurityTab from "@/features/dashboard/settings/components/SecurityTab";
import GeneralTab from "@/features/dashboard/settings/components/GeneralTab";

export function PageCLient() {

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2>Settings</h2>
        <p className="text-muted-foreground">Manage your settings and preferences</p>
      </div>

      {/* Settings Tabs */}
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger className="cursor-pointer" value="general">General</TabsTrigger>
          <TabsTrigger className="cursor-pointer" value="security">Security</TabsTrigger>
        </TabsList>

        <GeneralTab />

        <SecurityTab />
      </Tabs>
    </div>
  );
}
