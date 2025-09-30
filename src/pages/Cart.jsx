import styles from './Cart.module.css'
export default function Cart({ cart, setCart }) {
  const increaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ))
  }

  const decreaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter(item => item.quantity > 0)) // 過濾掉數量=0的
  }

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div style={{ padding: "20px" }}>
      <h1>購物車</h1>
      {cart.length === 0 ? (
        <p>購物車是空的</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <img src={item.image} alt={item.title} className={styles.image}/>
                <span>{item.title}</span>
                <span> ${item.price}</span>
                <div className={styles.btns}>
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                  <button onClick={() => removeItem(item.id)}>移除</button>
                </div>
                <span> 小計: ${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div >
            <h2>總金額: ${total.toFixed(2)}</h2>
            <button onClick={() => alert("結帳功能尚未完成")}>前往結帳</button>
          </div>
        </>
      )}
    </div>
  )
}
