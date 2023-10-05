import {
  AppShell,
  Button,
  Container,
  Drawer,
  Flex,
  Text,
  TextInput,
} from "@mantine/core";
import "./App.css";
import { useDisclosure } from "@mantine/hooks";

function App() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const [drawerOpened, { open, close }] = useDisclosure(false);

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 260,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
    >
      <AppShell.Header>
        <Container size={"md"}>
          <Text size="xl">MostWanted</Text>
        </Container>
      </AppShell.Header>
      <AppShell.Navbar>
        <div className="px-4 pt-4 flex flex-col">
          <Text size="lg" mb={12}>
            Navbar
          </Text>
          <Button onClick={toggleDesktop} visibleFrom="sm">
            Toggle navbar
          </Button>
        </div>
      </AppShell.Navbar>
      <AppShell.Main>
        <Container size={"md"}>
          <Button onClick={toggleDesktop} visibleFrom="sm">
            Toggle navbar
          </Button>
          <Button onClick={toggleMobile} hiddenFrom="sm">
            Toggle navbar
          </Button>
          <Drawer
            opened={drawerOpened}
            onClose={close}
            title="New criminal"
            position="right"
          >
            <Flex direction={"column"} gap={"md"}>
              <TextInput label="test" />
              <TextInput label="test" />
              <TextInput label="test" />
              <TextInput label="test" />
              <Button mt={"md"} color="green" onClick={close}>
                Cargar
              </Button>
            </Flex>
          </Drawer>

          <Button onClick={open}>Open drawer</Button>
        </Container>
      </AppShell.Main>
      <AppShell.Footer>
        <Container size={"size"}>
          <h1>tasdasd</h1>
        </Container>
      </AppShell.Footer>
    </AppShell>
  );
}

export default App;
