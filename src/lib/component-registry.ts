// Component Registry for Design System
const PKG = '@sdb/design-system'

export type ComponentId =
  | 'button'
  | 'card'
  | 'modal'
  | 'tooltip'
  | 'toast'
  | 'alert'
  | 'skeleton'
  | 'empty'
  | 'badge'
  | 'calendar'
  | 'collapse'
  | 'progress'
  | 'tabs'
  | 'spinner'
  | 'form-input'
  | 'form-textarea'
  | 'form-select'
  | 'form-checkbox'
  | 'form-radio'
  | 'form-switch'

export type ComponentCategory =
  | 'general'
  | 'feedback'
  | 'data-display'
  | 'form-fields'

export interface ComponentVariant {
  name: string
  props: Record<string, any>
  description?: string
}

export interface PreviewProps {
  variant: ComponentVariant
}

export interface ComponentDefinition {
  id: ComponentId
  name: string
  description: string
  category: ComponentCategory
  variants: ComponentVariant[]
  importCode: string
  dependencies?: string[]
}

export const categoryLabels: Record<ComponentCategory, string> = {
  general: 'General',
  feedback: 'Feedback',
  'data-display': 'Data Display',
  'form-fields': 'Form Fields',
}

export const componentRegistry: Record<ComponentId, ComponentDefinition> = {
  // General Components
  button: {
    id: 'button',
    name: 'Button',
    description: 'Interactive button component with multiple variants and sizes.',
    category: 'general',
    variants: [
      { name: 'Default', props: { variant: 'default', iconPosition: 'none' } },
      { name: 'Secondary', props: { variant: 'secondary', iconPosition: 'none' } },
      { name: 'Destructive', props: { variant: 'destructive', iconPosition: 'none' } },
      { name: 'Outline', props: { variant: 'outline', iconPosition: 'none' } },
      { name: 'Ghost', props: { variant: 'ghost', iconPosition: 'none' } },
      { name: 'Link', props: { variant: 'link', iconPosition: 'none' } },
      { name: 'Icon Start', props: { variant: 'default', iconPosition: 'start' } },
      { name: 'Icon End', props: { variant: 'default', iconPosition: 'end' } },
      { name: 'Icon Only', props: { variant: 'outline', iconPosition: 'only' } },
    ],
    importCode: `import { Button } from ${PKG}`,
  },
  card: {
    id: 'card',
    name: 'Card',
    description: 'Container component for grouping related content.',
    category: 'general',
    variants: [
      { name: 'Default', props: {} },
      { name: 'With Action', props: { hasAction: true } },
    ],
    importCode: `import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from ${PKG}`,
  },
  modal: {
    id: 'modal',
    name: 'Modal (Dialog)',
    description: 'Overlay dialog for important interactions.',
    category: 'general',
    variants: [
      { name: 'Default', props: {} },
      { name: 'No Close Button', props: { showCloseButton: false } },
    ],
    importCode: `import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from ${PKG}`,
  },
  tabs: {
    id: 'tabs',
    name: 'Tabs',
    description: 'Organize content into multiple sections.',
    category: 'general',
    variants: [
      { name: 'Default', props: { count: 3 } },
      { name: 'Two Tabs', props: { count: 2 } },
    ],
    importCode: `import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from ${PKG}`,
  },
  collapse: {
    id: 'collapse',
    name: 'Collapsible',
    description: 'Expandable/collapsible content section.',
    category: 'general',
    variants: [
      { name: 'Closed', props: { open: false } },
      { name: 'Open', props: { open: true } },
    ],
    importCode: `import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from ${PKG}`,
  },

  // Feedback Components
  tooltip: {
    id: 'tooltip',
    name: 'Tooltip',
    description: 'Contextual information on hover.',
    category: 'feedback',
    variants: [
      { name: 'Top', props: { side: 'top' } },
      { name: 'Bottom', props: { side: 'bottom' } },
      { name: 'Left', props: { side: 'left' } },
      { name: 'Right', props: { side: 'right' } },
    ],
    importCode: `import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from ${PKG}`,
  },
  toast: {
    id: 'toast',
    name: 'Toast (Sonner)',
    description: 'Temporary notification messages.',
    category: 'feedback',
    variants: [
      { name: 'Default', props: { type: 'default' } },
      { name: 'Success', props: { type: 'success' } },
      { name: 'Error', props: { type: 'error' } },
      { name: 'Warning', props: { type: 'warning' } },
    ],
    importCode: `import { toast } from 'sonner'
import { Toaster } from ${PKG}

// Add <Toaster /> to your layout
// Then use: toast('Message') or toast.success('Success!')`,
  },
  alert: {
    id: 'alert',
    name: 'Alert',
    description: 'Static notification for important messages.',
    category: 'feedback',
    variants: [
      { name: 'Default', props: { variant: 'default' } },
      { name: 'Destructive', props: { variant: 'destructive' } },
    ],
    importCode: `import {
  Alert,
  AlertTitle,
  AlertDescription,
} from ${PKG}`,
  },
  spinner: {
    id: 'spinner',
    name: 'Spinner',
    description: 'Loading indicator animation.',
    category: 'feedback',
    variants: [
      { name: 'Small', props: { size: 'sm' } },
      { name: 'Medium', props: { size: 'md' } },
      { name: 'Large', props: { size: 'lg' } },
    ],
    importCode: `import { Spinner } from ${PKG}`,
  },
  progress: {
    id: 'progress',
    name: 'Progress',
    description: 'Visual indicator of completion percentage.',
    category: 'feedback',
    variants: [
      { name: '25%', props: { value: 25 } },
      { name: '50%', props: { value: 50 } },
      { name: '75%', props: { value: 75 } },
      { name: '100%', props: { value: 100 } },
    ],
    importCode: `import { Progress } from ${PKG}`,
  },

  // Data Display Components
  skeleton: {
    id: 'skeleton',
    name: 'Skeleton',
    description: 'Placeholder loading state for content.',
    category: 'data-display',
    variants: [
      { name: 'Text', props: { type: 'text' } },
      { name: 'Card', props: { type: 'card' } },
      { name: 'Avatar', props: { type: 'avatar' } },
    ],
    importCode: `import { Skeleton } from ${PKG}`,
  },
  empty: {
    id: 'empty',
    name: 'Empty State',
    description: 'Placeholder for empty content areas.',
    category: 'data-display',
    variants: [
      { name: 'Default', props: { variant: 'default' } },
      { name: 'With Icon', props: { variant: 'icon' } },
    ],
    importCode: `import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
} from ${PKG}`,
  },
  badge: {
    id: 'badge',
    name: 'Badge',
    description: 'Small status or label indicator.',
    category: 'data-display',
    variants: [
      { name: 'Default', props: { variant: 'default' } },
      { name: 'Secondary', props: { variant: 'secondary' } },
      { name: 'Destructive', props: { variant: 'destructive' } },
      { name: 'Outline', props: { variant: 'outline' } },
    ],
    importCode: `import { Badge } from ${PKG}`,
  },
  calendar: {
    id: 'calendar',
    name: 'Calendar',
    description: 'Date picker calendar component.',
    category: 'data-display',
    variants: [
      { name: 'Single Date', props: { mode: 'single' } },
      { name: 'Range', props: { mode: 'range' } },
    ],
    importCode: `import { Calendar } from ${PKG}`,
  },

  // Form Fields
  'form-input': {
    id: 'form-input',
    name: 'Input',
    description: 'Text input field for forms.',
    category: 'form-fields',
    variants: [
      { name: 'Text', props: { type: 'text' } },
      { name: 'Email', props: { type: 'email' } },
      { name: 'Password', props: { type: 'password' } },
      { name: 'Disabled', props: { type: 'text', disabled: true } },
    ],
    importCode: `import { Input, Label } from ${PKG}`,
  },
  'form-textarea': {
    id: 'form-textarea',
    name: 'Textarea',
    description: 'Multi-line text input field.',
    category: 'form-fields',
    variants: [
      { name: 'Default', props: {} },
      { name: 'Disabled', props: { disabled: true } },
    ],
    importCode: `import { Textarea, Label } from ${PKG}`,
  },
  'form-select': {
    id: 'form-select',
    name: 'Select',
    description: 'Dropdown selection input.',
    category: 'form-fields',
    variants: [
      { name: 'Default', props: {} },
      { name: 'With Groups', props: { grouped: true } },
    ],
    importCode: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from ${PKG}`,
  },
  'form-checkbox': {
    id: 'form-checkbox',
    name: 'Checkbox',
    description: 'Toggleable checkbox input.',
    category: 'form-fields',
    variants: [
      { name: 'Unchecked', props: { checked: false } },
      { name: 'Checked', props: { checked: true } },
    ],
    importCode: `import { Checkbox, Label } from ${PKG}`,
  },
  'form-radio': {
    id: 'form-radio',
    name: 'Radio Group',
    description: 'Single selection from multiple options.',
    category: 'form-fields',
    variants: [
      { name: 'Vertical', props: { orientation: 'vertical' } },
      { name: 'Horizontal', props: { orientation: 'horizontal' } },
    ],
    importCode: `import { RadioGroup, RadioGroupItem, Label } from ${PKG}`,
  },
  'form-switch': {
    id: 'form-switch',
    name: 'Switch',
    description: 'Toggle switch input.',
    category: 'form-fields',
    variants: [
      { name: 'Off', props: { checked: false } },
      { name: 'On', props: { checked: true } },
    ],
    importCode: `import { Switch, Label } from ${PKG}`,
  },
}

// Group components by category
export const componentsByCategory = Object.values(componentRegistry).reduce(
  (acc, comp) => {
    if (!acc[comp.category]) acc[comp.category] = []
    acc[comp.category].push(comp)
    return acc
  },
  {} as Record<ComponentCategory, ComponentDefinition[]>
)

export const componentList = Object.values(componentRegistry)
