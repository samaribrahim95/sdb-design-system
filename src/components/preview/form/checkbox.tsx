import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { PreviewProps } from "@/lib/component-registry"
import { memo, useState } from "react"

export const FormCheckboxPreview = memo(function FormCheckboxPreview({ variant }: PreviewProps) {
  const [checked, setChecked] = useState(variant.props.checked as boolean)
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        id="checkbox"
        checked={checked}
        onCheckedChange={(c) => setChecked(c === true)}
      />
      <Label htmlFor="checkbox">Accept terms</Label>
    </div>
  )
})