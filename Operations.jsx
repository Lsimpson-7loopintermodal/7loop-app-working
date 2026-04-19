import Section from "../components/Section"
import Card from "../components/Card"
import KPI from "../components/KPI"
import Trend from "../components/Trend"
import BarChart from "../components/BarChart"
import LineChart from "../components/LineChart"
import Table from "../components/Table"

import { loads } from "../data/loads"
import { fuel } from "../data/fuel"
import { driverRows } from "../data/drivers"
import { C } from "../theme"

export default function Operations() {
  const totalLoads = loads.reduce((s, d) => s + d.value, 0)
  const totalFuel = fuel.reduce((s, d) => s + d.value, 0)
  const avgOnTime = Math.round(
    driver
