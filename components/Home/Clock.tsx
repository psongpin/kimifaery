import { useState } from 'react'
import { useEffectOnce } from 'react-use'
import { format } from 'date-fns'

const Clock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState('')
  const [currentDate, setCurrentDate] = useState('')

  useEffectOnce(() => {
    const tick = setInterval(() => {
      const now = Date.now()

      const formattedTime = format(now, 'p')
      const formattedDate = format(now, 'PPPP')

      setCurrentTime(formattedTime)
      setCurrentDate(formattedDate)
    }, 1000)

    return () => clearInterval(tick)
  })

  if (!currentTime || !currentDate) return null

  return (
    <div className="text-center text-white">
      <div className="text-5xl md:text-6xl mb-4">{currentTime}</div>
      <div className="text-xl">{currentDate}</div>
    </div>
  )
}

export default Clock
