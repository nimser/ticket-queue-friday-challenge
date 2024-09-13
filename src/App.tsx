import "./App.css"

import Dispenser from "./components/Dispenser"
import Queue from "./components/Queue"
import BoothArea from "./components/BoothArea"
import { useState } from "react"

const BOOTH_COUNT = 3

function App() {
  // *States*
  // 1. ticket list
  // updated when new ticket is auto-printing or user prints
  // and ticket finished processing at the Booth
  const [ticketList, setTicketList] = useState([])
  // 2. Auto-print counter
  // Get reset at every print
  const [autoPrintCountdown, setAutoPrintCountdown] = useState(8)
  // 3. BoothAvailability
  // Updated every time a booth becomes free (prev. ticket stayed there the duration of its `processingTime`)
  const [BoothAvailability, setBoothAvailability] = useState(
    Array.from(Array(BOOTH_COUNT))
  )

  return (
    <>
      <Dispenser />
      <Queue />
      <BoothArea />
    </>
  )
}

export default App
