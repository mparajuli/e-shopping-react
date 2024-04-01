// Coffee: price_1OXevEKjfUkzd7lx6H42cPTn
// Pillow: price_1OXewOKjfUkzd7lxQllqtknx
// Skincare: price_1OXexPKjfUkzd7lxDthIbn7U

const productsArray = [
  {
    id: "price_1OXevEKjfUkzd7lx6H42cPTn",
    title: "Coffee Lover's Dream",
    price: 14.99,
    description: "Perk up your day with this bean-tastic brew!",
  },
  {
    id: "price_1OXewOKjfUkzd7lxQllqtknx",
    title: "Purrfect Pillow",
    price: 19.99,
    description: "For catnaps that are the cat's meow!",
  },
  {
    id: "price_1OXexPKjfUkzd7lxDthIbn7U",
    title: "Glow Skincare Set",
    price: 79.99,
    description: "Radiance in a box! Your skin's secret weapon.",
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product id " + id + "does not exist.");
  }

  return productData;
}

export { productsArray, getProductData };
