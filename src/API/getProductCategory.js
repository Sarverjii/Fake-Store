async function getProductCategory(categoryid) {
    const response = await fetch(`https://fakestoreapi.in/api/products/category?type=${categoryid}`);
    const json = await response.json();
    return json.products;
}

export default getProductCategory;
