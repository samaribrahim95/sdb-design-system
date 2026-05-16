import { Label } from "@/components/ui/label"
import { SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem, Select } from "@/components/ui/select"
import { PreviewProps } from "@/lib/component-registry"
import { memo } from "react"

export const FormSelectPreview = memo(function FormSelectPreview({ variant }: PreviewProps) {
  const grouped = variant.props.grouped as boolean
  return (
    <div className="w-64 space-y-2">
      <Label>Select option</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select..." />
        </SelectTrigger>
        <SelectContent>
          {grouped ? (
            <>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Vegetables</SelectLabel>
                <SelectItem value="carrot">Carrot</SelectItem>
                <SelectItem value="broccoli">Broccoli</SelectItem>
              </SelectGroup>
            </>
          ) : (
            <>
              <SelectItem value="1">Option 1</SelectItem>
              <SelectItem value="2">Option 2</SelectItem>
              <SelectItem value="3">Option 3</SelectItem>
            </>
          )}
        </SelectContent>
      </Select>
    </div>
  )
})