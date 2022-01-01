import React from 'react';
import { Button } from 'react-bootstrap';



class TopBar extends React.Component {
    constructor(props) {
        super(props);

        this.myRef = React.createRef();
    }
    

    // runs corresponding sorting algorithm from App.js


    algoCheck = () => {
        let data = [...this.props.data];
        this.props.quickSort(data, 0, data.length - 1);
    }


    render() {
        
        return(
            
            <div className = "bg-primary navbar topBar"> 
                <h3>Quick Sort Algorithm Visualizer</h3>
                <Button onClick = {this.algoCheck} type="submit" className = "btn-success myButton" id="visBtn">Visualize!</Button>
                <Button onClick = {this.props.regen} className = "btn-secondary myButton">Regenerate Array</Button>
            </div>
            
        );
        
    }

}




export default TopBar;