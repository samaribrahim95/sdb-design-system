import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { PreviewProps } from "@/lib/component-registry"
import { memo, useState } from "react"

export const FormSwitchPreview = memo(function FormSwitchPreview({ variant }: PreviewProps) {
  const [checked, setChecked] = useState(variant.props.checked as boolean)
  return (
    <div className="flex items-center gap-3">
      <Switch id="switch" checked={checked} onCheckedChange={setChecked} />
      <Label htmlFor="switch">Enable notifications</Label>
    </div>
  )
})

export const FormSwitchCode = () => {
  return `<div className="flex items-center gap-3">
    <Switch id="switch" />
    <Label htmlFor="switch">Enable notifications</Label>
  </div>`;
}