const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    console.log(searchValue);
  };
  return (
    <section>
      <h1 className="title">unsplash images </h1>
      <form className="search-form search-input" onSubmit={handleSubmit}>
        <input type="text" name="search" placeholder="cat" />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
