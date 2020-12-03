import { Form, Input, Button } from 'antd';
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../../redux/actions/user'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function Login () {

  const dispatch = useDispatch()
  const loginSubmitLoading = useSelector(state => state.loginSubmitLoading)

  const onFinish = values => {
    console.log('Success:', values);
    dispatch(login(values))
  };

  return (
    <Form
      {...layout}
      name="basic"
      onFinish={onFinish}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" loading={loginSubmitLoading} disable={loginSubmitLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login