import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from '/smileface.png'

export default function Header({ cartCount }) {
  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <div className={styles.left}>
          <img src={Logo} alt="logo" className={styles.logo} />
          <Link to="/" className={styles.shopname}>我的商店</Link>
        </div>

        <div className={styles.right}>
          <button className={styles.btn}>登入</button>
          <Link to="/cart">
          <button className={styles.btn}>
            🛒
            {cartCount > 0 && <span className={styles.count}>{cartCount}</span>}
          </button>
          </Link>
        </div>
      </div>

      <nav className={styles.bottomRow}>
        <Link to="/" className={styles.link}>鞋子</Link>
        <Link to="/" className={styles.link}>包包</Link>
        <Link to="/" className={styles.link}>配件</Link>
      </nav>
    </header>
  );
}
