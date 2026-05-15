'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './Cta.module.css'

const BASE_PRICE = 1421

export default function Cta() {
  const [qty, setQty] = useState(1)
  const [addedText, setAddedText] = useState('Add to Cart')

  function handleQty(delta: number) {
    setQty(prev => Math.max(1, Math.min(9, prev + delta)))
  }

  function handleAdd() {
    setAddedText('✓ Added to cart')
    setTimeout(() => setAddedText('Add to Cart'), 1600)
  }

  const total = (BASE_PRICE * qty).toLocaleString('en-IN')

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
        <div className={styles.eyebrow}>VI · Place Your Order</div>
        <h2 className={styles.h2}>
          Bring the <em>distant saga</em><br />home in a wooden box.
        </h2>
        <p className={styles.sub}>
          Whole-leaf organic black, sealed under the crest of the Government of Sikkim. Shipped estate-direct from Temi in roughly two to three weeks.
        </p>

        <article className={styles.ticket}>
          {/* LEFT: product stub */}
          <div className={styles.product}>
            <div className={styles.stubHead}>
              <div className={styles.lot}>
                Item
                <strong>Premium Tea Wooden Caddy</strong>
              </div>
              <div className={styles.stamp}>Estate<br /><em>since</em><br />1969</div>
            </div>
            <div className={styles.productImg}>
              <Image
                src="/images/temi-caddy-cutout.png"
                alt="Temi Premium Tea Wooden Caddy"
                width={400}
                height={280}
                style={{ maxHeight: '280px', width: 'auto' }}
              />
              <div className={styles.floor}></div>
            </div>
            <div className={styles.productFoot}>
              <div>
                <div className={styles.cellK}>Net weight</div>
                <div className={styles.cellV}>200 g <em>· 0.2 kg</em></div>
              </div>
              <div>
                <div className={styles.cellK}>Type</div>
                <div className={styles.cellV}><em>Organic Orthodox Black</em></div>
              </div>
              <div>
                <div className={styles.cellK}>Origin</div>
                <div className={styles.cellV}>Temi Garden, Sikkim</div>
              </div>
              <div>
                <div className={styles.cellK}>Vendor</div>
                <div className={styles.cellV}>Temi Tea Estate</div>
              </div>
            </div>
          </div>

          {/* RIGHT: order panel */}
          <div className={styles.order}>
            <div className={styles.oHead}>
              <span className={styles.oLabel}>Order details</span>
              <span className={styles.oNum}>Form · 06 / 2026</span>
            </div>
            <h3 className={styles.orderH3}>The <em>final pour.</em></h3>

            <div className={styles.ordGrid}>
              <div>
                <div className={styles.ordCellK}>SKU</div>
                <div className={styles.ordCellV} style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.06em' }}>
                  TEMI-PREMIUM-TEA-<br />WOODEN-200G-NAT
                </div>
              </div>
              <div>
                <div className={styles.ordCellK}>Unit price</div>
                <div className={styles.ordCellV}>₹1,421 <em style={{ fontSize: '14px' }}>INR</em></div>
              </div>
              <div>
                <div className={styles.ordCellK}>Ships from</div>
                <div className={styles.ordCellV}><em>P.O. Temi</em><br />South Sikkim</div>
              </div>
              <div>
                <div className={styles.ordCellK}>Delivery</div>
                <div className={styles.ordCellV}><em>≈ 2–3 weeks</em></div>
              </div>
            </div>

            <div className={styles.qtyRow}>
              <span className={styles.qtyK}>Quantity</span>
              <div className={styles.qty}>
                <button className={styles.qtyBtn} onClick={() => handleQty(-1)} aria-label="Decrease">−</button>
                <span className={styles.qtyN}>{qty}</span>
                <button className={styles.qtyBtn} onClick={() => handleQty(1)} aria-label="Increase">+</button>
              </div>
            </div>

            <div className={styles.totalRow}>
              <span className={styles.totalK}>Total</span>
              <span className={styles.totalV}>₹{total} <small>INR</small></span>
            </div>

            <button className={styles.addBtn} onClick={handleAdd}>
              <span>{addedText}</span>
              <span className={styles.arr}></span>
            </button>
          </div>
        </article>

        <div className={styles.band}>
          <div className={styles.bandGroup}>
            <div>
              <div className={styles.bandItemK}>Estate</div>
              <div className={styles.bandItemV}><em>Temi Tea Estate</em> · Govt. of Sikkim</div>
            </div>
            <div>
              <div className={styles.bandItemK}>Address</div>
              <div className={styles.bandItemV}>P.O. Temi, South Sikkim · PIN 731 134</div>
            </div>
            <div>
              <div className={styles.bandItemK}>Queries</div>
              <div className={styles.bandItemV}><a href="tel:+919735876022" style={{ color: 'inherit' }}>+91 97358 76022</a></div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className={styles.pill}>IMO Switzerland · Organic</span>
            <span className={styles.pill}>Tea Board of India · Quality &apos;94/&apos;95</span>
          </div>
        </div>

        <div className={styles.reassure}>
          <span>Free shipping above ₹2,000</span>
          <span>Estate-direct, no middlemen</span>
          <span>Secure checkout</span>
          <span>2–3 week delivery</span>
        </div>
      </div>
    </section>
  )
}
