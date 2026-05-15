import styles from './Heritage.module.css'

const timeline = [
  {
    yr: '1969',
    ttl: 'A garden begins',
    desc: <>Established by <em>Palden Thondup Namgyal,</em> the last Chogyal of Sikkim. The 440-acre garden is planted on the slopes of the Tendong hill range — a working industry, and a way to resettle Tibetan refugees in the region.</>,
  },
  {
    yr: '1994 · 95',
    ttl: 'All India Quality Award',
    desc: <>The <em>Tea Board of India</em> presents Temi with its All India Quality Award for two consecutive years — 1994 and 1995 — recognising the cup quality of an estate then barely twenty-five years old.</>,
  },
  {
    yr: '2008',
    ttl: 'Certified organic',
    desc: <>After conversion under the guidelines of <em>Switzerland&apos;s Institute of Marketecology (IMO),</em> the whole estate is certified 100% organic. Inspected annually by IMO&apos;s Bangalore unit.</>,
  },
  {
    yr: '2019',
    ttl: 'Land to the workers',
    desc: <>Landholding rights for the homesteads of <em>192 worker families</em> are distributed by the Government of Sikkim — a continuation of the estate&apos;s founding idea: an industry that belongs to the people who tend it.</>,
  },
]

const awards = [
  {
    badge: { quality: "'94/'95", label: 'QUALITY' },
    meta: 'All India Quality Award',
    h3: <>Awarded to Temi by the <em>Tea Board of India</em> for two consecutive years — 1994 and 1995.</>,
    body: 'Government of India recognition. The honour, given on cup quality, came when the estate was barely a quarter-century old.',
    src: 'Source · Tea Board of India',
  },
  {
    badge: { quality: '2008', label: 'ORGANIC' },
    meta: 'IMO Switzerland · 100% Organic',
    h3: <>Conversion completed under <em>Institute of Marketecology</em> guidelines; certified in 2008.</>,
    body: "No chemical inputs anywhere on the 440-acre slope. Inspected each year by IMO's Bangalore unit; in continuous certification ever since.",
    src: 'Source · IMO (Switzerland)',
  },
  {
    badge: { quality: 'ONE', label: 'ESTATE' },
    meta: 'Govt. of Sikkim · State-run estate',
    h3: <>Temi is the <em>only tea garden</em> in the state of Sikkim — and at this scale, considered one of the best in India.</>,
    body: 'A single 440-acre garden, run by the Government of Sikkim under its own Tea Board. About three-quarters of annual production is auctioned in Kolkata.',
    src: 'Source · Govt. of Sikkim · Wikipedia',
  },
]

export default function Heritage() {
  return (
    <section id="heritage" className={styles.heritage}>
      <div className="wrap">
        <div className="mono moss">V · Recognition</div>
        <h2 className={styles.h2}>
          A small estate with a <em>long</em> memory.<br />The recognitions, the certifications, the singularity.
        </h2>

        <div className={styles.timeline}>
          {timeline.map((item) => (
            <div key={item.yr} className={styles.timelineStep}>
              <div className={styles.yr}>{item.yr}</div>
              <div className={styles.ttl}>{item.ttl}</div>
              <div className={styles.desc}>{item.desc}</div>
            </div>
          ))}
        </div>

        <div className={styles.quotes}>
          {awards.map((award) => (
            <article key={award.meta} className={styles.award}>
              <div className={styles.badgeWrap}>
                <svg className={styles.badgeMark} viewBox="0 0 80 80" aria-hidden="true">
                  <circle cx="40" cy="40" r="36" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="40" cy="40" r="28" fill="none" stroke="currentColor" strokeWidth="0.6" />
                  <text x="40" y="35" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="6" letterSpacing="1" fill="currentColor">{award.badge.label}</text>
                  <text x="40" y="50" textAnchor="middle" fontFamily="Cormorant Garamond" fontStyle="italic" fontSize="18" fill="currentColor">{award.badge.quality}</text>
                </svg>
              </div>
              <div className={styles.awardMeta}>{award.meta}</div>
              <h3 className={styles.awardH3}>{award.h3}</h3>
              <div className={styles.awardBody}>{award.body}</div>
              <div className={styles.awardSrc}>{award.src}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
