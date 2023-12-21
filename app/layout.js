import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rtr Portfolio',
  description: 'Created by RTR',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link type='icon' href='/favicon.ico' rel='icon' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
