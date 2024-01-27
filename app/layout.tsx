import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'

// added for check

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={cn("p-[20px] bg-gradient-to-r from-cyan-500 to-blue-500",
        inter.className)}>
          <Toaster/>
          {children}
        </body>
      </html>
    </SessionProvider>

  )
}
