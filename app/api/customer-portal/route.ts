import { CustomerPortal } from '@dodopayments/nextjs'

export const GET = CustomerPortal({
  bearerToken:  process.env.DODO_PAYMENTS_API_KEY || "dodo_key_placeholder",
  environment:  (process.env.DODO_PAYMENTS_ENVIRONMENT as 'test_mode' | 'live_mode') || 'test_mode',
})
