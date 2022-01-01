import React from 'react';
import TopBar from './components/TopBar';
import p5 from 'p5';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';


class App extends React.Component {
  // nodes stores line information, algorithm stores type of algorithm selected from dropdown 
  constructor() {
    super();

    this.state = {
      nodes : [],
      numNodes: 1600,
      algorithm : "0"
    };

    this.renderRef = React.createRef();
    this.continueSorting = true;

    // p5 sketch
    this.data = new p5(p => {    
        p.setup = () => {
            p.createCanvas(1600,560).parent(this.renderRef.current);
            
            // assign random values to nodes array for data lines
            for (let i = 0; i < this.state.numNodes; i++) {
              this.state.nodes[i] = (  (Math.floor(Math.random() * 1000) )  );
            }
              
        };
    
        p.draw = () => {
            let lineHeight;
            p.background(255);

            for (let i = 0; i < this.state.numNodes; i++) {
              lineHeight = this.state.nodes[i];
              p.stroke(0);
              p.line(i, window.screen.height, i, window.screen.height - lineHeight);
            }
        };
    });

    this.swap = this.swap.bind(this);
    this.quickSort = this.quickSort.bind(this);
  }


  // QUICK SORT //

  async quickSort(data, start, end) {

    if (start >= end) {
      return data;
    }

    let index = await this.partition(data, start, end);

    this.quickSort(data, start, index-1);
    this.quickSort(data, index + 1, end);

  }

  async partition(data, start, end) {
    let pivotIndex = start;
    let pivotValue = data[end];

    for (let i = start; i < end; i++) {
      if (data[i] < pivotValue) {
        this.swap(data, i, pivotIndex);
        pivotIndex++;
      }
    }

    await this.swap(data, pivotIndex, end);

    return pivotIndex;
  }





  // ULTILITY FUNCTIONS //

  // swaps 
  async swap(array, a, b) {
    await this.sleep(1);
    let tempVal;

    tempVal = array[a];
    array[a] = array[b];
    array[b] = tempVal;

    this.setState({
      nodes: array
    });
  }

  // pauses algoirthm in order to show visualization
  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // testing array equality
  equal(array1, array2) {
    if (array1.length !== array2.length) return false;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    } 

    console.log(array1);
    console.log(array2);
    return true;

    // create javascript sorted array
    // let data1 = this.state.nodes.slice().sort( (a, b) => a - b);
  } 



  render() {

    return (
      <React.Fragment>
        <TopBar algorithm = {this.state.algorithm} updateParentAlgo = {this.updateParentAlgo} regen = {this.data.setup} quickSort = {this.quickSort} data = {this.state.nodes}/>
        <div className = "d-flex justify-content-center" id="renderWrapper">
          <div id="renderDiv" ref={this.renderRef}></div>
        </div>
      </React.Fragment> 
    );
  }

}

export default App;
