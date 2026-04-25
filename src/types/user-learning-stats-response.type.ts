export interface UserLearningStatsResponse {
  courses_enrolled: number;
  courses_completed: number;
  learning_time_hours: number;
  current_streak: number;
  longest_streak: number;
}