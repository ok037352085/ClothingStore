const BASE_URL = "https://fakestoreapi.com";

// 抓全部商品
export async function fetchAllProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  return res.json();
}

// 抓單一分類商品
export async function fetchProductsByCategory(category) {
  const res = await fetch(`${BASE_URL}/products/category/${category}`);
  return res.json();
}

// 抓單一商品
export async function fetchProductById(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return res.json();
}
