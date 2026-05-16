import { PreviewProps } from "@/lib/component-registry"
import { memo } from "react"
import { Spinner } from "../ui/spinner"

export const SpinnerPreview = memo(function SpinnerPreview({ variant }: PreviewProps) {
  const sizeClass = {
    sm: 'size-4',
    md: 'size-6',
    lg: 'size-8',
  }[variant.props.size as string] || 'size-4'
  
  return <Spinner className={sizeClass} />
})