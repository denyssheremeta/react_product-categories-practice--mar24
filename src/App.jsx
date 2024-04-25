import React, { useState } from 'react';

import './App.scss';

import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';

import { ProductTable } from './components/ProductTable';
import { FilterSection } from './components/FiltersSection';
import { getFilteredProducts } from './components/Utils/getFilteredProducts';

const products = productsFromServer.map(product => {
  const category = categoriesFromServer.find(
    categoryItem => categoryItem.id === product.categoryId,
  );
  const user = usersFromServer.find(
    userItem => userItem.id === category.ownerId,
  );

  return { ...product, category, user };
});

export const App = () => {
  const [userId, setUserId] = useState('');
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [reversedSort, setReversedSort] = useState(false);

  const filteredProducts = getFilteredProducts(products, {
    userId,
    query,
    selectedCategory,
    sortBy,
    reversedSort,
  });

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <FilterSection
          userId={userId}
          setUserId={setUserId}
          query={query}
          setQuery={setQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="box table-container">
          {filteredProducts.length === 0 ? (
            <p data-cy="NoMatchingMessage">
              No products matching selected criteria
            </p>
          ) : (
            <ProductTable
              visibleProducts={filteredProducts}
              sortBy={sortBy}
              setSortBy={setSortBy}
              reversedSort={reversedSort}
              setReversedSort={setReversedSort}
            />
          )}
        </div>
      </div>
    </div>
  );
};
