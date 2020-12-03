import { Route, Switch } from 'react-router-dom'
import List from './List'
import Full from './Full'

function Router() {
  return (
    <Switch>
      <Route path="/post" exact component={List}/>
      <Route path="/post/:id/show" exact component={Full}/>
    </Switch>
  )
}

export default Router
