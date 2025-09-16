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

type Session = {
  name?: string;
  time?: string;
  coach?: string;
  zone?: string;
};

type SessionList = {
  time?: "string";
  sessions: Session[];
};

export async function fetchSessions(day: string) {
  const apiKey = "AIzaSyCbkrRaC3NvZK9ouLqL4Kc9gcUlU3SGhtg";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/1_cu4-cl2ZKxWEgh3KfxHJ6DCedUTkSpQW3g7yIUJEzs/values/Program%20Grid!B11:G20?key=${apiKey}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch sessions");
  }
  const data = await res.json();
  const [headers, ...rows] = data.values;
  // const [_, ...zones] = headers;

  // let schedule: any = {};

  // schedule = rows.map((row: any, index: number) => {
  //   const [time, ...sessionList] = row;
  //   const result: SessionList = {sessions: []};

  //   result["time"] = time;
  //   result["sessions"] = sessionList.map(
  //     (sessionName: string, index: number) => {
  //       const obj: Session = {};
  //       obj["time"] = time;
  //       obj["name"] = sessionName;
  //       obj["zone"] = zones[index];
  //       return obj;
  //     }
  //   );

  //   return result;
  // });

  // return schedule;

  let schedule: any = {};

  const [_, ...zones] = headers;

  rows.forEach((x: string[]) => {
    schedule[`${x[0]}`] = x
      .slice(1)
      .reduce((obj: any, sessionName: string, index: number) => {
        obj[`${zones[index]}`] = {name: sessionName};

        return obj;
      }, {});
  });
  console.log(schedule);
  return schedule;
}
