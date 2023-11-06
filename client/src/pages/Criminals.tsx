import { Title } from "@mantine/core";

const criminals = [
  {
    id: 1,
    name: "pepito",
    nickname: "El pepo",
    image_path: "/images/elpepo",
  },
  {
    id: 2,
    name: "Elvie",
    nickname: "El viejo",
    image_path: "/images/elviejo",
  },
  {
    id: 3,
    name: "joaquin",
    nickname: "joanco",
    image_path: "/images/joanco",
  },
  {
    id: 4,
    name: "mateo",
    nickname: "viejo cachondo",
    image_path: "/images/viejocachondo",
  },
];

function Criminals() {
  return (
    <>
      <Title my={"xl"}>Criminals</Title>
      {criminals.map((criminal) => {
        return <div>{criminal.name}</div>;
      })}
    </>
  );
}

export default Criminals;
