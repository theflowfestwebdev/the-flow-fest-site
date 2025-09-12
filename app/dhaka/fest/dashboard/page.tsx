"use client";

import {useState} from "react";
import {
  MapPin,
  Calendar,
  Clock,
  Filter,
  Grid,
  List,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Play,
  X,
} from "lucide-react";
import {Button} from "@/components/ui/button";
import StolzlThinButton from "@/components/ui/StolzlThinButton";
import ZoneScheduleCarousel from "./components/ActivityGrid";
import CoachesDirectory from "./components/CoachesDirectory";

const festivalData = {
  title: "The Flow Fest 2025",
  date: "November 6-8, 2025",
  time: "10 AM - 7 PM",
  venue: "Gulshan Society Lake Park",
  description:
    "Bangladesh's leading celebration of holistic wellness, blending movement, mindfulness, and music.",
  registrationUrl:
    "https://eventure.services/e/Flow-Fest-2025-685a6492b5679d50defb0a6f",
};

const sessions = [
  {
    id: 1,
    title: "Morning Flow Yoga",
    coach: "Sarah Johnson",
    coachBio:
      "Certified yoga instructor with 10+ years experience in vinyasa and restorative yoga.",
    coachVideo: "https://youtube.com/watch?v=example1",
    time: "10:00 AM - 11:30 AM",
    startTime: "10:00",
    endTime: "11:30",
    date: "November 6",
    day: "Thursday",
    location: "Main Stage",
    category: "Yoga",
    capacity: 50,
    registered: 35,
    description:
      "Start your day with a gentle flow sequence designed to awaken your body and mind.",
    fullDescription:
      "This morning session combines breath work, gentle stretching, and flowing movements to energize your body and calm your mind.",
  },
  {
    id: 2,
    title: "Mindful Meditation",
    coach: "David Chen",
    coachBio:
      "Meditation teacher and mindfulness coach specializing in stress reduction.",
    coachVideo: "https://youtube.com/watch?v=example2",
    time: "11:45 AM - 12:45 PM",
    startTime: "11:45",
    endTime: "12:45",
    date: "November 6",
    day: "Thursday",
    location: "Zen Garden",
    category: "Meditation",
    capacity: 30,
    registered: 28,
    description:
      "Learn practical meditation techniques for daily stress management.",
    fullDescription:
      "Discover simple yet powerful meditation techniques that you can integrate into your daily routine.",
  },
  {
    id: 3,
    title: "Sufi Mindfulness Workshop",
    coach: "Amina Rahman",
    coachBio:
      "Sufi practitioner and spiritual guide with deep roots in traditional Islamic mindfulness practices.",
    coachVideo: "https://youtube.com/watch?v=example3",
    time: "2:00 PM - 3:30 PM",
    startTime: "14:00",
    endTime: "15:30",
    date: "November 6",
    day: "Thursday",
    location: "Cultural Pavilion",
    category: "Spirituality",
    capacity: 40,
    registered: 40,
    description:
      "Explore the rich tradition of Sufi mindfulness and its applications in modern life.",
    fullDescription:
      "Dive into the ancient wisdom of Sufi practices that promote inner peace and spiritual connection.",
  },
  {
    id: 4,
    title: "Zumba Fitness",
    coach: "Maria Rodriguez",
    coachBio:
      "Certified Zumba instructor and dance fitness expert with a passion for making exercise fun and accessible.",
    coachVideo: "https://youtube.com/watch?v=example4",
    time: "4:00 PM - 5:00 PM",
    startTime: "16:00",
    endTime: "17:00",
    date: "November 6",
    day: "Thursday",
    location: "Dance Studio",
    category: "Fitness",
    capacity: 60,
    registered: 45,
    description:
      "High-energy dance fitness class combining Latin rhythms with cardio exercise.",
    fullDescription:
      "Get your heart pumping with this energetic Zumba session that combines Latin dance moves with fitness training.",
  },
  {
    id: 5,
    title: "Art Therapy for Kids",
    coach: "Lisa Thompson",
    coachBio:
      "Art therapist and child development specialist with expertise in creative expression and emotional healing.",
    coachVideo: "https://youtube.com/watch?v=example5",
    time: "10:30 AM - 11:30 AM",
    startTime: "10:30",
    endTime: "11:30",
    date: "November 7",
    day: "Friday",
    location: "Kids Zone",
    category: "Family",
    capacity: 25,
    registered: 20,
    description:
      "Creative art therapy session designed specifically for children to express emotions through art.",
    fullDescription:
      "Children will explore their creativity and emotions through various art mediums including painting, drawing, and sculpture.",
  },
  {
    id: 6,
    title: "Nutrition Workshop",
    coach: "Dr. James Wilson",
    coachBio:
      "Nutritionist and wellness coach with a focus on plant-based nutrition and sustainable eating habits.",
    coachVideo: "https://youtube.com/watch?v=example6",
    time: "1:00 PM - 2:30 PM",
    startTime: "13:00",
    endTime: "14:30",
    date: "November 7",
    day: "Friday",
    location: "Wellness Center",
    category: "Nutrition",
    capacity: 35,
    registered: 30,
    description:
      "Learn about mindful eating and sustainable nutrition practices for optimal health.",
    fullDescription:
      "Discover how to nourish your body and mind through conscious eating practices.",
  },
  {
    id: 7,
    title: "Evening Meditation",
    coach: "David Chen",
    coachBio:
      "Meditation teacher and mindfulness coach specializing in stress reduction.",
    coachVideo: "https://youtube.com/watch?v=example7",
    time: "6:00 PM - 7:00 PM",
    startTime: "18:00",
    endTime: "19:00",
    date: "November 7",
    day: "Friday",
    location: "Zen Garden",
    category: "Meditation",
    capacity: 40,
    registered: 25,
    description:
      "Wind down your day with a peaceful evening meditation session.",
    fullDescription:
      "A gentle evening practice to help you transition from the day's activities to a restful night.",
  },
  {
    id: 8,
    title: "Closing Ceremony",
    coach: "The Flow Fest Team",
    coachBio:
      "The Flow Fest organizing team brings together years of experience in wellness and community building.",
    coachVideo: "https://youtube.com/watch?v=example8",
    time: "5:00 PM - 6:30 PM",
    startTime: "18:00",
    endTime: "18:30",
    date: "November 8",
    day: "Saturday",
    location: "Main Stage",
    category: "Special Event",
    capacity: 200,
    registered: 150,
    description:
      "Join us for the grand closing ceremony celebrating our collective journey.",
    fullDescription:
      "A beautiful celebration of community, connection, and the transformative power of mindful living.",
  },
];

const vendors = [
  {
    id: 1,
    name: "Organic Wellness Co.",
    category: "Health & Nutrition",
    location: "Zone A",
    booth: "A1",
  },
  {
    id: 2,
    name: "Mindful Living",
    category: "Lifestyle",
    location: "Zone A",
    booth: "A2",
  },
  {
    id: 3,
    name: "Yoga Essentials",
    category: "Fitness",
    location: "Zone B",
    booth: "B1",
  },
  {
    id: 4,
    name: "Soulful Supplements",
    category: "Health & Nutrition",
    location: "Zone A",
    booth: "A3",
  },
  {
    id: 5,
    name: "Eco Living",
    category: "Lifestyle",
    location: "Zone C",
    booth: "C1",
  },
  {
    id: 6,
    name: "Mindful Brands",
    category: "Wellness",
    location: "Zone C",
    booth: "C2",
  },
];

const venueAreas = [
  {
    id: "main-stage",
    name: "Main Stage",
    description: "Primary venue for large group sessions and ceremonies",
    location: {x: 20, y: 30},
    sessions: [1, 8], // Session IDs that take place here
    type: "stage",
  },
  {
    id: "zen-garden",
    name: "Zen Garden",
    description: "Peaceful outdoor space for meditation and mindfulness",
    location: {x: 70, y: 20},
    sessions: [2, 7],
    type: "meditation",
  },
  {
    id: "cultural-pavilion",
    name: "Cultural Pavilion",
    description: "Traditional and cultural wellness practices",
    location: {x: 40, y: 60},
    sessions: [3],
    type: "cultural",
  },
  {
    id: "dance-studio",
    name: "Dance Studio",
    description: "Indoor space for movement and fitness classes",
    location: {x: 80, y: 70},
    sessions: [4],
    type: "fitness",
  },
  {
    id: "kids-zone",
    name: "Kids Zone",
    description: "Family-friendly activities and children's programs",
    location: {x: 30, y: 80},
    sessions: [5],
    type: "family",
  },
  {
    id: "wellness-center",
    name: "Wellness Center",
    description: "Educational workshops and wellness consultations",
    location: {x: 60, y: 40},
    sessions: [6],
    type: "workshop",
  },
];

const sponsors = [
  {name: "Wellness Partners", website: "https://wellnesspartners.com"},
  {name: "Eco Living", website: "https://ecoliving.com"},
  {name: "Mindful Brands", website: "https://mindfulbrands.com"},
];

export default function FlowFestPage() {
  const [selectedView, setSelectedView] = useState<
    "schedule" | "map" | "partners" | "coaches"
  >("schedule");
  const [scheduleView, setScheduleView] = useState<"list" | "grid">("list");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedSession, setExpandedSession] = useState<number | null>(null);
  const [showVendorDirectory, setShowVendorDirectory] = useState(false);
  const [registeredSessions, setRegisteredSessions] = useState<number[]>([]);
  const [selectedSession, setSelectedSession] = useState<any>(null);
  const [popupPosition, setPopupPosition] = useState({x: 0, y: 0});
  const [selectedArea, setSelectedArea] = useState<any>(null);
  const [mapPopupPosition, setMapPopupPosition] = useState({x: 0, y: 0});

  const categories = [
    "all",
    "yoga",
    "meditation",
    "fitness",
    "nutrition",
    "spirituality",
    "family",
  ];
  const dates = ["all", "November 6", "November 7", "November 8"];

  const filteredSessions = sessions.filter(session => {
    const categoryMatch =
      selectedCategory === "all" ||
      session.category.toLowerCase() === selectedCategory;
    return categoryMatch;
  });

  const handleSessionRegistration = (sessionId: number) => {
    if (registeredSessions.includes(sessionId)) {
      setRegisteredSessions(prev => prev.filter(id => id !== sessionId));
    } else {
      setRegisteredSessions(prev => [...prev, sessionId]);
    }
  };

  const handleSessionClick = (session: any, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const popupWidth = 400; // Approximate popup width
    const popupHeight = 500; // Approximate popup height
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let x = rect.right + 10;
    let y = rect.top;

    // Adjust horizontal position if popup would go off screen
    if (x + popupWidth > viewportWidth) {
      x = rect.left - popupWidth - 10;
    }

    // Adjust vertical position if popup would go off screen
    if (y + popupHeight > viewportHeight) {
      y = viewportHeight - popupHeight - 20;
    }

    // Ensure popup doesn't go above viewport
    if (y < 20) {
      y = 20;
    }

    // Ensure popup doesn't go left of viewport
    if (x < 20) {
      x = 20;
    }

    setPopupPosition({x, y});
    setSelectedSession(session);
  };

  const closePopup = () => {
    setSelectedSession(null);
  };

  const handleAreaClick = (area: any, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const popupWidth = 400; // Approximate popup width
    const popupHeight = 600; // Approximate popup height
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let x = rect.left + rect.width / 2;
    let y = rect.top - 10;

    // Adjust horizontal position if popup would go off screen
    if (x + popupWidth / 2 > viewportWidth) {
      x = viewportWidth - popupWidth / 2 - 20;
    }

    // Adjust vertical position if popup would go off screen
    if (y + popupHeight > viewportHeight) {
      y = viewportHeight - popupHeight - 20;
    }

    // Ensure popup doesn't go above viewport
    if (y < 20) {
      y = 20;
    }

    // Ensure popup doesn't go left of viewport
    if (x - popupWidth / 2 < 20) {
      x = popupWidth / 2 + 20;
    }

    setMapPopupPosition({x, y});
    setSelectedArea(area);
  };

  const closeMapPopup = () => {
    setSelectedArea(null);
  };

  const getAreaSessions = (areaId: string) => {
    const area = venueAreas.find(a => a.id === areaId);
    if (!area) return [];
    return sessions.filter(session => area.sessions.includes(session.id));
  };

  const isSessionFull = (session: any) =>
    session.registered >= session.capacity;
  const isRegistered = (sessionId: number) =>
    registeredSessions.includes(sessionId);

  // const CalendarDayView = () => {
  //   return (
  //     <div className="bg-white rounded-lg shadow-lg border border-stone-200 max-w-4xl mx-auto px-2 sm:px-4">
  //       <div className="min-w-[1024px] w-full overflow-x-auto">
  //         {/* Calendar Header */}
  //         <div className="grid grid-cols-4 gap-0.5 mb-0.5">
  //           <div className="h-12 bg-gradient-to-br from-stone-50 to-stone-100 border-b border-r border-stone-200"></div>
  //           <div className="h-12 bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center text-xs sm:text-sm font-medium text-stone-800 border-b border-stone-200 shadow-sm">
  //             <div className="text-center">
  //               <div className="font-light text-[10px] sm:text-xs text-stone-600">
  //                 THURSDAY
  //               </div>
  //               <div className="text-[11px] sm:text-sm">Nov 6</div>
  //             </div>
  //           </div>
  //           <div className="h-12 bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center text-xs sm:text-sm font-medium text-stone-800 border-b border-stone-200 shadow-sm">
  //             <div className="text-center">
  //               <div className="font-light text-[10px] sm:text-xs text-stone-600">
  //                 FRIDAY
  //               </div>
  //               <div className="text-[11px] sm:text-sm">Nov 7</div>
  //             </div>
  //           </div>
  //           <div className="h-12 bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center text-xs sm:text-sm font-medium text-stone-800 border-b border-stone-200 shadow-sm">
  //             <div className="text-center">
  //               <div className="font-light text-[10px] sm:text-xs text-stone-600">
  //                 SATURDAY
  //               </div>
  //               <div className="text-[11px] sm:text-sm">Nov 8</div>
  //             </div>
  //           </div>
  //         </div>

  //         {/* Time Slots */}
  //         {Array.from({length: 10}, (_, i) => i + 10).map((hour, index) => (
  //           <div key={hour} className="grid grid-cols-4 gap-0.5 mb-0.5">
  //             {/* Time Label */}
  //             <div
  //               className={`h-16 flex items-center justify-center text-[10px] sm:text-xs font-medium text-stone-700 border-r border-stone-200 ${
  //                 index % 2 === 0 ? "bg-stone-50" : "bg-white"
  //               }`}
  //             >
  //               <div className="text-center">
  //                 <div className="text-sm font-light">
  //                   {hour === 12
  //                     ? "12"
  //                     : hour > 12
  //                       ? `${hour - 12}`
  //                       : `${hour}`}
  //                 </div>
  //                 <div className="text-xs text-stone-500 font-light">
  //                   {hour >= 12 ? "PM" : "AM"}
  //                 </div>
  //               </div>
  //             </div>

  //             {/* Thursday Column */}
  //             <div
  //               className={`h-16 relative ${index % 2 === 0 ? "bg-stone-25" : "bg-white"} border-r border-stone-200`}
  //             >
  //               {filteredSessions
  //                 .filter(
  //                   session =>
  //                     session.date === "November 6" &&
  //                     parseInt(session.startTime.split(":")[0]) === hour
  //                 )
  //                 .map(session => (
  //                   <div
  //                     key={session.id}
  //                     className={`relative  q88[=] z-20 right-1 p-2 text-xs cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
  //                       isRegistered(session.id)
  //                         ? "bg-gradient-to-br from-green-50 to-green-100 border-green-300 shadow-sm"
  //                         : "bg-gradient-to-br from-stone-50 to-stone-100 border-stone-300 shadow-sm"
  //                     } border rounded-lg backdrop-blur-sm`}
  //                     style={
  //                       {
  //                         // top: `${(parseInt(session.startTime.split(":")[1]) / 60) * 100}%`,
  //                         // height: `${((parseInt(session.endTime.split(":")[0]) * 60 + parseInt(session.endTime.split(":")[1]) - (parseInt(session.startTime.split(":")[0]) * 60 + parseInt(session.startTime.split(":")[1]))) / 60) * 100}%`,
  //                       }
  //                     }
  //                     onClick={e => handleSessionClick(session, e)}
  //                   >
  //                     <div className="font-semibold text-stone-800 truncate">
  //                       {session.title}
  //                     </div>
  //                     <div className="text-stone-600 truncate text-xs">
  //                       {session.coach}
  //                     </div>
  //                     {isRegistered(session.id) && (
  //                       <div className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></div>
  //                     )}
  //                   </div>
  //                 ))}
  //             </div>

  //             {/* Friday Column */}
  //             <div
  //               className={`h-16 relative ${index % 2 === 0 ? "bg-stone-25" : "bg-white"} border-r border-stone-200`}
  //             >
  //               {filteredSessions
  //                 .filter(
  //                   session =>
  //                     session.date === "November 7" &&
  //                     parseInt(session.startTime.split(":")[0]) === hour
  //                 )
  //                 .map(session => (
  //                   <div
  //                     key={session.id}
  //                     className={`absolute left-1 right-1 p-2 text-xs cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
  //                       isRegistered(session.id)
  //                         ? "bg-gradient-to-br from-green-50 to-green-100 border-green-300 shadow-sm"
  //                         : "bg-gradient-to-br from-stone-50 to-stone-100 border-stone-300 shadow-sm"
  //                     } border rounded-lg backdrop-blur-sm`}
  //                     style={
  //                       {
  //                         // top: `${(parseInt(session.startTime.split(":")[1]) / 60) * 100}%`,
  //                         // height: `${((parseInt(session.endTime.split(":")[0]) * 60 + parseInt(session.endTime.split(":")[1]) - (parseInt(session.startTime.split(":")[0]) * 60 + parseInt(session.startTime.split(":")[1]))) / 60) * 100}%`,
  //                       }
  //                     }
  //                     onClick={e => handleSessionClick(session, e)}
  //                   >
  //                     <div className="font-semibold text-stone-800 truncate">
  //                       {session.title}
  //                     </div>
  //                     <div className="text-stone-600 truncate text-xs">
  //                       {session.coach}
  //                     </div>
  //                     {isRegistered(session.id) && (
  //                       <div className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></div>
  //                     )}
  //                   </div>
  //                 ))}
  //             </div>

  //             {/* Saturday Column */}
  //             <div
  //               className={`h-16 relative ${index % 2 === 0 ? "bg-stone-25" : "bg-white"}`}
  //             >
  //               {filteredSessions
  //                 .filter(
  //                   session =>
  //                     session.date === "November 8" &&
  //                     parseInt(session.startTime.split(":")[0]) === hour
  //                 )
  //                 .map(session => (
  //                   <div
  //                     key={session.id}
  //                     className={`absolute left-1 right-1 p-2 text-xs cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
  //                       isRegistered(session.id)
  //                         ? "bg-gradient-to-br from-green-50 to-green-100 border-green-300 shadow-sm"
  //                         : "bg-gradient-to-br from-stone-50 to-stone-100 border-stone-300 shadow-sm"
  //                     } border rounded-lg backdrop-blur-sm`}
  //                     style={
  //                       {
  //                         // top: `${(parseInt(session.startTime.split(":")[1]) / 60) * 100}%`,
  //                         // height: `${((parseInt(session.endTime.split(":")[0]) * 60 + parseInt(session.endTime.split(":")[1]) - (parseInt(session.startTime.split(":")[0]) * 60 + parseInt(session.startTime.split(":")[1]))) / 60) * 100}%`,
  //                       }
  //                     }
  //                     onClick={e => handleSessionClick(session, e)}
  //                   >
  //                     <div className="font-semibold text-stone-800 truncate">
  //                       {session.title}
  //                     </div>
  //                     <div className="text-stone-600 truncate text-xs">
  //                       {session.coach}
  //                     </div>
  //                     {isRegistered(session.id) && (
  //                       <div className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></div>
  //                     )}
  //                   </div>
  //                 ))}
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div
      className="min-h-screen bg-white"
      style={{fontFamily: "Acumin Pro Light, sans-serif"}}
    >
      {/* Hero Section */}
      <section className="relative py-32 px-8 bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className="text-5xl md:text-6xl font-extralight text-stone-800 mb-8 tracking-wide leading-tight"
            style={{fontFamily: "TheSeasons-Light, serif"}}
          >
            {festivalData.title}
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12 text-stone-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="text-lg font-light">{festivalData.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="text-lg font-light">{festivalData.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="text-lg font-light">{festivalData.venue}</span>
            </div>
          </div>
          <p className="text-lg font-light text-stone-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {festivalData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={festivalData.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <StolzlThinButton>Register for Festival</StolzlThinButton>
            </a>
            <StolzlThinButton> View Schedule</StolzlThinButton>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col sm:flex-row gap-4 py-8">
            <button
              onClick={() => setSelectedView("schedule")}
              className={`px-6 py-3 text-sm font-light tracking-[0.1em] transition-colors ${
                selectedView === "schedule"
                  ? "border-b-2 border-stone-800 text-stone-800"
                  : "text-stone-500 hover:text-stone-700"
              }`}
            >
              THE GRID
            </button>
            <button
              onClick={() => setSelectedView("map")}
              className={`px-6 py-3 text-sm font-light tracking-[0.1em] transition-colors ${
                selectedView === "map"
                  ? "border-b-2 border-stone-800 text-stone-800"
                  : "text-stone-500 hover:text-stone-700"
              }`}
            >
              THE MAP
            </button>
            <button
              onClick={() => setSelectedView("partners")}
              className={`px-6 py-3 text-sm font-light tracking-[0.1em] transition-colors ${
                selectedView === "partners"
                  ? "border-b-2 border-stone-800 text-stone-800"
                  : "text-stone-500 hover:text-stone-700"
              }`}
            >
              OUR PARTNERS
            </button>
            <button
              onClick={() => setSelectedView("coaches")}
              className={`px-6 py-3 text-sm font-light tracking-[0.1em] transition-colors ${
                selectedView === "coaches"
                  ? "border-b-2 border-stone-800 text-stone-800"
                  : "text-stone-500 hover:text-stone-700"
              }`}
            >
              OUR COACHES
            </button>
          </div>
        </div>
      </section>

      {/* Schedule View */}
      {selectedView === "schedule" && (
        <section className="py-16 px-2 md:px-8">
          <div className="max-w-7xl mx-auto" id="grid">
            <h2
              className="text-4xl md:text-5xl font-extralight text-stone-800 mb-12 tracking-wide leading-tight"
              style={{fontFamily: "TheSeasons-Light, serif"}}
            >
              The Grid
            </h2>
            {/* Filters */}
            <div className="flex flex-col lg:flex-row gap-6 mb-12">
              {/* <div className="flex flex-wrap gap-4">
                <select
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-stone-300 text-stone-700 bg-white text-sm font-light tracking-[0.1em] rounded-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === "all"
                        ? "All Categories"
                        : category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div> */}
              <div className="flex gap-2">
                <button
                  onClick={() => setScheduleView("list")}
                  className={`p-2 transition-colors ${
                    scheduleView === "list"
                      ? "bg-stone-800 text-white"
                      : "bg-stone-100 text-stone-600"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setScheduleView("grid")}
                  className={`p-2 transition-colors ${
                    scheduleView === "grid"
                      ? "bg-stone-800 text-white"
                      : "bg-stone-100 text-stone-600"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Calendar View */}
            {scheduleView === "grid" ? (
              <div className="relative">
                {/* <CalendarZoneView /> */}
                <ZoneScheduleCarousel />
                {/* Session Popup */}
                {selectedSession && (
                  <>
                    {/* Backdrop */}
                    <div
                      className="fixed inset-0 z-40 bg-black bg-opacity-20"
                      onClick={closePopup}
                    />
                    {/* Popup */}
                    <div
                      className="fixed z-50 bg-white rounded-lg shadow-2xl border border-stone-200 p-6 max-w-md max-h-[80vh] overflow-y-scroll"
                      style={{
                        left: `${popupPosition.x}px`,
                        top: `${popupPosition.y}px`,
                      }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-semibold text-stone-800">
                          {selectedSession.title}
                        </h3>
                        <button
                          onClick={closePopup}
                          className="text-stone-400 hover:text-stone-600 transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <p className="text-stone-600 mb-2">
                            with{" "}
                            <span className="font-medium">
                              {selectedSession.coach}
                            </span>
                          </p>
                          <div className="flex flex-wrap gap-2 text-sm text-stone-500 mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {selectedSession.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {selectedSession.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {selectedSession.location}
                            </span>
                          </div>
                          <span className="bg-stone-100 px-2 py-1 rounded text-xs text-stone-700">
                            {selectedSession.category}
                          </span>
                        </div>

                        <div>
                          <h4 className="font-medium text-stone-800 mb-2">
                            About {selectedSession.coach}
                          </h4>
                          <p className="text-stone-600 text-sm mb-3">
                            {selectedSession.coachBio}
                          </p>
                          {selectedSession.coachVideo && (
                            <a
                              href={selectedSession.coachVideo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-stone-700 hover:text-stone-900 transition-colors text-sm"
                            >
                              <Play className="w-4 h-4" />
                              Watch Coach Introduction
                            </a>
                          )}
                        </div>

                        <div>
                          <h4 className="font-medium text-stone-800 mb-2">
                            Session Details
                          </h4>
                          <p className="text-stone-600 text-sm mb-4">
                            {selectedSession.fullDescription}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-stone-500">
                            {selectedSession.registered}/
                            {selectedSession.capacity} registered
                          </span>
                          <div className="w-20 h-2 bg-stone-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-stone-600 transition-all duration-300"
                              style={{
                                width: `${(selectedSession.registered / selectedSession.capacity) * 100}%`,
                              }}
                            />
                          </div>
                        </div>

                        {isSessionFull(selectedSession) ? (
                          <Button
                            disabled
                            className="w-full bg-stone-300 text-stone-500 px-4 py-2 text-sm font-light tracking-[0.1em] rounded-none cursor-not-allowed"
                          >
                            Session Full
                          </Button>
                        ) : (
                          <Button
                            onClick={() => {
                              handleSessionRegistration(selectedSession.id);
                              closePopup();
                            }}
                            className={`w-full px-4 py-2 text-sm font-light tracking-[0.1em] rounded-none transition-colors ${
                              isRegistered(selectedSession.id)
                                ? "bg-green-600 hover:bg-green-700 text-white"
                                : "bg-stone-800 hover:bg-stone-900 text-white"
                            }`}
                          >
                            {isRegistered(selectedSession.id)
                              ? "Registered ✓"
                              : "Register for Session"}
                          </Button>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredSessions.map(session => (
                  <div
                    key={session.id}
                    className="border border-stone-200 p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-light text-stone-800 mb-2">
                              {session.title}
                            </h3>
                            <p className="text-stone-600 mb-2">
                              with {session.coach}
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm text-stone-500">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {session.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {session.time}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {session.location}
                              </span>
                              <span className="bg-stone-100 px-2 py-1 rounded text-xs">
                                {session.category}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-stone-500 mb-2">
                              {session.registered}/{session.capacity} registered
                            </div>
                            <div className="w-24 h-2 bg-stone-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-stone-600 transition-all duration-300"
                                style={{
                                  width: `${(session.registered / session.capacity) * 100}%`,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <p className="text-stone-600 mb-4">
                          {session.description}
                        </p>

                        {expandedSession === session.id && (
                          <div className="mt-6 p-4 bg-stone-50 border-l-4 border-stone-300">
                            <h4 className="font-medium text-stone-800 mb-2">
                              About {session.coach}
                            </h4>
                            <p className="text-stone-600 mb-3">
                              {session.coachBio}
                            </p>
                            {session.coachVideo && (
                              <a
                                href={session.coachVideo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-stone-700 hover:text-stone-900 transition-colors"
                              >
                                <Play className="w-4 h-4" />
                                Watch Coach Introduction
                              </a>
                            )}
                            <div className="mt-4">
                              <h5 className="font-medium text-stone-800 mb-2">
                                Session Details
                              </h5>
                              <p className="text-stone-600">
                                {session.fullDescription}
                              </p>
                            </div>
                            <div className="mt-4">
                              {isSessionFull(session) ? (
                                <Button
                                  disabled
                                  className="bg-stone-300 text-stone-500 px-6 py-2 text-sm font-light tracking-[0.1em] rounded-none cursor-not-allowed"
                                >
                                  Session Full
                                </Button>
                              ) : (
                                <Button
                                  onClick={() =>
                                    handleSessionRegistration(session.id)
                                  }
                                  className={`px-6 py-2 text-sm font-light tracking-[0.1em] rounded-none transition-colors ${
                                    isRegistered(session.id)
                                      ? "bg-green-600 hover:bg-green-700 text-white"
                                      : "bg-stone-800 hover:bg-stone-900 text-white"
                                  }`}
                                >
                                  {isRegistered(session.id)
                                    ? "Registered ✓"
                                    : "Register for Session"}
                                </Button>
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col gap-3 min-w-[200px]">
                        <button
                          onClick={() =>
                            setExpandedSession(
                              expandedSession === session.id ? null : session.id
                            )
                          }
                          className="text-sm text-stone-600 hover:text-stone-800 transition-colors flex items-center gap-1"
                        >
                          {expandedSession === session.id ? (
                            <>
                              <ChevronUp className="w-4 h-4" />
                              Show Less
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-4 h-4" />
                              Show More
                            </>
                          )}
                        </button>

                        {isSessionFull(session) ? (
                          <Button
                            disabled
                            className="bg-stone-300 text-stone-500 px-6 py-2 text-sm font-light tracking-[0.1em] rounded-none cursor-not-allowed"
                          >
                            Session Full
                          </Button>
                        ) : (
                          <Button
                            onClick={() =>
                              handleSessionRegistration(session.id)
                            }
                            className={`px-6 py-2 text-sm font-light tracking-[0.1em] rounded-none transition-colors ${
                              isRegistered(session.id)
                                ? "bg-green-600 hover:bg-green-700 text-white"
                                : "bg-stone-800 hover:bg-stone-900 text-white"
                            }`}
                          >
                            {isRegistered(session.id)
                              ? "Registered ✓"
                              : "Register for Session"}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Map View */}
      {selectedView === "map" && (
        <section className="py-16 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Map */}
              <div className="lg:col-span-2">
                <h2
                  className="text-4xl md:text-5xl font-extralight text-stone-800 mb-8 tracking-wide leading-tight"
                  style={{fontFamily: "TheSeasons-Light, serif"}}
                >
                  The Map
                </h2>
                <div className="relative h-[600px] bg-gradient-to-br from-stone-50 to-stone-100 border border-stone-200 rounded-lg overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, #8B7C6B 1px, transparent 1px)`,
                        backgroundSize: "50px 50px",
                      }}
                    ></div>
                  </div>

                  {/* Interactive venue areas */}
                  {venueAreas.map(area => (
                    <button
                      key={area.id}
                      onClick={e => handleAreaClick(area, e)}
                      className={`absolute w-16 h-16 rounded-full border-2 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer ${
                        area.type === "stage"
                          ? "bg-stone-200 border-stone-400 hover:bg-stone-300"
                          : area.type === "meditation"
                            ? "bg-blue-100 border-blue-400 hover:bg-blue-200"
                            : area.type === "cultural"
                              ? "bg-purple-100 border-purple-400 hover:bg-purple-200"
                              : area.type === "fitness"
                                ? "bg-green-100 border-green-400 hover:bg-green-200"
                                : area.type === "family"
                                  ? "bg-yellow-100 border-yellow-400 hover:bg-yellow-200"
                                  : "bg-orange-100 border-orange-400 hover:bg-orange-200"
                      }`}
                      style={{
                        left: `${area.location.x}%`,
                        top: `${area.location.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-xs font-medium text-stone-700">
                          {area.name.split(" ")[0]}
                        </span>
                      </div>
                    </button>
                  ))}

                  {/* Area labels */}
                  {venueAreas.map(area => (
                    <div
                      key={`label-${area.id}`}
                      className="absolute text-xs font-light text-stone-600 pointer-events-none"
                      style={{
                        left: `${area.location.x}%`,
                        top: `${area.location.y + 8}%`,
                        transform: "translateX(-50%)",
                      }}
                    >
                      {area.name}
                    </div>
                  ))}

                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-stone-200">
                    <h4 className="text-sm font-medium text-stone-800 mb-2">
                      Venue Areas
                    </h4>
                    <div className="space-y-1 text-xs text-stone-600">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-stone-200 border border-stone-400 rounded-full"></div>
                        <span>Stages & Main Events</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-100 border border-blue-400 rounded-full"></div>
                        <span>Meditation & Mindfulness</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-100 border border-green-400 rounded-full"></div>
                        <span>Fitness & Movement</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-purple-100 border border-purple-400 rounded-full"></div>
                        <span>Cultural & Workshops</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Area Popup */}
                {selectedArea && (
                  <>
                    {/* Backdrop */}
                    <div
                      className="fixed inset-0 z-40 bg-black bg-opacity-20"
                      onClick={closeMapPopup}
                    />
                    {/* Popup */}
                    <div
                      className="fixed z-50 bg-white rounded-lg shadow-2xl border border-stone-200 p-2 sm:p-6 max-w-[95vw] w-[95vw] max-h-[80vh] overflow-y-scroll sm:max-w-md sm:w-auto"
                      style={{
                        left: `${mapPopupPosition.x}px`,
                        top: `${mapPopupPosition.y}px`,
                        transform: "translateX(-60%)",
                      }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-stone-800 mb-1">
                            {selectedArea.name}
                          </h3>
                          <p className="text-sm text-stone-600">
                            {selectedArea.description}
                          </p>
                        </div>
                        <button
                          onClick={closeMapPopup}
                          className="text-stone-400 hover:text-stone-600 transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-medium text-stone-800 mb-3">
                          Scheduled Sessions
                        </h4>
                        {getAreaSessions(selectedArea.id).map(session => (
                          <div
                            key={session.id}
                            className="border border-stone-200 p-4 rounded-lg hover:shadow-sm transition-shadow"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h5 className="font-medium text-stone-800 text-sm">
                                {session.title}
                              </h5>
                              <span className="bg-stone-100 px-2 py-1 rounded text-xs text-stone-700">
                                {session.category}
                              </span>
                            </div>
                            <p className="text-xs text-stone-600 mb-2">
                              with {session.coach}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-stone-500 mb-3">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {session.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {session.time}
                              </span>
                            </div>
                            <p className="text-xs text-stone-600 mb-3">
                              {session.description}
                            </p>

                            <div className="flex items-center justify-between mb-3">
                              <span className="text-xs text-stone-500">
                                {session.registered}/{session.capacity}{" "}
                                registered
                              </span>
                              <div className="w-16 h-1.5 bg-stone-200 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-stone-600 transition-all duration-300"
                                  style={{
                                    width: `${(session.registered / session.capacity) * 100}%`,
                                  }}
                                />
                              </div>
                            </div>

                            {isSessionFull(session) ? (
                              <Button
                                disabled
                                className="w-full bg-stone-300 text-stone-500 px-3 py-1.5 text-xs font-light tracking-[0.1em] rounded-none cursor-not-allowed"
                              >
                                Session Full
                              </Button>
                            ) : (
                              <Button
                                onClick={() => {
                                  handleSessionRegistration(session.id);
                                  closeMapPopup();
                                }}
                                className={`w-full px-3 py-1.5 text-xs font-light tracking-[0.1em] rounded-none transition-colors ${
                                  isRegistered(session.id)
                                    ? "bg-green-600 hover:bg-green-700 text-white"
                                    : "bg-stone-800 hover:bg-stone-900 text-white"
                                }`}
                              >
                                {isRegistered(session.id)
                                  ? "Registered ✓"
                                  : "Register for Session"}
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/*Directory */}
              <div>
                <div className="flex items-ceter justify-between mb-6">
                  <h2
                    className="text-4xl md:text-5xl font-extralight text-stone-800 tracking-wide leading-tight"
                    style={{fontFamily: "TheSeasons-Light, serif"}}
                  >
                    Vendor Directory
                  </h2>
                  <button
                    onClick={() => setShowVendorDirectory(!showVendorDirectory)}
                    className="text-stone-600 hover:text-stone-800 transition-colors"
                  >
                    {showVendorDirectory ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {showVendorDirectory && (
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {vendors.map(vendor => (
                      <div
                        key={vendor.id}
                        className="border border-stone-200 p-4 hover:shadow-sm transition-shadow rounded-lg"
                      >
                        <h4 className="font-medium text-stone-800 mb-2">
                          {vendor.name}
                        </h4>
                        <div className="flex items-center justify-between text-xs text-stone-500">
                          <span className="bg-stone-100 px-2 py-1 rounded">
                            {vendor.category}
                          </span>
                          <span>
                            {vendor.location} - {vendor.booth}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Partners View */}
      {selectedView === "partners" && (
        <section className="py-16 px-8 bg-stone-50">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-extralight text-stone-800 mb-12 text-center tracking-wide leading-tight"
              style={{fontFamily: "TheSeasons-Light, serif"}}
            >
              Our Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {sponsors.map((sponsor, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white p-8 border border-stone-200 hover:shadow-lg transition-all duration-300 rounded-lg">
                    <div className="w-20 h-20 bg-gradient-to-br from-stone-100 to-stone-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-stone-600 font-medium text-lg">
                        {sponsor.name.split(" ")[0]}
                      </span>
                    </div>
                    <h4 className="font-medium text-stone-800 mb-3 text-lg">
                      {sponsor.name}
                    </h4>
                    <a
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-800 transition-colors font-light"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Coaches View (uses same layout/content for now) */}
      {selectedView === "coaches" && (
        <CoachesDirectory />
        // <section className="py-16 px-8 bg-stone-50">
        //   <div className="max-w-7xl mx-auto">
        //     <h2
        //       className="text-4xl md:text-5xl font-extralight text-stone-800 mb-12 text-center tracking-wide leading-tight"
        //       style={{fontFamily: "TheSeasons-Light, serif"}}
        //     >
        //       Our Coaches
        //     </h2>
        //     <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        //       {sponsors.map((sponsor, index) => (
        //         <div key={index} className="text-center">
        //           <div className="bg-white p-8 border border-stone-200 hover:shadow-lg transition-all duration-300 rounded-lg">
        //             <div className="w-20 h-20 bg-gradient-to-br from-stone-100 to-stone-200 rounded-full mx-auto mb-6 flex items-center justify-center">
        //               <span className="text-stone-600 font-medium text-lg">
        //                 {sponsor.name.split(" ")[0]}
        //               </span>
        //             </div>
        //             <h4 className="font-medium text-stone-800 mb-3 text-lg">
        //               {sponsor.name}
        //             </h4>
        //             <a
        //               href={sponsor.website}
        //               target="_blank"
        //               rel="noopener noreferrer"
        //               className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-800 transition-colors font-light"
        //             >
        //               Visit Website
        //               <ExternalLink className="w-4 h-4" />
        //             </a>
        //           </div>
        //         </div>
        //       ))}
        //     </div>
        //   </div>
        // </section>
      )}

      {/* Sponsors Section removed; content moved into tabs */}

      {/* <Footer /> */}
    </div>
  );
}
