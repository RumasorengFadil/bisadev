import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { AttachmentResponse, AttachmentType, LessonResponse } from "@/features/dashboard/courses/types";


interface LessonResourcesCardProps {
  attachments: AttachmentResponse[];
  getFileIcon: (type: AttachmentType) => React.ReactNode;
  toMB: (size: number) => string;
  lesson: LessonResponse
}
export function LessonResourcesCard({
  lesson,
  getFileIcon,
  toMB,
}: LessonResourcesCardProps) {
  
  if (!lesson.attachment?.length) return null;

  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle className="text-lg flex items-center gap-2">
          <Download className="h-5 w-5" />
          {lesson.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6 space-y-4">
        {/* Description */}
        {lesson.description && (
          <div className="pb-4 border-b">
            <p className="text-gray-700">{lesson.description}</p>
          </div>
        )}

        {/* Files */}
        <div className="space-y-3">
          {lesson.attachment.map((attachment) =>
            attachment.file_url ? (
              <div
                key={attachment.id}
                className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50 transition group"
              >
                {/* Icon */}
                {attachment.type &&
                  <div className="shrink-0">
                    {getFileIcon(attachment.type)}
                  </div>
                }

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 truncate">
                    {attachment.name}
                  </p>
                  {attachment.file_size &&
                    <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                      <span className="uppercase">{attachment.type}</span>
                      <span>•</span>
                      <span>{toMB(+attachment.file_size)}</span>
                    </div>
                  }
                </div>

                {/* Action */}
                <Button size="sm" className="bg-primary hover:bg-blue-500" asChild>
                  <Link href={attachment.file_url} target="_blank">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Link>
                </Button>
              </div>
            ) : null
          )}
        </div>
      </CardContent>
    </Card>
  );
}
