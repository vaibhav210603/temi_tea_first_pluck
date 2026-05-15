'use client'

import { useRef, useState, useEffect } from 'react'
import styles from './Tasting.module.css'

const slices = [
  { id: 'aroma', word: 'Floral', sub: 'Delicate, mountain air' },
  { id: 'body', word: 'Light', sub: 'Smooth, orthodox black' },
  { id: 'finish', word: 'Muscatel', sub: 'Lingering, lightly sweet' },
  { id: 'liquor', word: 'Golden', sub: 'Light amber, translucent' },
]

const notes = [
  {
    id: 'aroma',
    n: 'I.',
    lbl: <><em>Aroma</em> — delicate, floral</>,
    desc: 'A soft floral lift, the kind sources describe again and again — cool mountain air, a hint of mountain flowers, nothing assertive. The leaf is grown in mist; the cup remembers it.',
  },
  {
    id: 'body',
    n: 'II.',
    lbl: <><em>Body</em> — light, smooth</>,
    desc: 'Orthodox black, but light on the tongue rather than heavy. Round and unhurried; the official estate note simply calls it “a premium grade tea, light in color with a delicate flavor and aroma.”',
  },
  {
    id: 'finish',
    n: 'III.',
    lbl: <><em>Finish</em> — lingering, lightly sweet</>,
    desc: 'A clean, faintly muscatel sweetness that settles slowly — the muscatel comparison that tea drinkers reach for when placing Sikkim somewhere near, but distinct from, Darjeeling.',
  },
  {
    id: 'liquor',
    n: 'IV.',
    lbl: <><em>Liquor</em> — light golden amber</>,
    desc: 'Brews to a bright, translucent liquor — closer to gold than to mahogany. The first flush in particular is described as light, golden yellow with a delicate flavour.',
  },
]

export default function Tasting() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [activeId, setActiveId] = useState('aroma')
  const [centerWord, setCenterWord] = useState('Floral')
  const [centerSub, setCenterSub] = useState('Delicate, mountain air')

  function activate(id: string) {
    setActiveId(id)
    const slice = slices.find(s => s.id === id)
    if (slice) {
      setCenterWord(slice.word)
      setCenterSub(slice.sub)
    }
  }

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    // Clear any previously built paths
    while (svg.firstChild) svg.removeChild(svg.firstChild)

    const cx = 0, cy = 0, rOuter = 240, rInner = 140
    const step = (Math.PI * 2) / slices.length

    function arcPath(i: number): string {
      const a0 = -Math.PI / 2 + i * step
      const a1 = a0 + step
      const x0 = cx + rOuter * Math.cos(a0), y0 = cy + rOuter * Math.sin(a0)
      const x1 = cx + rOuter * Math.cos(a1), y1 = cy + rOuter * Math.sin(a1)
      const x2 = cx + rInner * Math.cos(a1), y2 = cy + rInner * Math.sin(a1)
      const x3 = cx + rInner * Math.cos(a0), y3 = cy + rInner * Math.sin(a0)
      return `M ${x0} ${y0} A ${rOuter} ${rOuter} 0 0 1 ${x1} ${y1} L ${x2} ${y2} A ${rInner} ${rInner} 0 0 0 ${x3} ${y3} Z`
    }

    slices.forEach((s, i) => {
      const p = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      p.setAttribute('d', arcPath(i))
      p.setAttribute('data-id', s.id)
      p.style.fill = 'var(--pine)'
      p.style.fillOpacity = '0.55'
      p.style.stroke = 'var(--ink)'
      p.style.strokeWidth = '1'
      p.style.cursor = 'pointer'
      p.style.transition = 'fill-opacity 0.35s'
      p.addEventListener('mouseenter', () => activate(s.id))
      svg.appendChild(p)

      // label
      const mid = -Math.PI / 2 + i * step + step / 2
      const lr = (rOuter + rInner) / 2
      const lx = cx + lr * Math.cos(mid)
      const ly = cy + lr * Math.sin(mid)
      const t = document.createElementNS('http://www.w3.org/2000/svg', 'text')
      t.setAttribute('x', String(lx))
      t.setAttribute('y', String(ly))
      t.setAttribute('text-anchor', 'middle')
      t.setAttribute('dominant-baseline', 'middle')
      t.style.fontFamily = 'var(--mono)'
      t.style.fontSize = '10px'
      t.style.letterSpacing = '0.1em'
      t.style.textTransform = 'uppercase'
      t.style.fill = 'var(--ink)'
      t.style.pointerEvents = 'none'
      t.textContent = s.word
      svg.appendChild(t)
    })

    const ringO = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    ringO.setAttribute('cx', '0')
    ringO.setAttribute('cy', '0')
    ringO.setAttribute('r', String(rOuter))
    ringO.style.fill = 'none'
    ringO.style.stroke = 'var(--ink)'
    ringO.style.strokeWidth = '1'
    svg.appendChild(ringO)

    const ringI = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    ringI.setAttribute('cx', '0')
    ringI.setAttribute('cy', '0')
    ringI.setAttribute('r', String(rInner))
    ringI.style.fill = 'none'
    ringI.style.stroke = 'var(--ink)'
    ringI.style.strokeWidth = '1'
    svg.appendChild(ringI)
  }, [])

  // Update arc active state on activeId change
  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    svg.querySelectorAll('path[data-id]').forEach((el) => {
      const path = el as SVGPathElement
      const isActive = path.getAttribute('data-id') === activeId
      path.style.fill = isActive ? 'var(--moss)' : 'var(--pine)'
      path.style.fillOpacity = isActive ? '0.9' : '0.55'
    })
  }, [activeId])

  return (
    <section id="tasting" className={styles.tasting}>
      <div className="wrap">
        <div className={styles.head}>
          <div>
            <div className="mono moss">II · The Cup</div>
            <h2 className={styles.headH2}>
              Bold but unhurried.<br />A long, <em>honey-bright</em> finish.
            </h2>
          </div>
          <p className={styles.headP}>
            Trace the cup with your tongue and you&apos;ll find four moving parts. Hover any of them to read what we tasted on the bench.
          </p>
        </div>

        <div className={styles.tastingGrid}>
          <div className={styles.wheelWrap}>
            <svg
              ref={svgRef}
              className={styles.wheel}
              viewBox="-260 -260 520 520"
              aria-label="Tasting wheel"
            />
            <div className={styles.wheelCenter}>
              <div className={styles.wheelWord}>{centerWord}</div>
              <div className={styles.wheelSub}>{centerSub}</div>
            </div>
          </div>

          <div>
            {notes.map((note) => (
              <div
                key={note.id}
                className={`${styles.item} ${activeId === note.id ? styles.itemActive : ''}`}
                data-id={note.id}
                onMouseEnter={() => activate(note.id)}
              >
                <div className={styles.itemN}>{note.n}</div>
                <div>
                  <div className={styles.itemLbl}>{note.lbl}</div>
                  <div className={styles.itemDesc}>{note.desc}</div>
                </div>
              </div>
            ))}

            <div className={styles.brewBar}>
              <div className={styles.brewLabels}>
                <span>Pale gold</span>
                <span>Golden amber</span>
                <span>Deep amber</span>
                <span>Mahogany</span>
              </div>
              <div className={styles.bar}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
