export const FilterBySearchSection = ({ query, setQuery }) => (
  <div className="panel-block">
    <p className="control has-icons-left has-icons-right">
      <input
        data-cy="SearchField"
        type="text"
        className="input"
        placeholder="Search"
        value={query}
        onChange={event => setQuery(event.target.value.trimStart())}
      />

      <span className="icon is-left">
        <i className="fas fa-search" aria-hidden="true" />
      </span>

      {query.trim() && (
        <span className="icon is-right">
          <button
            data-cy="ClearButton"
            type="button"
            className="delete"
            onClick={() => setQuery('')}
          />
        </span>
      )}
    </p>
  </div>
);
