'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import styles from './Cta.module.css'

const BASE_PRICE = 1421

export default function Cta() {
  return (
    <section id="cta" className={styles.cta}>
      <div className={styles.topo} aria-hidden="true">
        <svg viewBox="0 0 1400 700" preserveAspectRatio="xMidYMid slice">
          <g fill="none" stroke="oklch(0.78 0.018 70)" strokeWidth="0.7">
            <path d="M-50 360 C 200 280, 400 420, 620 340 S 980 220, 1200 310 S 1500 260, 1500 260" />
            <path d="M-50 420 C 220 360, 420 480, 640 410 S 1000 300, 1200 380 S 1500 330, 1500 330" />
            <path d="M-50 480 C 240 440, 440 540, 660 480 S 1020 380, 1220 450 S 1500 390, 1500 390" />
            <path d="M-50 540 C 260 520, 460 600, 680 540 S 1040 460, 1240 520 S 1500 460, 1500 460" />
          </g>
        </svg>
      </div>

      <div className={`wrap ${styles.inner}`}>
        <div className={styles.eyebrow}>VI · Take home the saga</div>
        <h2 className={styles.h2}>
          The <em>Temi Caddy.</em><br />Pure orthodox black.
        </h2>
        <div className={styles.minimalStage}>
          <div className={styles.productImg}>
            <Image
              src="/images/temi-caddy-cutout.png"
              alt="Temi Premium Tea Wooden Caddy"
              width={600}
              height={450}
              className={styles.mainImg}
              quality={90}
            />
            <div className={styles.floor}></div>
          </div>
          
          <div className={styles.btnWrap}>
            <a 
              className={styles.aestheticBtn} 
              href="https://temiteaestate.com/products/blackpremiumwoodenbox-nat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Get yours now</span>
              <span className={styles.arr}></span>
            </a>
            <div className={styles.priceTag}>₹1,421 INR · 200g</div>
          </div>
        </div>

        <div className={styles.reassure}>
          <span>Free shipping</span>
          <span>Estate-direct</span>
          <span>Organic certified</span>
        </div>
      </div>
    </section>
  )
}
