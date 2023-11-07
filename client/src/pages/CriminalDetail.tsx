import { Title, Text } from "@mantine/core";
import { Criminal } from "./Criminals";
import { useEffect, useRef, useState } from "react";
import { getCriminal } from "../services/criminals";
import { useParams } from "react-router-dom";

function CriminalDetail() {
  const [criminal, setCriminal] = useState<Criminal | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const alreadyFethed = useRef(false);

  const { id } = useParams();

  useEffect(() => {
    if (alreadyFethed.current) return;

    getCriminal(id ?? "1")
      .then(setCriminal)
      .finally(() => setLoading(false));

    return () => {
      alreadyFethed.current = true;
    };
  }, [id]);

  console.log(criminal);

  if (loading) {
    return <div> Cargando </div>;
  }

  if (!criminal) {
    return <div> Algo salio mal. No se encontro al criminal </div>;
  }

  return (
    <div>
      <Title>{criminal.name}</Title>
      <Title order={3}>{criminal.nickname}</Title>
      <Text>{criminal.is_under_arrest ? "Arrestado" : "Fugitivo"}</Text>
    </div>
  );
}

export default CriminalDetail;
