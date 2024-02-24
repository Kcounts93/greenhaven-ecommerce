const plantData = [
  {
    id: 1,
    name: "Snake Plant",
    description:
      "A hardy, low maintenance plant that thrives on neglect, perfect for new gardeners. Known for its air-purifying qualities.",
    price: "$10",
    category: "Air Purifying",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Spider Plant",
    description:
      "An easy-to-grow, pet-friendly plant known for its air-purifying capabilities and cascading foliage.",
    price: "$7",
    category: "Pet Friendly",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "ZZ Plant",
    description:
      "A low-light lover that's extremely drought tolerant. Its waxy, smooth leaves reflect sunlight and brighten rooms.",
    price: "$11",
    category: "Low Maintenance",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Orchid",
    description:
      "Exotic flowers that add elegance and beauty. Thrives in high humidity and indirect sunlight.",
    price: "$6",
    category: "High Humidity",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Boston Fern",
    description:
      "Lush, feathery fronds that thrive in a moist, shady environment. Perfect for bathrooms with natural light.",
    price: "$9",
    category: "High Humidity",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Monstera Deliciosa",
    description:
      "Trendy and easy to care for, this plant features distinctive split leaves. It prefers bright, indirect light and regular watering.",
    price: "$10",
    category: "Light Preferences",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Rubber Plant",
    description:
      "With its glossy, dark green leaves, the Rubber Plant is not only visually striking but also known for its air-purifying abilities.",
    price: "$8",
    category: "Air Purifying",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Philodendron Heartleaf",
    description:
      "This fast-growing vine thrives in low light and is easy to care for, making it a great addition to any room.",
    price: "$4",
    category: "Low Maintenance",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    name: "Fittonia (Nerve Plant)",
    description:
      "Known for its striking vein patterns, the Fittonia prefers moist soil and high humidity, making it perfect for terrariums.",
    price: "$3.33",
    category: "High Humidity",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    name: "Areca Palm",
    description:
      "This beautiful palm adds a tropical feel to any space and is excellent for purifying the air.",
    price: "$10.67",
    category: "Air Purifying",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 11,
    name: "Bamboo Palm",
    description:
      "Ideal for high humidity areas, the Bamboo Palm brings a peaceful and tropical vibe to your home.",
    price: "$11.33",
    category: "High Humidity",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 12,
    name: "Calathea Orbifolia",
    description:
      "With its large, round leaves beautifully striped, it thrives in high humidity and filtered light, avoiding direct sunlight.",
    price: "$9.33",
    category: "High Humidity",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 13,
    name: "Peperomia",
    description:
      "Peperomia plants come in various shapes and colors and are known for being low-maintenance and pet-friendly.",
    price: "$4.67",
    category: "Pet Friendly",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 14,
    name: "Hoya (Wax Plant)",
    description:
      "Famous for its waxy leaves and sweet-smelling flowers, Hoyas are pet-friendly and prefer bright, indirect light.",
    price: "$5.33",
    category: "Pet Friendly",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 15,
    name: "Cast Iron Plant",
    description:
      "As its name suggests, this plant is nearly indestructible, thriving on neglect and in low light conditions.",
    price: "$6.67",
    category: "Low Maintenance",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 16,
    name: "Stromanthe Triostar",
    description:
      "A stunning plant with colorful leaves in shades of pink, green, and white. Prefers high humidity and indirect light, making it a dazzling addition to any indoor space.",
    price: "$7",
    category: "High Humidity",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 17,
    name: "Bird of Paradise",
    description:
      "Known for its large, tropical leaves, this plant can bring an exotic flair to any space. Prefers bright, indirect light.",
    price: "$13",
    category: "Light Preferences",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 18,
    name: "Chinese Evergreen",
    description:
      "An easy-to-care-for plant with beautiful, patterned leaves. It thrives in low light and can help purify the air.",
    price: "$6",
    category: "Air Purifying",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 19,
    name: "Maidenhair Fern",
    description:
      "Delicate, lacy foliage that requires consistent moisture and thrives in a humid environment, away from direct sunlight.",
    price: "$8",
    category: "High Humidity",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 20,
    name: "Kentia Palm",
    description:
      "An elegant palm that prefers low light and can add a sophisticated touch to any indoor setting.",
    price: "$10",
    category: "Low Maintenance",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 21,
    name: "Sago Palm",
    description:
      "Though not a true palm, this plant is prized for its unique appearance. Requires minimal water and prefers bright, indirect light.",
    price: "$13",
    category: "Low Maintenance",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 22,
    name: "Parlor Palm",
    description:
      "A pet-friendly palm that grows well in low light conditions, perfect for adding a bit of tropical flair to any room.",
    price: "$9",
    category: "Pet Friendly",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 23,
    name: "Rattlesnake Plant",
    description:
      "Distinctive for its attractive, mottled leaves, this plant thrives in high humidity and indirect light, making it a striking addition to any collection.",
    price: "$8",
    category: "High Humidity",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 24,
    name: "Pilea Peperomioides",
    description:
      "Also known as the Chinese Money Plant, it's cherished for its unique, round leaves and easy care. Thrives in indirect light.",
    price: "$5.33",
    category: "Low Maintenance",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 25,
    name: "Swiss Cheese Plant",
    description:
      "Noted for its unique, holey leaves, this plant prefers a warm, humid environment and bright, indirect light.",
    price: "$12",
    category: "Light Preferences",
    imageUrl: "https://via.placeholder.com/150",
  },
];

export default plantData;
