import { useState } from "react";

const initialCategories = [
  {
    name: "Electronics",
    subcategories: [
      { name: "Mobiles", products: [] },
      { name: "Laptops", products: [] },
    ],
  },
  {
    name: "Home Appliances",
    subcategories: [{ name: "Kitchen", products: [] }],
  },
];

const ListOfProducts = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  // Get subcategories for selected category
  const subcategories =
    categories.find((cat) => cat.name === selectedCategory)?.subcategories ||
    [];

  // Handle product submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !selectedCategory ||
      !selectedSubcategory ||
      !productName ||
      !productPrice
    ) {
      alert("Please fill all fields");
      return;
    }

    const updatedCategories = categories.map((category) => {
      if (category.name === selectedCategory) {
        return {
          ...category,
          subcategories: category.subcategories.map((sub) =>
            sub.name === selectedSubcategory
              ? {
                  ...sub,
                  products: [
                    ...sub.products,
                    { name: productName, price: productPrice },
                  ],
                }
              : sub
          ),
        };
      }
      return category;
    });

    setCategories(updatedCategories);
    setProductName("");
    setProductPrice("");
  };

  return (
    <div className="product-container">
      {/* {categories.map((category) => (
        <div key={category.name}>
          <h2>{category.name}</h2>
          {category.subcategories.map((sub) => (
            <div key={sub.name}>
              <h3>{sub.name}</h3>
              <ul>
                {sub.products.map((product) => (
                  <li key={product.id}>
                    {product.name} - ${product.price}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))} */}
      <h2>Select Product</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        {/* Category Selection */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>

        {/* Subcategory Selection */}
        <select
          value={selectedSubcategory}
          onChange={(e) => setSelectedSubcategory(e.target.value)}
          disabled={!selectedCategory}
        >
          <option value="">Select Subcategory</option>
          {subcategories.map((sub) => (
            <option key={sub.name} value={sub.name}>
              {sub.name}
            </option>
          ))}
        </select>

        {/* Product Name */}

        <h2>Add Product</h2>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />

        {/* Product Price */}
        <input
          type="number"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
        />

        <button type="submit">Add Product</button>
      </form>

      <hr />

      <h2>List of Categories & Products</h2>
      {categories.map((category) => (
        <div key={category.name}>
          <h3>Category : {category.name}</h3>
          {category.subcategories.map((sub) => (
            <div key={sub.name}>
              <h4>SubCategory : {sub.name}</h4>
              <ul>
                {sub.products.length > 0 ? (
                  sub.products.map((product, index) => (
                    <li key={index}>
                      {product.name} - ${product.price}
                    </li>
                  ))
                ) : (
                  <p>No products added</p>
                )}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ListOfProducts;
