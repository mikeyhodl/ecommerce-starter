export interface Product {
  id: number
  title: string
  price: number
  description: string
  images: string[]
  creationAt: string
  updatedAt: string
  category: Category
}

export interface Category {
  id: number
  name: string
  image: string
  creationAt: string
  updatedAt: string
}

export async function fetchData(): Promise<Product[]> {
  const response = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=8&categoryId=1");
  return response.json();
}

export async function fetchYouMightLike(): Promise<Product[]> {
  const response = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=4&categoryId=1");
  return response.json();
}

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch("https://api.escuelajs.co/api/v1/products?categoryId=2");
  return response.json();
}

export let Products: Product[];
export let MightLike: Product[]; 
export let ProductsPage: Product[]; 

async function init() {
  Products = await fetchData();
  MightLike = await fetchYouMightLike();
  ProductsPage = await fetchProducts();
}

init();