import { Dispatch, SetStateAction } from "react"
import { TicketItem } from "./Ticket"
import { wrap } from "module"

interface QueueProps {
  ticketList: TicketItem[]
  boothAvailability: TicketItem[]
  setBoothAvailability: Dispatch<SetStateAction<TicketItem[]>>
}

function Queue({
  ticketList,
  boothAvailability,
  setBoothAvailability,
}: QueueProps) {
  return (
    <section
      style={{
        width: "390px",
        backgroundColor: "palegreen",
        display: "flex",
        flexDirection: "row-reverse",
        flexWrap: "wrap-reverse",
      }}
    >
      {ticketList.map((ticket) => (
        <div
          style={{
            height: "50px",
            width: "120px",
            margin: "5px",
            border: "1 px solid gray",
            backgroundColor: "pink",
          }}
        >
          {ticket.id}
        </div>
      ))}
    </section>
  )
}

export default Queue
