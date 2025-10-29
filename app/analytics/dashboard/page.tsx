import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Card } from 'antd'
import ProfilerShell from './_components/ProfilerShell'

const ChartClient = dynamic(() => import('./_components/ChartClient'), {
  ssr: false,
  loading: () => <div className="skeleton" style={{height:200}} />,
})
const MenuVirtualized = dynamic(() => import('./_components/MenuVirtualized'), {
  ssr: false,
  loading: () => <div className="skeleton" style={{height:400}} />,
})

export default function DashboardPage() {
  return (
    <div className="grid">
      <Card title="KPI & Tren (Recharts)" className="card" style={{minHeight:650}}>
        <ProfilerShell id="ChartPanel">
          <Suspense fallback={<div className="skeleton" style={{height:200}} />}>
            <ChartClient />
          </Suspense>
        </ProfilerShell>
      </Card>

      <Card title="Sub-menu (500+ item, virtualized)" className="card">
        <ProfilerShell id="MenuPanel">
          <Suspense fallback={<div className="skeleton" style={{height:400}} />}>
            <MenuVirtualized />
          </Suspense>
        </ProfilerShell>
      </Card>
    </div>
  )
}
