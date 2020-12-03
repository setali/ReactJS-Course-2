import React, {useEffect} from 'react'
import { Route, Switch } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { Layout } from 'antd';
import Header from './generic/Header'
import Footer from './generic/Footer'
import Sidebar from './generic/Sidebar'
import NotFound from './generic/NotFound'
import PersonRouter from './person/Router'
import PostRouter from './post/Router'
import 'antd/dist/antd.css'
import '../assets/css/general.css'
import Dashboard from './generic/Dashboard'
import Login from './generic/Login'
import { getUser } from '../redux/actions/user'

const {Header: AntHeader, Footer: AntFooter, Sider, Content} = Layout;

function App () {

  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.isLoggedIn)

  useEffect(() => {
    dispatch(getUser())
  }, [])

  if (!isLoggedIn) {
    return <Login/>
  }

  return (
    <div className="App">
      <Layout>
        <AntHeader>
          <Header/>
        </AntHeader>
        <Layout>
          <Sider>
            <Sidebar/>
          </Sider>
          <Content style={{padding: '80px'}}>
            <Switch>
              <Route path="/" exact component={Dashboard}/>
              <Route path="/person*" component={PersonRouter}/>
              <Route path="/post*" component={PostRouter}/>
              <Route path="*" component={NotFound}/>
            </Switch>
          </Content>
        </Layout>
        <AntFooter>
          <Footer/>
        </AntFooter>
      </Layout>
    </div>
  );
}

export default App;
