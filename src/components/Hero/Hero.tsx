'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Hero.module.css'

type TipId = 't1' | 't2' | 't3' | 't4' | null

interface HotspotData {
  id: TipId
  style: { left: string; top: string }
  label: string
  tipKey: string
  tipValue: React.ReactNode
  tipSub: string
}

const hotspots: HotspotData[] = [
  {
    id: 't1',
    style: { left: '50%', top: '24%' },
    label: 'Govt. of Sikkim crest',
    tipKey: 'Crest',
    tipValue: <><em>Govt. of Sikkim</em><br />Est. 1969</>,
    tipSub: 'State enterprise · Namgyal era',
  },
  {
    id: 't2',
    style: { left: '50%', top: '67%' },
    label: 'IMO Organic certification',
    tipKey: 'Certification',
    tipValue: <><em>IMO Switzerland</em><br />Organic, since 2008</>,
    tipSub: 'Audited annually · Bangalore unit',
  },
  {
    id: 't3',
    style: { left: '18%', top: '38%' },
    label: 'Himalayan pinewood',
    tipKey: 'Material',
    tipValue: <><em>Himalayan pine</em><br />Natural finish</>,
    tipSub: 'Hand-joined · Sikkim sourced',
  },
  {
    id: 't4',
    style: { left: '84%', top: '42%' },
    label: 'Net weight',
    tipKey: 'Net Weight',
    tipValue: <>200 g<br /><em>Whole leaf, orthodox</em></>,
    tipSub: '≈ 80–100 cups',
  },
]

export default function Hero() {
  const stageRef = useRef<HTMLDivElement>(null)
  const caddyRef = useRef<HTMLDivElement>(null)
  const [openTip, setOpenTip] = useState<TipId>(null)

  useEffect(() => {
    const stage = stageRef.current
    const caddy = caddyRef.current
    if (!stage || !caddy) return

    let rect = stage.getBoundingClientRect()
    const updateRect = () => { rect = stage.getBoundingClientRect() }
    window.addEventListener('resize', updateRect)
    window.addEventListener('scroll', updateRect, { passive: true })

    function onMove(e: MouseEvent) {
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      const rx = (0.5 - y) * 10
      const ry = (x - 0.5) * 14
      const tx = (x - 0.5) * 12
      const ty = (y - 0.5) * 10
      if (caddy) {
        caddy.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotateX(${rx}deg) rotateY(${ry}deg)`
      }
    }

    function onLeave() {
      if (caddy) {
        caddy.style.transform = 'translate3d(0,0,0) rotateX(0deg) rotateY(0deg)'
      }
    }

    stage.addEventListener('mousemove', onMove)
    stage.addEventListener('mouseleave', onLeave)

    // Initial hint: show first hotspot
    const t1 = setTimeout(() => {
      setOpenTip('t1')
      const t2 = setTimeout(() => setOpenTip(null), 2400)
      return () => clearTimeout(t2)
    }, 900)

    return () => {
      window.removeEventListener('resize', updateRect)
      window.removeEventListener('scroll', updateRect)
      stage.removeEventListener('mousemove', onMove)
      stage.removeEventListener('mouseleave', onLeave)
      clearTimeout(t1)
    }
  }, [])

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as Element
      if (!target.closest('[data-hotspot]') && !target.closest('[data-tooltip]')) {
        setOpenTip(null)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  function handleHotspotEnter(id: TipId) {
    setOpenTip(id)
  }

  function handleHotspotClick(e: React.MouseEvent, id: TipId) {
    e.stopPropagation()
    setOpenTip(prev => prev === id ? null : id)
  }

  return (
    <section className={styles.hero}>
      {/* Topographic contour background */}
      <div className={styles.topo} aria-hidden="true">
        <svg viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="tg" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M0 40 L80 40" stroke="oklch(0.78 0.018 70)" strokeWidth="0.4" strokeDasharray="1 6" />
            </pattern>
          </defs>
          <rect width="1400" height="900" fill="url(#tg)" opacity=".5" />
          <g fill="none" stroke="oklch(0.78 0.018 70)" strokeWidth="0.7">
            <path d="M-50 460 C 180 380, 360 510, 580 440 S 940 320, 1180 410 S 1500 360, 1500 360" />
            <path d="M-50 520 C 200 460, 380 580, 600 510 S 960 380, 1180 470 S 1500 420, 1500 420" />
            <path d="M-50 580 C 220 540, 400 640, 620 580 S 980 460, 1180 540 S 1500 480, 1500 480" />
            <path d="M-50 640 C 240 610, 420 700, 640 640 S 1000 540, 1200 610 S 1500 540, 1500 540" />
            <path d="M-50 700 C 260 680, 440 760, 660 700 S 1020 620, 1220 680 S 1500 600, 1500 600" />
          </g>
          <g fill="none" stroke="oklch(0.42 0.055 145)" strokeWidth="0.6" opacity=".5">
            <path d="M-50 400 C 200 300, 400 460, 620 380 S 980 240, 1200 350 S 1500 290, 1500 290" />
          </g>
          <g stroke="oklch(0.22 0.018 50)" strokeWidth="0.5" opacity=".25">
            <line x1="120" y1="0" x2="120" y2="900" />
            <line x1="1280" y1="0" x2="1280" y2="900" />
            <line x1="0" y1="120" x2="1400" y2="120" />
            <line x1="0" y1="780" x2="1400" y2="780" />
          </g>
        </svg>
      </div>

      {/* Drifting tea leaves */}
      <svg className={styles.leaf} width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
        <path d="M2 11 C 6 3, 16 3, 20 11 C 16 19, 6 19, 2 11 Z M2 11 L 20 11" fill="oklch(0.42 0.055 145)" opacity=".55" stroke="oklch(0.22 0.018 50)" strokeWidth=".4" />
      </svg>
      <svg className={styles.leaf} width="18" height="18" viewBox="0 0 22 22" aria-hidden="true">
        <path d="M2 11 C 6 3, 16 3, 20 11 C 16 19, 6 19, 2 11 Z M2 11 L 20 11" fill="oklch(0.42 0.055 145)" opacity=".4" stroke="oklch(0.22 0.018 50)" strokeWidth=".4" />
      </svg>
      <svg className={styles.leaf} width="14" height="14" viewBox="0 0 22 22" aria-hidden="true">
        <path d="M2 11 C 6 3, 16 3, 20 11 C 16 19, 6 19, 2 11 Z M2 11 L 20 11" fill="oklch(0.42 0.055 145)" opacity=".5" stroke="oklch(0.22 0.018 50)" strokeWidth=".4" />
      </svg>

      <div className="wrap">
        <div className={styles.marks}>
          <div className={styles.marksGroup}>
            <span className={`mono ${styles.live}`}>Estate live · South Sikkim</span>
            <span className={`mono ${styles.marksMono}`}>27°14′N · 88°25′E</span>
          </div>
          <div className={styles.marksGroup}>
            <span className={`mono ${styles.marksMono}`}>№ 04 — The Wooden Caddy</span>
            <span className={`mono ${styles.marksMono}`}>SKU · TEMI-PREMIUM-TEA-WOODEN-200G-NAT</span>
          </div>
        </div>

        <div className={styles.heroStage}>
          <div className={styles.heroTitle}>
            <div className={styles.eyebrow}>Premium Organic Orthodox Black</div>
            <h1 className={styles.h1}>
              <span className={styles.l}>The Taste of</span>
              <span className={styles.l}>a <em>Distant</em></span>
              <span className={styles.l}><span className={styles.accent}>Saga.</span></span>
            </h1>
          </div>

          <div className={styles.productStage} ref={stageRef}>
            {/* steam wisps */}
            <svg className={styles.steam} viewBox="0 0 160 280" aria-hidden="true">
              <path d="M40 270 C 30 230, 60 200, 50 160 C 40 120, 70 90, 60 50 C 55 30, 70 15, 60 0" />
              <path d="M80 270 C 70 230, 100 200, 90 160 C 80 120, 110 90, 100 50 C 95 30, 110 15, 100 0" />
              <path d="M120 270 C 110 230, 140 200, 130 160 C 120 120, 150 90, 140 50 C 135 30, 150 15, 140 0" />
            </svg>

            <div className={styles.caddy} ref={caddyRef}>
              <Image
                src="/images/temi-caddy-cutout.png"
                alt="Temi Tea Premium Wooden Caddy — pinewood box, 200 g organic orthodox black tea"
                width={620}
                height={565}
              />
              <div className={styles.floor}></div>
            </div>

            {hotspots.map((hs) => (
              <button
                key={hs.id}
                className={`${styles.hotspot} ${openTip === hs.id ? styles.hotspotOpen : ''}`}
                style={hs.style}
                aria-label={hs.label}
                onMouseEnter={() => handleHotspotEnter(hs.id)}
                onClick={(e) => handleHotspotClick(e, hs.id)}
                data-hotspot="true"
              />
            ))}

            {hotspots.map((hs) => (
              <div
                key={`tip-${hs.id}`}
                className={`${styles.tooltip} ${openTip === hs.id ? styles.tooltipShow : ''}`}
                style={hs.style}
                data-tooltip="true"
              >
                <div className={styles.tooltipK}>{hs.tipKey}</div>
                <div className={styles.tooltipV}>{hs.tipValue}</div>
                <div className={styles.tooltipSub}>{hs.tipSub}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.heroFoot}>
          <div className={styles.tele}>
            <div>
              <div className={styles.teleK}>Estate Founded</div>
              <div className={styles.teleV}>1969</div>
            </div>
            <div>
              <div className={styles.teleK}>Elevation</div>
              <div className={styles.teleV}>1,200–2,100 <small>m</small></div>
            </div>
            <div>
              <div className={styles.teleK}>Estate Area</div>
              <div className={styles.teleV}>440 <small>acres</small></div>
            </div>
          </div>

          <div className={styles.ctaRow}>
            <a className={styles.btnPrimary} href="#cta">
              Order the Caddy <span className={styles.arr}></span>
            </a>
            <a className={styles.btnGhost} href="#tasting">Tasting notes</a>
          </div>

          <div className={`${styles.tele} ${styles.rightTele}`}>
            <div>
              <div className={styles.teleK}>Price</div>
              <div className={styles.teleV}>₹1,421 <small>INR</small></div>
            </div>
            <div>
              <div className={styles.teleK}>Delivery</div>
              <div className={styles.teleV}><em>2–3 weeks</em></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
