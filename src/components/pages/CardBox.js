import React from 'react';
import { Box, Image, Badge } from '@chakra-ui/react'
import StarIconList from './StarIconList';
import { useHistory  } from 'react-router-dom'
import slugify from '../../helpers/utils'


const requireImage = path => {
   
  try {
      return require (`${path}`);
  } catch (error) {
      return require (`../../images/default.jpeg`);
  }
} 

const CardBox = ({recipe}) => {

    const history = useHistory();
    const property = {
        imageUrl: "https://bit.ly/2Z4KKcF",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title: "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "$1,900.00",
        reviewCount: 34,
        rating: 4,
      }
  
    const openRecipe = (name)=>{     
      const slugifiedName = slugify(name);            
       history.push(`/recipe/${slugifiedName}`)
    }
  
    
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bg="#e0e0c4" width="350px">
        <Image src={recipe.image} alt={recipe.name}  onClick={()=>openRecipe(recipe.name)} height="261px"/>
  
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
                    New
            </Badge>
            <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
            >
              {property.beds} beds &bull; {property.baths} baths
            </Box>
          </Box>
  
          <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
          >
            {recipe.name}
          </Box>   
  
             <Box d="flex" mt="2" alignItems="center"> 
             <StarIconList 
                  disabled={true} 
                  rating={recipe.rating}/>            
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {recipe.reviewCount} reviews
            </Box>
          </Box>
        </Box>
      </Box>
    );    
} 


export default CardBox;