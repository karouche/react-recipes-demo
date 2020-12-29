import React, { Component } from 'react';
import Comment from './Comment'

class CommentList extends Component {
  
    render() {
        
        var datas = this.props.data;          
        var commentNodes = datas.map(comment=>{
            return (
              <Comment author={comment.author} key={comment.id} rating={comment.rating}>
                        {comment.content}
              </Comment>
            );
          });

         
        return (
            <div className="commentList">
                         {commentNodes}
            </div>
        );
    }
}

export default CommentList;