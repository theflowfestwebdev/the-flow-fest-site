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

export type SessionRow = {
  time: string;
  sessions: Session[];
};

export const Days: any = {
  1: "Thursday",
  2: "Friday",
  3: "Saturday",
};

export const Times: string[] = [
  "9",
  "10",
  "11",
  "12",
  "1",
  "2",
  "3",
  "4",
  "5:30",
];
export const Zones: string[] = [
  "Yoga Shala",
  "Kids Playground",
  "Art + Soul",
  "Amphitheatre",
  "Med Garden",
];

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
    const result: SessionRow = {
      time: row[0],
      sessions: row.slice(1).map((activityName: string, j: number) => {
        const obj = {name: activityName, time: row[0], zone: zones[j]};
        return obj;
      }),
    };
    times.push(row[0]);

    return result;
  });

  // console.log(schedule);
  // console.log(times);
  return {schedule, times, zones};
}

const sheetId: string = "1_cu4-cl2ZKxWEgh3KfxHJ6DCedUTkSpQW3g7yIUJEzs";
const sheetName: string = "Program%20Coaches";
const apiKey: string = "AIzaSyCbkrRaC3NvZK9ouLqL4Kc9gcUlU3SGhtg";
const coachUrl: string = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}!A1:N46?key=${apiKey}`;

function convertDriveUrl(shareUrl: string) {
  const regex = /\/file\/d\/([^/]+)\//;
  const match = shareUrl.match(regex);

  if (!match || !match[1]) {
    throw new Error("Invalid Google Drive share URL");
  }

  const fileId = match[1];
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
}

export async function fetchCoachData(endpoint: string) {
  const res = await fetch(endpoint);
  if (!res.ok) {
    throw new Error(`Failed to fetch sheet: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  if (!data.values || data.values.length === 0) {
    return [];
  }

  const [headers, ...rows] = data.values;
  // console.log(headers);

  // Map each row to an object with header keys
  const result: SheetRow[] = rows.map((row: string[]) => {
    const obj: SheetRow = {};
    headers.forEach((header: string, i: number) => {
      if (header == "image" && row[i] != undefined) {
        obj[header] = convertDriveUrl(row[i]);
      } else {
        obj[header] = row[i] ?? ""; // Fill missing cells with empty string
      }
    });
    // console.log(data);
    return obj;
  });

  return result.filter(
    row =>
      row.id !== "id" &&
      row.coach !== "" &&
      row.confirmed?.toLowerCase() == "yes"
  );
}

fetchCoachData(coachUrl).then(res => {
  console.log(res);
});
