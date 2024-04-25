import React, { useState } from 'react';

import './App.scss';

import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';

import { ProductTable } from './components/ProductTable';
import { FilterSection } from './components/FiltersSection';

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
  const [visibleProducts, setVisibleProducts] = useState(products);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <FilterSection
          users={usersFromServer}
          categories={categoriesFromServer}
          products={products}
          setVisibleProducts={setVisibleProducts}
          userId={userId}
          setUserId={setUserId}
        />

        <div className="box table-container">
          <p data-cy="NoMatchingMessage">
            No products matching selected criteria
          </p>
          <ProductTable products={visibleProducts} />
        </div>
      </div>
    </div>
  );
};
