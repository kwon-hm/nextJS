import { useEffect, useState } from "react"

export default function CSR() {
  const [time, setTime] = useState<string>()

  useEffect(() => {
    console.log('client')
    setTime(new Date().toISOString())
  }, [])

  return (
    <>
      <h1>{time}</h1>
    </>
  )
}