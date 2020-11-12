import { Button, Form, Input } from 'antd'

export function Text({label, name, required}) {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required, message: `فیلد ${label} اجباری است!` }]}
    >
      <Input />
    </Form.Item>
  )
}

export function Submit({label}) {
  return (
    <Form.Item>
      <Button type="primary" htmlType="submit">
        {label}
      </Button>
    </Form.Item>
  )
}