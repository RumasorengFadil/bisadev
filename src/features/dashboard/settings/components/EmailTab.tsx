import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";

export default function SecurityTab() {
    return (
        <TabsContent value="email" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Email Configuration</CardTitle>
              <p className="text-sm text-muted-foreground">Configure email settings</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="smtp_host">SMTP Host</Label>
                <Input id="smtp_host" placeholder="smtp.gmail.com" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="smtp_port">SMTP Port</Label>
                  <Input id="smtp_port" placeholder="587" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtp_user">SMTP Username</Label>
                  <Input id="smtp_user" placeholder="user@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="smtp_password">SMTP Password</Label>
                <Input id="smtp_password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="from_email">From Email Address</Label>
                <Input id="from_email" type="email" defaultValue="noreply@lms.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="from_name">From Name</Label>
                <Input id="from_name" defaultValue="LMS Platform" />
              </div>
              <Button>Save Email Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
    )
}