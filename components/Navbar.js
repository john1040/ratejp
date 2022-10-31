import { Button, Flex, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";


export default function Navbar() {
    return (
        <Flex bgColor='red.100' w='100%' align='center' justify='space-between' px='6' py='5'>

            <HStack as='nav' spacing='5'>
                <Text>ratejp</Text>
                <Link href='/AddPlace'>
                    <Button>加入店家</Button>
                </Link>

                <Button>登入</Button>
            </HStack>
            {/* <Flex>
                navbar
            </Flex> */}
        </Flex>
    )
}