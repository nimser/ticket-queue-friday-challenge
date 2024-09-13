import { Dispatch, SetStateAction } from "react"
import { TicketItem } from "./Ticket"
import Booth from "./Booth"

export const BOOTH_COUNT = 3

interface BoothAreaProps {
  boothAvailability: TicketItem[]
  setBoothAvailability: Dispatch<SetStateAction<TicketItem[]>>
  setTicketList: Dispatch<SetStateAction<TicketItem[]>>
}

function BoothArea({
  boothAvailability,
  setBoothAvailability,
  setTicketList,
}: BoothAreaProps) {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {Array.from(Array(BOOTH_COUNT)).map((_, i) => (
        <Booth key={i} id={i} />
      ))}
    </section>
  )
}

export default BoothArea
