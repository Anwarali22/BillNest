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
export default ProductCard;