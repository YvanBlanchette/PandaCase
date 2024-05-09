import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number) {
  const formatter =  new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  })

  return formatter.format(price)
}