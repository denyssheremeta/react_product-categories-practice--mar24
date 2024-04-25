import cn from 'classnames';

const isUserFemale = user => user.sex === 'f';

export const ProductList = ({ visibleProducts }) => (
  <tbody>
    {visibleProducts.map(product => {
      return (
        <tr data-cy="Product" key={product.id}>
          <td className="has-text-weight-bold" data-cy="ProductId">
            {product.id}
          </td>

          <td data-cy="ProductName">{product.name}</td>
          <td data-cy="ProductCategory">{`${product.category.icon} - ${product.category.title}`}</td>

          <td
            data-cy="ProductUser"
            className={cn('has-text-link', {
              'has-text-danger': isUserFemale(product.user),
            })}
          >
            {product.user.name}
          </td>
        </tr>
      );
    })}
  </tbody>
);
