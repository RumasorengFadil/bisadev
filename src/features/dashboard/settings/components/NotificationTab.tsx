import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { TabsContent } from "@/components/ui/tabs";

export default function SecurityTab() {
    return (
        <TabsContent value="notifications" className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <p className="text-sm text-muted-foreground">Manage notification settings</p>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>New Enrollment Notifications</Label>
                            <p className="text-sm text-muted-foreground">Get notified when students enroll</p>
                        </div>
                        <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>New Review Notifications</Label>
                            <p className="text-sm text-muted-foreground">Get notified of new course reviews</p>
                        </div>
                        <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Transaction Notifications</Label>
                            <p className="text-sm text-muted-foreground">Get notified of new transactions</p>
                        </div>
                        <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Daily Summary Email</Label>
                            <p className="text-sm text-muted-foreground">Receive daily platform summary</p>
                        </div>
                        <Switch />
                    </div>
                </CardContent>
            </Card>
        </TabsContent>
    )
}