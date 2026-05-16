'use client'

import { memo } from 'react'

import type { ComponentId, ComponentVariant } from '@/lib/component-registry'
import { ButtonPreview } from '@/components/preview/buttons'
import { AlertPreview } from '@/components/preview/alerts'
import { BadgePreview } from '@/components/preview/badge'
import { CalendarPreview } from '@/components/preview/calendar'
import { CardPreview } from '@/components/preview/card'
import { CollapsiblePreview } from '@/components/preview/collapsible'
import { EmptyPreview } from '@/components/preview/empty'
import { ModalPreview } from '@/components/preview/modal'
import { SkeletonPreview } from '@/components/preview/skeleton'
import { ToastPreview } from '@/components/preview/toast'
import { TooltipPreview } from '@/components/preview/tooltip'
import { FormCheckboxPreview } from '@/components/preview/form/checkbox'
import { FormInputPreview } from '@/components/preview/form/inputs'
import { FormRadioPreview } from '@/components/preview/form/radio'
import { FormSelectPreview } from '@/components/preview/form/select'
import { FormSwitchPreview } from '@/components/preview/form/switch'
import { FormTextareaPreview } from '@/components/preview/form/textarea'
import { ProgressPreview } from '@/components/preview/progress'
import { SpinnerPreview } from '@/components/preview/spinner'
import { TabsPreview } from '@/components/preview/tabs'

// Preview renderer
interface ComponentPreviewProps {
  componentId: ComponentId
  variant: ComponentVariant
}

export const ComponentPreview = memo(function ComponentPreview({
  componentId,
  variant,
}: ComponentPreviewProps) {
  switch (componentId) {
    case 'button':
      return <ButtonPreview variant={variant} />
    case 'card':
      return <CardPreview variant={variant} />
    case 'modal':
      return <ModalPreview variant={variant} />
    case 'tooltip':
      return <TooltipPreview variant={variant} />
    case 'toast':
      return <ToastPreview variant={variant} />
    case 'alert':
      return <AlertPreview variant={variant} />
    case 'skeleton':
      return <SkeletonPreview variant={variant} />
    case 'empty':
      return <EmptyPreview variant={variant} />
    case 'badge':
      return <BadgePreview variant={variant} />
    case 'calendar':
      return <CalendarPreview variant={variant} />
    case 'collapse':
      return <CollapsiblePreview variant={variant} />
    case 'progress':
      return <ProgressPreview variant={variant} />
    case 'tabs':
      return <TabsPreview variant={variant} />
    case 'spinner':
      return <SpinnerPreview variant={variant} />
    case 'form-input':
      return <FormInputPreview variant={variant} />
    case 'form-textarea':
      return <FormTextareaPreview variant={variant} />
    case 'form-select':
      return <FormSelectPreview variant={variant} />
    case 'form-checkbox':
      return <FormCheckboxPreview variant={variant} />
    case 'form-radio':
      return <FormRadioPreview variant={variant} />
    case 'form-switch':
      return <FormSwitchPreview variant={variant} />
    default:
      return null
  }
})
