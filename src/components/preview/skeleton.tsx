import { PreviewProps } from "@/lib/component-registry"
import { memo } from "react"
import { Skeleton } from "../ui/skeleton"

export const SkeletonPreview = memo(function SkeletonPreview({ variant }: PreviewProps) {
  const type = variant.props.type as string
  if (type === 'card') {
    return (
      <div className="space-y-3 w-64">
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    )
  }
  if (type === 'avatar') {
    return (
      <div className="flex items-center gap-3">
        <Skeleton className="size-10 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
    )
  }
  return (
    <div className="space-y-2 w-64">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
      <Skeleton className="h-4 w-3/5" />
    </div>
  )
})