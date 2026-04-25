import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

export function ResourceAccessInfo() {
  return (
    <Card className="bg-blue-50 border-blue-200 mb-8">
      <CardContent className="pt-6">
        <div className="flex items-start gap-3">
          <div className="shrink-0 mt-1">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
              <FileText className="h-4 w-4 text-white" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-blue-900 mb-1">
              How to access these files
            </h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Click "Download" to save files to your device</li>
              <li>• PDF files can be previewed directly in your browser</li>
              <li>• Other formats require appropriate software</li>
              <li>• Files remain available throughout the course</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
