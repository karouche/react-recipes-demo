import React from 'react';
import StarIconList from '../pages/StarIconList'
import {Box} from '@chakra-ui/react'
import { Table, Tbody, Tr, Td } from "@chakra-ui/react"
import avatar from '../../images/avatar-1.jpg'
 

const Comment = (props) =>  {        
        return (
            <div className="comment">
              <Table>    
                <Tbody>
                  <Tr className="author-row">
                       <Td><h2 className="commentAuthor">
                                        {props.author}
                                </h2>
                             </Td>
                            <Td><StarIconList rating = {props.rating} 
                                    disabled = {props.key!==null}
                                    spacingY="20px"  
                                    /></Td>
                      </Tr>
               <Tr>
                   <Td w="20%">
                        <Box   borderWidth="1px" borderRadius="lg" overflow="hidden" 
                                    bg="#e0e0c4" width="100%" height="100px">                
                
                         <img name= {props.author} src={avatar} width="100%" height="100%" alt=""/>
                        </Box>
                </Td>
              <Td>
                <Box   borderWidth="1px" borderRadius="lg" overflow="hidden" 
                                        bg="#e0e0c4" width="80%">
                        
                            <span>{props.children}</span>            
                </Box>    
              </Td>
              </Tr>
              </Tbody>                
              </Table>
            </div>
          );
}

export default Comment;