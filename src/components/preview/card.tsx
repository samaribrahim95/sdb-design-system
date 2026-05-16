import { PreviewProps } from "@/lib/component-registry"
import { memo } from "react"
import { Button } from "../ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from "../ui/card"

export const CardPreview = memo(function CardPreview({ variant }: PreviewProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
        {variant.props.hasAction && (
          <CardAction>
            <Button variant="ghost" size="sm">Action</Button>
          </CardAction>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          This is the card content area.
        </p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Save</Button>
      </CardFooter>
    </Card>
  )
})