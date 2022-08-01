const SearchBox = ({ className, onSearchHandler, placeholder }) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onSearchHandler}
  />

)
export default SearchBox