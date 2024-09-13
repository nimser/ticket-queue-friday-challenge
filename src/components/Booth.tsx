import Ticket, { TicketItem } from "./Ticket"

export default function Booth({
  id,
  ticket,
}: {
  id: number
  ticket: TicketItem
}) {
  return (
    <section style={{ display: "flex", gap: "1rem" }}>
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
      <p
        style={{
          fontWeight: "bold",
          color: "green",
        }}
      >
        {ticket && Math.abs(ticket.processingTime - ticket.countdown)}
      </p>
    </section>
  )
}
