// types/inertia.d.ts
export interface User {
  id: number
  name: string
  email: string
  role: string
}

export interface AppProps {
  auth: {
    user: User
  }
}
