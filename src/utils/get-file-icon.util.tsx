import { AttachmentType } from "@/features/dashboard/courses/types";
import { Download, FileText, File, FileSpreadsheet, Presentation, Archive, Eye } from "lucide-react";

export default function GetFileIcon(type:AttachmentType){
    switch (type) {
        case "pdf":
            return <FileText className="h-5 w-5 text-red-600" />;
        case "word":
            return <FileText className="h-5 w-5 text-blue-600" />;
        case "powerpoint":
            return <Presentation className="h-5 w-5 text-orange-600" />;
        case "excel":
            return <FileSpreadsheet className="h-5 w-5 text-green-600" />;
        case "zip":
            return <Archive className="h-5 w-5 text-gray-600" />;
        default:
            return <File className="h-5 w-5 text-gray-600" />;
    }
};
