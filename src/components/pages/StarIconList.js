import React, { Component } from 'react';
import { StarIcon} from '@chakra-ui/icons'
class StarIconList extends Component {

    constructor(props){        
        super(props);                
        this.state = {
            rating : this.props.rating            
        }        
        console.log(this.props)
    }

    resetRate = () => {
        this.props.setRating(1);
    }
    
    onRate=(key)  => {                      
        if (!this.props.disabled) {
            const rating = key+1;        
            this.setState({rating});              
            this.props.setRating(rating);
        }        
    }

    render() {




        return (
            <div className={"star-icon-panel"+ (this.props.disabled ? "-disabled":"")}>
            {  
              Array(5).fill("")
                    .map((_, i) => (
                            <StarIcon                                 
                                 h="5"
                                 w="5"                        
                                 onClick={() => this.onRate(i)}
                                 key={i}                                 
                                 color={i < this.state.rating ? "teal.500" : "gray.300"}
                            />
                        )) 
            }
            </div>
        );
    }
}

export default StarIconList;