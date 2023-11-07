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
