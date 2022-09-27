
const CartItem = ({data, deleteFromCart}) => {
    let { id, name, price, quantity } = data
  return (
    <div style={{borderBottom:'thin solid gray'}}>
        <h4>{name}</h4>
        <h5>S/.{price}.00 x {quantity} = S/.{price*quantity}.00</h5>
        <button onClick={() => deleteFromCart(id)}>Eliminar Uno</button>
        <br />
        <button onClick={() => deleteFromCart(id, true)}>Eliminar Todo</button>
    </div>
  )
}

export default CartItem;