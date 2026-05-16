import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React$1 from 'react';
import { VariantProps } from 'class-variance-authority';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { ToasterProps } from 'sonner';
export { toast } from 'sonner';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { DayPicker, DayButton } from 'react-day-picker';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as LabelPrimitive from '@radix-ui/react-label';
import { ClassValue } from 'clsx';

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Button({ className, variant, size, asChild, ...props }: React$1.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): react_jsx_runtime.JSX.Element;

declare function Card({ className, ...props }: React$1.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function CardHeader({ className, ...props }: React$1.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function CardTitle({ className, ...props }: React$1.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function CardDescription({ className, ...props }: React$1.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function CardAction({ className, ...props }: React$1.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function CardContent({ className, ...props }: React$1.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function CardFooter({ className, ...props }: React$1.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;

declare function Dialog({ ...props }: React$1.ComponentProps<typeof DialogPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function DialogTrigger({ ...props }: React$1.ComponentProps<typeof DialogPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
declare function DialogPortal({ ...props }: React$1.ComponentProps<typeof DialogPrimitive.Portal>): react_jsx_runtime.JSX.Element;
declare function DialogClose({ ...props }: React$1.ComponentProps<typeof DialogPrimitive.Close>): react_jsx_runtime.JSX.Element;
declare function DialogOverlay({ className, ...props }: React$1.ComponentProps<typeof DialogPrimitive.Overlay>): react_jsx_runtime.JSX.Element;
declare function DialogContent({ className, children, showCloseButton, ...props }: React$1.ComponentProps<typeof DialogPrimitive.Content> & {
    showCloseButton?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function DialogHeader({ className, ...props }: React$1.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function DialogFooter({ className, ...props }: React$1.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function DialogTitle({ className, ...props }: React$1.ComponentProps<typeof DialogPrimitive.Title>): react_jsx_runtime.JSX.Element;
declare function DialogDescription({ className, ...props }: React$1.ComponentProps<typeof DialogPrimitive.Description>): react_jsx_runtime.JSX.Element;

declare function Tabs({ className, ...props }: React$1.ComponentProps<typeof TabsPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function TabsList({ className, ...props }: React$1.ComponentProps<typeof TabsPrimitive.List>): react_jsx_runtime.JSX.Element;
declare function TabsTrigger({ className, ...props }: React$1.ComponentProps<typeof TabsPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
declare function TabsContent({ className, ...props }: React$1.ComponentProps<typeof TabsPrimitive.Content>): react_jsx_runtime.JSX.Element;

declare function Collapsible({ ...props }: React.ComponentProps<typeof CollapsiblePrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function CollapsibleTrigger({ ...props }: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>): react_jsx_runtime.JSX.Element;
declare function CollapsibleContent({ ...props }: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>): react_jsx_runtime.JSX.Element;

declare function TooltipProvider({ delayDuration, ...props }: React$1.ComponentProps<typeof TooltipPrimitive.Provider>): react_jsx_runtime.JSX.Element;
declare function Tooltip({ ...props }: React$1.ComponentProps<typeof TooltipPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function TooltipTrigger({ ...props }: React$1.ComponentProps<typeof TooltipPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
declare function TooltipContent({ className, sideOffset, children, ...props }: React$1.ComponentProps<typeof TooltipPrimitive.Content>): react_jsx_runtime.JSX.Element;

declare const Toaster: ({ ...props }: ToasterProps) => react_jsx_runtime.JSX.Element;

declare const alertVariants: (props?: ({
    variant?: "default" | "destructive" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Alert({ className, variant, ...props }: React$1.ComponentProps<'div'> & VariantProps<typeof alertVariants>): react_jsx_runtime.JSX.Element;
declare function AlertTitle({ className, ...props }: React$1.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function AlertDescription({ className, ...props }: React$1.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;

declare function Spinner({ className, ...props }: React.ComponentProps<'svg'>): react_jsx_runtime.JSX.Element;

declare function Progress({ className, value, ...props }: React$1.ComponentProps<typeof ProgressPrimitive.Root>): react_jsx_runtime.JSX.Element;

declare function Skeleton({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;

declare function Empty({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function EmptyHeader({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare const emptyMediaVariants: (props?: ({
    variant?: "default" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function EmptyMedia({ className, variant, ...props }: React.ComponentProps<'div'> & VariantProps<typeof emptyMediaVariants>): react_jsx_runtime.JSX.Element;
declare function EmptyTitle({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function EmptyDescription({ className, ...props }: React.ComponentProps<'p'>): react_jsx_runtime.JSX.Element;
declare function EmptyContent({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;

declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Badge({ className, variant, asChild, ...props }: React$1.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
}): react_jsx_runtime.JSX.Element;

declare function Calendar({ className, classNames, showOutsideDays, captionLayout, buttonVariant, formatters, components, ...props }: React$1.ComponentProps<typeof DayPicker> & {
    buttonVariant?: React$1.ComponentProps<typeof Button>['variant'];
}): react_jsx_runtime.JSX.Element;
declare function CalendarDayButton({ className, day, modifiers, ...props }: React$1.ComponentProps<typeof DayButton>): react_jsx_runtime.JSX.Element;

declare function Input({ className, type, ...props }: React$1.ComponentProps<'input'>): react_jsx_runtime.JSX.Element;

declare function Textarea({ className, ...props }: React$1.ComponentProps<'textarea'>): react_jsx_runtime.JSX.Element;

declare function Select({ ...props }: React$1.ComponentProps<typeof SelectPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function SelectGroup({ ...props }: React$1.ComponentProps<typeof SelectPrimitive.Group>): react_jsx_runtime.JSX.Element;
declare function SelectValue({ ...props }: React$1.ComponentProps<typeof SelectPrimitive.Value>): react_jsx_runtime.JSX.Element;
declare function SelectTrigger({ className, size, children, ...props }: React$1.ComponentProps<typeof SelectPrimitive.Trigger> & {
    size?: 'sm' | 'default';
}): react_jsx_runtime.JSX.Element;
declare function SelectContent({ className, children, position, ...props }: React$1.ComponentProps<typeof SelectPrimitive.Content>): react_jsx_runtime.JSX.Element;
declare function SelectLabel({ className, ...props }: React$1.ComponentProps<typeof SelectPrimitive.Label>): react_jsx_runtime.JSX.Element;
declare function SelectItem({ className, children, ...props }: React$1.ComponentProps<typeof SelectPrimitive.Item>): react_jsx_runtime.JSX.Element;
declare function SelectSeparator({ className, ...props }: React$1.ComponentProps<typeof SelectPrimitive.Separator>): react_jsx_runtime.JSX.Element;
declare function SelectScrollUpButton({ className, ...props }: React$1.ComponentProps<typeof SelectPrimitive.ScrollUpButton>): react_jsx_runtime.JSX.Element;
declare function SelectScrollDownButton({ className, ...props }: React$1.ComponentProps<typeof SelectPrimitive.ScrollDownButton>): react_jsx_runtime.JSX.Element;

declare function Checkbox({ className, ...props }: React$1.ComponentProps<typeof CheckboxPrimitive.Root>): react_jsx_runtime.JSX.Element;

declare function RadioGroup({ className, ...props }: React$1.ComponentProps<typeof RadioGroupPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function RadioGroupItem({ className, ...props }: React$1.ComponentProps<typeof RadioGroupPrimitive.Item>): react_jsx_runtime.JSX.Element;

declare function Switch({ className, ...props }: React$1.ComponentProps<typeof SwitchPrimitive.Root>): react_jsx_runtime.JSX.Element;

declare function Label({ className, ...props }: React$1.ComponentProps<typeof LabelPrimitive.Root>): react_jsx_runtime.JSX.Element;

declare function cn(...inputs: ClassValue[]): string;

type ComponentId = 'button' | 'card' | 'modal' | 'tooltip' | 'toast' | 'alert' | 'skeleton' | 'empty' | 'badge' | 'calendar' | 'collapse' | 'progress' | 'tabs' | 'spinner' | 'form-input' | 'form-textarea' | 'form-select' | 'form-checkbox' | 'form-radio' | 'form-switch';
type ComponentCategory = 'general' | 'feedback' | 'data-display' | 'form-fields';
interface ComponentVariant {
    name: string;
    props: Record<string, any>;
    description?: string;
}
interface ComponentDefinition {
    id: ComponentId;
    name: string;
    description: string;
    category: ComponentCategory;
    variants: ComponentVariant[];
    importCode: string;
    dependencies?: string[];
}

export { Alert, AlertDescription, AlertTitle, Badge, Button, Calendar, CalendarDayButton, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, Collapsible, CollapsibleContent, CollapsibleTrigger, type ComponentCategory, type ComponentDefinition, type ComponentId, type ComponentVariant, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle, Input, Label, Progress, RadioGroup, RadioGroupItem, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Skeleton, Spinner, Switch, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, Toaster, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, buttonVariants, cn };
