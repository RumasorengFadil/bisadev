import { LessonResponse, QuestionResponse } from "@/features/dashboard/courses/types";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { FileQuestion } from "lucide-react";

// QuizLessonIntro.tsx
interface QuizLessonIntroProps {
    lesson: LessonResponse;
    onStart: () => void;
    quizQuestion: QuestionResponse[] | null,
}

export function QuizLessonIntro({ lesson, quizQuestion, onStart }: QuizLessonIntroProps) {
    const totalQuestions = quizQuestion?.length;

    return (
        <div className="flex-1 flex items-center justify-center bg-neutral-50">
            <Card className="w-full max-w-4xl shadow-sm">
                <CardContent className="py-16 px-10 flex flex-col items-center text-center space-y-8">

                    {/* Badge */}
                    <div className="flex items-center gap-2 text-sm font-medium text-green-700 bg-green-100 px-4 py-1.5 rounded-full">
                        ? Quiz
                    </div>

                    {/* Title */}
                    <div className="space-y-2">
                        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">
                            {lesson.title}
                        </h1>
                        {lesson.content && (
                            <p className="text-neutral-600 max-w-2xl mx-auto">
                                {lesson.content}
                            </p>
                        )}
                    </div>

                    {/* Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-neutral-700">
                        <div className="flex flex-col items-center gap-1">
                            <span className="font-semibold">{totalQuestions}</span>
                            <span className="text-neutral-500">Questions</span>
                        </div>

                        <div className="flex flex-col items-center gap-1">
                            <span className="font-semibold">70%</span>
                            <span className="text-neutral-500">Passing Score</span>
                        </div>

                        <div className="flex flex-col items-center gap-1">
                            <span className="font-semibold">
                                {lesson.duration_minutes || "—"}
                            </span>
                            <span className="text-neutral-500">Minutes</span>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="w-full max-w-sm pt-4">
                        <Button
                            size="lg"
                            onClick={onStart}
                            className="w-full text-lg py-6 bg-primary hover:opacity-90 cursor-pointer"
                        >
                            Kerjakan Quiz
                        </Button>
                    </div>

                    {/* Helper text */}
                    <p className="text-xs text-neutral-500">
                        You can retake this quiz if you don’t pass.
                    </p>

                </CardContent>
            </Card>
        </div>
    );
}
