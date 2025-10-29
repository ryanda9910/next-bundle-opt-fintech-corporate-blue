import Link from 'next/link'
import { Button, Card } from 'antd'

export default function Home() {
  return (
    <div className="grid">
      <Card title="Overview (Ringan)" className="card">
        <p>Area ringan tanpa chart libs. Coba navigasi ke dashboard analytics.</p>
        <Link href="/analytics/dashboard"><Button type="primary">Buka Analytics Dashboard →</Button></Link>
        <Link href="/analytics/dashboard-nosplit"><Button>Versi Non-Split →</Button></Link>
      </Card>
      <Card title="Tujuan" className="card">
        <ul>
          <li>Route splitting & dynamic import</li>
          <li>Ant Design layout</li>
          <li>SWR + Zustand + Recharts</li>
        </ul>
      </Card>
    </div>
  )
}
