import categoriesFromServer from '../../api/categories';

import { FilterByUserSection } from '../FilterByUserSection';
import { FilterBySearchSection } from '../FilterBySearchSection';

export const FilterSection = ({ userId, setUserId, query, setQuery }) => {
  const handleResetButton = () => {
    setQuery('');
    setUserId('');
  };

  return (
    <div className="block">
      <nav className="panel">
        <p className="panel-heading">Filters</p>

        <FilterByUserSection userId={userId} setUserId={setUserId} />

        <FilterBySearchSection query={query} setQuery={setQuery} />

        <div className="panel-block is-flex-wrap-wrap">
          <a
            href="#/"
            data-cy="AllCategories"
            className="button is-success mr-6 is-outlined"
          >
            All
          </a>

          <a data-cy="Category" className="button mr-2 my-1 is-info" href="#/">
            Category 1
          </a>

          {categoriesFromServer.map(category => (
            <a
              data-cy="Category"
              className="button mr-2 my-1"
              href="#/"
              key={category.id}
            >
              {category.title}
            </a>
          ))}
        </div>

        <div className="panel-block">
          <a
            data-cy="ResetAllButton"
            href="#/"
            className="button is-link is-outlined is-fullwidth"
            onClick={handleResetButton}
          >
            Reset all filters
          </a>
        </div>
      </nav>
    </div>
  );
};
