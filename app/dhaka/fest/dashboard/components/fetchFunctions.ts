export type SheetRow = Record<string, string>;

export async function fetchData(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch vendor data");
  }
  const data = await res.json();
  // console.log(data.values);

  const [headers, ...rows] = data.values;
  // console.log(headers);
  const result = rows
    .map((row: SheetRow) => {
      const obj: SheetRow = {};
      headers
        // .filter((item: string) => item !== "")
        .forEach((header: string, i: number) => {
          obj[header] = row[i];
        });

      return obj;
    })
    .filter((row: SheetRow) => row.name !== undefined);

  // console.log(result);

  return result;
}

const apiKey = "AIzaSyCbkrRaC3NvZK9ouLqL4Kc9gcUlU3SGhtg";
const url = `https://sheets.googleapis.com/v4/spreadsheets/1_cu4-cl2ZKxWEgh3KfxHJ6DCedUTkSpQW3g7yIUJEzs/values/Vendors%20in%20zones!A17:V151?key=${apiKey}`;

fetchData(url).then(res => {
  console.log(res);
});
