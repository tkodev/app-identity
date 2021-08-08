import * as React from 'react'
import Link from 'next/link'

import { User } from '@/shared/types'

// types
type ListItemProps = {
  data: User
}

type ListDetailProps = {
  item: User
}

type ListProps = {
  items: User[]
}

// components
const ListItem = ({ data }: ListItemProps) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
)

const ListDetail = ({ item: user }: ListDetailProps) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>
)

const List = ({ items }: ListProps) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

// export
export { List, ListDetail, ListItem }
