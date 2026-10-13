import { useState } from 'react'
import { ScrambleReveal } from './ScrambleReveal'
import './styles.css'

const DEFAULT_TEXT = 'Build interfaces that feel alive.'

function App() {
  const [text, setText] = useState(DEFAULT_TEXT)
  const [delay, setDelay] = useState(200)
  const [speed, setSpeed] = useState(28)
  const [key, setKey] = useState(0)

  return (
    <main className="page">
      <section className="demo">
        <p className="eyebrow">Code Reveal</p>
        <h1>
          <ScrambleReveal
            key={key}
            text={text || DEFAULT_TEXT}
            delay={delay}
            speed={speed}
          />
        </h1>
        <p className="intro">
          A small React component that turns code-like noise into readable text.
        </p>
        <div className="controls">
          <label htmlFor="demo-text">Try your own text</label>
          <div className="input-row">
            <input
              id="demo-text"
              value={text}
              onChange={(event) => setText(event.target.value)}
              maxLength={80}
            />
            <button type="button" onClick={() => setKey((value) => value + 1)}>
              Replay
            </button>
          </div>
          <div className="timing-controls">
            <div className="field">
              <label htmlFor="demo-delay">Start delay (ms)</label>
              <input
                id="demo-delay"
                type="number"
                min="0"
                max="5000"
                step="50"
                value={delay}
                onChange={(event) => setDelay(Number(event.target.value))}
              />
            </div>
            <div className="field">
              <label htmlFor="demo-speed">Reveal interval (ms)</label>
              <input
                id="demo-speed"
                type="number"
                min="1"
                max="1000"
                step="1"
                value={speed}
                onChange={(event) => setSpeed(Number(event.target.value))}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
