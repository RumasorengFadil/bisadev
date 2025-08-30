import React, { useState } from "react"
import {
    Table,
    TableHead,
    TableHeader,
    TableRow,
    TableCell,
    TableBody,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuCheckboxItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, MoreHorizontal } from "lucide-react"
import { format } from "date-fns"
import { Pagination } from "@/typdata/pagination"
import { User } from "@/typdata/user"
import { useRouter } from "nextjs-toploader/app"

const ALL_COLUMNS = ["name", "email", "registered_at", "approved", "linkedin"]

export default function ManageUsersTable({
    pagination,
    searchDefValue,
    onApprove = () => { },
    onDelete = () => { },
    onBulkDelete = () => { }
}: {
    pagination: Pagination<User> | null,
    searchDefValue?: string | null,
    onApprove?: (res: User) => void,
    onDelete?: (res: User) => void,
    onBulkDelete?: (ids: string[]) => void,
}) {
    const { data: users, prev_page_url, next_page_url } = pagination ?? {};
    const [visibleColumns, setVisibleColumns] = useState(ALL_COLUMNS);
    const [searchKey, setSearchKey] = useState(searchDefValue ?? "");
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const allSelected = selectedRows.length === users?.length;
    const router = useRouter();

    const handleSelectAll = () => {
        if (allSelected) {
            setSelectedRows([]);
        } else {
            setSelectedRows(users?.map((b) => b.id) ?? []);
        }
    };

    const toggleSelectRow = (id: string) => {
        setSelectedRows((prev) =>
            prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
        )
    }

    const toggleColumn = (column: string) => {
        setVisibleColumns((prev) =>
            prev.includes(column)
                ? prev.filter((col) => col !== column)
                : [...prev, column]
        )
    }

    return (
        <div className="px-4 lg:px-6">
            <div className="flex items-center py-4 gap-2">
                <form
                    className="w-full"
                    action=""
                    onSubmit={(e) => {
                        e.preventDefault();
                        const url = new URL(window.location.href);
                        url.searchParams.set("search", searchKey);
                        url.searchParams.set("page", "1");

                        router.push(url.pathname + "?" + url.searchParams.toString());
                    }}>
                    <Input
                        placeholder="Search user..."
                        onChange={(e) => setSearchKey(e.target.value)}
                        value={searchKey}
                        className="max-w-sm"
                    />
                </form>
                {selectedRows.length > 0 && (
                    <Button
                        variant="destructive"
                        onClick={(e) => {
                            if (confirm("Are you sure to delete selected users?")) {
                                e.preventDefault();
                                onBulkDelete(selectedRows);
                            }
                        }}
                    >
                        Delete Selected ({selectedRows.length})
                    </Button>
                )}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns <ChevronDown size={16} />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {ALL_COLUMNS.map((column) => (
                            <DropdownMenuCheckboxItem
                                key={column}
                                checked={visibleColumns.includes(column)}
                                onCheckedChange={() => toggleColumn(column)}
                            >
                                {column}
                            </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="rounded-md border overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>
                                <Checkbox
                                    aria-label="Select all"
                                    checked={allSelected}
                                    onCheckedChange={handleSelectAll}
                                />
                            </TableHead>
                            {visibleColumns.includes("name") && <TableHead>Name</TableHead>}
                            {visibleColumns.includes("email") && <TableHead>Email</TableHead>}
                            {visibleColumns.includes("linkedin") && <TableHead>Linkedin</TableHead>}
                            {visibleColumns.includes("registered_at") && <TableHead>Registered</TableHead>}
                            {visibleColumns.includes("approved") && <TableHead>Status</TableHead>}
                            <TableHead className="text-center">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users?.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>
                                    <Checkbox
                                        aria-label="Select row"
                                        checked={selectedRows.includes(user.id)}
                                        onCheckedChange={() => toggleSelectRow(user.id)}
                                    />
                                </TableCell>
                                {visibleColumns.includes("name") && <TableCell>{user.name}</TableCell>}
                                {visibleColumns.includes("email") && <TableCell>{user.email}</TableCell>}
                                {visibleColumns.includes("linkedin") && <TableCell><a className="text-blue-500" href={user.linkedin} target="_blank">Visit</a>{ }</TableCell>}
                                {visibleColumns.includes("registered_at") && (
                                    <TableCell>{format(new Date(user.created_at), "dd MMM yyyy")}</TableCell>
                                )}
                                {visibleColumns.includes("approved") && (
                                    <TableCell>
                                        <span
                                            className={`px-2 py-1 text-xs rounded-full ${user.email_verified_at
                                                ? "bg-green-100 text-green-700"
                                                : "bg-yellow-100 text-yellow-700"
                                                }`}
                                        >
                                            {user.email_verified_at ? "Approved" : "Pending"}
                                        </span>
                                    </TableCell>
                                )}
                                <TableCell className="text-center">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <span className="sr-only">Open menu</span>
                                                <MoreHorizontal size={16} />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            {!user.email_verified_at && (
                                                <DropdownMenuItem
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        onApprove(user);
                                                    }}
                                                    className="cursor-pointer"
                                                >
                                                    Approve
                                                </DropdownMenuItem>
                                            )}
                                            <DropdownMenuItem onClick={(e) => {
                                                if (confirm("Are you sure to delete selected users?")) {
                                                    e.preventDefault();
                                                    onDelete(user);
                                                }
                                            }} className="text-red-500 cursor-pointer">
                                                Delete
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            {/* Pagination */}
            <div className="flex items-center justify-between py-4 text-sm text-muted-foreground">
                <div>{selectedRows.length} row(s) selected.</div>
                <div className="space-x-2">
                    <div
                        className="inline-block"
                        onClick={(e) => {
                            e.preventDefault();
                            if (!prev_page_url) return;

                            const page = new URL(prev_page_url ?? "").searchParams.get("page") || null;
                            const url = new URL(window.location.href);
                            url.searchParams.set("page", page ?? "");

                            router.push(url.pathname + "?" + url.searchParams.toString());
                        }}
                    >
                        <Button
                            variant="outline"
                            size="sm"
                            className={`${prev_page_url ? "" : "bg-muted text-muted-foreground cursor-auto hover:text-muted-foreground"}`}
                        >
                            Previous
                        </Button>
                    </div>
                    <div
                        className="inline-block"
                        onClick={(e) => {
                            e.preventDefault();
                            if (!next_page_url) return;
                            const page = new URL(next_page_url ?? "").searchParams.get("page") || null;
                            const url = new URL(window.location.href);
                            url.searchParams.set("page", page ?? "");

                            router.push(url.pathname + "?" + url.searchParams.toString());
                        }}
                    >
                        <Button
                            variant="outline"
                            size="sm"
                            className={`${next_page_url ? "" : "bg-muted text-muted-foreground cursor-auto hover:text-muted-foreground"}`}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
