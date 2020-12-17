import React from 'react';
import { Button } from 'react-bootstrap';



class TopBar extends React.Component {
    constructor(props) {
        super(props);

        this.myRef = React.createRef();
    }
    
    // // handles form submission by using updateParent() to change Parent component state
    handleChange = e => {
        e.preventDefault();
    }

    // runs corresponding sorting algorithm from App.js


    algoCheck = () => {
        let data = [...this.props.data];
        switch (this.myRef.current.value) {
            case "1":
                this.props.bubbleSort();
                break;
            case "2":
                this.props.quickSort(data, 0, data.length - 1);
                break;
            default:
                break;
        }
    }


    render() {
        
        return(
            
            <div className = "bg-primary navbar topBar"> 
                <h3>Sorting Algorithms Visualizer</h3>
                <form className = "d-flex justify-content-center" onSubmit = {this.handleChange}>
                    <select ref = {this.myRef} className = "custom-select mySelect">
                        <option value = "0">Choose an Algorithm</option>
                        <option value = "1">Bubble Sort</option>
                        <option value = "2">Quick Sort</option>
                    </select>
                    <Button onClick = {this.algoCheck} type="submit" className = "btn-success myButton" id="visBtn">Visualize!</Button>
                </form>
                <Button onClick = {this.props.stopSort} className = "btn-secondary myButton" id = "stopSortBtn">Stop Sorting</Button>
                <Button onClick = {this.props.regen} className = "btn-secondary myButton">Regenerate Array</Button>
            </div>
            
        );
        
    }

}




export default TopBar;