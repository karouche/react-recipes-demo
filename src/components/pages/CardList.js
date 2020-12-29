import React from 'react';
import { SimpleGrid } from "@chakra-ui/react";
import CardBox from './CardBox'
import { Component } from 'react';
import  { base } from '../../services/firebase'


class CardList extends Component  {
    constructor(props){
        super(props);
        this.state = {        
            recipes : [], 
            update : false         
        }
    }

    componentDidMount() {
        this.ref = base.syncState(`/recipes`, 
        {
          context: this,
          state : 'recipes',
          asArray : true       
        })
        this.setState({update : true})
        
    }
 
    render () {
 
    const recipesList = this.state.recipes.map(recipe => {
            return <CardBox recipe={recipe} key = {recipe.id}     />  
    })

    return (
            <div className="body-container">
            <SimpleGrid columns={3} spacing={10}>                        
                 {recipesList}
            </SimpleGrid>
            </div>
        );    
    }
}

export default CardList;