import React from 'react'
import { Layout } from 'antd';
import Header from './generic/Header'
import Footer from './generic/Footer'
import Sidebar from './generic/Sidebar'
// import Person from './person/List'
import Person from './person/New'
import 'antd/dist/antd.css'
import '../assets/css/general.css'

const { Header: AntHeader, Footer: AntFooter, Sider, Content } = Layout;

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <Layout>
          <AntHeader>
            <Header />
          </AntHeader>
          <Layout>
            <Sider>
              <Sidebar />
            </Sider>
            <Content style={{padding: '80px'}}>
              <Person />
            </Content>
          </Layout>
          <AntFooter>
            <Footer />
          </AntFooter>
        </Layout>
      </div>
    );
  }
}

export default App;
