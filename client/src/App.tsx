import { AppShell, Button, Drawer, Flex, TextInput } from "@mantine/core";
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
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
    >
      <AppShell.Header>Header</AppShell.Header>
      <AppShell.Navbar>Navbar</AppShell.Navbar>
      <AppShell.Main>
        <Button onClick={toggleDesktop} visibleFrom="sm">
          Toggle navbar
        </Button>
        <Button onClick={toggleMobile} hiddenFrom="sm">
          Toggle navbar
        </Button>

        <Drawer
          opened={drawerOpened}
          onClose={close}
          title="Nueva orden"
          position="right"
        >
          <Flex direction={"column"} gap={"md"}>
            <TextInput label="test" />
            <TextInput label="test" />
            <TextInput label="test" />
            <TextInput label="test" />
            <Button mt={"md"} onClick={close}>
              Cargar
            </Button>
          </Flex>
        </Drawer>

        <Button onClick={open}>Open drawer</Button>
      </AppShell.Main>
      <AppShell.Footer>
        <h1>tasdasd</h1>
      </AppShell.Footer>
    </AppShell>
  );
}

export default App;
