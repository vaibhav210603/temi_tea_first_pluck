'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import styles from './Ritual.module.css'

const stepData = [
  { sec: 60, word: 'Warm', dur: '01:00', n: 'I.', ttl: 'Warm the pot', d: 'Rinse with boiling water · settle the porcelain' },
  { sec: 30, word: 'Measure', dur: '00:30', n: 'II.', ttl: 'Measure the leaf', d: 'One heaped teaspoon · 200 ml of water' },
  { sec: 240, word: 'Steep', dur: '04:00', n: 'III.', ttl: 'Steep at 95°C', d: 'Just off the boil · four minutes, undisturbed' },
  { sec: 60, word: 'Rest', dur: '01:00', n: 'IV.', ttl: 'Pour & rest', d: 'Strain into a warmed cup · wait once more' },
]

const CIRC = 578

const stepLabels = ['Warm the pot', 'Measure the leaf', 'Steep at 95°C', 'Pour & rest']

export default function Ritual() {
  const [currentStep, setCurrentStep] = useState(0)
  const [remain, setRemain] = useState(stepData[0].sec)
  const [running, setRunning] = useState(false)
  const [playLabel, setPlayLabel] = useState('Start')
  const ivRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const total = stepData[currentStep].sec

  const stopTimer = useCallback(() => {
    if (ivRef.current) {
      clearInterval(ivRef.current)
      ivRef.current = null
    }
  }, [])

  const goToStep = useCallback((i: number) => {
    stopTimer()
    setRunning(false)
    setPlayLabel('Start')
    setCurrentStep(i)
    setRemain(stepData[i].sec)
  }, [stopTimer])

  useEffect(() => {
    if (!running) return

    ivRef.current = setInterval(() => {
      setRemain(prev => {
        if (prev > 0) return prev - 1
        // Time's up
        stopTimer()
        setRunning(false)
        setPlayLabel('Start')
        setCurrentStep(ci => {
          const next = ci + 1
          if (next < stepData.length) {
            setRemain(stepData[next].sec)
            return next
          }
          setRemain(stepData[ci].sec)
          return ci
        })
        return 0
      })
    }, 1000)

    return () => stopTimer()
  }, [running, stopTimer])

  function handlePlay() {
    if (running) {
      stopTimer()
      setRunning(false)
      setPlayLabel('Resume')
    } else {
      setRunning(true)
      setPlayLabel('Pause')
    }
  }

  function handleReset() {
    stopTimer()
    setRunning(false)
    setPlayLabel('Start')
    setRemain(stepData[currentStep].sec)
  }

  const m = Math.floor(remain / 60)
  const s = remain % 60
  const timeStr = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  const offset = CIRC * (1 - remain / total)

  return (
    <section id="ritual" className={styles.ritual}>
      <div className="wrap">
        <div className={styles.ritualHead}>
          <div>
            <div className={styles.eyebrow}>IV · The Ritual</div>
            <h2 className={styles.h2}>
              Four small steps,<br />one <em>slow</em> cup.
            </h2>
          </div>
          <p>
            A simple, general guide for brewing an orthodox black tea. The estate doesn&apos;t dictate temperatures, but these are the proportions tea drinkers usually reach for. Pick a step to start the timer.
          </p>
        </div>

        <div className={styles.timer}>
          <div className={styles.steps}>
            {stepData.map((step, i) => (
              <div
                key={i}
                className={`${styles.step} ${currentStep === i ? styles.stepActive : ''}`}
                onClick={() => goToStep(i)}
              >
                <div className={styles.stepN}>{step.n}</div>
                <div className={styles.stepTtl}>
                  {step.ttl}
                  <em className={styles.stepD}>{step.d}</em>
                </div>
                <div className={styles.stepDur}>{step.dur}</div>
              </div>
            ))}
          </div>

          <div className={styles.timerCard}>
            <svg className={styles.arcBg} viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="92" fill="none" stroke="rgba(245,239,228,0.12)" strokeWidth="2" />
            </svg>
            <svg className={styles.arcFg} viewBox="0 0 200 200">
              <circle
                cx="100"
                cy="100"
                r="92"
                fill="none"
                stroke="oklch(0.86 0.025 75)"
                strokeWidth="2"
                strokeDasharray={CIRC}
                strokeDashoffset={offset}
                strokeLinecap="round"
              />
            </svg>
            <div className={styles.center}>
              <div className={styles.timeDisplay}>{timeStr}</div>
              <div className={styles.timeLabel}>{stepLabels[currentStep]}</div>
              <div className={styles.ctrl}>
                <button
                  className={`${styles.ctrlBtn} ${styles.ctrlBtnPrimary}`}
                  onClick={handlePlay}
                >
                  {playLabel}
                </button>
                <button className={styles.ctrlBtn} onClick={handleReset}>
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
