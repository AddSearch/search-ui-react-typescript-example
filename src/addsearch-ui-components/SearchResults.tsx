import React, { useEffect } from 'react';
import { UIInstanceProps } from "./AddSearchTypes";

interface AddSearchSearchResultsProps {
  uiInstance: UIInstanceProps;
}

const SearchResults: React.FC<AddSearchSearchResultsProps> = (props) => {
  const id = 'addsearch-ui-' + Math.random().toString().split('.')[1];

  useEffect(() => {
    props.uiInstance.searchResults({
      containerId: id,
      ...props
    });
  }, [id, props]);

  return <div id={id}></div>;
};

export default SearchResults;
