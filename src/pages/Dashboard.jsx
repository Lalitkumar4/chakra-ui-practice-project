import { EditIcon, ViewIcon, ChatIcon } from "@chakra-ui/icons"
import {
  Text,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  SimpleGrid,
  Flex,
  Box,
  Heading,
  HStack,
  Button,
  Divider,
  Avatar,
} from "@chakra-ui/react"
import { useLoaderData } from "react-router-dom"

export default function Dashboard() {
  const tasks = useLoaderData()

  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      {tasks &&
        tasks.map((task) => (
          <Card
            key={task.id}
            bg="white"
            borderRadius={20}
            boxShadow="lg"
            overflow="hidden"
          >
            <CardHeader>
              <Flex gap={5}>
                <Avatar src={task.img} />
                <Box>
                  <Heading as="h3" size="md">
                    {task.title}
                  </Heading>
                  <Text color="gray.500">by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>

            <CardBody color="gray.500">
              <Text>{task.description}</Text>
            </CardBody>

            <Divider borderColor="gray.200" />

            <CardFooter>
              <HStack>
                <Button variant="ghost" leftIcon={<ViewIcon />}>
                  Watch
                </Button>
                <Button variant="ghost" leftIcon={<ChatIcon />}>
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  )
}

export const tasksLoader = async () => {
  const res = await fetch("http://localhost:5000/tasks")

  return res.json()
}
