import Section from "../components/Section"
import Card from "../components/Card"
import KPI from "../components/KPI"
import Trend from "../components/Trend"
import BarChart from "../components/BarChart"
import LineChart from "../components/LineChart"
import PieChart from "../components/PieChart"
import Table from "../components/Table"

import { revenue } from "../data/revenue"
import { loads } from "../data/loads"
import { fuel } from "../data/fuel"
import { outreach } from "../data/outreach"
import { servicesMix } from "../data/servicesMix"
import { arData, arTotal, arCritical } from "../data/ar"
import { pipelineData, pipTotal } from "../data/pipeline"
import { complianceItems } from "../data/compliance"
import { govRequirements } from "../data/govRequirements"
import { C } from "../theme"

export default function Overview() {
  return (
    <Section title="Overview" subtitle="Company-wide performance snapshot">
