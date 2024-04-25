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

  const filteredProducts = getFilteredProducts(products, { userId, query });

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <FilterSection
          userId={userId}
          setUserId={setUserId}
          query={query}
          setQuery={setQuery}
        />

        <div className="box table-container">
          {filteredProducts.length === 0 ? (
            <p data-cy="NoMatchingMessage">
              No products matching selected criteria
            </p>
          ) : (
            <ProductTable visibleProducts={filteredProducts} />
          )}
        </div>
      </div>
    </div>
  );
};
