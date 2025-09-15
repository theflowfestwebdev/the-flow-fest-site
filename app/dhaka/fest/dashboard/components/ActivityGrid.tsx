"use client";
import "./ActivityGrid.css";
import {ReactNode, useState} from "react";

const Days: any = {
  1: "Thursday",
  2: "Friday",
  3: "Saturday",
};

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
    <div className="max-w-6xl mt-24 mx-auto">
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
      <div className="overflow-x-scroll grid gap-4 mx-auto mt-12">
        {dayIndex.map(day => (
          <div key={day} className={day === activeDay ? "block" : "hidden"}>
            <ZoneActivityGrid day={day} />
          </div>
        ))}
      </div>{" "}
    </div>
  );
}

const ZoneActivityGrid = ({day}: {day: number}) => {
  const minGridSize: number = 768;

  const Cell = ({children}: {children?: ReactNode}) => {
    return (
      <div className="border border-stone-200/10 shadow-sm flex items-center justify-center cell">
        {children}
      </div>
    );
  };

  const ActivityCard = ({
    title,
    duration,
  }: {
    title: string;
    duration: number;
  }) => {};

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
        <span className="cell text-center">Yoga Shala</span>
        <span className="cell text-center">
          Kids <br /> Playground
        </span>
        <span className="cell text-center">Art + Soul</span>
        <span className="cell text-center">Amphitheatre</span>
        <span className="cell text-center">Med Garden</span>
      </div>
      {Array.from({length: 10}, (_, i) => i + 10).map((hour, row) => (
        <div
          key={hour}
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
              <div className="text-sm font-light">
                {hour === 12 ? "12" : hour > 12 ? `${hour - 12}` : `${hour}`}
              </div>
              <div className="text-xs text-stone-500 font-light">
                {hour >= 12 ? "PM" : "AM"}
              </div>
            </div>
          </div>
          {/* Hourly activities */}
          {Array.from({length: 5}, (_, i) => i + 10).map((zone, column) => (
            <Cell key={column}>{/* {`${column}, ${row}`} */}</Cell>
          ))}
        </div>
      ))}
    </div>
  );
};
