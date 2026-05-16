// Design System Exports
// Tree-shakeable exports for npm package usage

// General Components
export { Button, buttonVariants } from '../components/ui/button'
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction,
} from '../components/ui/card'
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '../components/ui/dialog'
export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '../components/ui/tabs'
export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '../components/ui/collapsible'

// Feedback Components
export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '../components/ui/tooltip'
export { Toaster } from '../components/ui/sonner'
export {
  Alert,
  AlertTitle,
  AlertDescription,
} from '../components/ui/alert'
export { Spinner } from '../components/ui/spinner'
export { Progress } from '../components/ui/progress'

// Data Display Components
export { Skeleton } from '../components/ui/skeleton'
export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
} from '../components/ui/empty'
export { Badge, badgeVariants } from '../components/ui/badge'
export { Calendar, CalendarDayButton } from '../components/ui/calendar'

// Form Components
export { Input } from '../components/ui/input'
export { Textarea } from '../components/ui/textarea'
export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from '../components/ui/select'
export { Checkbox } from '../components/ui/checkbox'
export { RadioGroup, RadioGroupItem } from '../components/ui/radio-group'
export { Switch } from '../components/ui/switch'
export { Label } from '../components/ui/label'

// Re-export sonner toast for convenience
export { toast } from 'sonner'

// Utilities
export { cn } from './utils'

// Types
export type {
  ComponentId,
  ComponentCategory,
  ComponentVariant,
  ComponentDefinition,
} from './component-registry'
