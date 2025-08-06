import { 
  IconTrendingDown, 
  IconTrendingUp,
  IconFileDescription,
  IconCircleCheck,
  IconClock,
  IconPercentage
} from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CardTotalProps {
  title: string
  value: string | number
  description?: string
  trend?: {
    value: string
    isPositive: boolean
  }
  footerText?: string
  footerDescription?: string
  className?: string
  variant?: 'default' | 'total' | 'concluidas' | 'pendentes' | 'taxa'
}

export function CardTotal({
  title,
  value,
  description,
  trend,
  footerText,
  footerDescription,
  className = "",
  variant = "default"
}: CardTotalProps) {
  const TrendIcon = trend?.isPositive ? IconTrendingUp : IconTrendingDown

  // Configuração de ícones e cores por variante
  const getVariantConfig = () => {
    switch (variant) {
      case 'total':
        return {
          icon: IconFileDescription,
          iconColor: 'text-blue-600',
          borderColor: 'border-blue-200'
        }
      case 'concluidas':
        return {
          icon: IconCircleCheck,
          iconColor: 'text-green-600',
          borderColor: 'border-green-200'
        }
      case 'pendentes':
        return {
          icon: IconClock,
          iconColor: 'text-orange-600',
          borderColor: 'border-orange-200'
        }
      case 'taxa':
        return {
          icon: IconPercentage,
          iconColor: 'text-purple-600',
          borderColor: 'border-purple-200'
        }
      default:
        return {
          icon: IconFileDescription,
          iconColor: 'text-gray-600',
          borderColor: 'border-gray-200'
        }
    }
  }

  const config = getVariantConfig()
  const IconComponent = config.icon

  return (
    <Card className={`@container/card ${config.borderColor} border-2 ${className}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardDescription className="text-base font-medium">{title}</CardDescription>
          <div className="p-2 rounded-lg bg-gray-50">
            <IconComponent className={`w-6 h-6 ${config.iconColor}`} />
          </div>
        </div>
        <CardTitle className="text-3xl font-bold tabular-nums @[250px]/card:text-4xl text-gray-900">
          {value}
        </CardTitle>
        {trend && (
          <CardAction>
            <Badge variant="outline" className={`${trend.isPositive ? 'border-green-200 text-green-700' : 'border-red-200 text-red-700'}`}>
              <TrendIcon className={`w-4 h-4 ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`} />
              {trend.value}
            </Badge>
          </CardAction>
        )}
      </CardHeader>
      {(footerText || footerDescription) && (
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          {footerText && (
            <div className="line-clamp-1 flex gap-2 font-medium">
              {footerText} {trend && <TrendIcon className="size-4" />}
            </div>
          )}
          {footerDescription && (
            <div className="text-muted-foreground">
              {footerDescription}
            </div>
          )}
        </CardFooter>
      )}
    </Card>
  )
}
