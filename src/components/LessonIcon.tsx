import { LessonType } from "@/features/dashboard/courses/types"
import { BookOpen, FileText, FileUp, HelpCircle, LucideProps, Video } from "lucide-react"

export const LessonIcon = ({
    type,
    ...iconProps
}: LucideProps & {
    type: LessonType;
}) => {
    switch (type) {
        case LessonType.VIDEO:
            return <Video {...iconProps} />;
        case LessonType.PDF:
            return <FileText  {...iconProps} />;
        case LessonType.ARTICLE:
            return <BookOpen  {...iconProps} />;
        case LessonType.QUIZ:
            return <HelpCircle  {...iconProps} />;
        case LessonType.ATTACHMENT:
            return <FileUp  {...iconProps} />;
        default:
            return null;
    }
};