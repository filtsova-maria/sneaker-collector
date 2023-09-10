import React, { useState } from 'react'
import { Header } from './Header';
import { Button, Drawer, TextField } from 'components';
import { Empty } from './Empty';
import { Sneaker } from 'types';
import { Content } from './Content';
import { NotFound } from './NotFound';
import { MdAdd } from 'react-icons/md';

export default function Main() {
  // TODO: replace with real data from useQuery
  const [items, setItems] = useState<Sneaker[]>([
    {
      "name": "Air Jordan",
      "brand": "Nike",
      "price": 250,
      "size": 12,
      "year": 2018
    },
    {
      "name": "Air Jordan",
      "brand": "Nike",
      "price": 250,
      "size": 12,
      "year": 2018
    },
  ]);
  const [query, setQuery] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);
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
      <Header onClick={() => { setIsAddOpen(true) }} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setQuery(e.target.value) }} />
      {renderContent()}
      <Drawer open={isAddOpen} closeHandler={() => { setIsAddOpen(false) }} title='Add sneakers to your collection'>
        <form className='flex flex-col gap-6'>
          <TextField label='Name'/>
          <TextField label='Brand' />
          <TextField label='Price' />
          <TextField label='Size US' />
          <TextField label='Year' />
          <Button className='w-full' type='submit' onClick={(e) => { e.preventDefault(); setIsAddOpen(false)}} variant='primary' IconLeft={MdAdd}>Add new sneakers</Button>
        </form>
      </Drawer>
    </div>
  )
}