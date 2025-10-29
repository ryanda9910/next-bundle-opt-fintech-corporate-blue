'use client'
import useSWR from 'swr'
import { Segmented } from 'antd'
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts'
import { useDashboardStore } from '@/store/useDashboardStore'
import { fetcher } from '@/lib/fetcher'

export default function ChartClient() {
  const { range, setRange } = useDashboardStore((s) => ({
    range: s.range,
    setRange: s.setRange,
  }))

  const { data, isLoading } = useSWR(
    `/api/finance/summary?range=${range}`,
    fetcher,
    { revalidateOnFocus: false }
  )

  const trend =
    data?.trend || [
      { name: 'Mon', value: 120 },
      { name: 'Tue', value: 240 },
      { name: 'Wed', value: 180 },
      { name: 'Thu', value: 300 },
      { name: 'Fri', value: 260 },
    ]

  return (
    <div style={{ width: '100%', height: 560 }}>
      {/* Filter range pakai AntD Segmented */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 8 }}>
        <Segmented
          options={[
            { label: '7 Hari', value: '7d' },
            { label: '30 Hari', value: '30d' },
          ]}
          value={range}
          onChange={(val) => setRange(val as '7d' | '30d')}
        />
      </div>

      {/* Chart 1 – Line */}
      <ResponsiveContainer height={260}>
        <LineChart data={trend}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#1677ff"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>

      <div style={{ height: 16 }} />

      {/* Chart 2 – Bar */}
      <ResponsiveContainer height={240}>
        <BarChart data={trend}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#1677ff" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      {isLoading && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(255,255,255,0.5)',
            backdropFilter: 'blur(2px)',
          }}
        />
      )}
    </div>
  )
}
