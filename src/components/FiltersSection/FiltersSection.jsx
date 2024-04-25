import { FilterByUserSection } from '../FilterByUserSection';
import { FilterBySearchSection } from '../FilterBySearchSection';
import { FilterByCategorySection } from '../FilterByCategorySection';

export const FilterSection = ({
  userId,
  setUserId,
  query,
  setQuery,
  selectedCategory,
  setSelectedCategory,
}) => {
  const handleResetButton = () => {
    setQuery('');
    setUserId('');
    setSelectedCategory([]);
  };

  return (
    <div className="block">
      <nav className="panel">
        <p className="panel-heading">Filters</p>

        <FilterByUserSection userId={userId} setUserId={setUserId} />

        <FilterBySearchSection query={query} setQuery={setQuery} />

        <FilterByCategorySection
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

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
