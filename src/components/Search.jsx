const SearchBar = (props) => {
  return <input placeholder="search" onChange={props.onUpdateSearch} />;
};

const OverView = ({ currentTerm }) => {
  return <p>Searching for {currentTerm}</p>;
};

export { SearchBar, OverView };
