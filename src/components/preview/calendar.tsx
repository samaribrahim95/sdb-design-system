import { PreviewProps } from "@/lib/component-registry";
import { memo, useState } from "react";
import { Calendar } from "../ui/calendar";

export const CalendarPreview = memo(function CalendarPreview({ variant }: PreviewProps) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [range, setRange] = useState<{ from: Date; to?: Date }>({ from: new Date() })

  if (variant.props.mode === 'range') {
    return (
      <Calendar
        mode="range"
        selected={range}
        onSelect={(r) => r && setRange(r)}
        className="rounded-md border"
      />
    )
  }
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
})