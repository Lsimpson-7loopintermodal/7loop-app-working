import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [activeEldTab, setActiveEldTab] = useState('Overview')
  const [activeDashboardTab, setActiveDashboardTab] = useState('overview')
  const [activeSettingsTab, setActiveSettingsTab] = useState('general')
  const [switches, setSwitches] = useState({
    system1: false,
    system2: true,
    system3: false,
    alerts: true
  })
  const [settings, setSettings] = useState({
    compactMode: false,
    autoStart: true,
    minimizeToTray: false,
    notifications: {
      systemAlerts: true,
      fuelAlerts: true,
      driverAlerts: true,
      maintenanceAlerts: true,
      loadBoardAlerts: false,
      geofenceAlerts: true
    },
    notificationMethods: {
      desktop: true,
      email: false,
      sms: false,
      sound: true
    },
    quietHours: {
      enabled: false,
      start: '22:00',
      end: '07:00'
    },
    security: {
      twoFactor: false,
      autoLock: true
    },
    accessControl: {
      requireApproval: true
    },
    privacy: {
      anonymizeDrivers: false,
      gdprMode: false
    },
    advanced: {
      debugMode: false,
      gpuAccel: true,
      backgroundSync: true
    }
  })

  // Sample data for charts
  const performanceData = [
    { name: 'Jan', value: 400, efficiency: 240 },
    { name: 'Feb', value: 300, efficiency: 139 },
    { name: 'Mar', value: 200, efficiency: 980 },
    { name: 'Apr', value: 278, efficiency: 390 },
    { name: 'May', value: 189, efficiency: 480 },
    { name: 'Jun', value: 239, efficiency: 380 },
  ]

  const systemStatusData = [
    { name: 'Online', value: 75, color: '#00ff00' },
    { name: 'Offline', value: 15, color: '#ff0000' },
    { name: 'Maintenance', value: 10, color: '#ffff00' },
  ]

  const fuelData = [
    { name: 'Tank A', level: 85, capacity: 100, efficiency: 92 },
    { name: 'Tank B', level: 67, capacity: 100, efficiency: 88 },
    { name: 'Tank C', level: 34, capacity: 100, efficiency: 95 },
    { name: 'Reserve', level: 91, capacity: 50, efficiency: 98 },
  ]

  const fuelConsumptionData = [
    { time: '00:00', consumption: 2.1 },
    { time: '04:00', consumption: 1.8 },
    { time: '08:00', consumption: 3.2 },
    { time: '12:00', consumption: 4.1 },
    { time: '16:00', consumption: 3.8 },
    { time: '20:00', consumption: 2.9 },
  ]

  const truckData = [
    { id: 'T001', status: 'active', location: 'Route A', driver: 'John Smith', fuel: 78, mileage: 125430, nextService: '2 weeks' },
    { id: 'T002', status: 'maintenance', location: 'Garage', driver: 'Sarah Johnson', fuel: 45, mileage: 98750, nextService: '1 day' },
    { id: 'T003', status: 'active', location: 'Route B', driver: 'Mike Davis', fuel: 92, mileage: 156780, nextService: '3 weeks' },
    { id: 'T004', status: 'idle', location: 'Depot', driver: 'Lisa Chen', fuel: 67, mileage: 89230, nextService: '1 week' },
    { id: 'T005', status: 'active', location: 'Route C', driver: 'Tom Wilson', fuel: 34, mileage: 145670, nextService: '2 days' },
  ]

  const truckPerformanceData = [
    { truck: 'T001', efficiency: 85, uptime: 92 },
    { truck: 'T002', efficiency: 78, uptime: 88 },
    { truck: 'T003', efficiency: 91, uptime: 95 },
    { truck: 'T004', efficiency: 82, uptime: 89 },
    { truck: 'T005', efficiency: 76, uptime: 84 },
  ]

  const trackingData = [
    { id: 'T001', lat: 40.7128, lng: -74.0060, speed: 65, heading: 'NE', status: 'moving', lastUpdate: '2 min ago', destination: 'Warehouse A' },
    { id: 'T002', lat: 40.7589, lng: -73.9851, speed: 0, heading: 'N', status: 'stopped', lastUpdate: '15 min ago', destination: 'Maintenance Bay' },
    { id: 'T003', lat: 40.7505, lng: -73.9934, speed: 45, heading: 'SW', status: 'moving', lastUpdate: '1 min ago', destination: 'Distribution Center' },
    { id: 'T004', lat: 40.7282, lng: -73.7949, speed: 0, heading: 'E', status: 'idle', lastUpdate: '30 min ago', destination: 'Depot' },
    { id: 'T005', lat: 40.7831, lng: -73.9712, speed: 55, heading: 'NW', status: 'moving', lastUpdate: '5 min ago', destination: 'Customer Site' },
  ]

  const geofenceData = [
    { name: 'Warehouse A', lat: 40.7128, lng: -74.0060, radius: 500, alerts: 2 },
    { name: 'Maintenance Bay', lat: 40.7589, lng: -73.9851, radius: 300, alerts: 0 },
    { name: 'Distribution Center', lat: 40.7505, lng: -73.9934, radius: 800, alerts: 1 },
    { name: 'Depot', lat: 40.7282, lng: -73.7949, radius: 600, alerts: 0 },
  ]

  const loadBoardData = [
    { id: 'LB001', origin: 'New York, NY', destination: 'Chicago, IL', weight: 24000, value: 12500, deadline: '2026-04-30', status: 'available', priority: 'high', distance: 712 },
    { id: 'LB002', origin: 'Los Angeles, CA', destination: 'Dallas, TX', weight: 18000, value: 8900, deadline: '2026-05-02', status: 'assigned', priority: 'medium', distance: 1435 },
    { id: 'LB003', origin: 'Miami, FL', destination: 'Atlanta, GA', weight: 15000, value: 6200, deadline: '2026-04-29', status: 'available', priority: 'high', distance: 661 },
    { id: 'LB004', origin: 'Seattle, WA', destination: 'Denver, CO', weight: 22000, value: 15200, deadline: '2026-05-05', status: 'in_transit', priority: 'medium', distance: 1024 },
    { id: 'LB005', origin: 'Boston, MA', destination: 'Washington, DC', weight: 12000, value: 4800, deadline: '2026-04-28', status: 'available', priority: 'urgent', distance: 395 },
    { id: 'LB006', origin: 'Phoenix, AZ', destination: 'Las Vegas, NV', weight: 8000, value: 3200, deadline: '2026-05-01', status: 'delivered', priority: 'low', distance: 300 },
  ]

  const loadBoardStats = {
    totalLoads: 24,
    availableLoads: 8,
    assignedLoads: 12,
    inTransitLoads: 3,
    deliveredLoads: 1,
    totalRevenue: 156800,
    avgLoadValue: 6533
  }

  const accountingData = {
    overview: {
      totalRevenue: 2456800,
      totalExpenses: 1894500,
      netProfit: 562300,
      pendingInvoices: 45600,
      overduePayments: 12800
    },
    recentTransactions: [
      { id: 'TXN001', type: 'revenue', description: 'Load LB001 - New York to Chicago', amount: 12500, date: '2026-04-28', status: 'paid' },
      { id: 'TXN002', type: 'expense', description: 'Fuel Purchase - Station A', amount: -3200, date: '2026-04-27', status: 'paid' },
      { id: 'TXN003', type: 'revenue', description: 'Load LB002 - LA to Dallas', amount: 8900, date: '2026-04-26', status: 'pending' },
      { id: 'TXN004', type: 'expense', description: 'Truck Maintenance - T001', amount: -1850, date: '2026-04-25', status: 'paid' },
      { id: 'TXN005', type: 'expense', description: 'Driver Salary - John Smith', amount: -2800, date: '2026-04-24', status: 'paid' },
    ],
    monthlyRevenue: [
      { month: 'Jan', revenue: 185000, expenses: 142000 },
      { month: 'Feb', revenue: 192000, expenses: 138000 },
      { month: 'Mar', revenue: 198000, expenses: 152000 },
      { month: 'Apr', revenue: 215000, expenses: 158000 },
      { month: 'May', revenue: 223000, expenses: 165000 },
      { month: 'Jun', revenue: 228000, expenses: 172000 },
    ],
    expenseCategories: [
      { category: 'Fuel', amount: 45200, percentage: 35 },
      { category: 'Maintenance', amount: 28900, percentage: 22 },
      { category: 'Salaries', amount: 35800, percentage: 28 },
      { category: 'Insurance', amount: 12400, percentage: 10 },
      { category: 'Other', amount: 6700, percentage: 5 },
    ]
  }

  const eldData = [
    { driver: 'John Smith', status: 'Driving', hoursToday: 8.5, hoursWeek: 45.2, violations: 0, nextBreak: '2 hours' },
    { driver: 'Sarah Johnson', status: 'Off Duty', hoursToday: 0, hoursWeek: 38.1, violations: 0, nextBreak: 'N/A' },
    { driver: 'Mike Davis', status: 'On Duty', hoursToday: 6.2, hoursWeek: 42.8, violations: 1, nextBreak: '4 hours' },
    { driver: 'Lisa Chen', status: 'Driving', hoursToday: 7.8, hoursWeek: 46.5, violations: 0, nextBreak: '1.5 hours' },
    { driver: 'Tom Wilson', status: 'Sleeper Berth', hoursToday: 4.1, hoursWeek: 41.2, violations: 0, nextBreak: 'N/A' },
  ]

  const eldTabs = ['Overview', 'Driver Logs', 'Compliance', 'Reports']

  const dashboardTabs = ['Overview', 'Systems', 'Performance', 'Analytics']

  const toggleSwitch = (system) => {
    setSwitches(prev => ({
      ...prev,
      [system]: !prev[system]
    }))
  }

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'controls', label: 'Controls', icon: '⚙️' },
    { id: 'fuel', label: 'Fuel', icon: '⛽' },
    { id: 'truck', label: 'Truck', icon: '🚛' },
    { id: 'tracking', label: 'Tracking', icon: '📍' },
    { id: 'loadboard', label: 'Load Board', icon: '📦' },
    { id: 'accounting', label: 'Accounting', icon: '💰' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'settings', label: 'Settings', icon: '🔧' }
  ]

  return (
    <div style={{
      fontFamily: 'DM Sans, sans-serif',
      color: '#ffffff',
      minHeight: '100vh',
      display: 'flex',
      background: '#060C14'
    }}>
      {/* Sidebar Navigation */}
      <nav style={{
        width: '250px',
        background: '#0f172a',
        padding: '20px 0',
        borderRight: '1px solid #1e293b'
      }}>
        <div style={{ padding: '0 20px 30px', borderBottom: '1px solid #1e293b', marginBottom: '20px' }}>
          <h2 style={{ margin: 0, color: '#3b82f6' }}>7Loop</h2>
          <p style={{ margin: '5px 0 0', fontSize: '12px', color: '#64748b' }}>Command Center</p>
        </div>

        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            style={{
              width: '100%',
              padding: '15px 20px',
              background: activeTab === item.id ? '#1e293b' : 'transparent',
              border: 'none',
              color: '#ffffff',
              textAlign: 'left',
              cursor: 'pointer',
              borderRadius: '0',
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main style={{
        flex: 1,
        padding: '20px',
        overflowY: 'auto'
      }}>
        {/* Header */}
        <header style={{
          marginBottom: '30px',
          paddingBottom: '20px',
          borderBottom: '1px solid #1e293b'
        }}>
          <h1 style={{ margin: '0 0 10px', color: '#3b82f6' }}>
            {navItems.find(item => item.id === activeTab)?.label}
          </h1>
          <p style={{ margin: 0, color: '#64748b' }}>
            Monitor and control your systems from the central command center
          </p>
        </header>

        {/* Dashboard Content */}
        {activeTab === 'dashboard' && (
          <div>
            {/* Dashboard Tabs */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '1px solid #1e293b', paddingBottom: '10px' }}>
              {dashboardTabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveDashboardTab(tab.toLowerCase())}
                  style={{
                    padding: '8px 16px',
                    background: activeDashboardTab === tab.toLowerCase() ? '#1e293b' : 'transparent',
                    color: '#ffffff',
                    border: '1px solid #374151',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Dashboard Tab Content */}
            {activeDashboardTab === 'overview' && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '20px'
              }}>
                {/* System Status Panel */}
                <div style={{
                  background: '#0f172a',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid #1e293b'
                }}>
                  <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>System Status</h3>
                  <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: switches.system1 ? '#00ff00' : '#ff0000',
                        margin: '0 auto 10px'
                      }}></div>
                      <p style={{ margin: 0, fontSize: '12px' }}>System 1</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: switches.system2 ? '#00ff00' : '#ff0000',
                        margin: '0 auto 10px'
                      }}></div>
                      <p style={{ margin: 0, fontSize: '12px' }}>System 2</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: switches.system3 ? '#00ff00' : '#ff0000',
                        margin: '0 auto 10px'
                      }}></div>
                      <p style={{ margin: 0, fontSize: '12px' }}>System 3</p>
                    </div>
                  </div>
                  <PieChart width={300} height={200}>
                    <Pie
                      data={systemStatusData}
                      cx={150}
                      cy={100}
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {systemStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </div>

                {/* Performance Chart Panel */}
                <div style={{
                  background: '#0f172a',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid #1e293b'
                }}>
                  <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>Performance Metrics</h3>
                  <LineChart width={400} height={250} data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="name" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }} />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
                    <Line type="monotone" dataKey="efficiency" stroke="#10b981" strokeWidth={2} />
                  </LineChart>
                </div>

                {/* Control Panel */}
                <div style={{
                  background: '#0f172a',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid #1e293b'
                }}>
                  <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>Quick Controls</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {Object.entries(switches).map(([key, value]) => (
                      <div key={key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ textTransform: 'capitalize' }}>{key.replace(/([A-Z])/g, ' $1')}</span>
                        <button
                          onClick={() => toggleSwitch(key)}
                          style={{
                            width: '50px',
                            height: '25px',
                            borderRadius: '12px',
                            border: 'none',
                            background: value ? '#10b981' : '#64748b',
                            cursor: 'pointer',
                            position: 'relative'
                          }}
                        >
                          <div style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: '#ffffff',
                            position: 'absolute',
                            top: '2px',
                            left: value ? '28px' : '2px',
                            transition: 'left 0.2s'
                          }}></div>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Data Display Panel */}
                <div style={{
                  background: '#0f172a',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid #1e293b'
                }}>
                  <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>System Metrics</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#3b82f6' }}>98.5%</div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>Uptime</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#10b981' }}>1.2s</div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>Response Time</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#f59e0b' }}>45</div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>Active Users</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#ef4444' }}>3</div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>Alerts</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeDashboardTab === 'systems' && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px'
              }}>
                {/* System Status Panel */}
                <div style={{
                  background: '#0f172a',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid #1e293b'
                }}>
                  <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>System Status</h3>
                  <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: switches.system1 ? '#00ff00' : '#ff0000',
                        margin: '0 auto 10px'
                      }}></div>
                      <p style={{ margin: 0, fontSize: '12px' }}>System 1</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: switches.system2 ? '#00ff00' : '#ff0000',
                        margin: '0 auto 10px'
                      }}></div>
                      <p style={{ margin: 0, fontSize: '12px' }}>System 2</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: switches.system3 ? '#00ff00' : '#ff0000',
                        margin: '0 auto 10px'
                      }}></div>
                      <p style={{ margin: 0, fontSize: '12px' }}>System 3</p>
                    </div>
                  </div>
                  <PieChart width={300} height={200}>
                    <Pie
                      data={systemStatusData}
                      cx={150}
                      cy={100}
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {systemStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </div>

                {/* Control Panel */}
                <div style={{
                  background: '#0f172a',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid #1e293b'
                }}>
                  <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>Quick Controls</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {Object.entries(switches).map(([key, value]) => (
                      <div key={key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ textTransform: 'capitalize' }}>{key.replace(/([A-Z])/g, ' $1')}</span>
                        <button
                          onClick={() => toggleSwitch(key)}
                          style={{
                            width: '50px',
                            height: '25px',
                            borderRadius: '12px',
                            border: 'none',
                            background: value ? '#10b981' : '#64748b',
                            cursor: 'pointer',
                            position: 'relative'
                          }}
                        >
                          <div style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: '#ffffff',
                            position: 'absolute',
                            top: '2px',
                            left: value ? '28px' : '2px',
                            transition: 'left 0.2s'
                          }}></div>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeDashboardTab === 'performance' && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '20px'
              }}>
                {/* Performance Chart Panel */}
                <div style={{
                  background: '#0f172a',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid #1e293b'
                }}>
                  <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>Performance Metrics</h3>
                  <LineChart width={400} height={250} data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="name" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }} />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
                    <Line type="monotone" dataKey="efficiency" stroke="#10b981" strokeWidth={2} />
                  </LineChart>
                </div>

                {/* Data Display Panel */}
                <div style={{
                  background: '#0f172a',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid #1e293b'
                }}>
                  <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>System Metrics</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#3b82f6' }}>98.5%</div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>Uptime</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#10b981' }}>1.2s</div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>Response Time</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#f59e0b' }}>45</div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>Active Users</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#ef4444' }}>3</div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>Alerts</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeDashboardTab === 'analytics' && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '20px'
              }}>
                {/* Analytics Chart */}
                <div style={{
                  background: '#0f172a',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid #1e293b'
                }}>
                  <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>System Analytics</h3>
                  <BarChart width={400} height={250} data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="name" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }} />
                    <Legend />
                    <Bar dataKey="value" fill="#3b82f6" />
                    <Bar dataKey="efficiency" fill="#10b981" />
                  </BarChart>
                </div>

                {/* Analytics Summary */}
                <div style={{
                  background: '#0f172a',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid #1e293b'
                }}>
                  <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>Analytics Summary</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#3b82f6' }}>+12%</div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>Performance Increase</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#10b981' }}>94%</div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>Efficiency Rate</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#f59e0b' }}>2.3h</div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>Avg Downtime</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#ef4444' }}>15</div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>Issues Resolved</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ELD Section */}
        <div style={{
          marginTop: '30px',
          padding: '20px',
          background: '#0f172a',
          borderRadius: '8px',
          border: '1px solid #1e293b'
        }}>
          <h2 style={{ margin: '0 0 20px', color: '#3b82f6' }}>📋 Electronic Logging Device (ELD)</h2>

          {/* ELD Tabs */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '1px solid #1e293b', paddingBottom: '10px' }}>
            {eldTabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveEldTab(tab)}
                style={{
                  padding: '8px 16px',
                  background: activeEldTab === tab ? '#1e293b' : 'transparent',
                  color: '#ffffff',
                  border: '1px solid #374151',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* ELD Content */}
          {activeEldTab === 'Overview' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              {/* Driver Status Overview */}
              <div style={{
                background: '#1e293b',
                padding: '15px',
                borderRadius: '8px'
              }}>
                <h4 style={{ margin: '0 0 15px', color: '#3b82f6' }}>Driver Status</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {eldData.map((driver, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '8px',
                      background: '#0f172a',
                      borderRadius: '5px'
                    }}>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#ffffff' }}>{driver.driver}</div>
                        <div style={{ fontSize: '12px', color: '#64748b' }}>{driver.status}</div>
                      </div>
                      <div style={{
                        padding: '4px 8px',
                        borderRadius: '10px',
                        fontSize: '12px',
                        background: driver.status === 'Driving' ? '#10b981' :
                                   driver.status === 'On Duty' ? '#f59e0b' :
                                   driver.status === 'Off Duty' ? '#6b7280' : '#3b82f6',
                        color: '#ffffff'
                      }}>
                        {driver.hoursToday}h today
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance Summary */}
              <div style={{
                background: '#1e293b',
                padding: '15px',
                borderRadius: '8px'
              }}>
                <h4 style={{ margin: '0 0 15px', color: '#3b82f6' }}>Compliance Summary</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#10b981' }}>95%</div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>Compliance Rate</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ef4444' }}>2</div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>Active Violations</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#f59e0b' }}>8</div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>Drivers On Duty</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#3b82f6' }}>24/7</div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>Monitoring</div>
                  </div>
                </div>
              </div>

              {/* Hours of Service */}
              <div style={{
                background: '#1e293b',
                padding: '15px',
                borderRadius: '8px'
              }}>
                <h4 style={{ margin: '0 0 15px', color: '#3b82f6' }}>Hours of Service</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {eldData.slice(0, 3).map((driver, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '14px', color: '#ffffff' }}>{driver.driver.split(' ')[0]}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '100px', height: '8px', background: '#374151', borderRadius: '4px' }}>
                          <div style={{
                            height: '100%',
                            width: `${(driver.hoursWeek / 70) * 100}%`,
                            background: driver.hoursWeek > 60 ? '#ef4444' : driver.hoursWeek > 50 ? '#f59e0b' : '#10b981',
                            borderRadius: '4px'
                          }}></div>
                        </div>
                        <span style={{ fontSize: '12px', color: '#64748b', minWidth: '40px' }}>{driver.hoursWeek}h</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeEldTab === 'Driver Logs' && (
            <div style={{
              background: '#1e293b',
              padding: '15px',
              borderRadius: '8px'
            }}>
              <h4 style={{ margin: '0 0 15px', color: '#3b82f6' }}>Recent Driver Logs</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr 1fr', gap: '10px', fontSize: '12px', color: '#64748b', paddingBottom: '5px', borderBottom: '1px solid #374151' }}>
                  <span>Driver</span>
                  <span>Activity</span>
                  <span>Duration</span>
                  <span>Location</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr 1fr', gap: '10px', fontSize: '14px', color: '#ffffff' }}>
                  <span>John Smith</span>
                  <span>Driving - Route A to Warehouse</span>
                  <span>3.5h</span>
                  <span>NYC Area</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr 1fr', gap: '10px', fontSize: '14px', color: '#ffffff' }}>
                  <span>Sarah Johnson</span>
                  <span>Off Duty - Rest Period</span>
                  <span>8.0h</span>
                  <span>Truck Stop</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr 1fr', gap: '10px', fontSize: '14px', color: '#ffffff' }}>
                  <span>Mike Davis</span>
                  <span>Loading/Unloading</span>
                  <span>1.2h</span>
                  <span>Distribution Center</span>
                </div>
              </div>
            </div>
          )}

          {activeEldTab === 'Compliance' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              <div style={{
                background: '#1e293b',
                padding: '15px',
                borderRadius: '8px'
              }}>
                <h4 style={{ margin: '0 0 15px', color: '#3b82f6' }}>Compliance Alerts</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{
                    padding: '10px',
                    background: '#fef3c7',
                    border: '1px solid #f59e0b',
                    borderRadius: '5px'
                  }}>
                    <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#92400e' }}>⚠️ Hours Violation</div>
                    <div style={{ fontSize: '12px', color: '#92400e' }}>Mike Davis exceeded 11-hour driving limit</div>
                  </div>
                  <div style={{
                    padding: '10px',
                    background: '#fee2e2',
                    border: '1px solid #ef4444',
                    borderRadius: '5px'
                  }}>
                    <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#dc2626' }}>🚫 Rest Violation</div>
                    <div style={{ fontSize: '12px', color: '#dc2626' }}>Lisa Chen missed required 30-min break</div>
                  </div>
                </div>
              </div>

              <div style={{
                background: '#1e293b',
                padding: '15px',
                borderRadius: '8px'
              }}>
                <h4 style={{ margin: '0 0 15px', color: '#3b82f6' }}>FMCSA Regulations</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#64748b' }}>
                  <div>• 11-hour driving limit: ✅ Compliant</div>
                  <div>• 14-hour on-duty limit: ⚠️ 2 drivers near limit</div>
                  <div>• 30-minute break requirement: ❌ 1 violation</div>
                  <div>• 70-hour/8-day limit: ✅ All compliant</div>
                  <div>• ELD data accuracy: ✅ 99.8% accuracy</div>
                </div>
              </div>
            </div>
          )}

          {activeEldTab === 'Reports' && (
            <div style={{
              background: '#1e293b',
              padding: '15px',
              borderRadius: '8px'
            }}>
              <h4 style={{ margin: '0 0 15px', color: '#3b82f6' }}>ELD Reports</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button style={{
                  padding: '10px 15px',
                  background: '#3b82f6',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}>
                  📊 Daily Driver Logs Report
                </button>
                <button style={{
                  padding: '10px 15px',
                  background: '#3b82f6',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}>
                  📈 Weekly Hours Summary
                </button>
                <button style={{
                  padding: '10px 15px',
                  background: '#3b82f6',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}>
                  ⚠️ Compliance Violation Report
                </button>
                <button style={{
                  padding: '10px 15px',
                  background: '#3b82f6',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}>
                  📋 Unidentified Driver Report
                </button>
              </div>
            </div>
          )}
        </div>

        {activeTab === 'controls' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            <div style={{
              background: '#0f172a',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #1e293b'
            }}>
              <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>System Controls</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <button style={{
                  padding: '10px 20px',
                  background: '#3b82f6',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}>Restart System</button>
                <button style={{
                  padding: '10px 20px',
                  background: '#10b981',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}>Update Configuration</button>
                <button style={{
                  padding: '10px 20px',
                  background: '#f59e0b',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}>Run Diagnostics</button>
                <button style={{
                  padding: '10px 20px',
                  background: '#ef4444',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}>Emergency Shutdown</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'fuel' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '20px'
          }}>
            {/* Fuel Levels Panel */}
            <div style={{
              background: '#0f172a',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #1e293b'
            }}>
              <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>Fuel Levels</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {fuelData.map((tank, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ minWidth: '80px', fontSize: '14px' }}>{tank.name}</div>
                    <div style={{ flex: 1, background: '#1e293b', height: '20px', borderRadius: '10px', overflow: 'hidden' }}>
                      <div style={{
                        height: '100%',
                        width: `${(tank.level / tank.capacity) * 100}%`,
                        background: tank.level > 20 ? '#10b981' : tank.level > 10 ? '#f59e0b' : '#ef4444',
                        borderRadius: '10px',
                        transition: 'width 0.3s ease'
                      }}></div>
                    </div>
                    <div style={{ minWidth: '60px', textAlign: 'right', fontSize: '14px' }}>
                      {tank.level}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fuel Consumption Chart */}
            <div style={{
              background: '#0f172a',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #1e293b'
            }}>
              <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>Fuel Consumption (L/hr)</h3>
              <LineChart width={400} height={250} data={fuelConsumptionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="time" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }} />
                <Line type="monotone" dataKey="consumption" stroke="#f59e0b" strokeWidth={3} dot={{ fill: '#f59e0b' }} />
              </LineChart>
            </div>

            {/* Fuel Efficiency Panel */}
            <div style={{
              background: '#0f172a',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #1e293b'
            }}>
              <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>Fuel Efficiency</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {fuelData.map((tank, index) => (
                  <div key={index} style={{ textAlign: 'center', padding: '15px', background: '#1e293b', borderRadius: '8px' }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#10b981' }}>{tank.efficiency}%</div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginTop: '5px' }}>{tank.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fuel Management Controls */}
            <div style={{
              background: '#0f172a',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #1e293b'
            }}>
              <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>Fuel Management</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button style={{
                    flex: 1,
                    padding: '10px 15px',
                    background: '#10b981',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}>Refuel Tank A</button>
                  <button style={{
                    flex: 1,
                    padding: '10px 15px',
                    background: '#10b981',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}>Refuel Tank B</button>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button style={{
                    flex: 1,
                    padding: '10px 15px',
                    background: '#10b981',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}>Refuel Tank C</button>
                  <button style={{
                    flex: 1,
                    padding: '10px 15px',
                    background: '#10b981',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}>Refuel Reserve</button>
                </div>
                <button style={{
                  padding: '12px 20px',
                  background: '#f59e0b',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}>Optimize Fuel Distribution</button>
                <button style={{
                  padding: '12px 20px',
                  background: '#ef4444',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}>Emergency Fuel Shutdown</button>
              </div>

              {/* Fuel Alerts */}
              <div style={{ marginTop: '20px', padding: '15px', background: '#1e293b', borderRadius: '5px' }}>
                <h4 style={{ margin: '0 0 10px', color: '#f59e0b' }}>⚠️ Fuel Alerts</h4>
                <div style={{ fontSize: '14px', color: '#64748b' }}>
                  <div>• Tank C is below 35% - Consider refueling</div>
                  <div>• Fuel efficiency optimal across all tanks</div>
                  <div>• Reserve tank at 91% - Good backup level</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tracking' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '20px'
          }}>
            {/* Live Tracking Map Panel */}
            <div style={{
              background: '#0f172a',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #1e293b',
              gridColumn: '1 / -1'
            }}>
              <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>📍 Live Tracking Map</h3>
              <div style={{
                height: '400px',
                background: '#1e293b',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Simulated Map Background */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, #1e293b 25%, transparent 25%), linear-gradient(-45deg, #1e293b 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #1e293b 75%), linear-gradient(-45deg, transparent 75%, #1e293b 75%)',
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                }}></div>

                {/* Simulated Roads */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '20%',
                  right: '20%',
                  height: '4px',
                  background: '#374151',
                  borderRadius: '2px'
                }}></div>

                {/* Vehicle Markers */}
                {trackingData.map((vehicle, index) => (
                  <div key={vehicle.id} style={{
                    position: 'absolute',
                    left: `${20 + (index * 15)}%`,
                    top: `${30 + (index * 10)}%`,
                    width: '20px',
                    height: '20px',
                    background: vehicle.status === 'moving' ? '#10b981' : vehicle.status === 'stopped' ? '#ef4444' : '#f59e0b',
                    borderRadius: '50%',
                    border: '2px solid #ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    cursor: 'pointer'
                  }} title={`${vehicle.id} - ${vehicle.status}`}>
                    🚛
                  </div>
                ))}

                {/* Geofence Zones */}
                {geofenceData.map((zone, index) => (
                  <div key={zone.name} style={{
                    position: 'absolute',
                    left: `${15 + (index * 20)}%`,
                    top: `${25 + (index * 15)}%`,
                    width: '60px',
                    height: '60px',
                    border: '2px dashed #3b82f6',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '8px',
                    color: '#3b82f6',
                    background: 'rgba(59, 130, 246, 0.1)'
                  }}>
                    📍
                  </div>
                ))}

                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  background: '#0f172a',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  color: '#64748b'
                }}>
                  Scale: 1:1000 | Last updated: 2 min ago
                </div>
              </div>
            </div>

            {/* Vehicle Status Panel */}
            <div style={{
              background: '#0f172a',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #1e293b'
            }}>
              <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>Vehicle Status</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {trackingData.map((vehicle) => (
                  <div key={vehicle.id} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px',
                    background: '#1e293b',
                    borderRadius: '5px'
                  }}>
                    <div>
                      <div style={{ fontWeight: 'bold', color: '#ffffff' }}>{vehicle.id}</div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>{vehicle.destination}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{
                        display: 'inline-block',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: vehicle.status === 'moving' ? '#10b981' : vehicle.status === 'stopped' ? '#ef4444' : '#f59e0b',
                        marginRight: '5px'
                      }}></div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>{vehicle.status}</div>
                      <div style={{ fontSize: '10px', color: '#64748b' }}>{vehicle.lastUpdate}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tracking Controls */}
            <div style={{
              background: '#0f172a',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #1e293b'
            }}>
              <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>Tracking Controls</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <button style={{
                  padding: '10px 20px',
                  background: '#3b82f6',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}>Refresh All Locations</button>
                <button style={{
                  padding: '10px 20px',
                  background: '#10b981',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}>Enable Live Tracking</button>
                <button style={{
                  padding: '10px 20px',
                  background: '#f59e0b',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}>View Route History</button>
                <button style={{
                  padding: '10px 20px',
                  background: '#ef4444',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}>Emergency Stop All</button>
              </div>

              {/* GPS Status */}
              <div style={{ marginTop: '20px', padding: '15px', background: '#1e293b', borderRadius: '5px' }}>
                <h4 style={{ margin: '0 0 10px', color: '#10b981' }}>📡 GPS Status</h4>
                <div style={{ fontSize: '14px', color: '#64748b' }}>
                  <div>• Signal Strength: Excellent (5/5)</div>
                  <div>• Satellites: 12 connected</div>
                  <div>• Accuracy: ±2 meters</div>
                  <div>• Update Frequency: 30 seconds</div>
                </div>
              </div>
            </div>

            {/* Geofence Alerts */}
            <div style={{
              background: '#0f172a',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #1e293b'
            }}>
              <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>Geofence Alerts</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {geofenceData.map((zone) => (
                  <div key={zone.name} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px',
                    background: zone.alerts > 0 ? '#fef3c7' : '#1e293b',
                    borderRadius: '5px',
                    border: zone.alerts > 0 ? '1px solid #f59e0b' : '1px solid #374151'
                  }}>
                    <div>
                      <div style={{ fontWeight: 'bold', color: zone.alerts > 0 ? '#92400e' : '#ffffff' }}>{zone.name}</div>
                      <div style={{ fontSize: '12px', color: zone.alerts > 0 ? '#92400e' : '#64748b' }}>
                        Radius: {zone.radius}m
                      </div>
                    </div>
                    <div style={{
                      background: zone.alerts > 0 ? '#ef4444' : '#10b981',
                      color: '#ffffff',
                      padding: '2px 8px',
                      borderRadius: '10px',
                      fontSize: '12px'
                    }}>
                      {zone.alerts} alerts
                    </div>
                  </div>
                ))}
              </div>

              {/* Speed & Direction */}
              <div style={{ marginTop: '20px', padding: '15px', background: '#1e293b', borderRadius: '5px' }}>
                <h4 style={{ margin: '0 0 10px', color: '#3b82f6' }}>🚗 Real-time Metrics</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#10b981' }}>58 km/h</div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>Avg Speed</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#3b82f6' }}>247 km</div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>Total Distance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'loadboard' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '20px'
          }}>
            {/* Load Board Stats */}
            <div style={{
              background: '#0f172a',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #1e293b'
            }}>
              <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>📦 Load Board Overview</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ textAlign: 'center', padding: '15px', background: '#1e293b', borderRadius: '8px' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#3b82f6' }}>{loadBoardStats.totalLoads}</div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>Total Loads</div>
                </div>
                <div style={{ textAlign: 'center', padding: '15px', background: '#1e293b', borderRadius: '8px' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#10b981' }}>{loadBoardStats.availableLoads}</div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>Available</div>
                </div>
                <div style={{ textAlign: 'center', padding: '15px', background: '#1e293b', borderRadius: '8px' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#f59e0b' }}>{loadBoardStats.assignedLoads}</div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>Assigned</div>
                </div>
                <div style={{ textAlign: 'center', padding: '15px', background: '#1e293b', borderRadius: '8px' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#8b5cf6' }}>{loadBoardStats.inTransitLoads}</div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>In Transit</div>
                </div>
              </div>
            </div>

            {/* Available Loads */}
            <div style={{
              background: '#0f172a',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #1e293b'
            }}>
              <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>Available Loads</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '400px', overflowY: 'auto' }}>
                {loadBoardData.filter(load => load.status === 'available').map((load) => (
                  <div key={load.id} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '15px',
                    background: '#1e293b',
                    borderRadius: '8px',
                    border: load.priority === 'urgent' ? '1px solid #ef4444' : load.priority === 'high' ? '1px solid #f59e0b' : '1px solid #374151'
                  }}>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#ffffff' }}>{load.id}</div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>
                        {load.origin} → {load.destination}
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>
                        {load.weight} lbs • {load.distance} miles
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#10b981' }}>${load.value.toLocaleString()}</div>
                      <div style={{
                        fontSize: '12px',
                        color: load.priority === 'urgent' ? '#ef4444' : load.priority === 'high' ? '#f59e0b' : '#64748b',
                        textTransform: 'uppercase'
                      }}>
                        {load.priority}
                      </div>
                      <button style={{
                        padding: '5px 10px',
                        background: '#3b82f6',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '12px',
                        marginTop: '5px'
                      }}>
                        Assign
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Load Filters & Search */}
            <div style={{
              background: '#0f172a',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #1e293b'
            }}>
              <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>Load Filters</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input
                  type="text"
                  placeholder="Search loads..."
                  style={{
                    padding: '10px',
                    background: '#1e293b',
                    border: '1px solid #374151',
                    borderRadius: '5px',
                    color: '#ffffff',
                    fontSize: '14px'
                  }}
                />
                <select style={{
                  padding: '10px',
                  background: '#1e293b',
                  border: '1px solid #374151',
                  borderRadius: '5px',
                  color: '#ffffff',
                  fontSize: '14px'
                }}>
                  <option value="">All Priorities</option>
                  <option value="urgent">Urgent</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
                <select style={{
                  padding: '10px',
                  background: '#1e293b',
                  border: '1px solid #374151',
                  borderRadius: '5px',
                  color: '#ffffff',
                  fontSize: '14px'
                }}>
                  <option value="">All Regions</option>
                  <option value="east">East Coast</option>
                  <option value="west">West Coast</option>
                  <option value="south">South</option>
                  <option value="midwest">Midwest</option>
                </select>
                <button style={{
                  padding: '12px 20px',
                  background: '#10b981',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}>
                  Apply Filters
                </button>
              </div>
            </div>

            {/* Revenue Summary */}
            <div style={{
              background: '#0f172a',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #1e293b'
            }}>
              <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>Revenue Summary</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#64748b' }}>Total Revenue:</span>
                  <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#10b981' }}>${loadBoardStats.totalRevenue.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#64748b' }}>Average Load Value:</span>
                  <span style={{ fontSize: '16px', color: '#3b82f6' }}>${loadBoardStats.avgLoadValue.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#64748b' }}>Loads Delivered:</span>
                  <span style={{ fontSize: '16px', color: '#f59e0b' }}>{loadBoardStats.deliveredLoads}</span>
                </div>
                <div style={{ marginTop: '10px', padding: '10px', background: '#1e293b', borderRadius: '5px' }}>
                  <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '5px' }}>Monthly Target Progress</div>
                  <div style={{ width: '100%', height: '8px', background: '#374151', borderRadius: '4px' }}>
                    <div style={{
                      height: '100%',
                      width: '78%',
                      background: '#10b981',
                      borderRadius: '4px'
                    }}></div>
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginTop: '5px' }}>78% of $200K target</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'accounting' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '20px'
          }}>
            {/* Financial Overview */}
            <div style={{
              background: '#0f172a',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #1e293b'
            }}>
              <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>💰 Financial Overview</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ textAlign: 'center', padding: '20px', background: '#1e293b', borderRadius: '8px' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#10b981' }}>${accountingData.overview.totalRevenue.toLocaleString()}</div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>Total Revenue</div>
                </div>
                <div style={{ textAlign: 'center', padding: '20px', background: '#1e293b', borderRadius: '8px' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ef4444' }}>${accountingData.overview.totalExpenses.toLocaleString()}</div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>Total Expenses</div>
                </div>
                <div style={{ textAlign: 'center', padding: '20px', background: '#1e293b', borderRadius: '8px' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#3b82f6' }}>${accountingData.overview.netProfit.toLocaleString()}</div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>Net Profit</div>
                </div>
                <div style={{ textAlign: 'center', padding: '20px', background: '#1e293b', borderRadius: '8px' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#f59e0b' }}>${accountingData.overview.pendingInvoices.toLocaleString()}</div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>Pending Invoices</div>
                </div>
              </div>
            </div>

            {/* Revenue vs Expenses Chart */}
            <div style={{
              background: '#0f172a',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #1e293b'
            }}>
              <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>Revenue vs Expenses</h3>
              <BarChart width={400} height={250} data={accountingData.monthlyRevenue}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }} />
                <Legend />
                <Bar dataKey="revenue" fill="#10b981" name="Revenue" />
                <Bar dataKey="expenses" fill="#ef4444" name="Expenses" />
              </BarChart>
            </div>

            {/* Recent Transactions */}
            <div style={{
              background: '#0f172a',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #1e293b'
            }}>
              <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>Recent Transactions</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '300px', overflowY: 'auto' }}>
                {accountingData.recentTransactions.map((transaction) => (
                  <div key={transaction.id} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px',
                    background: '#1e293b',
                    borderRadius: '5px'
                  }}>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#ffffff' }}>{transaction.description}</div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>{transaction.date}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: transaction.type === 'revenue' ? '#10b981' : '#ef4444'
                      }}>
                        {transaction.type === 'revenue' ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                      </div>
                      <div style={{
                        fontSize: '12px',
                        color: transaction.status === 'paid' ? '#10b981' : '#f59e0b',
                        textTransform: 'capitalize'
                      }}>
                        {transaction.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expense Breakdown */}
            <div style={{
              background: '#0f172a',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #1e293b'
            }}>
              <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>Expense Breakdown</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {accountingData.expenseCategories.map((category, index) => (
                  <div key={index}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                      <span style={{ fontSize: '14px', color: '#ffffff' }}>{category.category}</span>
                      <span style={{ fontSize: '14px', color: '#64748b' }}>${category.amount.toLocaleString()} ({category.percentage}%)</span>
                    </div>
                    <div style={{ width: '100%', height: '8px', background: '#374151', borderRadius: '4px' }}>
                      <div style={{
                        height: '100%',
                        width: `${category.percentage}%`,
                        background: index === 0 ? '#ef4444' : index === 1 ? '#f59e0b' : index === 2 ? '#3b82f6' : index === 3 ? '#10b981' : '#8b5cf6',
                        borderRadius: '4px'
                      }}></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Accounting Actions */}
              <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button style={{
                  padding: '10px 15px',
                  background: '#3b82f6',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}>
                  Generate Invoice
                </button>
                <button style={{
                  padding: '10px 15px',
                  background: '#10b981',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}>
                  Record Payment
                </button>
                <button style={{
                  padding: '10px 15px',
                  background: '#f59e0b',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}>
                  Export Financial Report
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '20px'
          }}>
            <div style={{
              background: '#0f172a',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #1e293b'
            }}>
              <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>Analytics Overview</h3>
              <BarChart width={800} height={300} data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="name" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }} />
                <Legend />
                <Bar dataKey="value" fill="#3b82f6" />
                <Bar dataKey="efficiency" fill="#10b981" />
              </BarChart>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            {/* Settings Tabs */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '1px solid #1e293b', paddingBottom: '10px' }}>
              {['General', 'Notifications', 'Security', 'Data', 'Advanced'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveSettingsTab(tab.toLowerCase())}
                  style={{
                    padding: '8px 16px',
                    background: activeSettingsTab === tab.toLowerCase() ? '#1e293b' : 'transparent',
                    color: '#ffffff',
                    border: '1px solid #374151',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Settings Content */}
            {activeSettingsTab === 'general' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px' }}>
                {/* User Profile */}
                <div style={{
                  background: '#0f172a',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid #1e293b'
                }}>
                  <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>👤 User Profile</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '5px', color: '#64748b', fontSize: '14px' }}>Full Name</label>
                      <input
                        type="text"
                        defaultValue="John Smith"
                        style={{
                          width: '100%',
                          padding: '10px',
                          background: '#1e293b',
                          border: '1px solid #374151',
                          borderRadius: '5px',
                          color: '#ffffff',
                          fontSize: '14px'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '5px', color: '#64748b', fontSize: '14px' }}>Email</label>
                      <input
                        type="email"
                        defaultValue="john.smith@7loop.com"
                        style={{
                          width: '100%',
                          padding: '10px',
                          background: '#1e293b',
                          border: '1px solid #374151',
                          borderRadius: '5px',
                          color: '#ffffff',
                          fontSize: '14px'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '5px', color: '#64748b', fontSize: '14px' }}>Role</label>
                      <select style={{
                        width: '100%',
                        padding: '10px',
                        background: '#1e293b',
                        border: '1px solid #374151',
                        borderRadius: '5px',
                        color: '#ffffff',
                        fontSize: '14px'
                      }}>
                        <option>Administrator</option>
                        <option>Fleet Manager</option>
                        <option>Dispatcher</option>
                        <option>Driver</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Appearance */}
                <div style={{
                  background: '#0f172a',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid #1e293b'
                }}>
                  <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>🎨 Appearance</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '5px', color: '#64748b', fontSize: '14px' }}>Theme</label>
                      <select style={{
                        width: '100%',
                        padding: '10px',
                        background: '#1e293b',
                        border: '1px solid #374151',
                        borderRadius: '5px',
                        color: '#ffffff',
                        fontSize: '14px'
                      }}>
                        <option>Dark (Default)</option>
                        <option>Light</option>
                        <option>Auto</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '5px', color: '#64748b', fontSize: '14px' }}>Language</label>
                      <select style={{
                        width: '100%',
                        padding: '10px',
                        background: '#1e293b',
                        border: '1px solid #374151',
                        borderRadius: '5px',
                        color: '#ffffff',
                        fontSize: '14px'
                      }}>
                        <option>English (US)</option>
                        <option>English (UK)</option>
                        <option>Spanish</option>
                        <option>French</option>
                      </select>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#ffffff', fontSize: '14px' }}>Compact Mode</span>
                      <button
                        onClick={() => setSettings(prev => ({ ...prev, compactMode: !prev.compactMode }))}
                        style={{
                          width: '50px',
                          height: '25px',
                          borderRadius: '12px',
                          border: 'none',
                          background: settings.compactMode ? '#10b981' : '#64748b',
                          cursor: 'pointer',
                          position: 'relative'
                        }}
                      >
                        <div style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: '#ffffff',
                          position: 'absolute',
                          top: '2px',
                          left: settings.compactMode ? '28px' : '2px',
                          transition: 'left 0.2s'
                        }}></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* System Preferences */}
                <div style={{
                  background: '#0f172a',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid #1e293b'
                }}>
                  <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>⚙️ System Preferences</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#ffffff', fontSize: '14px' }}>Auto-start on system boot</span>
                      <button
                        onClick={() => setSettings(prev => ({ ...prev, autoStart: !prev.autoStart }))}
                        style={{
                          width: '50px',
                          height: '25px',
                          borderRadius: '12px',
                          border: 'none',
                          background: settings.autoStart ? '#10b981' : '#64748b',
                          cursor: 'pointer',
                          position: 'relative'
                        }}
                      >
                        <div style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: '#ffffff',
                          position: 'absolute',
                          top: '2px',
                          left: settings.autoStart ? '28px' : '2px',
                          transition: 'left 0.2s'
                        }}></div>
                      </button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#ffffff', fontSize: '14px' }}>Minimize to tray</span>
                      <button
                        onClick={() => setSettings(prev => ({ ...prev, minimizeToTray: !prev.minimizeToTray }))}
                        style={{
                          width: '50px',
                          height: '25px',
                          borderRadius: '12px',
                          border: 'none',
                          background: settings.minimizeToTray ? '#10b981' : '#64748b',
                          cursor: 'pointer',
                          position: 'relative'
                        }}
                      >
                        <div style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: '#ffffff',
                          position: 'absolute',
                          top: '2px',
                          left: settings.minimizeToTray ? '28px' : '2px',
                          transition: 'left 0.2s'
                        }}></div>
                      </button>
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '5px', color: '#64748b', fontSize: '14px' }}>Data Refresh Interval</label>
                      <select style={{
                        width: '100%',
                        padding: '10px',
                        background: '#1e293b',
                        border: '1px solid #374151',
                        borderRadius: '5px',
                        color: '#ffffff',
                        fontSize: '14px'
                      }}>
                        <option>30 seconds</option>
                        <option>1 minute</option>
                        <option>5 minutes</option>
                        <option>15 minutes</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSettingsTab === 'notifications' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px' }}>
                {/* Alert Preferences */}
                <div style={{
                  background: '#0f172a',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid #1e293b'
                }}>
                  <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>🔔 Alert Preferences</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {[
                      { label: 'System Alerts', key: 'systemAlerts' },
                      { label: 'Fuel Level Warnings', key: 'fuelAlerts' },
                      { label: 'Driver Violations', key: 'driverAlerts' },
                      { label: 'Maintenance Reminders', key: 'maintenanceAlerts' },
                      { label: 'Load Board Updates', key: 'loadBoardAlerts' },
                      { label: 'Geofence Breaches', key: 'geofenceAlerts' }
                    ].map(alert => (
                      <div key={alert.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ color: '#ffffff', fontSize: '14px' }}>{alert.label}</span>
                        <button
                          onClick={() => setSettings(prev => ({ ...prev, notifications: { ...prev.notifications, [alert.key]: !prev.notifications[alert.key] } }))}
                          style={{
                            width: '50px',
                            height: '25px',
                            borderRadius: '12px',
                            border: 'none',
                            background: settings.notifications[alert.key] ? '#10b981' : '#64748b',
                            cursor: 'pointer',
                            position: 'relative'
                          }}
                        >
                          <div style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: '#ffffff',
                            position: 'absolute',
                            top: '2px',
                            left: settings.notifications[alert.key] ? '28px' : '2px',
                            transition: 'left 0.2s'
                          }}></div>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notification Methods */}
                <div style={{
                  background: '#0f172a',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid #1e293b'
                }}>
                  <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>📱 Notification Methods</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {[
                      { label: 'Desktop Notifications', key: 'desktop' },
                      { label: 'Email Notifications', key: 'email' },
                      { label: 'SMS Alerts', key: 'sms' },
                      { label: 'Sound Alerts', key: 'sound' }
                    ].map(method => (
                      <div key={method.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ color: '#ffffff', fontSize: '14px' }}>{method.label}</span>
                        <button
                          onClick={() => setSettings(prev => ({ ...prev, notificationMethods: { ...prev.notificationMethods, [method.key]: !prev.notificationMethods[method.key] } }))}
                          style={{
                            width: '50px',
                            height: '25px',
                            borderRadius: '12px',
                            border: 'none',
                            background: settings.notificationMethods[method.key] ? '#10b981' : '#64748b',
                            cursor: 'pointer',
                            position: 'relative'
                          }}
                        >
                          <div style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: '#ffffff',
                            position: 'absolute',
                            top: '2px',
                            left: settings.notificationMethods[method.key] ? '28px' : '2px',
                            transition: 'left 0.2s'
                          }}></div>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quiet Hours */}
                <div style={{
                  background: '#0f172a',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid #1e293b'
                }}>
                  <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>🌙 Quiet Hours</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#ffffff', fontSize: '14px' }}>Enable Quiet Hours</span>
                      <button
                        onClick={() => setSettings(prev => ({ ...prev, quietHours: { ...prev.quietHours, enabled: !prev.quietHours.enabled } }))}
                        style={{
                          width: '50px',
                          height: '25px',
                          borderRadius: '12px',
                          border: 'none',
                          background: settings.quietHours.enabled ? '#10b981' : '#64748b',
                          cursor: 'pointer',
                          position: 'relative'
                        }}
                      >
                        <div style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: '#ffffff',
                          position: 'absolute',
                          top: '2px',
                          left: settings.quietHours.enabled ? '28px' : '2px',
                          transition: 'left 0.2s'
                        }}></div>
                      </button>
                    </div>
                    {settings.quietHours.enabled && (
                      <>
                        <div>
                          <label style={{ display: 'block', marginBottom: '5px', color: '#64748b', fontSize: '14px' }}>Start Time</label>
                          <input
                            type="time"
                            defaultValue="22:00"
                            style={{
                              width: '100%',
                              padding: '10px',
                              background: '#1e293b',
                              border: '1px solid #374151',
                              borderRadius: '5px',
                              color: '#ffffff',
                              fontSize: '14px'
                            }}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', marginBottom: '5px', color: '#64748b', fontSize: '14px' }}>End Time</label>
                          <input
                            type="time"
                            defaultValue="07:00"
                            style={{
                              width: '100%',
                              padding: '10px',
                              background: '#1e293b',
                              border: '1px solid #374151',
                              borderRadius: '5px',
                              color: '#ffffff',
                              fontSize: '14px'
                            }}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeSettingsTab === 'security' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px' }}>
                {/* Authentication */}
                <div style={{
                  background: '#0f172a',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid #1e293b'
                }}>
                  <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>🔐 Authentication</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '5px', color: '#64748b', fontSize: '14px' }}>Current Password</label>
                      <input
                        type="password"
                        placeholder="Enter current password"
                        style={{
                          width: '100%',
                          padding: '10px',
                          background: '#1e293b',
                          border: '1px solid #374151',
                          borderRadius: '5px',
                          color: '#ffffff',
                          fontSize: '14px'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '5px', color: '#64748b', fontSize: '14px' }}>New Password</label>
                      <input
                        type="password"
                        placeholder="Enter new password"
                        style={{
                          width: '100%',
                          padding: '10px',
                          background: '#1e293b',
                          border: '1px solid #374151',
                          borderRadius: '5px',
                          color: '#ffffff',
                          fontSize: '14px'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '5px', color: '#64748b', fontSize: '14px' }}>Confirm New Password</label>
                      <input
                        type="password"
                        placeholder="Confirm new password"
                        style={{
                          width: '100%',
                          padding: '10px',
                          background: '#1e293b',
                          border: '1px solid #374151',
                          borderRadius: '5px',
                          color: '#ffffff',
                          fontSize: '14px'
                        }}
                      />
                    </div>
                    <button style={{
                      padding: '10px 20px',
                      background: '#3b82f6',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}>
                      Update Password
                    </button>
                  </div>
                </div>

                {/* Security Settings */}
                <div style={{
                  background: '#0f172a',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid #1e293b'
                }}>
                  <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>🛡️ Security Settings</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#ffffff', fontSize: '14px' }}>Two-Factor Authentication</span>
                      <button
                        onClick={() => setSettings(prev => ({ ...prev, security: { ...prev.security, twoFactor: !prev.security.twoFactor } }))}
                        style={{
                          width: '50px',
                          height: '25px',
                          borderRadius: '12px',
                          border: 'none',
                          background: settings.security.twoFactor ? '#10b981' : '#64748b',
                          cursor: 'pointer',
                          position: 'relative'
                        }}
                      >
                        <div style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: '#ffffff',
                          position: 'absolute',
                          top: '2px',
                          left: settings.security.twoFactor ? '28px' : '2px',
                          transition: 'left 0.2s'
                        }}></div>
                      </button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#ffffff', fontSize: '14px' }}>Auto-lock after inactivity</span>
                      <button
                        onClick={() => setSettings(prev => ({ ...prev, security: { ...prev.security, autoLock: !prev.security.autoLock } }))}
                        style={{
                          width: '50px',
                          height: '25px',
                          borderRadius: '12px',
                          border: 'none',
                          background: settings.security.autoLock ? '#10b981' : '#64748b',
                          cursor: 'pointer',
                          position: 'relative'
                        }}
                      >
                        <div style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: '#ffffff',
                          position: 'absolute',
                          top: '2px',
                          left: settings.security.autoLock ? '28px' : '2px',
                          transition: 'left 0.2s'
                        }}></div>
                      </button>
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '5px', color: '#64748b', fontSize: '14px' }}>Session Timeout</label>
                      <select style={{
                        width: '100%',
                        padding: '10px',
                        background: '#1e293b',
                        border: '1px solid #374151',
                        borderRadius: '5px',
                        color: '#ffffff',
                        fontSize: '14px'
                      }}>
                        <option>15 minutes</option>
                        <option>30 minutes</option>
                        <option>1 hour</option>
                        <option>4 hours</option>
                        <option>Never</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Access Control */}
                <div style={{
                  background: '#0f172a',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid #1e293b'
                }}>
                  <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>👥 Access Control</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#ffffff', fontSize: '14px' }}>Require admin approval for new users</span>
                      <button
                        onClick={() => setSettings(prev => ({ ...prev, accessControl: { ...prev.accessControl, requireApproval: !prev.accessControl.requireApproval } }))}
                        style={{
                          width: '50px',
                          height: '25px',
                          borderRadius: '12px',
                          border: 'none',
                          background: settings.accessControl.requireApproval ? '#10b981' : '#64748b',
                          cursor: 'pointer',
                          position: 'relative'
                        }}
                      >
                        <div style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: '#ffffff',
                          position: 'absolute',
                          top: '2px',
                          left: settings.accessControl.requireApproval ? '28px' : '2px',
                          transition: 'left 0.2s'
                        }}></div>
                      </button>
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '5px', color: '#64748b', fontSize: '14px' }}>Default User Role</label>
                      <select style={{
                        width: '100%',
                        padding: '10px',
                        background: '#1e293b',
                        border: '1px solid #374151',
                        borderRadius: '5px',
                        color: '#ffffff',
                        fontSize: '14px'
                      }}>
                        <option>Viewer</option>
                        <option>Operator</option>
                        <option>Manager</option>
                        <option>Administrator</option>
                      </select>
                    </div>
                    <button style={{
                      padding: '10px 20px',
                      background: '#3b82f6',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}>
                      Manage Users
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeSettingsTab === 'data' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px' }}>
                {/* Data Management */}
                <div style={{
                  background: '#0f172a',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid #1e293b'
                }}>
                  <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>💾 Data Management</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <button style={{
                      padding: '12px 20px',
                      background: '#3b82f6',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}>
                      📤 Export All Data
                    </button>
                    <button style={{
                      padding: '12px 20px',
                      background: '#10b981',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}>
                      📥 Import Data
                    </button>
                    <button style={{
                      padding: '12px 20px',
                      background: '#f59e0b',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}>
                      🔄 Backup Data
                    </button>
                  </div>
                </div>

                {/* Data Retention */}
                <div style={{
                  background: '#0f172a',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1e293b'
                }}>
                  <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>⏰ Data Retention</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '5px', color: '#64748b', fontSize: '14px' }}>GPS Tracking Data</label>
                      <select style={{
                        width: '100%',
                        padding: '10px',
                        background: '#1e293b',
                        border: '1px solid #374151',
                        borderRadius: '5px',
                        color: '#ffffff',
                        fontSize: '14px'
                      }}>
                        <option>30 days</option>
                        <option>90 days</option>
                        <option>1 year</option>
                        <option>Forever</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '5px', color: '#64748b', fontSize: '14px' }}>ELD Logs</label>
                      <select style={{
                        width: '100%',
                        padding: '10px',
                        background: '#1e293b',
                        border: '1px solid #374151',
                        borderRadius: '5px',
                        color: '#ffffff',
                        fontSize: '14px'
                      }}>
                        <option>1 year</option>
                        <option>2 years</option>
                        <option>5 years</option>
                        <option>Forever</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '5px', color: '#64748b', fontSize: '14px' }}>Financial Records</label>
                      <select style={{
                        width: '100%',
                        padding: '10px',
                        background: '#1e293b',
                        border: '1px solid #374151',
                        borderRadius: '5px',
                        color: '#ffffff',
                        fontSize: '14px'
                      }}>
                        <option>7 years</option>
                        <option>10 years</option>
                        <option>Forever</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Data Privacy */}
                <div style={{
                  background: '#0f172a',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid #1e293b'
                }}>
                  <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>🔒 Data Privacy</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#ffffff', fontSize: '14px' }}>Anonymize driver data</span>
                      <button
                        onClick={() => setSettings(prev => ({ ...prev, privacy: { ...prev.privacy, anonymizeDrivers: !prev.privacy.anonymizeDrivers } }))}
                        style={{
                          width: '50px',
                          height: '25px',
                          borderRadius: '12px',
                          border: 'none',
                          background: settings.privacy.anonymizeDrivers ? '#10b981' : '#64748b',
                          cursor: 'pointer',
                          position: 'relative'
                        }}
                      >
                        <div style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: '#ffffff',
                          position: 'absolute',
                          top: '2px',
                          left: settings.privacy.anonymizeDrivers ? '28px' : '2px',
                          transition: 'left 0.2s'
                        }}></div>
                      </button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#ffffff', fontSize: '14px' }}>GDPR compliance mode</span>
                      <button
                        onClick={() => setSettings(prev => ({ ...prev, privacy: { ...prev.privacy, gdprMode: !prev.privacy.gdprMode } }))}
                        style={{
                          width: '50px',
                          height: '25px',
                          borderRadius: '12px',
                          border: 'none',
                          background: settings.privacy.gdprMode ? '#10b981' : '#64748b',
                          cursor: 'pointer',
                          position: 'relative'
                        }}
                      >
                        <div style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: '#ffffff',
                          position: 'absolute',
                          top: '2px',
                          left: settings.privacy.gdprMode ? '28px' : '2px',
                          transition: 'left 0.2s'
                        }}></div>
                      </button>
                    </div>
                    <button style={{
                      padding: '10px 20px',
                      background: '#ef4444',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}>
                      🗑️ Clear All Data
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeSettingsTab === 'advanced' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px' }}>
                {/* System Configuration */}
                <div style={{
                  background: '#0f172a',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid #1e293b'
                }}>
                  <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>⚙️ System Configuration</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '5px', color: '#64748b', fontSize: '14px' }}>API Endpoint</label>
                      <input
                        type="url"
                        defaultValue="https://api.7loop.com/v1"
                        style={{
                          width: '100%',
                          padding: '10px',
                          background: '#1e293b',
                          border: '1px solid #374151',
                          borderRadius: '5px',
                          color: '#ffffff',
                          fontSize: '14px'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '5px', color: '#64748b', fontSize: '14px' }}>Database Connection</label>
                      <input
                        type="text"
                        defaultValue="postgresql://localhost:5432/7loop"
                        style={{
                          width: '100%',
                          padding: '10px',
                          background: '#1e293b',
                          border: '1px solid #374151',
                          borderRadius: '5px',
                          color: '#ffffff',
                          fontSize: '14px'
                        }}
                      />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#ffffff', fontSize: '14px' }}>Debug Mode</span>
                      <button
                        onClick={() => setSettings(prev => ({ ...prev, advanced: { ...prev.advanced, debugMode: !prev.advanced.debugMode } }))}
                        style={{
                          width: '50px',
                          height: '25px',
                          borderRadius: '12px',
                          border: 'none',
                          background: settings.advanced.debugMode ? '#10b981' : '#64748b',
                          cursor: 'pointer',
                          position: 'relative'
                        }}
                      >
                        <div style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: '#ffffff',
                          position: 'absolute',
                          top: '2px',
                          left: settings.advanced.debugMode ? '28px' : '2px',
                          transition: 'left 0.2s'
                        }}></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Performance Settings */}
                <div style={{
                  background: '#0f172a',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid #1e293b'
                }}>
                  <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>⚡ Performance Settings</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '5px', color: '#64748b', fontSize: '14px' }}>Cache Size</label>
                      <select style={{
                        width: '100%',
                        padding: '10px',
                        background: '#1e293b',
                        border: '1px solid #374151',
                        borderRadius: '5px',
                        color: '#ffffff',
                        fontSize: '14px'
                      }}>
                        <option>256 MB</option>
                        <option>512 MB</option>
                        <option>1 GB</option>
                        <option>2 GB</option>
                      </select>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#ffffff', fontSize: '14px' }}>Enable GPU acceleration</span>
                      <button
                        onClick={() => setSettings(prev => ({ ...prev, advanced: { ...prev.advanced, gpuAccel: !prev.advanced.gpuAccel } }))}
                        style={{
                          width: '50px',
                          height: '25px',
                          borderRadius: '12px',
                          border: 'none',
                          background: settings.advanced.gpuAccel ? '#10b981' : '#64748b',
                          cursor: 'pointer',
                          position: 'relative'
                        }}
                      >
                        <div style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: '#ffffff',
                          position: 'absolute',
                          top: '2px',
                          left: settings.advanced.gpuAccel ? '28px' : '2px',
                          transition: 'left 0.2s'
                        }}></div>
                      </button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#ffffff', fontSize: '14px' }}>Background sync</span>
                      <button
                        onClick={() => setSettings(prev => ({ ...prev, advanced: { ...prev.advanced, backgroundSync: !prev.advanced.backgroundSync } }))}
                        style={{
                          width: '50px',
                          height: '25px',
                          borderRadius: '12px',
                          border: 'none',
                          background: settings.advanced.backgroundSync ? '#10b981' : '#64748b',
                          cursor: 'pointer',
                          position: 'relative'
                        }}
                      >
                        <div style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: '#ffffff',
                          position: 'absolute',
                          top: '2px',
                          left: settings.advanced.backgroundSync ? '28px' : '2px',
                          transition: 'left 0.2s'
                        }}></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* System Actions */}
                <div style={{
                  background: '#0f172a',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid #1e293b'
                }}>
                  <h3 style={{ margin: '0 0 20px', color: '#3b82f6' }}>🔧 System Actions</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <button style={{
                      padding: '12px 20px',
                      background: '#3b82f6',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}>
                      🔄 Restart Application
                    </button>
                    <button style={{
                      padding: '12px 20px',
                      background: '#10b981',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}>
                      📊 Generate System Report
                    </button>
                    <button style={{
                      padding: '12px 20px',
                      background: '#ef4444',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}>
                      🚨 Reset to Factory Settings
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Save Settings Button */}
            <div style={{ marginTop: '30px', textAlign: 'center' }}>
              <button style={{
                padding: '15px 30px',
                background: '#10b981',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold'
              }}>
                💾 Save All Settings
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App