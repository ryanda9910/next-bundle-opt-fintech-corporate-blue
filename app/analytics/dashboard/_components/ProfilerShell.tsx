'use client'
import React, { Profiler, useRef } from 'react'

type Props = { id: string; children: React.ReactNode }

export default function ProfilerShell({ id, children }: Props) {
  const renders = useRef(0)
  const totalActual = useRef(0)
  const totalCommit = useRef(0)

  const onRender: React.ProfilerOnRenderCallback = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) => {
    renders.current += 1
    totalActual.current += actualDuration
    totalCommit.current += commitTime - startTime

    // optional: mark/measure di Performance API
    performance.mark(`${id}-start-${renders.current}`)
    performance.mark(`${id}-end-${renders.current}`)
    performance.measure(`${id}-render-${renders.current}`, `${id}-start-${renders.current}`, `${id}-end-${renders.current}`)

    // ringkas ke console
    // tip: buka DevTools > Console > click "Preserve log" lalu interaksikan halaman
    console.table([{
      id,
      phase,                         // 'mount' | 'update'
      actualDuration: +actualDuration.toFixed(2),  // waktu render komponen & child-nya
      baseDuration: +baseDuration.toFixed(2),      // estimasi render tanpa memo
      startTime: +startTime.toFixed(2),
      commitTime: +commitTime.toFixed(2),
      renders: renders.current,
      totalActual: +totalActual.current.toFixed(2),
      totalCommit: +totalCommit.current.toFixed(2),
    }])
  }

  return (
    <Profiler id={id} onRender={onRender}>
      {children}
    </Profiler>
  )
}
