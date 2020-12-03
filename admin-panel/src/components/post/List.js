import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { Table } from 'antd'
import { getPosts } from '../../redux/actions/post'

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
    render: (field, record) => <Link to={`/post/${record.id}/show`}>view</Link>
  }
];

class List extends React.Component {
  componentDidMount () {
    this.props.getItems()
  }

  render () {
    return (
      <div>
        <Table dataSource={this.props.posts}
               loading={this.props.posts.length}
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
    getItems: () => dispatch(getPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)