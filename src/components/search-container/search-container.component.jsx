import "./search-container.styles.css";

const SearchContainer = ({ onSearchHandler }) => {
  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">Search for your favorite pokemon</label>

          <input type="search" onChange={onSearchHandler} />
        </div>
      </form>
    </section>
  );
};

export default SearchContainer;
