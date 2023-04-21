import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Form, Button, Input } from './SearchBar.styled';

const SearchBar = ({ onFormSubmit }) => {
  const [query, setQuery] = useState('');

  const updateQueryString = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.warning('Please enter some data');
      return;
    }
    onFormSubmit(query);
    resetQuery();
  };

  const resetQuery = () => {
    setQuery('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Button type="submit"></Button>

      <Input
        type="text"
        value={query}
        autoComplete="off"
        autoFocus
        placeholder="Search for favorite movie"
        onChange={updateQueryString}
      />
    </Form>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,

};