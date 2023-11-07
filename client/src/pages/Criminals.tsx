import { Avatar, Card, Group, Stack, Text, Title } from "@mantine/core";
import { useRef, useEffect, useState } from "react";
import { getCriminals } from "../services/criminals";

export interface Criminal {
  id: number;
  name: string;
  nickname: string;
  is_under_arrest: boolean;
  created_at: string;
}

function Criminals() {
  const [criminals, setCriminals] = useState<Criminal[]>([]);
  const alreadyFetched = useRef(false);

  console.log(criminals);

  useEffect(() => {
    if (alreadyFetched.current) return;

    getCriminals().then((data) => {
      if (data) {
        setCriminals(data);
      }
    });

    return () => {
      alreadyFetched.current = true;
    };
  }, []);

  return (
    <>
      <Title my={"xl"}>Criminals</Title>
      <Stack gap={"lg"}>
        {criminals.map((criminal) => (
          <CriminalsListItem key={criminal.id} criminal={criminal} />
        ))}
      </Stack>
    </>
  );
}

function CriminalsListItem({ criminal }: { criminal: Criminal }) {
  return (
    <Card component="a" href={`/criminals/${criminal.id}`} withBorder p={"sm"}>
      <Group gap={"sm"}>
        <Avatar src={null} alt="no image here" />
        <div>
          <Title order={4}>{criminal.name}</Title>
          <Text>{criminal.nickname}</Text>
        </div>
      </Group>
    </Card>
  );
}

export default Criminals;
