"use client";
import "./ActivityGrid.css";
import {ReactNode, useState, useEffect} from "react";
import {fetchSessions, SessionRow} from "./fetchFunctions";

import {Days, Times, Zones} from "./fetchFunctions";
import {CheckIcon} from "lucide-react";

const times = Times;
const zones = Zones;

export default function ZoneScheduleCarousel() {
  const [activeDay, setActiveDay] = useState(1);
  const dayIndex = [1, 2, 3]; // You can expand this dynamically

  const handlePrev = () => {
    setActiveDay(prev => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setActiveDay(prev => Math.min(prev + 1, dayIndex.length));
  };

  return (
    <div className="max-w-6xl my-16 mx-auto">
      <div className="flex justify-start items-center gap-4 mb-4 max-w-6xl mx-auto">
        <button
          onClick={handlePrev}
          className="px-4 py-2 text-stone-950/50 text-3xl"
        >
          ←
        </button>
        <h3>{Days[activeDay]}</h3>
        <button
          onClick={handleNext}
          className="px-4 py-2 text-stone-950/50 text-3xl"
        >
          →
        </button>
      </div>
      <div className="overflow-x-scroll lg:overflow-x-hidden grid gap-4 mx-auto mt-12">
        <ZoneActivityGrid day={activeDay} />
      </div>{" "}
    </div>
  );
}

const ZoneActivityGrid = ({day}: {day: number}) => {
  const minGridSize: number = 768;
  const [loading, setLoading] = useState<boolean>(true);
  const [schedule, setSchedule] = useState<SessionRow[]>([]);
  // const [times, setTimes] = useState<string[]>([]);
  // const [zones, setZones] = useState<string[]>([]);

  const Cell = ({title}: {title: string}) => {
    return (
      <div className="border border-stone-200/10 shadow-sm flex items-center justify-center cell">
        {title == "" ? <></> : <ActivityCard title={title} />}
      </div>
    );
  };

  const ActivityCard = ({title}: {title: string}) => {
    const [selected, setSelected] = useState<Boolean>(false);

    return (
      <button
        onClick={() => setSelected(!selected)}
        className={`${!selected ? "bg-primary/10 hover:bg-primary/15" : "bg-green-300/20 hover:bg-green-300/25 border-green-200/30"} 
          transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:cursor-pointer 
          h-full w-full flex flex-col items-center text-center justify-center
          rounded-md border-2 shadow-md p-4 gap-2`}
      >
        <span
          className={`${selected ? "text-green-500 opacity-50 relative" : "opacity-20"} transition-all duration-300 `}
        >
          <CheckIcon size={20} />
        </span>
        <span className="opacity-80">{title}</span>
      </button>
    );
  };

  useEffect(() => {
    setLoading(false);
    fetchSessions(day).then(res => {
      setSchedule(res.schedule);

      // setZones(res.zones);
      // setTimes(res.times);

      // const times = res.times;
      // const zones = res.zones;

      console.log(times);
      setLoading(false);
    });
    return setLoading(true);
  }, [day]);

  return (
    // <div className="h-screen flex flex-col justify-center mt-48 max-w-screen overflow-scroll">
    <div className="bg-white rounded-lg shadow-lg border border-stone-200 overflow-x-visible mx-auto w-6xl overflow-y-hidden">
      <div
        id="header"
        className="grid grid-cols-6 activityheader border-separate"
        style={{minWidth: `${minGridSize}px`, borderSpacing: "2px"}}
      >
        <span className="cell text-center">
          Day {day} <br /> {Days[day]}
        </span>
        {zones.map(
          (zone: string, index: number): ReactNode => (
            <span key={index} className="cell text-center">
              {zone}
            </span>
          )
        )}
        {/* <span className="cell text-center">Yoga Shala</span>
        <span className="cell text-center">Kids Playground</span>
        <span className="cell text-center">Art + Soul</span>
        <span className="cell text-center">Amphitheatre</span>
        <span className="cell text-center">Med Garden</span> */}
      </div>
      {loading ? (
        <div className="max text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-stone-800 mx-auto"></div>
          <p className="mt-4 text-stone-600 font-light">
            Loading Activities...
          </p>
        </div>
      ) : (
        // Array.from({length: 10}, (_, i) => i + 10).map((hour, row) => (
        schedule.map((sessionRow: any, row: number) => (
          <div
            key={row}
            className="grid grid-cols-6 border-separate"
            style={{minWidth: `${minGridSize}px`, borderSpacing: "2px"}}
          >
            {/* Time Label */}
            <div
              className={`flex items-center justify-center text-[10px] sm:text-xs font-medium text-stone-700 border border-stone-200 shadow-sm ${
                row % 2 === 0 ? "bg-stone-50" : "bg-white"
              }`}
            >
              <div className="text-center">
                <div className="text-sm font-light">{sessionRow.time}</div>
                <div className="text-xs text-stone-500 font-light">
                  {sessionRow.time > 8 ? "AM" : "PM"}
                </div>
              </div>
            </div>
            {/* Hourly activities */}
            {/* {sessionRow.sessions.length > 0
              ? sessionRow.sessions.map((activity: any, column: number) => (
                  <Cell key={column}>
                    {schedule[row].sessions[column].name}
                  </Cell>
                ))
              : Array.from({length: 5}, (_: any, i: number) => i + 10).map(
                  (__: any, key: number) => <Cell key={key}></Cell>
                )} */}
            {zones.map((zone: any, column: number) => (
              <Cell
                key={column}
                title={schedule[row].sessions[column]?.name || ""}
              />
            ))}
          </div>
        ))
      )}
    </div>
  );
};
