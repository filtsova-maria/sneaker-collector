import React, { useState } from 'react'
import Header from './Header';
import { Drawer } from 'components';
import { Empty } from './Empty';
import { Sneaker } from 'types';
import { Content } from './Content';
import { NotFound } from './NotFound';

export default function Main() {
  // TODO: replace with real data from useQuery
  const [items, setItems] = useState<Sneaker[]>([
    {
      "name": "Air Jordan",
      "brand": "Nike",
      "price": 250,
      "size": 12,
      "year": 2018
    }
  ]);
  const [query, setQuery] = useState("");
  const renderContent = (): React.ReactNode => {
    if (query.length > 0 && items.length === 0) {
      return <NotFound />
    } else if (items.length === 0) {
      return <Empty />
    } else {
      return <Content items={items} />
    }
  }
  return (
    <div>
      <Header />
      {/* TODO: add and edit form drawers */}
      {renderContent()}
      {/* if search is not empty and no items then show not found*/}
      <div>
      </div>
      <Drawer open={false}>
        1
        2
        3
      </Drawer>
    </div>
  )
}