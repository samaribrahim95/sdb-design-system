import { PreviewProps } from "@/lib/component-registry"
import { InboxIcon, PlusIcon } from "lucide-react"
import { memo } from "react"
import { Button } from "../ui/button"
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from "../ui/empty"

export const EmptyPreview = memo(function EmptyPreview({ variant }: PreviewProps) {
  const showIcon = variant.props.variant === 'icon'
  return (
    <Empty className="border max-w-sm">
      <EmptyHeader>
        {showIcon && (
          <EmptyMedia variant="icon">
            <InboxIcon />
          </EmptyMedia>
        )}
        <EmptyTitle>No items yet</EmptyTitle>
        <EmptyDescription>
          Get started by creating your first item.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">
          <PlusIcon className="size-4" />
          Create Item
        </Button>
      </EmptyContent>
    </Empty>
  )
})
