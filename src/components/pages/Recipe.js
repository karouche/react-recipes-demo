import React, { Component } from 'react';
import slugify from '../../helpers/utils'
import { Box, Image, Text, SimpleGrid, List, ListItem, ListIcon, Divider } from '@chakra-ui/react'
import { MdCheckCircle, MdSettings } from 'react-icons/md'
import StarIconList from './StarIconList';
 
import CommentBox from '../comment/CommentBox'
import { db } from '../../services/firebase';
 

class Recipe extends Component {

    constructor(props){
        super(props); 
      
        this.state = {                                                
            recipe :'', 
            loading : true, 
            key : ''
        }
        this.posterComment = this.posterComment.bind(this);           
        this.globalStarRef = React.createRef();
    }

    componentDidMount() {   
            
        db.ref('recipes').on("value", this.onChangeData);        
         
    }  
    
    
    componentWillUnmount() {  
            
         // fix Warning: Can't perform a React state update on an unmounted component
            this.setState = (state,callback)=>{
                return;
             }; 
         
    }

    onChangeData= (snapshots) => {     
            const param=this.props.match.params.name;        
            let recipe = '';
            snapshots.forEach(snap => {                                
                if (slugify(snap.val().name) === param) {
                    recipe = snap.val();                                                                                                               
                    if (recipe.comments === undefined) {
                        recipe.comments=[];
                    }                   
                    this.setState({recipe, loading : false, key : snap.key});                                    
                }
            });   
           
    }

    /* componentWillUnmount() {   
        db.ref('recipes').off("value", this.onChangeData);        
    } */

    posterComment = (content) => {       
        const recipe = this.state.recipe; 
         
        recipe.comments.push(content);                      
        const ratings = recipe.comments.map(comment => {
                    return comment.rating;  
        });

        let sum = ratings.reduce((previous, current) => current += previous);
        let avg = Math.ceil(sum/ratings.length);
        recipe.rating = avg;
        this.setState({recipe, loading : false});                 
        db.ref('recipes').child(this.state.key).update(recipe)
        .then((data) => {            
            
            this.globalStarRef.current.setState({rating : avg});
        } );
    }
  
    render() {   
        
        if (this.state.loading) {
            return <div>Loading ..</div>
        }
         
        const recipe = this.state.recipe;   
               
        
        const ingredients = recipe.ingredients.split(',');                 
        const listIngredients  = ingredients.map((ingredient, index) => {
            return  (    
                    <ListItem key={index}>         
                        <ListIcon as={MdSettings} color="green.500" />           
                           {ingredient}
                    </ListItem>    
                )
         });

         const instructions = recipe.instructions.split('.');                 
         const listInstructions  = instructions.map((instruction, index) => {
             return instruction.length > 0 ?             
                 (<ListItem key={index}>
                <ListIcon as={MdCheckCircle} color="green.500" />
                       <span>{instruction}</span>
                </ListItem>
              ):null        

          });          
        
        return (
            <div className="App-recipe-body">
                <SimpleGrid columns={2} spacing={10}>
                            <Box   borderWidth="1px" borderRadius="lg" overflow="hidden" 
                                    bg="#e0e0c4" width="500px">
                                    <Image src={recipe.image} alt={recipe.name}  
                                                 width="100%" height="100%" 
                                                 />
                                   
                            </Box>        
                    
                            <Box p="6" width="450px" borderWidth="1px" borderRadius="lg" backgroundColor="whitesmoke">
                                    <Box
                                                    mt="1"
                                                    fontWeight="semibold"
                                                    as="h4"
                                                    lineHeight="tight"                                                    
                                    >
                            <Box   textAlign="center" m="15">
                                      <StarIconList disabled={true} rating={recipe.rating} ref={this.globalStarRef} />
                            </Box>

                            <Text textAlign={[ 'left', 'center' ]} fontSize={25} >
                                    {recipe.name}
                            </Text>

                            <Box p="6" width="400px" textAlign="left">
                            <Text textAlign={[ 'left', 'left' ]} fontSize={20}  >
                            Ingredients : 
                                 
                                            <List spacing={1} width="200px" fontSize={15} margin="10px">       
                                                        {listIngredients}                                               
                                            </List>
                                
                            </Text>                               
                            </Box>

                            <Divider orientation="horizontal" colorScheme="red"/>

                            <Box margin="10px 0" p="6" width="400px" textAlign="left" fontSize={20}>
                             
                            Instructions : 
                            <Text textAlign={[ 'left', 'left' ]} fontSize={15}  >
                                
                                    <List>
                                        {listInstructions}
                                    </List>                                
                                
                            </Text>
                            </Box>
                           </Box>   
                        </Box>
                </SimpleGrid>  
                
                <div className = "box-comments">
                        <CommentBox comments = {this.state.recipe.comments} 
                                posterComment = {this.posterComment}/>
                </div>
            </div>  
        ); 
    }
}

export default Recipe;