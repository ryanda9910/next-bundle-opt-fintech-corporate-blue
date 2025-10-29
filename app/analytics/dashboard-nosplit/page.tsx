import { Card } from "antd";
import ProfilerShell from "../dashboard/_components/ProfilerShell";
import ChartClient from "../dashboard/_components/ChartClient";
import MenuVirtualized from "../dashboard/_components/MenuVirtualized";

export default function DashboardNoSplit() {
  return (
    <div className="grid">
      <Card title="KPI & Tren (No Split)" className="card" style={{ minHeight: 650 }}>
        <ProfilerShell id="ChartPanel_NoSplit">
          <ChartClient />
        </ProfilerShell>
      </Card>

      <Card title="Sub-menu (No Split)" className="card">
        <ProfilerShell id="MenuPanel_NoSplit">
          <MenuVirtualized />
        </ProfilerShell>
      </Card>
    </div>
  )
}
