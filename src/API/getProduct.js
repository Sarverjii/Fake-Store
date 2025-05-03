async function getProduct(id) {
    const response = await fetch(`https://fakestoreapi.in/api/products/${id}`);
    const json = await response.json();
    return json.product;
}

export default getProduct;
