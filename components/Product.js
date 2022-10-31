import { Text, Image, Box, Stack, Heading } from "@chakra-ui/react";

const Product = ({ imageSrc, imageAlt, title, category, price, rating }) => (
    <Stack p={{ base: "0 2rem" }}>
        <Image objectFit="cover" src={imageSrc} alt={imageAlt} />
        <Text color="teal.600" textTransform="uppercase">
            {category}
        </Text>

        <Heading color="teal.300" size="md" textTransform="capitalize">
            {title}
        </Heading>
        <Box>
            <Box as="span" color="gray.600" fontSize="sm">
                評分:
            </Box>
            {rating}

        </Box>
    </Stack>
);

export default Product;