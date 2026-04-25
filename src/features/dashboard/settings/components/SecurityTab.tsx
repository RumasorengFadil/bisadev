
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card"

import { TabsContent } from "@/components/ui/tabs"
import { SecurityFormValuesType, securitySchema } from "../schemas/security-schema"
import useUpdateUserPassword from "../hooks/use-update-user-password"
import ButtonWithLoading from "@/components/ButtonWithLoadingV1"
import CustomFormField from "@/components/CustomFormField"



export default function SecurityTab() {

    const { mutate: updateUserPassword, isPending } = useUpdateUserPassword();
    const form = useForm<SecurityFormValuesType>({
        resolver: zodResolver(securitySchema),
        defaultValues: {
            current_password: "",
            new_password: "",
            confirm_password: "",
        },
    })

    function onSubmit(values: Partial<SecurityFormValuesType>) {
        updateUserPassword(values, {
            onSuccess: () => {
                form.reset();
            }
        })
    }

    return (
        <TabsContent value="security" className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <p className="text-sm text-muted-foreground">
                        Manage security and access control
                    </p>
                </CardHeader>

                <CardContent>

                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-4"
                        >

                            {/* Current Password */}
                            <CustomFormField
                                form={form}
                                name="current_password"
                                type="password"
                                label="Current Password"
                                autocomplete="current-password"
                            />

                            {/* New Password */}
                            <CustomFormField
                                form={form}
                                name="new_password"
                                type="password"
                                label="New Password"
                                autocomplete="new-password"
                            />

                            {/* Confirm Password */}
                            <CustomFormField
                                form={form}
                                name="confirm_password"
                                label="Confirm Password"
                                type="password"
                            />

                            <div className="max-w-40">
                                <ButtonWithLoading disabled={isPending}
                                    isLoading={isPending}
                                    className="w-full cursor-pointer"
                                    type="submit">
                                    Update Password
                                </ButtonWithLoading>
                            </div>

                        </form>
                    </Form>

                </CardContent>
            </Card>
        </TabsContent>
    )
}