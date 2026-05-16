import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { PreviewProps } from "@/lib/component-registry"
import { memo } from "react"

export const FormRadioPreview = memo(function FormRadioPreview({ variant }: PreviewProps) {
  const horizontal = variant.props.orientation === 'horizontal'
  return (
    <RadioGroup defaultValue="option1" className={horizontal ? 'flex gap-4' : ''}>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option1" id="r1" />
        <Label htmlFor="r1">Option 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option2" id="r2" />
        <Label htmlFor="r2">Option 2</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option3" id="r3" />
        <Label htmlFor="r3">Option 3</Label>
      </div>
    </RadioGroup>
  )
})

export const FormRadioCode = ({variant}: PreviewProps) => {
  return `<RadioGroup defaultValue="option1"${variant.props.orientation === 'horizontal' ? ' className="flex gap-4"' : ''}>
    <div className="flex items-center gap-2">
      <RadioGroupItem value="option1" id="r1" />
      <Label htmlFor="r1">Option 1</Label>
    </div>
    <div className="flex items-center gap-2">
      <RadioGroupItem value="option2" id="r2" />
      <Label htmlFor="r2">Option 2</Label>
    </div>
  </RadioGroup>`;
}