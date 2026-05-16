import { PreviewProps } from "@/lib/component-registry"
import { AlertTriangleIcon, InfoIcon } from "lucide-react"
import { memo } from "react"
import { Alert, AlertTitle, AlertDescription } from "../ui/alert"

export const AlertPreview = memo(function AlertPreview({ variant }: PreviewProps) {
  const isDestructive = variant.props.variant === 'destructive'
  return (
    <Alert variant={variant.props.variant as 'default' | 'destructive'} className="max-w-md">
      {isDestructive ? <AlertTriangleIcon /> : <InfoIcon />}
      <AlertTitle>Alert Title</AlertTitle>
      <AlertDescription>This is an alert message.</AlertDescription>
    </Alert>
  )
})