import { Dispatch, useEffect, useState } from "react"
import { TicketItem } from "./Ticket"

interface DispenserProps {
  setTicketList: Dispatch<React.SetStateAction<TicketItem[]>>
}

const PRINT_PERIOD = 3

function Dispenser({ setTicketList }: DispenserProps) {
  // Auto-print counter, resets at every print
  const [autoPrintCountdown, setAutoPrintCountdown] = useState(PRINT_PERIOD)

  const printTicket = () => {
    setTicketList((old) => [...old, new TicketItem()])
    setAutoPrintCountdown(PRINT_PERIOD)
  }
  useEffect(() => {
    const timer = setInterval(() => {
      if (autoPrintCountdown === 0) {
        printTicket()
      } else {
        setAutoPrintCountdown((prevTime) => prevTime - 1)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [autoPrintCountdown, printTicket, setTicketList])

  return (
    <div
      style={{
        width: "200px",
        height: "300px",
        background: "rgba(0,0,0,.6)",
        borderRadius: "1rem",
        padding: "2rem",
        fontSize: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "center",
      }}
    >
      Printing new ticket in <br />
      {autoPrintCountdown}
      <button onClick={printTicket}>PRINT</button>
    </div>
  )
}

export default Dispenser
