import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css'

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleSearchChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input
    className={styles.searchBoxInput}
      type="text"
      placeholder="Search contacts"
      onChange={handleSearchChange}
    />
  );
};

export default SearchBox;
