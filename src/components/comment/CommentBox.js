import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { Box, Divider } from '@chakra-ui/react';

class CommentBox extends Component  {       
 
    render () {
        return (
            <div className="commentBox">
                <h1>Commentaires </h1>
                <Divider/>
                <Box   borderWidth="1px" borderRadius="lg" overflow="hidden" 
                                    bg="#e0e0c4" width="1000px">

                        <CommentList data={this.props.comments} />
                </Box>
                <Divider/>
                <Box   borderWidth="1px" borderRadius="lg" overflow="hidden" 
                                    bg="#e0e0c4" width="1000px">
                        <CommentForm posterComment = {this.props.posterComment}/>
                </Box>                
            </div>
        );    
    }
}

export default CommentBox;