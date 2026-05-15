import styles from './Marquee.module.css'

const items = [
  'Organic Orthodox Black',
  'Govt. of Sikkim · Est. 1969',
  'The only tea estate in Sikkim',
  'Pinewood Caddy · 200g',
  'IMO Switzerland · Organic since 2008',
  "Tea Board of India · Quality Award '94 & '95",
]

export default function MarqueeSection() {
  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.marqueeTrack}>
        {items.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
        {items.map((item, i) => (
          <span key={`dup-${i}`}>{item}</span>
        ))}
      </div>
    </div>
  )
}
