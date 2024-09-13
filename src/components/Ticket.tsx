const MAX_PROCESSING_TIME = 45
const MIN_PROCESSING_TIME = 2

export class TicketItem {
  private static offset: number = 0
  id: number
  processingTime: number // used to determine when the ticket will leave the booth

  constructor() {
    this.id = TicketItem.offset
    TicketItem.offset += 1
    this.processingTime = this.generateProcessingTime()
  }

  private generateProcessingTime() {
    return Math.floor(
      Math.random() * (MAX_PROCESSING_TIME - MIN_PROCESSING_TIME) +
        MIN_PROCESSING_TIME
    )
  }
}

export default function Ticket({ ticket }: { ticket: TicketItem }) {
  return (
    <div
      style={{
        height: "50px",
        width: "120px",
        margin: "5px",
        border: "2px dotted black",
        backgroundColor: "rgba(0,0,0,.5)",
        opacity: ".8",
        display: "grid",
        placeContent: "center",
      }}
    >
      {ticket.id}
    </div>
  )
}
