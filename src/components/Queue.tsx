import Ticket, { TicketItem } from "./Ticket"

interface QueueProps {
  ticketList: TicketItem[]
}

function Queue({ ticketList }: QueueProps) {
  return (
    <section
      style={{
        width: "410px",
        backgroundColor: "rgba(0,0,0,.1)",
        display: "flex",
        flexDirection: "row-reverse",
        flexWrap: "wrap-reverse",
      }}
    >
      {ticketList.map((ticket, i) => (
        <Ticket key={i} ticket={ticket} />
      ))}
    </section>
  )
}

export default Queue
