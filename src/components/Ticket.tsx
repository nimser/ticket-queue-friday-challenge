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
