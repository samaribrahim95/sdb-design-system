import React, { memo } from "react"
import { Button } from "../ui/button"
import { ArrowRightIcon, PlusIcon } from "lucide-react"
import { ComponentVariant, PreviewProps } from "@/lib/component-registry"

export const ButtonPreview = memo(function ButtonPreview({ variant }: PreviewProps) {
  const iconPosition = variant.props.iconPosition as string
  const buttonVariant = variant.props.variant as 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'

  if (iconPosition === 'start') {
    return (
      <Button variant={buttonVariant}>
        <PlusIcon className="size-4" />
        Add Item
      </Button>
    )
  }
  if (iconPosition === 'end') {
    return (
      <Button variant={buttonVariant}>
        Continue
        <ArrowRightIcon className="size-4" />
      </Button>
    )
  }
  if (iconPosition === 'only') {
    return (
      <Button variant={buttonVariant} size="icon">
        <PlusIcon className="size-4" />
      </Button>
    )
  }
  return <Button variant={buttonVariant}>{variant.name} Button</Button>
})

export const ButtonShowcase = ({ variant }: {variant : ComponentVariant}) => {
  const v = variant.props.variant
  const icon = variant.props.iconPosition as string
  if (icon === 'start') return `<Button variant="${v}">\n  <PlusIcon className="size-4" />\n  Add Item\n</Button>`
  if (icon === 'end') return `<Button variant="${v}">\n  Continue\n  <ArrowRightIcon className="size-4" />\n</Button>`
  if (icon === 'only') return `<Button variant="${v}" size="icon">\n  <PlusIcon className="size-4" />\n</Button>`
  return `<Button variant="${v}">${variant.name} Button</Button>`
}