import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <div className={styles.temiRow}>
              <div className={styles.temiLogoWrap}>
                <Image
                  src="/images/temitea.png"
                  alt="Temi Tea"
                  width={80}
                  height={80}
                  quality={90}
                />
              </div>
              <span className={styles.temiName}>Temi Tea Estate</span>
            </div>
            <div className={styles.tagline}>THE TASTE OF A DISTANT SAGA</div>
            <p className={styles.address}>
              Temi Tea Estate · P.O. Temi, Namchi · South Sikkim ·<br />
              India · 737126. The only tea estate of Sikkim.<br />
              Government of Sikkim enterprise since 1969.
            </p>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.marketedBy}>
          <div className={styles.marketedLabel}>MARKETED BY</div>
          <div className={styles.mrcRow}>
            <div className={styles.mrcLogoWrap}>
              <Image
                src="/images/MRC_LOGO.png"
                alt="MRC Agrotech"
                width={80}
                height={80}
                quality={90}
              />
            </div>
            <span className={styles.mrcName}>MRC Agrotech Ltd.</span>
          </div>
          <div className={styles.mrcDetails}>
            <div className={styles.scrip}>BSE SCRIP: 540809 · MRCAGRO</div>
            <p className={styles.mrcAddress}>
              Block No. 404, 4th Floor, Sagar Tech Plaza,<br />
              Sakinaka, Andheri-Kurla Road, Andheri (E),<br />
              Mumbai, Maharashtra – 400072
            </p>
            <a href="mailto:info@mrcagro.com" className={styles.email}>info@mrcagro.com</a>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © 2026 TEMI TEA ESTATE · GOVERNMENT OF SIKKIM · ALL RIGHTS RESERVED
          </div>
       
        </div>
      </div>
    </footer>
  )
}
