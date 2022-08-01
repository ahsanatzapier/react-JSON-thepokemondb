const SearchBox = ({ className, onSearchHandler, placeholder }) => (
  <div>
    <h2 className="text-white search-font">
      Search for a Pokemon:{" "}
      <input
        className={`search-box  ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onSearchHandler}
      />
    </h2>
  </div>
);
export default SearchBox;
