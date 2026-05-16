import { PreviewProps } from "@/lib/component-registry"
import { memo } from "react"
import { Button } from "../ui/button"
import { DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, Dialog } from "../ui/dialog"

export const ModalPreview = memo(function ModalPreview({ variant }: PreviewProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Modal</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={variant.props.showCloseButton !== false}>
        <DialogHeader>
          <DialogTitle>Modal Title</DialogTitle>
          <DialogDescription>
            This is a modal dialog.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">Modal content</p>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
})
