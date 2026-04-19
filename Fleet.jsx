import Section from "../components/Section"
import Card from "../components/Card"
import KPI from "../components/KPI"
import PieChart from "../components/PieChart"
import LineChart from "../components/LineChart"
import Table from "../components/Table"

import { C } from "../theme"

// Temporary fleet dataset (PDF did not include raw data)
const fleetAssets = [
  { id: "TR-101", type: "Tractor", status: "active", miles: 412000 },
  { id: "TR-102", type: "Tractor", status: "active", miles: 388000 },
  { id: "TR-103", type: "Tractor", status: "maintenance", miles: 401200 },
  { id: "TL-201", type: "Trailer", status: "active", miles: 198000 },
  { id: "TL-202", type: "Trailer", status: "active", miles: 210000 },
  { id: "TL-203", type: "Trailer", status: "inactive
