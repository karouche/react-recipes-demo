import React, { Component } from 'react';
import { Box, Flex, Text, Image , Link, Button} from '@chakra-ui/react'
import { Redirect, useHistory, BrowserRouter as Router } from 'react-router-dom'
import  About  from './About'

const NavLink = ({ children, ...props }) => (
    <Link px={2} color="white" {...props}>
      {children}
    </Link>
 );


const Header = () => { 
    
        
    return (
            <div className="App-header">
                   <Flex
                            bg="teal.500"
                            w="100%"
                            px={5}
                            py={4}
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Flex flexDirection="row" justifyContent="center" alignItems="center">
                            <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
                                boxSize={5}
                            />
                            <Text pl={3} color="white">
                                Company
                            </Text>
                            </Flex>
                            <Box>                                
                                    <NavLink  href="/" >Home</NavLink>                                   
                            </Box>
                        </Flex>
            </div>
        );
}

export default Header;