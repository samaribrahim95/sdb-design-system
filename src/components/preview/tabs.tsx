import { PreviewProps } from "@/lib/component-registry"
import { memo } from "react"
import { TabsList, TabsTrigger, TabsContent, Tabs } from "../ui/tabs"

export const TabsPreview = memo(function TabsPreview({ variant }: PreviewProps) {
  const count = variant.props.count as number
  return (
    <Tabs defaultValue="tab1" className="w-80">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        {count >= 3 && <TabsTrigger value="tab3">Tab 3</TabsTrigger>}
      </TabsList>
      <TabsContent value="tab1" className="p-4 border rounded-md mt-2">
        Content for Tab 1
      </TabsContent>
      <TabsContent value="tab2" className="p-4 border rounded-md mt-2">
        Content for Tab 2
      </TabsContent>
      {count >= 3 && (
        <TabsContent value="tab3" className="p-4 border rounded-md mt-2">
          Content for Tab 3
        </TabsContent>
      )}
    </Tabs>
  )
})
