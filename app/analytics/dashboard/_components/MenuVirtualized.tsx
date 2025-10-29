'use client'
import React from 'react'
import { FixedSizeList as List, areEqual } from 'react-window'
import { Badge } from 'antd'

type Item = { key: string; label: string; unread: boolean }
type ItemData = { items: Item[] }
type RowProps = { index: number; style: React.CSSProperties; data: ItemData }

const Row = React.memo(({ index, style, data }: RowProps) => {
  const item = data.items[index]
  return (
    <div style={{ ...style, display:'flex', alignItems:'center', padding:'0 12px', borderBottom:'1px solid #f0f0f0' }}>
      <span style={{ flex:1 }}>{item.label}</span>
      {item.unread && <Badge status="processing" />}
    </div>
  )
}, areEqual)

export default function MenuVirtualized() {
  const items = React.useMemo<Item[]>(
    () => Array.from({ length: 500 }, (_, i) => ({
      key: `menu-${i+1}`, label: `Sub Menu ${i+1}`, unread: i % 9 === 0
    })), []
  )

  return (
    <List
      height={600}
      itemCount={items.length}
      itemSize={40}
      width="100%"
      itemData={{ items }}
      itemKey={(index: string | number, data: { items: { [x: string]: { key: any } } }) => data.items[index].key}
    >
      {Row}
    </List>
  )
}
