import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Blog } from "@/typdata/blog";



export default function LatestArticlesTable({ blogs }: {blogs:Blog[] | null}) {
  return (
    <div className="px-4 lg:px-6">
      <Card className="@container/card">
        <CardHeader>
          <h2 className="text-lg font-semibold">📄 Artikel Terbaru</h2>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Judul</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Dibuat</TableHead>
                <TableHead>Dipublikasikan</TableHead>
                <TableHead>Diupdate</TableHead>
                {/* <TableHead>Kata</TableHead> */}
              </TableRow>
            </TableHeader>
            <TableBody>
              {blogs?.map((blog) => (
                <TableRow key={blog.id}>
                  <TableCell className="font-medium">{blog.title}</TableCell>
                  <TableCell>
                    <Badge
                      variant={blog.status === "published" ? "default" : "secondary"}
                      className={
                        blog.status === "publish"
                          ? "bg-green-600 hover:bg-green-700 text-white"
                          : "bg-yellow-500 hover:bg-yellow-600 text-white"
                      }
                    >
                      {blog.status === "publish" ? "Publish" : "Draft"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(blog.created_at).toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </TableCell>
                  <TableCell>
                    {blog.published_at
                      ? new Date(blog.published_at).toLocaleDateString("id-ID", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })
                      : "-"}
                  </TableCell>
                  <TableCell>
                    {blog.updated_at
                      ? new Date(blog.updated_at).toLocaleDateString("id-ID", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })
                      : "-"}
                  </TableCell>
                  {/* <TableCell>{blog.wordCount} kata</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
