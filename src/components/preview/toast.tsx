import { PreviewProps } from "@/lib/component-registry"
import { memo } from "react"
import { toast } from "sonner"
import { Button } from "../ui/button"

export const ToastPreview = memo(function ToastPreview({ variant }: PreviewProps) {
  const handleClick = () => {
    switch (variant.props.type) {
      case 'success':
        toast.success('Operation completed!')
        break
      case 'error':
        toast.error('Something went wrong.')
        break
      case 'warning':
        toast.warning('Please check input.')
        break
      default:
        toast('This is a notification')
    }
  }
  return (
    <Button variant="outline" onClick={handleClick}>
      Show {variant.name} Toast
    </Button>
  )
})