import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PreviewProps } from "@/lib/component-registry"
import { memo } from "react"

export const FormInputPreview = memo(function FormInputPreview({ variant }: PreviewProps) {
  return (
    <div className="w-64 space-y-2">
      <Label htmlFor="input">Label</Label>
      <Input
        id="input"
        type={variant.props.type as string}
        placeholder={`Enter ${variant.props.type}`}
        disabled={variant.props.disabled as boolean}
      />
    </div>
  )
})