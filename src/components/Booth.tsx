import { useEffect, useState } from "react"
import Ticket, { TicketItem } from "./Ticket"

export default function Booth({
  id,
  ticket,
}: {
  id: number
  ticket: TicketItem
}) {
  const [counter, setCounter] = useState(ticket?.countdown)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (ticket.countdown !== counter) {
        setCounter(ticket.countdown)
      }
    }, 1000)

    return () => clearInterval(intervalId)
  }, [ticket, counter])

  return (
    <section style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      {ticket && <Ticket ticket={ticket} />}
      <div
        style={{
          border: "2px dashed black",
          padding: "2rem",
          fontWeight: "bold",
        }}
      >
        BOOTH {id}
      </div>
      {ticket && (
        <p>
          <span
            style={{
              fontWeight: "bold",
              color: "green",
            }}
          >
            {Math.abs(ticket.processingTime - ticket.countdown)}
          </span>{" "}
          (processingTime: {ticket.processingTime})
        </p>
      )}
    </section>
  )
}
