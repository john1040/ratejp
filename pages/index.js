import { Box, Button, Grid, GridItem, Flex, Text } from '@chakra-ui/react'
import Product from '../components/Product'
import { products } from '../mock'
export default function Home() {
  function test() {
    console.log('test')
  }
  return (
    <Box>
      <Flex>
        <Text>rate ur places</Text>
        rate ur places
      </Flex>
      <Flex
        direction="column"
        justifyContent="center"
        maxW={{ xl: "1800px" }}
        m="0 auto"
        minH="100vh"
      >
        <Grid
          w="full"
          gridGap="5"
          gridTemplateColumns="repeat( auto-fit, minmax(300px, 1fr) )"
          bgColor='red.100'
        >
          {products.map((p) => (
            <Product key={p.id} {...p} />
          ))}
        </Grid>
      </Flex>
    </Box>
  )
}
