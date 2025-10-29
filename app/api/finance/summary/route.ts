import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const url = new URL(req.url)
  const range = url.searchParams.get('range') ?? '7d'

  // buat label berdasarkan range
  const labels =
    range === '30d'
      ? Array.from({ length: 6 }, (_, i) => `Week ${i + 1}`)
      : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  // fungsi bantu buat fluktuasi data biar realistis
  const makeTrend = (base: number) =>
    labels.map((name, i) => ({
      name,
      value: Math.round(
        base +
          Math.sin(i / 2) * 40 + // variasi halus
          Math.random() * 30 + // variasi acak
          (range === '30d' ? i * 15 : 0)
      ),
    }))

  const base = range === '30d' ? 500 : 200
  const trend = makeTrend(base)

  const total = trend.reduce((a, b) => a + b.value, 0)
  const avg = Math.round(total / trend.length)
  const max = Math.max(...trend.map((t) => t.value))
  const min = Math.min(...trend.map((t) => t.value))

  return NextResponse.json({
    range,
    summary: { total, avg, max, min },
    trend,
  })
}
