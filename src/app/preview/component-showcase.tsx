'use client'

import { useState, useMemo, useCallback, memo } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CodeBlock } from './code-block'
import { ComponentPreview } from './component-previews'
import {
  componentRegistry,
  componentsByCategory,
  categoryLabels,
  type ComponentId,
  type ComponentVariant,
  type ComponentCategory,
} from '@/lib/component-registry'
import { cn } from '@/lib/utils'
import { ButtonShowcase } from '@/components/preview/buttons'
import { FormSwitchCode } from '@/components/preview/form/switch'
import { FormRadioCode } from '@/components/preview/form/radio'

// Generate usage code for a component variant
function generateUsageCode(componentId: ComponentId, variant: ComponentVariant): string {
  switch (componentId) {
    case 'button': {
      return ButtonShowcase({ variant });
    }
    case 'card':
      return `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Description</CardDescription>${variant.props.hasAction ? `
    <CardAction>
      <Button variant="ghost" size="sm">Action</Button>
    </CardAction>` : ''}
  </CardHeader>
  <CardContent>
    <p>Card content</p>
  </CardContent>
  <CardFooter>
    <Button size="sm">Save</Button>
  </CardFooter>
</Card>`
    case 'modal':
      return `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Modal</Button>
  </DialogTrigger>
  <DialogContent${variant.props.showCloseButton === false ? ' showCloseButton={false}' : ''}>
    <DialogHeader>
      <DialogTitle>Modal Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    <div>Content</div>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`
    case 'tooltip':
      return `<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Hover me</Button>
  </TooltipTrigger>
  <TooltipContent side="${variant.props.side}">
    <p>Tooltip content</p>
  </TooltipContent>
</Tooltip>`
    case 'toast':
      return variant.props.type === 'default'
        ? `toast('Your message here')`
        : `toast.${variant.props.type}('Message')`
    case 'alert':
      return `<Alert${variant.props.variant === 'destructive' ? ' variant="destructive"' : ''}>
  <InfoIcon />
  <AlertTitle>Title</AlertTitle>
  <AlertDescription>Description</AlertDescription>
</Alert>`
    case 'skeleton':
      if (variant.props.type === 'card') return `<div className="space-y-3">\n  <Skeleton className="h-32 w-full" />\n  <Skeleton className="h-4 w-3/4" />\n  <Skeleton className="h-4 w-1/2" />\n</div>`
      if (variant.props.type === 'avatar') return `<div className="flex items-center gap-3">\n  <Skeleton className="size-10 rounded-full" />\n  <div className="space-y-2">\n    <Skeleton className="h-4 w-24" />\n    <Skeleton className="h-3 w-16" />\n  </div>\n</div>`
      return `<div className="space-y-2">\n  <Skeleton className="h-4 w-full" />\n  <Skeleton className="h-4 w-4/5" />\n</div>`
    case 'empty':
      return `<Empty className="border">
  <EmptyHeader>
    ${variant.props.variant === 'icon' ? `<EmptyMedia variant="icon">\n      <InboxIcon />\n    </EmptyMedia>\n    ` : ''}<EmptyTitle>No items yet</EmptyTitle>
    <EmptyDescription>Create your first item.</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button size="sm">Create Item</Button>
  </EmptyContent>
</Empty>`
    case 'badge':
      return `<Badge variant="${variant.props.variant}">${variant.name}</Badge>`
    case 'calendar':
      return variant.props.mode === 'range'
        ? `const [range, setRange] = useState<DateRange | undefined>()\n\n<Calendar\n  mode="range"\n  selected={range}\n  onSelect={setRange}\n/>`
        : `const [date, setDate] = useState<Date | undefined>()\n\n<Calendar\n  mode="single"\n  selected={date}\n  onSelect={setDate}\n/>`
    case 'collapse':
      return `const [open, setOpen] = useState(${variant.props.open})

<Collapsible open={open} onOpenChange={setOpen}>
  <CollapsibleTrigger asChild>
    <Button variant="outline">Toggle</Button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <div>Collapsible content</div>
  </CollapsibleContent>
</Collapsible>`
    case 'progress':
      return `<Progress value={${variant.props.value}} />`
    case 'tabs':
      return `<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>`
    case 'spinner':
      return `<Spinner className="${variant.props.size === 'sm' ? 'size-4' : variant.props.size === 'lg' ? 'size-8' : 'size-6'}" />`
    case 'form-input':
      return `<div className="space-y-2">
  <Label htmlFor="input">Label</Label>
  <Input id="input" type="${variant.props.type}"${variant.props.disabled ? ' disabled' : ''} />
</div>`
    case 'form-textarea':
      return `<div className="space-y-2">
  <Label htmlFor="textarea">Message</Label>
  <Textarea id="textarea"${variant.props.disabled ? ' disabled' : ''} />
</div>`
    case 'form-select':
      return variant.props.grouped
        ? `<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select..." />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Group</SelectLabel>
      <SelectItem value="1">Option 1</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`
        : `<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
    <SelectItem value="2">Option 2</SelectItem>
  </SelectContent>
</Select>`
    case 'form-checkbox':
      return `<div className="flex items-center gap-2">
  <Checkbox id="checkbox" />
  <Label htmlFor="checkbox">Accept terms</Label>
</div>`
    case 'form-radio':
      return FormRadioCode({variant})
    case 'form-switch':
      return FormSwitchCode()
    default:
      return ''
  }
}

// Sidebar navigation item
const NavItem = memo(function NavItem({
  component,
  isActive,
  onClick,
}: {
  component: { id: ComponentId; name: string }
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full text-left px-3 py-2 text-sm rounded-md transition-colors',
        isActive
          ? 'bg-primary text-primary-foreground'
          : 'text-muted-foreground hover:bg-accent hover:text-foreground'
      )}
    >
      {component.name}
    </button>
  )
})

// Variant selector
const VariantSelector = memo(function VariantSelector({
  variants,
  value,
  onChange,
}: {
  variants: ComponentVariant[]
  value: number
  onChange: (index: number) => void
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {variants.map((variant, index) => (
        <Button
          key={variant.name}
          variant={value === index ? 'default' : 'outline'}
          size="sm"
          onClick={() => onChange(index)}
        >
          {variant.name}
        </Button>
      ))}
    </div>
  )
})

// Main showcase component
export function ComponentShowcase() {
  const [selectedComponent, setSelectedComponent] = useState<ComponentId>('button')
  const [variantIndex, setVariantIndex] = useState(0)

  const component = componentRegistry[selectedComponent]
  const variant = component.variants[variantIndex]

  const handleComponentChange = useCallback((id: ComponentId) => {
    setSelectedComponent(id)
    setVariantIndex(0)
  }, [])

  const usageCode = useMemo(
    () => generateUsageCode(selectedComponent, variant),
    [selectedComponent, variant]
  )

  return (
    <div className="flex">
      {/* Sidebar Navigation */}
      <aside className="w-56 shrink-0 p-6 bg-white dark:bg-black shadow-[7px_-6px_7px_-7px_var(--sidebar-border)] z-10">
        <nav className="sticky top-4 space-y-4">
          {(Object.keys(componentsByCategory) as ComponentCategory[]).map((category) => (
            <div key={category}>
              <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {categoryLabels[category]}
              </h3>
              <div className="space-y-1">
                {componentsByCategory[category].map((comp) => (
                  <NavItem
                    key={comp.id}
                    component={comp}
                    isActive={selectedComponent === comp.id}
                    onClick={() => handleComponentChange(comp.id)}
                  />
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 space-y-6 p-6 bg-gray-50 dark:bg-neutral-700">
        {/* Component info */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>{component.name}</CardTitle>
            <CardDescription>{component.description}</CardDescription>
          </CardHeader>
        </Card>

        {/* Variant selector */}
        {component.variants.length > 1 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Variants</h4>
            <VariantSelector
              variants={component.variants}
              value={variantIndex}
              onChange={setVariantIndex}
            />
          </div>
        )}

        {/* Preview and Code tabs */}
        <Tabs defaultValue="preview" className="w-full">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>

          <TabsContent value="preview" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-center min-h-[200px] p-4">
                  <ComponentPreview componentId={selectedComponent} variant={variant} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="code" className="mt-4 space-y-4">
            {/* Import code */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Import</h4>
              <CodeBlock code={component.importCode} />
            </div>

            {/* Usage code */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Usage</h4>
              <CodeBlock code={usageCode} />
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
