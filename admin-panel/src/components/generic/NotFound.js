import {Link} from 'react-router-dom'
import { Result, Button } from 'antd';

function NotFound() {
  return <Result
    status="404"
    title="404"
    subTitle="متاسفانه این صفحه موجود نمی‌باشد."
    extra={<Link to={'/'}><Button type="primary">خانه</Button></Link>}
  />
}

export default NotFound
