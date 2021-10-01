import React, { useEffect, useRef, useState } from 'react'

import styles from './styles.module.css'
import gsap from 'gsap'

export const ExampleComponent = ({ text }) => {
  const contactRef = useRef(null)
  const [verticalOffset, setVerticalOffset] = useState(0)

  useEffect(() => {
    if (verticalOffset < 5) {
      window.addEventListener('scroll', () => {
        setVerticalOffset(window.pageYOffset)
      })
    }
    // console.log("verticalOffset: ", verticalOffset);

    const t2 = gsap.timeline()

    if (verticalOffset >= 5) {
      t2.to('.link', {
        duration: 0.5,
        opacity: 0,
        y: -200,
        delay: 0,
        stagger: 0.3,
        ease: 'power3.in'
      })
    }
    if (verticalOffset === 0) {
      t2.fromTo(
        '.link',
        { duration: 0.2, opacity: 1, y: -200, delay: 1, stagger: 0.3 },
        { duration: 0.2, opacity: 1, y: 0, delay: 1, stagger: 0.3 }
      )
    }
  }, [verticalOffset])

  const tl = gsap.timeline()
  tl.fromTo(
    contactRef.current,
    {
      scaleY: 0
    },
    {
      scaleY: 1,
      ease: 'power3.inOut',
      transformOrigin: '50% 50%'
    }
  )
  tl.reversed(false)

  return (
    <div className='link'>
      <div className={styles.test}>Example Component: {text}</div>
    </div>
  )
}
