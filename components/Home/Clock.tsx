import { useState } from 'react'
import { useEffectOnce } from 'react-use'
import { format } from 'date-fns'
import { motion } from 'framer-motion'
import { fadeUpDownProps } from 'constants/animation'

const Clock: React.FC = () => {
  const intial = Date.now()
  const [currentTime, setCurrentTime] = useState(format(intial, 'p'))
  const [currentDate, setCurrentDate] = useState(format(intial, 'PPPP'))

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

  return (
    <motion.div {...fadeUpDownProps} className="text-center text-white">
      <div className="text-5xl md:text-6xl font-extrabold mb-4">
        {currentTime}
      </div>
      <div className="text-xl">{currentDate}</div>
    </motion.div>
  )
}

export default Clock
