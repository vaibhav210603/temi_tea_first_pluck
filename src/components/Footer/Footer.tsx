import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.footerGrid}>
          <div>
            <h3 className={styles.h3}>Temi <em>Tea</em></h3>
            <p className={styles.about}>
              Established 1969 by the Government of Sikkim. The only tea estate in the state — one garden, one leaf, one slow tradition.
            </p>
            <p className={styles.address}>
              Temi Tea Estate, P.O. Temi<br />South Sikkim · PIN 731 134
            </p>
          </div>
          <div>
            <h4 className={styles.colH4}>Shop</h4>
            <ul className={styles.colUl}>
              <li><a href="#">Wooden Caddy</a></li>
              <li><a href="#">Black Tea</a></li>
              <li><a href="#">Green Tea</a></li>
              <li><a href="#">Gift Boxes</a></li>
            </ul>
          </div>
          <div>
            <h4 className={styles.colH4}>Estate</h4>
            <ul className={styles.colUl}>
              <li><a href="#">History</a></li>
              <li><a href="#">Awards</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Our Team</a></li>
            </ul>
          </div>
          <div>
            <h4 className={styles.colH4}>Visit</h4>
            <ul className={styles.colUl}>
              <li><a href="#">The Garden</a></li>
              <li><a href="#">Bungalow Stays</a></li>
              <li><a href="#">Tasting Room</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.copy}>
          <span>© 2026 Temi Tea Estate · Govt. of Sikkim</span>
          <span>P.O. Temi · South Sikkim · PIN 731 134</span>
        </div>
      </div>
    </footer>
  )
}
