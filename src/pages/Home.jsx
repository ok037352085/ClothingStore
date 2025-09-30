import styles from './Home.module.css'
import ProductSection from '../components/ProductSection/ProductSection'
import clothingStore from '/W.webp'


export default function Home({addToCart}) {
    return(
        <div className={styles.container}>
            <div className={styles.imagebox}>
                <div className={styles.centeredBox}>
                    <h1>歡迎來到我的商店</h1>
                </div>
                <img src={clothingStore} alt="clothing store" className={styles.img} />
            </div>
            <div>
                <ProductSection title="男士服裝" category="men's clothing" addToCart={addToCart} />
                <ProductSection title="女士服裝" category="women's clothing" addToCart={addToCart} />
                <ProductSection title="飾品" category="jewelery" addToCart={addToCart} />
            </div>
        </div>
    )
}