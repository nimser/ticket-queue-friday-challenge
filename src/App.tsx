import "./App.css"

import Dispenser from "./components/Dispenser"
import Queue from "./components/Queue"
import BoothArea, { BOOTH_COUNT } from "./components/BoothArea"
import { useState } from "react"

import type { TicketItem } from "./components/Ticket"

function App() {
  // *States*
  // 1. ticket list
  // updated when new ticket is auto-printing or user prints
  // and ticket finished processing at the Booth
  const [ticketList, setTicketList] = useState<TicketItem[]>([])
  // 3. BoothAvailability
  // Updated every time a booth becomes free (prev. ticket stayed there the duration of its `processingTime`)
  const [boothAvailability, setBoothAvailability] = useState<TicketItem[]>(
    Array(BOOTH_COUNT)
  )

  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <Dispenser setTicketList={setTicketList} />
      <Queue
        ticketList={ticketList}
        boothAvailability={boothAvailability}
        setBoothAvailability={setBoothAvailability}
      />
      <BoothArea />
    </main>
  )
}

export default App
