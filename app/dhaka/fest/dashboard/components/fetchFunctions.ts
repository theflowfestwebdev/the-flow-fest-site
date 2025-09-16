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

export const Days: any = {
  1: "Thursday",
  2: "Friday",
  3: "Saturday",
};

export const Times: any = ["9", "10", "11", "12", "1", "2", "3", "4", "5:30"];

export async function fetchSessions(day: number) {
  const apiKey = "AIzaSyCbkrRaC3NvZK9ouLqL4Kc9gcUlU3SGhtg";
  const range = day == 1 ? "B1:G10" : day == 2 ? "B11:G20" : "B21:G30";

  const url = `https://sheets.googleapis.com/v4/spreadsheets/1_cu4-cl2ZKxWEgh3KfxHJ6DCedUTkSpQW3g7yIUJEzs/values/Program%20Grid!${range}?key=${apiKey}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch sessions");
  }

  const data = await res.json();
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

  type sessionRow = {
    time: string;
    sessions?: {
      name: string;
      zone: string;
      coach?: string;
    };
  };

  let schedule: any = [];

  const [headers, ...rows] = data.values;
  const [_, ...zones] = headers;
  let times: string[] = [];

  // rows.forEach((x: string[]) => {
  //   schedule[`${x[0]}`] = x
  //     .slice(1)
  //     .reduce((obj: any, sessionName: string, index: number) => {
  //       obj[`${zones[index]}`] = {name: sessionName};
  //       return obj;
  //     }, {});
  //   times.push(x[0]);
  // });

  schedule = rows.map((row: any, i: number) => {
    const result: sessionRow = row
      .slice(1)
      .map((activityName: string, j: number) => {
        const obj = {name: activityName, zone: zones[j]};
        return obj;
      });
    result.time = row[0];
    return result;
  });

  console.log(schedule);
  // console.log(times);
  return zones;
}

const apiKey = "AIzaSyCbkrRaC3NvZK9ouLqL4Kc9gcUlU3SGhtg";
const url = `https://sheets.googleapis.com/v4/spreadsheets/1_cu4-cl2ZKxWEgh3KfxHJ6DCedUTkSpQW3g7yIUJEzs/values/Vendors in zones!A17:V157?key=${apiKey}`;

fetchSessions(1).then(res => {
  // console.log(res);
});
