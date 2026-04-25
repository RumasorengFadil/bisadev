import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserFormValuesType, userSchema } from "../schemas/user.schema";
import { UserRole } from "@/enums/user.role.enum";
import useUpdateUserProfile from "../hooks/use-update-user-profile.hook";
import ButtonWithLoading from "@/components/ButtonWithLoadingV1";
import { useAuthStore } from "@/context/stores/use-auth.store";

export default function GeneralTab() {
  const [preview, setPreview] = useState<string | null>(null);
  const { user } = useAuthStore();
  const { mutate: updateUserProfile, isPending } = useUpdateUserProfile();
  const queryClient = useQueryClient();

  const form = useForm<UserFormValuesType>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
      role: UserRole.ADMIN,
      bio: "",
    },
  });

  const onSubmit = (data: Partial<UserFormValuesType>) => {
    updateUserProfile(data, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['me'] });
      }
    })
  };

  useEffect(() => {
    if (user) {
      console.log(user);
      form.reset({
        name: user.name ?? "",
        email: user.email ?? "",
        role: user.role ?? UserRole.ADMIN,
        bio: user.bio ?? "",
      });
    }
  }, [user, form]);

  return <>
    <TabsContent value="general" className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>User Information</CardTitle>
          <p className="text-sm text-muted-foreground">
            Update user details
          </p>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              {/* Photo */}
              <FormField
                control={form.control}
                name="avatar"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Profile Photo</FormLabel>

                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={preview || user?.avatar_url || ""} />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>

                      <FormControl>
                        <Input
                          type="file"
                          accept="image/*"
                          className="cursor-pointer"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            field.onChange(file);

                            if (file) {
                              setPreview(URL.createObjectURL(file));
                            }
                          }}
                        />
                      </FormControl>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Role */}
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>User Role</FormLabel>
                    <Select
                      disabled
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="instructor">Instructor</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Bio */}
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={3}
                        placeholder="Short bio about this user"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="max-w-40">
                <ButtonWithLoading disabled={isPending}
                  isLoading={isPending}
                  className="w-full cursor-pointer"
                  type="submit">
                  Save Changes
                </ButtonWithLoading>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

    </TabsContent>
  </>
}