import { Dispatch, useEffect, useState } from "react"
import { TicketItem } from "./Ticket"

interface DispenserProps {
  setTicketList: Dispatch<React.SetStateAction<TicketItem[]>>
}

const PRINT_PERIOD = 8

function Dispenser({ setTicketList }: DispenserProps) {
  // Auto-print counter, resets at every print
  const [autoPrintCountdown, setAutoPrintCountdown] = useState(PRINT_PERIOD)

  useEffect(() => {
    const timer = setInterval(() => {
      if (autoPrintCountdown === 0) {
        setTicketList((old) => [...old, new TicketItem()])
        setAutoPrintCountdown(PRINT_PERIOD)
      } else {
        setAutoPrintCountdown((prevTime) => prevTime - 1)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [autoPrintCountdown, setTicketList])

  return (
    <div style={{ width: "200px", height: "200px", background: "pink" }}>
      Printing new ticket in {autoPrintCountdown}
    </div>
  )
}

export default Dispenser
