import { PreviewProps } from "@/lib/component-registry"
import { memo } from "react"
import { Button } from "../ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

export const TooltipPreview = memo(function TooltipPreview({ variant }: PreviewProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent side={variant.props.side as 'top' | 'bottom' | 'left' | 'right'}>
        <p>Tooltip ({variant.name})</p>
      </TooltipContent>
    </Tooltip>
  )
})