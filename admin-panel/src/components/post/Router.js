import { Route, Switch } from 'react-router-dom'
import List from './List'
// import Full from './Full'
// import New from './New'

function Router() {
  return (
    <Switch>
      <Route path="/post" exact component={List}/>
      {/*<Route path="/person/:id/show" exact component={Full}/>*/}
      {/*<Route path="/person/new" exact component={New}/>*/}
    </Switch>
  )
}

export default Router
