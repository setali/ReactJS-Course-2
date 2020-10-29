import React from 'react';
// import Counter from './1-Counter'
// import LifeCycle from './2-LifeCycle'
// import ForceUpdate from './3-ForceUpdate'
// import UnMounting from './5-UnMounting'
// import ErrorBoundaries from './6-ErrorBoundaries'
// import DefaultProps from './7-DefaultProps'
import ListKeys from './session-2/8-ListKeys'

class App extends React.Component {

  render () {
    // console.log('App render')
    return (
      <div>
        {/*<Counter initCounter={0} />*/}
        {/*<Counter initCounter={5}/>*/}
        {/*<Counter initCounter={10}/>*/}
        {/*<LifeCycle />*/}
        {/*<ForceUpdate />*/}
        {/*<UnMounting />*/}
        {/*<ErrorBoundaries />*/}
        {/*<DefaultProps />*/}
        {/*<DefaultProps name={"Javad"} color={'blue'} />*/}
        {/*<DefaultProps name={"Hasan"} color={'green'} />*/}
        <ListKeys />
      </div>
    );
  }
}

export default App;
