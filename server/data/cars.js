const carData = [
  {
    name: "Phantom GT",
    is_convertible: false,
    exterior: "Midnight Black",
    exterior_image:
      "https://images.unsplash.com/photo-1704932500013-5f40e128c374?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    roof: "Standard Black",
    roof_image:
      "https://images.unsplash.com/photo-1541448954141-d38884697143?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    wheels: 'Sport 20"',
    wheels_image:
      "https://images.unsplash.com/photo-1611633859589-7990d2fbb56b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    interior: "Black Leather",
    interior_image:
      "https://images.unsplash.com/photo-1629280878139-038999084e23?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 65000,
  },
  {
    name: "Viper S",
    is_convertible: false,
    exterior: "Racing Red",
    exterior_image:
      "https://plus.unsplash.com/premium_photo-1693840266003-6c7433e85aa1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    roof: "Carbon Fiber",
    roof_image:
      "https://plus.unsplash.com/premium_photo-1768237333760-377e2c36685a?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    wheels: 'Carbon 21"',
    wheels_image:
      "https://images.unsplash.com/photo-1611633859589-7990d2fbb56b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    interior: "Red Leather",
    interior_image:
      "https://images.unsplash.com/photo-1636647510477-5ec1593b8be3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 85000,
  },
  {
    name: "Arctic Storm",
    is_convertible: true,
    exterior: "Arctic White",
    exterior_image:
      "https://images.unsplash.com/photo-1623564493136-711e0bf8df59?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    roof: "Glass Panoramic",
    roof_image:
      "https://plus.unsplash.com/premium_photo-1762287623540-85d9906abf02?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    wheels: 'Chrome 20"',
    wheels_image:
      "https://images.unsplash.com/photo-1611633859589-7990d2fbb56b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    interior: "White Leather",
    interior_image:
      "https://images.unsplash.com/photo-1547731269-e4073e054f12?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 92000,
  },
  {
    name: "Stealth X",
    is_convertible: false,
    exterior: "Stealth Gray",
    exterior_image:
      "https://plus.unsplash.com/premium_photo-1737597000148-cb2dd9bdd81a?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    roof: "Carbon Fiber",
    roof_image:
      "https://plus.unsplash.com/premium_photo-1768237333760-377e2c36685a?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    wheels: 'Sport 20"',
    wheels_image:
      "https://images.unsplash.com/photo-1611633859589-7990d2fbb56b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    interior: "Black Carbon Red",
    interior_image:
      "https://images.unsplash.com/photo-1553260188-75a8d6205b6c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 78000,
  },
  {
    name: "Azure Rush",
    is_convertible: true,
    exterior: "Ocean Blue",
    exterior_image:
      "https://images.unsplash.com/photo-1764786076953-9b13cd628fde?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    roof: "Standard Black",
    roof_image:
      "https://images.unsplash.com/photo-1541448954141-d38884697143?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    wheels: 'Chrome 20"',
    wheels_image:
      "https://images.unsplash.com/photo-1611633859589-7990d2fbb56b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    interior: "Blue Carbon",
    interior_image:
      "https://images.unsplash.com/photo-1573074586277-871bb71b78a2?q=80&w=2404&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 88000,
  },
];

export default carData;
