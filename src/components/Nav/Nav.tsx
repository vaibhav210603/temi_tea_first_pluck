import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={`wrap ${styles.row}`}>
        <div className={styles.brand}>
          <span className={styles.crest}>T</span>
          <span className={styles.name}>
            Temi <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Tea</em>
          </span>
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#origin">Origin</a></li>
          <li><a href="#tasting">Tasting Notes</a></li>
          <li><a href="#caddy">The Caddy</a></li>
          <li><a href="#ritual">Ritual</a></li>
          <li><a href="#heritage">Recognition</a></li>
        </ul>
        <div className={styles.cart}>
          <span className="mono">Cart · 01</span>
          <span className={styles.price}>₹1,421</span>
        </div>
      </div>
    </nav>
  )
}
