import cn from 'classnames';

import categoriesFromServer from '../../api/categories';

export const FilterByCategorySection = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const isCategorySelected = categoryId =>
    selectedCategory.includes(categoryId);

  const handleSelectCategories = categoryId => {
    setSelectedCategory(current => {
      if (current.includes(categoryId)) {
        return current.filter(id => id !== categoryId);
      }

      return [...current, categoryId];
    });
  };

  return (
    <div className="panel-block is-flex-wrap-wrap">
      <a
        href="#/"
        data-cy="AllCategories"
        className={cn('button is-success mr-6', {
          'is-outlined': selectedCategory.length !== 0,
        })}
        onClick={() => setSelectedCategory([])}
      >
        All
      </a>

      {categoriesFromServer.map(category => (
        <a
          data-cy="Category"
          className={cn('button mr-2 my-1', {
            'is-info': isCategorySelected(category.id),
          })}
          href="#/"
          key={category.id}
          onClick={event => handleSelectCategories(category.id)}
        >
          {category.title}
        </a>
      ))}
    </div>
  );
};
