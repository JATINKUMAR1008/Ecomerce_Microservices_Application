"use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/navbar'
import NextTopLoader from 'nextjs-toploader'
import { Toaster } from '@/components/ui/toaster'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient()
  return (
    <html lang="en">
      <body className={inter.className}><QueryClientProvider client={queryClient}><NextTopLoader/><Navbar/>{children}<Toaster/></QueryClientProvider></body>
    </html>
  )
}
