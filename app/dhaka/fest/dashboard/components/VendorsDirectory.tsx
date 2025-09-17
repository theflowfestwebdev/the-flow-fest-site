import {useState, useEffect} from "react";
import Link from "next/link";

import {ExternalLink} from "lucide-react";
import {SheetRow, fetchData} from "./fetchFunctions";

const apiKey = "AIzaSyCbkrRaC3NvZK9ouLqL4Kc9gcUlU3SGhtg";
const url = `https://sheets.googleapis.com/v4/spreadsheets/1_cu4-cl2ZKxWEgh3KfxHJ6DCedUTkSpQW3g7yIUJEzs/values/Vendors in zones!A17:V157?key=${apiKey}`;

export default function VendorsDirectory() {
  const [data, setData] = useState<SheetRow[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    fetchData(url)
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
          Our Vendors
        </h2>
        {!loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {data.map((vendor: any, index: number) => (
              <div key={index} className="text-center">
                <div className="bg-white p-8 border border-stone-200 hover:shadow-lg transition-all duration-300 rounded-lg">
                  <div className="w-20 h-20 bg-gradient-to-br from-stone-100 to-stone-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-stone-600 font-medium text-lg">
                      {vendor.name
                        ? vendor.name.split(" ")[0]
                        : "Loading info..."}
                    </span>
                  </div>
                  <h4 className="font-medium text-stone-800 mb-3 text-lg">
                    {vendor.name}
                  </h4>
                  <Link
                    href={
                      vendor.Instagram
                        ? vendor.Instagram
                        : vendor.FB
                          ? `{vendor.FB}`
                          : "#"
                    }
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-800 transition-colors font-light"
                  >
                    {vendor.Instagram ? (
                      <>
                        View Instagram
                        <ExternalLink className="w-4 h-4" />
                      </>
                    ) : vendor.FB ? (
                      <>
                        View Facebook
                        <ExternalLink className="w-4 h-4" />
                      </>
                    ) : (
                      "N/A"
                    )}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-stone-800 mx-auto"></div>
            <p className="mt-4 text-stone-600 font-light">Loading Vendors...</p>
          </div>
        )}
      </div>
    </section>
  );
}
