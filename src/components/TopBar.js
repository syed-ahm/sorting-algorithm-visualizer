import React from 'react';
import { Button } from 'react-bootstrap';


class TopBar extends React.Component {
    constructor(props) {
        super(props);

        this.myRef = React.createRef();
    }
    
    // handles form submission by using updateParent() to change Parent component state
    handleChange = e => {
        let updateParent = this.props.updateParent;
        e.preventDefault();
        
        updateParent(this.myRef.current.value);
    }

    render() {
        
        return(
            
            <div className = "bg-primary navbar"> 
                <form onSubmit = {this.handleChange}>
                    <select ref = {this.myRef} className = "custom-select">
                        <option value = "0">Choose an Algorithm</option>
                        <option value = "1">Bubble Sort</option>
                        <option value = "2">Merge Sort</option>
                        <option value = "3">Quick Sort</option>
                    </select>
                    <Button type="submit" className = "btn-success">Visualize!</Button>
                </form>
            </div>
            
        );
        
    }

}




export default TopBar;