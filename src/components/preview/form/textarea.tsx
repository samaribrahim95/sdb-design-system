import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { PreviewProps } from "@/lib/component-registry"
import { memo } from "react"

export const FormTextareaPreview = memo(function FormTextareaPreview({ variant }: PreviewProps) {
  return (
    <div className="w-64 space-y-2">
      <Label htmlFor="textarea">Message</Label>
      <Textarea
        id="textarea"
        placeholder="Type your message..."
        disabled={variant.props.disabled as boolean}
      />
    </div>
  )
})