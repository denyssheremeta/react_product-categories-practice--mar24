export const getFilteredProducts = (
  products,
  {
    userId = '',
    query = '',
    selectedCategory = [],
    sortBy = '',
    reversedSort = false,
  },
) => {
  let filteredProducts = [...products];
  const normalizedQuery = query.trim().toLowerCase();

  if (userId !== '') {
    filteredProducts = filteredProducts.filter(
      product => product.user.id === +userId,
    );
  }

  if (query !== '') {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(normalizedQuery),
    );
  }

  if (selectedCategory.length !== 0) {
    filteredProducts = filteredProducts.filter(product =>
      selectedCategory.includes(product.category.id),
    );
  }

  if (sortBy !== '') {
    filteredProducts.sort((product1, product2) => {
      let result = 0;

      switch (sortBy) {
        case 'id':
          result = product1.id - product2.id;
          break;
        case 'product':
          result = product1.name.localeCompare(product2.name);
          break;
        case 'category':
          result = product1.category.title.localeCompare(
            product2.category.title,
          );
          break;
        case 'user':
          result = product1.user.name.localeCompare(product2.user.name);
          break;
        default:
          result = 0;
      }

      return reversedSort ? result * -1 : result;
    });
  }

  return filteredProducts;
};
