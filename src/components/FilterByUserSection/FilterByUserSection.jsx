import cn from 'classnames';

import usersFromServer from '../../api/users';

export const FilterByUserSection = ({ userId, setUserId }) => (
  <p className="panel-tabs has-text-weight-bold">
    <a
      data-cy="FilterAllUsers"
      href="#/"
      onClick={() => {
        setUserId('');
      }}
      className={cn({ 'is-active': !userId })}
    >
      All
    </a>

    {usersFromServer.map(user => (
      <a
        data-cy="FilterUser"
        href="#/"
        key={user.id}
        onClick={() => {
          setUserId(user.id);
        }}
        className={cn({ 'is-active': user.id === userId })}
      >
        {user.name}
      </a>
    ))}
  </p>
);
