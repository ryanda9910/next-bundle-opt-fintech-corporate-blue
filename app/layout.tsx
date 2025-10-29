import './globals.css'
import ClientShell from '@/components/ClientShell'

export const metadata = {
  title: 'Next Bundle Optimization – Fintech',
  description: 'Corporate Blue demo with AntD, SWR, Zustand, Recharts',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <ClientShell>
          {children}
        </ClientShell>
      </body>
    </html>
  )
}
