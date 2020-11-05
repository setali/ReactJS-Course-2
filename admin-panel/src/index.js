import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd'
import fa_IR from 'antd/es/locale/fa_IR'
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider direction="rtl" locale={fa_IR}>
      <App/>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

