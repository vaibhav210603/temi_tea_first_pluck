import Image from 'next/image'
import styles from './Origin.module.css'

export default function Origin() {
  return (
    <section id="origin" className={styles.origin}>
      <div className="wrap">
        <div className={styles.head}>
          <div className={styles.eyebrow}>I · The Origin</div>
          <h2 className={styles.headH2}>
            A garden that grew from a <em>king&apos;s quiet dream,</em>
            <br />between two snowfields and a slow river.
          </h2>
        </div>

        <div className={styles.originGrid}>
          <div>
            <p className={styles.copyP}>
              In <span className={styles.accent}>1969,</span> on the gentle slopes that fall from the Tendong hill range, a 440-acre stretch of forest was cleared and planted with tea. The vision came from <span className={styles.accent}>Palden Thondup Namgyal,</span> the last <em>Chogyal</em> of Sikkim — partly as a working industry for his hill people, partly as a means of resettling Tibetan refugees who had arrived in the years after 1959.
            </p>
            <p className={styles.copyP}>
              The garden was called <em>Temi.</em> Half a century later, it remains the only tea estate in the state of Sikkim — a single, contiguous garden run by the Government of Sikkim, certified fully organic by Switzerland&apos;s <em>Institute of Marketecology</em> in 2008.
            </p>
            <p className={styles.copyP}>
              The leaf is grown the slow way. Orthodox processing — careful plucking, wilting, rolling, oxidation and drying — on loamy, gently-sloping soil at the foot of the Eastern Himalaya. Around 100 tonnes of finished tea leaves this hillside each year; about three-quarters of it goes to the Kolkata auction.
            </p>
            <div className={styles.sign}>
              <span className={styles.squiggle}>~ Temi, South Sikkim · PIN 731 134</span>
              <span className={styles.who}>Estate notes</span>
            </div>
          </div>

          <div className={styles.facts}>
            <div className={styles.factsGrid}>
              <div className={styles.cell}>
                <div className={styles.cellK}>Founded</div>
                <div className={styles.cellV}>1969</div>
                <div className={styles.note}>Commissioned by the Government of Sikkim.</div>
              </div>
              <div className={styles.cell}>
                <div className={styles.cellK}>Estate</div>
                <div className={styles.cellV}>440<small>acres</small></div>
                <div className={styles.note}>A single, contiguous garden — Sikkim&apos;s only one.</div>
              </div>
              <div className={styles.cell}>
                <div className={styles.cellK}>Elevation</div>
                <div className={styles.cellV}>1.2–2.1<small>km</small></div>
                <div className={styles.note}>Estate spans 1,200–2,100 m on the slopes of Tendong hill.</div>
              </div>
              <div className={styles.cell}>
                <div className={styles.cellK}>Organic since</div>
                <div className={styles.cellV}>2008</div>
                <div className={styles.note}>Audited annually to IMO (Switzerland) standards.</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.mapStrip} aria-hidden="true">
          <Image
            src="/images/temi_garden_landscape.png"
            alt="Temi Garden Landscape"
            fill
            quality={80}
            style={{ objectFit: 'cover', opacity: 0.65 }}
          />
          <div className={styles.pin}>
            <div className={styles.ring}></div>
            <div className={styles.dot}></div>
            <div className={styles.pinLbl}>Temi Garden</div>
          </div>
          <div className={styles.coords}>27°14′12″N · 88°25′20″E<br />South Sikkim, India</div>
          <div className={styles.alt}>Tendong hill range<br />Eastern Himalaya</div>
        </div>
      </div>
    </section>
  )
}
