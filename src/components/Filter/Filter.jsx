const Filter = ({ filterText, onFilterChange }) => {
  return (
    <div>
      <input
        type="text"
        name="filter"
        value={filterText}
        onChange={onFilterChange}
        placeholder="Search..."
      />
    </div>
  );
};
export default Filter;
