import { UnlockIcon } from "@chakra-ui/icons"
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react"

const Navbar = () => {
  const toast = useToast()

  const showToast = () => {
    toast({
      title: "Logged out",
      description: "Successfully logged out",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "top",
      icon: <UnlockIcon />,
    })
  }

  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center">
      <Heading as="h1">Dojo Tasks</Heading>

      <Spacer />

      <HStack spacing="20px">
        <Avatar src="/img/johndoe.jpg">
          <AvatarBadge width="1.3em" bg="teal.400">
            <Text fontSize="xs" color="white">
              3
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>johndoe@gmail.com</Text>
        <Button variant="solid" colorScheme="teal" onClick={showToast}>
          Logout
        </Button>
      </HStack>
    </Flex>
  )
}

export default Navbar
