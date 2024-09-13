import { Dispatch, SetStateAction, useCallback, useEffect } from "react"
import { TicketItem } from "./Ticket"
import Booth from "./Booth"

export const BOOTH_COUNT = 3

interface BoothAreaProps {
  boothAvailability: TicketItem[]
  setBoothAvailability: Dispatch<SetStateAction<(TicketItem | undefined)[]>>
  ticketList: TicketItem[]
  setTicketList: Dispatch<SetStateAction<TicketItem[]>>
}

function BoothArea({
  boothAvailability,
  setBoothAvailability,
  ticketList,
  setTicketList,
}: BoothAreaProps) {
  const clearTickets = useCallback(() => {
    for (const [index, ticket] of boothAvailability.entries()) {
      if (ticket?.isProcessed()) {
        setBoothAvailability((old) =>
          old.map((b, i) => (index === i ? undefined : b))
        )
        return
      }
    }
  }, [boothAvailability, setBoothAvailability])

  useEffect(() => {
    clearTickets()

    const availableBooth = boothAvailability.findIndex(
      (booth) => booth === undefined
    )

    if (availableBooth !== -1 && ticketList.length !== 0) {
      const [first, ...rest] = ticketList
      setTicketList(rest)
      setBoothAvailability((old) =>
        old.map((b, i) => (availableBooth === i ? first : b))
      )
      first.startCountdown()
    }
  }, [
    boothAvailability,
    clearTickets,
    setBoothAvailability,
    setTicketList,
    ticketList,
  ])

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {Array.from(Array(BOOTH_COUNT)).map((_, i) => (
        <Booth key={i} id={i} ticket={boothAvailability[i]} />
      ))}
    </section>
  )
}

export default BoothArea
