import {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import {ExternalLink} from "lucide-react";
import {fetchCoachData, SheetRow} from "./fetchFunctions";

const sheetId: string = "1_cu4-cl2ZKxWEgh3KfxHJ6DCedUTkSpQW3g7yIUJEzs";
const sheetName: string = "Program%20Coaches";
const apiKey: string = "AIzaSyCbkrRaC3NvZK9ouLqL4Kc9gcUlU3SGhtg";
const coachUrl: string = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}!A1:N46?key=${apiKey}`;

export default function CoachesDirectory() {
  const [data, setData] = useState<SheetRow[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    fetchCoachData(coachUrl)
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
                  <div
                    className={`border w-full h-full rounded-sm
                  bg-gradient-to-br from-stone-100 to-stone-200 
                  mx-auto mb-6 flex items-center justify-center relative aspect-[3/4]`}
                  >
                    {sponsor.image ? (
                      <Image
                        src={sponsor.image}
                        alt={`Image of ${sponsor.coach}`}
                        fill
                        className="cover aspect-square rounded-sm"
                      />
                    ) : (
                      <span className="text-stone-600 font-medium text-5xl">
                        {sponsor.coach.split(" ")[0]}
                      </span>
                    )}
                  </div>
                  <h4 className="font-medium text-stone-800 mt-8 text-2xl font-theSeasonsRegular">
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
                      "Instagram: N/A"
                    )}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-stone-800 mx-auto"></div>
            <p className="mt-4 text-stone-600 font-light">Loading Coaches...</p>
          </div>
        )}
      </div>
    </section>
  );
}
