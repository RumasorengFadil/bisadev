
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
    Form
} from "@/components/ui/form"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import ButtonWithLoading from "@/components/ButtonWithLoadingV1"
import CustomFormField from "@/components/CustomFormField"
import { TabsContent } from "@/components/ui/tabs"
import useUpdateUserPassword from "../hooks/use-update-user-password"
import { SecurityFormValuesType, securitySchema } from "../schemas/security-schema"



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