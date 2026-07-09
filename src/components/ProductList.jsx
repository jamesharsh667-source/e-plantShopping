import Navbar from "./Navbar";
import ProductCard from "./ProductCard";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    category: "Indoor",
    description: "A hardy indoor plant that purifies the air.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    id: 2,
    name: "Money Plant",
    price: 20,
    category: "Indoor",
    description: "Popular indoor vine believed to bring prosperity.",
    image: "https://images.unsplash.com/photo-1459156212016-c812468e2115",
  },
  {
    id: 3,
    name: "ZZ Plant",
    price: 18,
    category: "Indoor",
    description: "Low-maintenance indoor plant with glossy leaves.",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
  },
  {
    id: 4,
    name: "Monstera",
    price: 28,
    category: "Indoor",
    description: "A tropical indoor plant known for its large split leaves.",
    image: "https://images.unsplash.com/photo-1614594075920-b8e59bc868c3",
  },
  {
    id: 5,
    name: "Pothos",
    price: 14,
    category: "Indoor",
    description: "A trailing houseplant that grows well in indirect light.",
    image: "https://images.unsplash.com/photo-1600411833114-3b5347010adf",
  },
  {
    id: 6,
    name: "Fiddle Leaf Fig",
    price: 35,
    category: "Indoor",
    description: "A statement indoor plant with broad violin-shaped leaves.",
    image: "https://images.unsplash.com/photo-1597055181449-5a4a5e8b37a4",
  },
  {
    id: 7,
    name: "Peace Lily",
    price: 18,
    category: "Flowering",
    description: "Beautiful flowering plant with air-purifying qualities.",
    image: "https://images.unsplash.com/photo-1463320726281-696a485928c7",
  },
  {
    id: 8,
    name: "Rose",
    price: 25,
    category: "Flowering",
    description: "Classic flowering plant with colorful blooms.",
    image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7",
  },
  {
    id: 9,
    name: "Orchid",
    price: 30,
    category: "Flowering",
    description: "Elegant flowering plant with long-lasting flowers.",
    image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551",
  },
  {
    id: 10,
    name: "Hibiscus",
    price: 22,
    category: "Flowering",
    description: "A bright flowering plant with large tropical blooms.",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651",
  },
  {
    id: 11,
    name: "Marigold",
    price: 12,
    category: "Flowering",
    description: "A cheerful flowering plant with golden orange blossoms.",
    image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f",
  },
  {
    id: 12,
    name: "Lavender",
    price: 19,
    category: "Flowering",
    description: "A fragrant flowering plant with calming purple blooms.",
    image: "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2",
  },
  {
    id: 13,
    name: "Aloe Vera",
    price: 12,
    category: "Succulent",
    description: "Medicinal succulent requiring very little water.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
  },
  {
    id: 14,
    name: "Cactus",
    price: 10,
    category: "Succulent",
    description: "Low-maintenance desert plant perfect for beginners.",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
  },
  {
    id: 15,
    name: "Jade Plant",
    price: 16,
    category: "Succulent",
    description: "A beautiful succulent believed to bring good luck.",
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78",
  },
  {
    id: 16,
    name: "Echeveria",
    price: 11,
    category: "Succulent",
    description: "A rosette-shaped succulent with colorful compact leaves.",
    image: "https://images.unsplash.com/photo-1509423350716-97f2360afc7e",
  },
  {
    id: 17,
    name: "Burro's Tail",
    price: 17,
    category: "Succulent",
    description: "A trailing succulent with plump bead-like leaves.",
    image: "https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d",
  },
  {
    id: 18,
    name: "String of Pearls",
    price: 21,
    category: "Succulent",
    description: "A cascading succulent with round pearl-shaped leaves.",
    image: "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797",
  },
];

const categories = ["Indoor", "Flowering", "Succulent"];

function ProductList({ addToCart, cart = [] }) {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const renderCategory = (category) => {
    const categoryPlants = plants.filter((plant) => plant.category === category);

    return (
      <section key={category}>
        <h2 className="category-title">
          {category} Plants ({categoryPlants.length})
        </h2>

        <div className="product-list">
          {categoryPlants.map((plant) => (
            <ProductCard
              key={plant.id}
              plant={plant}
              addToCart={addToCart}
              isAdded={cart.some((item) => item.id === plant.id)}
            />
          ))}
        </div>
      </section>
    );
  };

  return (
    <>
      <Navbar cartCount={cartCount} />

      <div className="product-list-container">
        {categories.map(renderCategory)}
      </div>
    </>
  );
}

export default ProductList;
