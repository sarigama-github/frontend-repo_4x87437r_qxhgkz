import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

function Reveal({ children, delay = 0, y = 20 }) {
  const ref = useRef(null)
  const controls = useAnimation()
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay } }
      }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
