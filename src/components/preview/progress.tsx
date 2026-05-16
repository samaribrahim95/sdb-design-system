import { PreviewProps } from "@/lib/component-registry"
import { memo } from "react"
import { Progress } from "../ui/progress"

export const ProgressPreview = memo(function ProgressPreview({ variant }: PreviewProps) {
  return (
    <div className="w-64 space-y-2">
      <Progress value={variant.props.value as number} />
      <p className="text-sm text-muted-foreground text-center">
        {variant.props.value}% complete
      </p>
    </div>
  )
})