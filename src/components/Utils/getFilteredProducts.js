export const getFilteredProducts = (products, { userId = '', query = '' }) => {
  let filteredProducts = [...products];

  if (userId !== '') {
    filteredProducts = filteredProducts.filter(
      product => product.user.id === +userId,
    );
  }

  if (query !== '') {
    const normalizedQuery = query.trim().toLowerCase();

    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(normalizedQuery),
    );
  }

  return filteredProducts;
};
