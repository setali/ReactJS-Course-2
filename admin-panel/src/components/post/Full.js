import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'antd'
import { getPost } from '../../redux/actions/post'

function Full () {
  const {id} = useParams()
  const item = useSelector(state => state.post)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPost(id))
  }, [id])

  return (
    <div>
      <Row>
        <Col span={4}>شناسه:</Col>
        <Col span={20}>{item.id}</Col>
      </Row>
      <Row>
        <Col span={4}>عنوان:</Col>
        <Col span={20}>{item.title}</Col>
      </Row>
      <Row>
        <Col span={4}>متن:</Col>
        <Col span={20}>{item.body}</Col>
      </Row>
      <Row>
        <Link to={"/post"}>
          بازگشت به لیست مقالات
        </Link>
      </Row>
    </div>
  )
}

export default Full