
 function Products({ product }) {
    return (
        <div>
            <h2>Name: {product.name}</h2>
            <p>Price: ₹{product.price}</p>
            <button>Adds</button>
        </div>
    )
}


 function ProductCard(props)
{
    return (
        <>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <button>Add</button>
        </>
    );
}
//export default ProductCard;
export { Products, ProductCard };