import { format } from "date-fns-tz";

export function formatDate({
  value,
  includeTime = false,
  timeZone
}: {
  value: string;
  includeTime?: boolean;
  timeZone?: string
}) {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return format(
    new Date(value),
    `dd MMM yyyy ${includeTime ? "HH:mm" : ""}`,
    { timeZone: timeZone ? timeZone : tz }
  );
}