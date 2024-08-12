import React, { useEffect } from 'react';
import { UIInstanceProps } from "./AddSearchTypes";

interface AddSearchSearchFieldProps {
  uiInstance: UIInstanceProps;
  button?: string;
  searchAsYouType?: boolean;
}

const SearchField: React.FC<AddSearchSearchFieldProps> = (props) => {
  const id = 'addsearch-ui-' + Math.random().toString().split('.')[1];

  useEffect(() => {
    props.uiInstance.searchField({
      containerId: id,
      ...props
    });
  }, [id, props]);

  return (
    <div id={id}></div>
  );
};

export default SearchField;
