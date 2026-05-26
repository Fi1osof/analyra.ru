import { builder } from 'server/schema/builder'

export const DeviceTypeEnum = builder.enumType('DeviceType', {
  values: ['desktop', 'tablet', 'mobile'] as const,
})
