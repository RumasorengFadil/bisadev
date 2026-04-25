export interface CourseProgressResponseDto {
  id: string;
  user_id: string;
  course_id: string;

  completed_lessons: number;
  total_lessons: number;
  progress_percent: number;

  last_lesson_id: string | null;
  last_accessed_at: Date | null;

  created_at: Date;
  updated_at: Date;
}