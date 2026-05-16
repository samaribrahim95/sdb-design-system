import { PreviewProps } from "@/lib/component-registry"
import { memo } from "react"
import { Badge } from "../ui/badge"

export const BadgePreview = memo(function BadgePreview({ variant }: PreviewProps) {
  return (
    <div className="flex gap-2">
      <Badge variant={variant.props.variant as 'default' | 'secondary' | 'destructive' | 'outline'}>
        {variant.name}
      </Badge>
    </div>
  )
})