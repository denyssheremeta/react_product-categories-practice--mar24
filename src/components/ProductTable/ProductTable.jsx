import cn from 'classnames';

import { ProductList } from '../ProductList';

export const ProductTable = ({
  visibleProducts,
  sortBy,
  setSortBy,
  reversedSort,
  setReversedSort,
}) => {
  const TABLE_COLUMN_TITLES = ['ID', 'Product', 'Category', 'User'];

  const handleSortBy = sortByValue => {
    if (sortBy !== sortByValue) {
      setSortBy(sortByValue);
      setReversedSort(false);
    } else {
      setReversedSort(!reversedSort);
      if (reversedSort) {
        setSortBy('');
      }
    }
  };

  const getSortIconClass = sortValue => {
    if (sortBy === sortValue && reversedSort) {
      return 'fa-sort-down';
    }

    if (sortBy === sortValue && !reversedSort) {
      return 'fa-sort-up';
    }

    return 'fa-sort';
  };

  return (
    <table
      data-cy="ProductTable"
      className="table is-striped is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          {TABLE_COLUMN_TITLES.map(title => (
            <th key={title}>
              <span className="is-flex is-flex-wrap-nowrap">
                {title}
                <a href="#/" onClick={() => handleSortBy(title.toLowerCase())}>
                  <span className="icon">
                    <i
                      data-cy="SortIcon"
                      className={cn(
                        'fas',
                        getSortIconClass(title.toLowerCase()),
                      )}
                    />
                  </span>
                </a>
              </span>
            </th>
          ))}
        </tr>
      </thead>

      <ProductList visibleProducts={visibleProducts} />
    </table>
  );
};
