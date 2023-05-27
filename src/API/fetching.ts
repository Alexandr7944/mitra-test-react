export const fetching = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Ошибка загрузки");
    const json = response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}