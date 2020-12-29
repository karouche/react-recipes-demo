import React, { Component } from 'react';
import StarIconList from '../pages/StarIconList'
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button
  } from '@chakra-ui/react';

class CommentForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            content : '', 
            author  :'',
            email: '', 
            rating : 1 //default to 1
        }

        this.handleSubmitComment =this.handleSubmitComment.bind(this)    ;
        this.formRef = React.createRef();
        this.handleChangeContent =this.handleChange.bind(this);         
        this.starRef = React.createRef();
    }
    
    handleSubmitComment =(event)=>{
        event.preventDefault();                  
        const comment = {
                id : new Date().getTime().toString(),
                author : this.state.name, 
                email :this.state.email, 
                content : this.state.content,
                rating : this.state.rating, 
                date_creation:  this.formatDate()
            };   
            
        this.props.posterComment(comment);                       
        this.starRef.current.setState({rating : 1});
        event.target.reset();
    }

    formatDate() {
        const d = new Date();
        const time = `${d.getDate()}/${(d.getMonth()+1)}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
        return time;
      }

    handleChange = (event) => {      
        const name = event.target.name; 
        const value = event.target.value;  
        this.setState({[name] : value})
    }
          
    setRating= (rating) => {        
        this.setState({...this.state, rating});        
    }
        

    render() {
        return (
            
            <div className="comment-form">
                        <Flex width="full" align="center" justifyContent="center">
                        <Box p={2}>
                            <Box textAlign="center">
                                <Heading size="sm">Nouveau commentaire</Heading>
                            </Box>
                            <Box my={4} textAlign="left">
                            <form onSubmit={this.handleSubmitComment} ref={this.formRef}>            
                                <FormControl mt={6}>
                                <FormLabel>Name</FormLabel>
                                <Input name="name" type="text" placeholder="your name" onChange = {this.handleChange} className="input-field"/>
                                </FormControl>
                                <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input name="email" type="email" placeholder="test@test.com" onChange = {this.handleChange} className="input-field"/>
                                </FormControl>
                                
                                <FormControl mt={6}>			
                                        <FormLabel>Noter cette recette </FormLabel>
                                        <StarIconList 
                                            ref={this.starRef}
                                            spacingY="20px"                                              
                                            setRating={this.setRating} 
                                            className="star-form-panel" 
                                            rating={this.state.rating}
                                        />
                                </FormControl>
                                
                                <FormControl mt={6}>			
                                <textarea 
                                                className="styled"
                                                name="content"
                                                onChange={this.handleChange} 
                                        /> 
                                </FormControl>
                                <Button type='submit' colorScheme="teal" size="md">Poster votre commentaire</Button>                                        
                            </form>
                            </Box>
                        </Box>
                </Flex>
            </div>
        );
    }
}

export default CommentForm; 