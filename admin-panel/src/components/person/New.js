import {Form} from 'antd'
import {Text, Submit} from '../utils/Field'

function  New() {

  function submit(values) {
    console.log(values)
  }

  return (
    <div>
      <Form name='person' onFinish={submit}>

        <Text label="نام" name={'name'} required={true}/>
        <Text label="نام‌کاربری" name={'username'} required={true}/>
        <Submit label={'ذخیره'} />

      </Form>
    </div>
  )
}

export default New