import {useState, useEffect} from "react";
import Link from "next/link";
import {ExternalLink} from "lucide-react";

const sheetId: string = "1_cu4-cl2ZKxWEgh3KfxHJ6DCedUTkSpQW3g7yIUJEzs";
const sheetName: string = "Program%20Coaches";
const apiKey: string = "AIzaSyCbkrRaC3NvZK9ouLqL4Kc9gcUlU3SGhtg";
const coachUrl: string = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}!A1:K40?key=${apiKey}`;

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

export default function CoachesDirectory() {
  const [data, setData] = useState<SheetRow[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    fetchGoogleSheet(coachUrl)
      .then(fetchedData => {
        setData(fetchedData);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="py-16 px-8 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-extralight text-stone-800 mb-12 text-center tracking-wide leading-tight"
          style={{fontFamily: "TheSeasons-Light, serif"}}
        >
          Our Coaches
        </h2>
        {!loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {data.map((sponsor, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-8 border border-stone-200 hover:shadow-lg transition-all duration-300 rounded-lg">
                  <div className="w-20 h-20 bg-gradient-to-br from-stone-100 to-stone-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-stone-600 font-medium text-lg">
                      {sponsor.coach
                        ? sponsor.coach.split(" ")[0]
                        : "Loading info..."}
                    </span>
                  </div>
                  <h4 className="font-medium text-stone-800 mb-3 text-lg">
                    {sponsor.coach}
                  </h4>
                  <Link
                    href={
                      sponsor.insta
                        ? `https://${sponsor.insta}`
                        : sponsor.fb
                          ? `https://${sponsor.fb}`
                          : "#"
                    }
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-800 transition-colors font-light"
                  >
                    {sponsor.insta ? (
                      <>
                        View Instagram
                        <ExternalLink className="w-4 h-4" />
                      </>
                    ) : sponsor.fb ? (
                      <>
                        View Facebook
                        <ExternalLink className="w-4 h-4" />
                      </>
                    ) : (
                      "Loading info..."
                    )}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-stone-800 mx-auto"></div>
            <p className="mt-4 text-stone-600 font-light">
              Loading Sponsors...
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
