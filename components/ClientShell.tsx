'use client'
import 'antd/dist/reset.css'
import { ConfigProvider, theme as antdTheme, Layout, Typography } from 'antd'

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{ token: { colorPrimary: '#1677ff' }, algorithm: antdTheme.defaultAlgorithm }}
    >
      <Layout style={{minHeight:'100dvh', background: '#f6f8fa'}}>
        <Layout.Content>
          <div className="container">
            <Typography.Title>Next Bundle Optimization Starter</Typography.Title>
            <p className="muted">Corporate Blue • AntD • SWR • Zustand • Recharts</p>
            {children}
          </div>
        </Layout.Content>
      </Layout>
    </ConfigProvider>
  )
}
