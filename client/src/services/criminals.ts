interface Criminal {
  id: number;
  name: string;
  nickname: string;
  is_under_arrest: boolean;
  created_at: string;
}

export async function getCriminals(): Promise<Criminal[] | undefined> {
  try {
    const res = await fetch("http://localhost:4000/v1/criminals");
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function getCriminal(id: string): Promise<Criminal | undefined> {
  try {
    const res = await fetch(`http://localhost:4000/v1/criminals/${id}`);
    const data = await res.json();

    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function createCriminal(criminal: {
  [k: string]: FormDataEntryValue;
}) {
  try {
    const res = await fetch("http://localhost:4000/v1/criminals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(criminal),
    });

    const data = await res.json();

    console.log(data);
  } catch (e) {
    console.error(e);
  }
}
