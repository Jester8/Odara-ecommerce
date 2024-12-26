export const mockProducts = [
    {
      id: 1,
      name: "Wireless Bluetooth Earbuds",
      price: 15999,
      rating: 4.5,
      soldCount: 1234,
      image: "/api/placeholder/400/320"
    },
    {
      id: 2,
      name: "Smart Watch Series X",
      price: 45999,
      rating: 4.8,
      soldCount: 856,
      image: "/api/placeholder/400/320"
    },
    {
      id: 3,
      name: "Premium Laptop Backpack",
      price: 12999,
      rating: 4.3,
      soldCount: 2156,
      image: "/api/placeholder/400/320"
    },
    {
      id: 4,
      name: "4K Ultra HD Monitor",
      price: 159999,
      rating: 4.7,
      soldCount: 432,
      image: "/api/placeholder/400/320"
    },
    {
      id: 5,
      name: "Mechanical Gaming Keyboard",
      price: 34999,
      rating: 4.6,
      soldCount: 1567,
      image: "/api/placeholder/400/320"
    },
    {
      id: 6,
      name: "Ergonomic Office Chair",
      price: 89999,
      rating: 4.4,
      soldCount: 789,
      image: "/api/placeholder/400/320"
    },
    {
      id: 7,
      name: "Noise Cancelling Headphones",
      price: 79999,
      rating: 4.9,
      soldCount: 2341,
      image: "/api/placeholder/400/320"
    },
    {
      id: 8,
      name: "Portable Power Bank 20000mAh",
      price: 9999,
      rating: 4.2,
      soldCount: 3456,
      image: "/api/placeholder/400/320"
    },
    {
      id: 9,
      name: "Wireless Gaming Mouse",
      price: 24999,
      rating: 4.7,
      soldCount: 1234,
      image: "/api/placeholder/400/320"
    },
    {
      id: 10,
      name: "USB-C Hub Multiport Adapter",
      price: 19999,
      rating: 4.5,
      soldCount: 987,
      image: "/api/placeholder/400/320"
    }
  ];
  
  // Generate additional products programmatically
  const generateMoreProducts = (baseProducts, totalCount) => {
    const products = [...baseProducts];
    while (products.length < totalCount) {
      const baseProduct = baseProducts[Math.floor(Math.random() * baseProducts.length)];
      products.push({
        ...baseProduct,
        id: products.length + 1,
        price: Math.round(baseProduct.price * (0.8 + Math.random() * 0.4)), // Price variation ±20%
        rating: Number((3.8 + Math.random() * 1.2).toFixed(1)), // Rating between 3.8 and 5.0
        soldCount: Math.floor(Math.random() * 5000), // Random sold count up to 5000
      });
    }
    return products;
  };
  
  // Generate 50 products total
  export const products = generateMoreProducts(mockProducts, 50);
  
  export default products;