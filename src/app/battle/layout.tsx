import { Layout } from '@/components/layouts/Battle'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Battle',
  description: 'Pokemon Battle',
}

export default function BattleLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
