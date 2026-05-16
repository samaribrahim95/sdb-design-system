import { PreviewProps } from "@/lib/component-registry"
import { ChevronDownIcon } from "lucide-react"
import { memo, useState } from "react"
import { Button } from "../ui/button"
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "../ui/collapsible"

export const CollapsiblePreview = memo(function CollapsiblePreview({ variant }: PreviewProps) {
  const [open, setOpen] = useState(variant.props.open as boolean)
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-72 space-y-2">
      <CollapsibleTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          Toggle content
          <ChevronDownIcon className={`size-4 transition-transform ${open ? 'rotate-180' : ''}`} />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="rounded-md border p-4 text-sm">
          This content can be collapsed or expanded.
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
})