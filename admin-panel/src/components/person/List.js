import { useState, useEffect} from 'react'
import {Table} from 'antd'

const columns = [
  {
    title: 'شناسه',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'نام',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'آدرس',
    dataIndex: 'address',
    key: 'address',
    // render: (field, record, index) => `${field.city} ${field.street}`
    render: ({city, street}) => `${city} ${street}`
  },
];

function List() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
      .finally(() => setLoading(false))
  }, [])

  console.log(users)

  return (
    <div>
      <Table dataSource={users} columns={columns} loading={loading}/>
    </div>
  )
}

export default List