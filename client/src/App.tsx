import "./App.css";

import { useDisclosure } from "@mantine/hooks";
import {
  AppShell,
  Burger,
  Container,
  Group,
  Skeleton,
  Text,
} from "@mantine/core";
import CriminalForm from "./pages/CriminalForm";
import Criminals from "./pages/Criminals";

export function App() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
          <Text fw={"bold"}>mostwanted</Text>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <Container>
          {/* <CriminalForm /> */}
          <Criminals />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
