const ProductItem = ({data, addToCart}) => {
    const { id, name, price } = data
    return(
        <div style={{border:'thin solid gray', padding:'1rem'}}>
            <h4>{name}</h4>
            <h5>S/.{price}</h5>
            <button onClick={() => addToCart(id)}>Aregar</button>
        </div>
    )
}

export default ProductItem