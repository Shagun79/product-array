import "./App.css";
import ProductList from "./component/productlist";

const products = [
  {
    name: "Apple iPhone 13",
    price: 799.0,
    description:
      "The latest iPhone model with A15 Bionic chip and Pro camera system.",
  },
  {
    name: "Samsung Galaxy S21",
    price: 799.99,
    description:
      "High-end Android phone with a stunning display and powerful features.",
  },
  {
    name: "Google Pixel 6",
    price: 699.0,
    description:
      "Google's flagship phone known for its exceptional camera capabilities.",
  },
  {
    name: "OnePlus 9 Pro",
    price: 969.0,
    description:
      "Premium Android phone with a fast-refreshing display and top-notch performance.",
  },
  {
    name: "Xiaomi Mi 11",
    price: 699.99,
    description:
      "A feature-packed smartphone from Xiaomi with a high-quality camera system.",
  },
  {
    name: "Sony Xperia 1 III",
    price: 1299.99,
    description: " Sony phone ",
  },
  {
    name: "LG Velvet",
    price: 499.0,
    description: " LG phone",
  },
  {
    name: "Huawei P40 Pro",
    price: 899.0,
    description: " Huawei phone.",
  },
  {
    name: "Motorola Edge+",
    price: 999.99,
    description: "Motorola phone ",
  },
  {
    name: "Nokia 9 ",
    price: 499.0,
    description: " Nokia phone ",
  },
];

function App() {
  return (
    <div className="App">
      <ProductList products={products} />
    </div>
  );
}

export default App;
