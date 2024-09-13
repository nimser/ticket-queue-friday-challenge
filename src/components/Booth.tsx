export default function Booth({ id }: { id: number }) {
  return (
    <div
      style={{
        border: "2px dashed black",
        padding: "2rem",
        fontWeight: "bold",
      }}
    >
      BOOTH {id}
    </div>
  )
}
