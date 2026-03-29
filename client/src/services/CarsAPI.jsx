const CarsAPI = {
  getAllCars: async () => {
    const response = await fetch("/custom-items");
    const data = await response.json();
    return data;
  },

  getCar: async (itemId) => {
    const response = await fetch(`/custom-items/${itemId}`);
    const data = await response.json();
    return data;
  },

  createCar: async (car) => {
    const response = await fetch("/custom-items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(car),
    });
    const data = await response.json();
    return data;
  },

  updateCar: async (itemId, car) => {
    const response = await fetch(`/custom-items/${itemId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(car),
    });
    const data = await response.json();
    return data;
  },

  deleteCar: async (itemId) => {
    const response = await fetch(`/custom-items/${itemId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  },
};

export default CarsAPI;
