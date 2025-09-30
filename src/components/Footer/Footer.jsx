import styles from './Footer.module.css'
export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.content}>
                <p>© 2025 Jim Yeh. All rights reserved.</p>

                <div className={styles.links}>
                    <a href="https://github.com/ok037352085" target="_blank" aria-label="GitHub">
                    <i class="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/勁桐-葉-4847ba385/" target="_blank" aria-label="LinkedIn">
                    <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="mailto: ok037352085@gmail.com" aria-label="Email">
                    <i class="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}