import Image from 'next/image'
import styles from './CaddyDetail.module.css'

const specs = [
  { k: 'Material', v: 'Wooden caddy, natural' },
  { k: 'Net weight', v: '200 g (0.2 kg)' },
  { k: 'Tea type', v: 'Organic Orthodox Black' },
  { k: 'Source', v: 'Temi Garden, Sikkim' },
  { k: 'Vendor', v: 'Temi Tea Estate' },
  { k: 'SKU', v: 'TEMI-PREMIUM-TEA-WOODEN-200G-NAT', small: true },
]

export default function CaddyDetail() {
  return (
    <section id="caddy" className={styles.caddy}>
      <div className="wrap">
        <div className={styles.caddyGrid}>
          <div className={styles.imgCard}>
            <Image
              src="/images/temi-caddy-cutout.png"
              alt="The Temi premium wooden caddy"
              width={500}
              height={400}
            />
            <div className={styles.stamp}>est.<br />1969</div>
          </div>
          <div>
            <div className={styles.eyebrow}>III · The Object</div>
            <h2 className={styles.h2}>
              A pinewood box,<br />built like a small <em>heirloom.</em>
            </h2>
            <p className={styles.desc}>
              A natural-finish wooden caddy carrying the estate&apos;s premium black: 200 grams of organic orthodox black tea, sealed under the crest of the Government of Sikkim and the IMO organic mark. Made by, and only available from, Temi Tea Estate.
            </p>
            <div className={styles.specs}>
              {specs.map((spec) => (
                <div key={spec.k} className={styles.spec}>
                  <span className={styles.specK}>{spec.k}</span>
                  <span className={styles.specV} style={spec.small ? { fontSize: '13px' } : undefined}>{spec.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
