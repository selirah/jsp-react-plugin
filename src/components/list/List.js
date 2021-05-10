import React from 'react';
import { ListLayout } from '../Style';
import { Search } from './Search';
import { Accordion } from './Accordion';

const List = () => {
  return (
    <ListLayout>
      <Search />
      <Accordion />
    </ListLayout>
  );
};

export { List };
