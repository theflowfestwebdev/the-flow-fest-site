const sheetId: string = "1_cu4-cl2ZKxWEgh3KfxHJ6DCedUTkSpQW3g7yIUJEzs";
const sheetName: string = "Program%20Coaches";
const apiKey = "AIzaSyCbkrRaC3NvZK9ouLqL4Kc9gcUlU3SGhtg";
const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}!A1:K40?key=${apiKey}`;

type SheetRow = Record<string, string>;

async function fetchGoogleSheet(endpoint: string): Promise<SheetRow[]> {
  const res = await fetch(endpoint);
  if (!res.ok) {
    throw new Error(`Failed to fetch sheet: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  if (!data.values || data.values.length === 0) {
    return [];
  }

  const [headers, ...rows] = data.values;

  // Map each row to an object with header keys
  const result: SheetRow[] = rows.map((row: string[]) => {
    const obj: SheetRow = {};
    headers.forEach((header: string, i: number) => {
      obj[header] = row[i] ?? ""; // Fill missing cells with empty string
    });
    // console.log(data);
    return obj;
  });
  result.forEach((row, index) => {
    if (row.id == "id" || row.coach == "") {
      result.splice(index, 1);
    } else {
      console.log(`${row.coach}`);
    }
  });

  return result;
}

fetchGoogleSheet(endpoint)
  .then(data => {
    console.log(data[0]);
  })
  .catch(err => console.error(err));
