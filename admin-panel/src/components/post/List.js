import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { Table } from 'antd'
import axios from 'axios'
import { setPosts, getPosts } from '../../redux/actions/post'

const columns = [
  {
    title: 'شناسه',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'نام',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '',
    dataIndex: 'actions',
    key: 'actions',
    render: (field, record) => <Link to={`/person/${record.id}/show`}>view</Link>
  }
];

class List extends React.Component {
  componentDidMount () {
    this.props.getItems()
  }

  render () {
    console.log(this.props.posts)
    return (
      <div>
        <Table dataSource={this.props.posts.items}
               loading={this.props.posts.loading}
               columns={columns} rowKey={r => r.id}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setItems: data => dispatch(setPosts(data)),
    // getItems: () => getPosts(dispatch)
    getItems: () => dispatch(getPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)