import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { Table } from 'antd'
import { setPersons } from '../../redux/actions/person'

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
  {
    title: '',
    dataIndex: 'actions',
    key: 'actions',
    render: (field, record) => <Link to={`/person/${record.id}/show`}>view</Link>
  }
];

class List extends React.Component {
  state = {
    loading: true
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.props.setItems(data))
      // .then(data => dispatch({type: 'PERSONS', payload:data}))
      .finally(() => this.setState({loading: false}))
  }

  render () {
    return (
      <div>
        <Table dataSource={this.props.persons} columns={columns} loading={this.state.loading} rowKey={r => r.id}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    persons: state.persons
  }

}

/// REQUEST  =====>     AUTHENTICATED MIDDLEWARE   =========> ACTION (return JSON)

const mapDispatchToProps = (dispatch) => {
  return {
    // setItems: (data) => dispatch({type: 'PERSONS', payload: data})
    setItems: function (data) {
      // dispatch({type: 'PERSONS', payload: data})
      dispatch(setPersons(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)