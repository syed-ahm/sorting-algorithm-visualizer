import React from 'react';
import TopBar from './components/TopBar';
import Bubble from './components/Bubble';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';


class App extends React.Component {
  // nodes stores line information, algorithm stores type of algorithm selected from dropdown 
  state = {
    nodes: [],
    algorithm : "0"
  };

  updateParent = val => {
    this.setState({
      algorithm : val
    }, () => console.log(this.state.algorithm) );
  }


  render() {
    let algoComponent;
    switch (this.state.algorithm) {
      case '1': 
        algoComponent = <Bubble />;
        break;
      // // case 2: 
      //   algoComponent = <Merge/>;
      //   break;
      // // case 3: 
      //   algoComponent = <Quick />;
      //   break;
      default: 
        algoComponent = 0;
        break;
    }

    return (
      <React.Fragment>
        <TopBar algorithm = {this.state.algorithm} updateParent = {this.updateParent}/>
        {algoComponent}
      </React.Fragment>
    );
  }

}

export default App;
