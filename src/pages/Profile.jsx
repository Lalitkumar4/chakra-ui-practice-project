import {
  ChatIcon,
  CheckCircleIcon,
  EmailIcon,
  StarIcon,
  WarningIcon,
} from "@chakra-ui/icons"
import {
  TabList,
  TabPanels,
  Tabs,
  Tab,
  TabPanel,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react"

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="teal" variant="enclosed">
      <TabList>
        <Tab _selected={{ color: "white", bg: "teal.400" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "teal.400" }}>Task History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: johndoe@gmail.com
            </ListItem>

            <ListItem>
              <ListIcon as={ChatIcon} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              aspernatur!
            </ListItem>

            <ListItem>
              <ListIcon as={StarIcon} />
              Lorem ipsum dolor sit amet.
            </ListItem>
          </List>
        </TabPanel>

        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>

            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>

            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>

            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>

            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
