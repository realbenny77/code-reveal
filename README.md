# Code Reveal

A small React component that transforms code-like gibberish into readable text.

Created by **B.A.D BENNY**.

## Demo

[Try Code Reveal live](https://realbenny77.github.io/code-reveal/)

## Run locally

```bash
npm install
npm run dev
```

## Use the component

```tsx
import { ScrambleReveal } from './ScrambleReveal'

export function Hero() {
  return (
    <h1>
      <ScrambleReveal
        text="Build interfaces that feel alive."
        delay={200}
        speed={28}
      />
    </h1>
  )
}
```

The component:

- Supports a configurable start delay and reveal interval, both in milliseconds.
- Supports `animate={false}` for an immediate, static reveal.
- Respects `prefers-reduced-motion`.
- Keeps the final text available to assistive technology through `aria-label`.
- Cleans up timers when the component unmounts or its text changes.

Use `delay` to control how long the component waits before starting. Use `speed`
to control the time between each reveal step. Lower `speed` values reveal text
faster, while higher values make it slower.

For a landing page that should display the final text immediately without any
timers, disable the animation:

```tsx
<ScrambleReveal
  text="Build interfaces that feel alive."
  animate={false}
/>
```

If you still want the reveal effect but do not want an initial wait, leave
animation enabled and set `delay={0}`:

```tsx
<ScrambleReveal
  text="Build interfaces that feel alive."
  delay={0}
  speed={28}
/>
```

## License

MIT License. Copyright (c) 2026 B.A.D BENNY.
