import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const  MatchResult= ()=> {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}
// import React, { useEffect, useState } from "react";
// import { Trophy } from "lucide-react";
// import { useLocation } from "react-router-dom";

// const MatchResult = () => {
//   const tournaments = [
//     {
//       id: 1,
//       title: "OF WEEKLY",
//       prize: 25000,
//       prizePlaces: 3,
//       color: "green",
//       winners: [
//         { name: "BLACK NINJA", amount: 75000, avatar: "/avatars/avatar1.png" },
//         { name: "FOXTIE MAX", amount: 65000, avatar: "/avatars/avatar2.png" },
//         { name: "HOLAM DOXE", amount: 55000, avatar: "/avatars/avatar3.png" },
//       ],
//     },
//     {
//       id: 2,
//       title: "LUCKY CARD",
//       prize: 50000,
//       prizePlaces: 3,
//       color: "yellow",
//       winners: [
//         { name: "BLACK NINJA", amount: 75000, avatar: "/avatars/avatar1.png" },
//         { name: "FOXTIE MAX", amount: 65000, avatar: "/avatars/avatar2.png" },
//         { name: "HOLAM DOXE", amount: 55000, avatar: "/avatars/avatar3.png" },
//       ],
//     },
//     {
//       id: 2,
//       title: "LUCKY CARD",
//       prize: 50000,
//       prizePlaces: 3,
//       color: "yellow",
//       winners: [
//         { name: "BLACK NINJA", amount: 75000, avatar: "/avatars/avatar1.png" },
//         { name: "FOXTIE MAX", amount: 65000, avatar: "/avatars/avatar2.png" },
//         { name: "HOLAM DOXE", amount: 55000, avatar: "/avatars/avatar3.png" },
//       ],
//     },
//     {
//       id: 2,
//       title: "LUCKY CARD",
//       prize: 50000,
//       prizePlaces: 3,
//       color: "green",
//       winners: [
//         { name: "BLACK NINJA", amount: 75000, avatar: "/avatars/avatar1.png" },
//         { name: "FOXTIE MAX", amount: 65000, avatar: "/avatars/avatar2.png" },
//         { name: "HOLAM DOXE", amount: 55000, avatar: "/avatars/avatar3.png" },
//       ],
//     },
//   ];
//   // const colorClasses = {
//   //   green: {
//   //     header: "bg-green-500 text-black",
//   //     amount: "text-green-400",
//   //   },
//   //   yellow: {
//   //     header: "bg-yellow-500 text-black",
//   //     amount: "text-yellow-400",
//   //   },
//   // };

//   const [tournament, setTournament] = useState();

//   useEffect(()=>{
//     try {
//       axios.get('https://gali-game.onrender.com/api/user/result?tournament_id=123456')
//     } catch (error) {
//       console.error("Internal server error", error.message)
//     }
//   }, [])
 
  // return (
//     <div className="min-h-screen bg-[#0f172a] p-8">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//         {tournaments.map((tournament) => (
//           <div
//             key={tournament.id}
//             className="bg-[#1e293b] rounded-2xl shadow-lg p-6 relative"
//           >
//             {/* Header with prize */}
//             <div
//               className={`absolute top-0 left-0 rounded-tr-lg rounded-bl-lg px-4 py-2 flex items-center gap-2 font-bold ${
//                 colorClasses[tournament.color].header
//               }`}
              
//             >
//               <Trophy className="w-5 h-5" />
//               {tournament.prize}
//             </div>

//             {/* Countdown Timer (Static placeholder) */}
//             <div className="absolute top-0 right-0 text-gray-400 text-xs px-4 py-2 text-right">
//               <div className="flex space-x-2">
//                 {["DAY", "HOUR", "MIN", "SEC"].map((label, i) => (
//                   <div key={i} className="flex flex-col items-center">
//                     <span>00</span>
//                     <span>{label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Tournament title */}
//             <div className="mt-12 text-center">
//               <h3
//                 className={`text-2xl font-extrabold ${
//                   colorClasses[tournament.color].amount
//                 }`}
//               >
//                 TOURNAMENT
//               </h3>
//               <p className="text-3xl font-extrabold text-white mt-1">
//                 {tournament.title}
//               </p>
//             </div>

//             {/* Prize places */}
//             <div className="mt-4 bg-[#0f172a] rounded-lg py-2 text-center text-white text-sm font-semibold">
//               <Trophy className="inline w-4 h-4 mr-1" />
//               {tournament.prizePlaces} PRIZE PLACES
//             </div>

//             {/* Winners list */}
//             <div className="mt-6 space-y-4">
//               {tournament.winners.map((winner, index) => (
//                 <div key={index} className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <img
//                       src={winner.avatar}
//                       alt={winner.name}
//                       className="w-10 h-10 rounded-full border border-gray-600"
//                     />
//                     <span className="text-white font-medium">
//                       {winner.name}
//                     </span>
//                   </div>
//                   <span
//                     className={`font-bold ${
//                       colorClasses[tournament.color].amount
//                     }`}
//                   >
//                     ${winner.amount.toLocaleString()}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

export default MatchResult;
