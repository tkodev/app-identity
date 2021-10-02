import { FC } from 'react'
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
const ListItem: FC<ListItemProps> = (props) => {
  const { data } = props
  return (
    <Link href="/users/[id]" as={`/users/${data.id}`}>
      <a>
        {data.id}: {data.name}
      </a>
    </Link>
  )
}

const ListDetail: FC<ListDetailProps> = (props) => {
  const { item: user } = props
  return (
    <div>
      <h1>Detail for {user.name}</h1>
      <p>ID: {user.id}</p>
    </div>
  )
}

const List: FC<ListProps> = (props) => {
  const { items } = props
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ListItem data={item} />
        </li>
      ))}
    </ul>
  )
}

// export
export { List, ListDetail, ListItem }
