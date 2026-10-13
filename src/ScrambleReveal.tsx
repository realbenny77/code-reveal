import { useEffect, useState } from 'react'

const CHARACTERS = '!<>/\\{}[]=+$#@%01ABCDEF'

function randomCharacter() {
  return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
}

function scrambled(text: string) {
  return Array.from(text, (character) =>
    character === ' ' || character === '\n' ? character : randomCharacter(),
  ).join('')
}

export type ScrambleRevealProps = {
  text: string
  delay?: number
  speed?: number
  animate?: boolean
  className?: string
}

export function ScrambleReveal({
  text,
  delay = 0,
  speed = 28,
  animate = true,
  className,
}: ScrambleRevealProps) {
  const [reduceMotion, setReduceMotion] = useState(false)
  const [displayText, setDisplayText] = useState(text)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReduceMotion(media.matches)
    updatePreference()
    media.addEventListener('change', updatePreference)
    return () => media.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    if (!animate || reduceMotion) {
      setDisplayText(text)
      return
    }

    let revealCount = 0
    let timer = 0
    const revealStep = Math.max(1, Math.ceil(text.length / 42))

    const start = () => {
      const reveal = () => {
        revealCount = Math.min(text.length, revealCount + revealStep)
        setDisplayText(
          Array.from(text, (character, index) => {
            if (character === ' ' || index < revealCount) return character
            return randomCharacter()
          }).join(''),
        )

        if (revealCount < text.length) timer = window.setTimeout(reveal, speed)
        else setDisplayText(text)
      }

      reveal()
    }

    const startTimer = window.setTimeout(start, delay)
    return () => {
      window.clearTimeout(startTimer)
      window.clearTimeout(timer)
    }
  }, [animate, delay, reduceMotion, speed, text])

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden>{displayText}</span>
    </span>
  )
}
