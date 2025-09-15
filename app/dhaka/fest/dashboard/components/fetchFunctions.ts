export type SheetRow = Record<string, string>;

export async function fetchVendorData(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch vendor data");
  }
  const data = await res.json();
  // console.log(data.values);

  const [headers, ...rows] = data.values;
  const result = rows
    .map((row: SheetRow) => {
      const obj: SheetRow = {};
      headers.forEach((header: string, i: number) => {
        obj[header] = row[i];
      });

      return obj;
    })
    .filter((row: SheetRow) => row.name !== undefined);

  return result;
}
