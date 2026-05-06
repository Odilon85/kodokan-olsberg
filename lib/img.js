const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
export const img = (path) => `${base}${path}`
