import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TournamentCard from "../components/TournamentCard";
import axios from "axios";

const Home = () => {
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://gali-game.onrender.com/api/user/tournaments")
      .then((res) => {
        setTournaments(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Data fetch nhi huaa", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">
        <div
          className="text-white pt-80"
          style={{
            backgroundImage: "url(/images/bgImg.jpg)",
            backgroundSize: "cover",
            height: "92vh",
          }}
        >
          <h1 className="text-4xl font-bold text-center ">
            Welcome to Our Website
          </h1>
          <p className="text-center mt-4">
            This is the home page where you can find the latest updates and
            information.
          </p>
          <div className="flex justify-center mt-8">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Get Started
            </button>
          </div>
        </div>

        <div className="min-h-screen bg-gray-900 text-white p-8">
          <header className="text-center my-18">
            <h1 className="text-4xl font-extrabold text-blue-500 mb-2">
              PUBG Tournaments
            </h1>
            <p className="text-lg text-gray-300">
              Check out the latest matches!
            </p>
          </header>

          {loading ? (
            <p className="text-gray-400">Loading tournaments...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {tournaments.map((tournament) => (
                <TournamentCard key={tournament._id} tournament={tournament} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

// const features = [
//   {
//     id: 1,
//     title: "Easy to Customize",
//     description:
//       "Well structured and easy to customize code. Spend less time to customize.",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="currentColor"
//       >
//         <path d="M7 3.5a1.5 1.5 0 013 0v11a1.5 1.5 0 01-3 0V3.5z" />
//         <path d="M14.5 3.5a1.5 1.5 0 013 0v6a1.5 1.5 0 01-3 0V3.5z" />
//         <path d="M3.5 19.5a1.5 1.5 0 013 0v1a1.5 1.5 0 01-3 0v-1z" />
//         <path d="M10.5 16.5a1.5 1.5 0 013 0v4a1.5 1.5 0 01-3 0v-4z" />
//         <path d="M17.5 12.5a1.5 1.5 0 013 0v8a1.5 1.5 0 01-3 0v-8z" />
//       </svg>
//     ),
//   },
//   {
//     id: 2,
//     title: "Fully Responsive",
//     description:
//       "This template is fully responsive and easily compilable with all devices.",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="currentColor"
//       >
//         <path d="M12.75 3.556v15.888a1.5 1.5 0 01-3 0V3.556a1.5 1.5 0 013 0z" />
//         <path
//           fillRule="evenodd"
//           d="M2.25 10.5a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-3 0v-3a1.5 1.5 0 011.5-1.5z"
//           clipRule="evenodd"
//         />
//         <path
//           fillRule="evenodd"
//           d="M19.5 10.5a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-3 0v-3a1.5 1.5 0 011.5-1.5z"
//           clipRule="evenodd"
//         />
//       </svg>
//     ),
//   },
//   {
//     id: 3,
//     title: "Retina Ready",
//     description:
//       "Through nuanced stakeholder relations and astute partnership building.",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="currentColor"
//       >
//         <path d="M12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
//         <path
//           fillRule="evenodd"
//           d="M16.124 1.5A9.004 9.004 0 0012 0C7.23 0 3.125 3.016.904 7.218a1.5 1.5 0 000 7.564C3.125 17.984 7.23 21 12 21c4.77 0 8.875-3.016 11.096-7.218a1.5 1.5 0 000-7.564A9.004 9.004 0 0016.124 1.5zM12 18.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
//           clipRule="evenodd"
//         />
//       </svg>
//     ),
//   },
//   {
//     id: 4,
//     title: "Dedicated Support",
//     description:
//       "Our support staff is ready to answer all your questions 7 days a week",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="currentColor"
//       >
//         <path d="M18.75 3a.75.75 0 01.75.75V7.5h.944a.75.75 0 010 1.5h-.944v6a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75V9H2.5a.75.75 0 010-1.5H3.5V3.75A.75.75 0 014.25 3h14.5z" />
//         <path d="M15.75 18a.75.75 0 00-.75.75V21h-.944a.75.75 0 000 1.5h.944v.75a.75.75 0 001.5 0v-.75h.944a.75.75 0 000-1.5h-.944v-.75a.75.75 0 00-.75-.75z" />
//         <path d="M15.75 22.5H8.25V21h7.5v1.5z" />
//       </svg>
//     ),
//   },
//   {
//     id: 5,
//     title: "Cross browser tested",
//     description:
//       "It works across different browsers as expected and degrades gracefully.",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="currentColor"
//       >
//         <path
//           fillRule="evenodd"
//           d="M11.53 19.53a.75.75 0 01-1.06 0l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 111.06 1.06L6.56 12l4.97 4.97a.75.75 0 010 1.06z"
//           clipRule="evenodd"
//         />
//         <path
//           fillRule="evenodd"
//           d="M12.47 19.53a.75.75 0 001.06 0l6-6a.75.75 0 000-1.06l-6-6a.75.75 0 10-1.06 1.06L17.44 12l-4.97 4.97a.75.75 0 000 1.06z"
//           clipRule="evenodd"
//         />
//       </svg>
//     ),
//   },
//   {
//     id: 6,
//     title: "Clean And Modern",
//     description:
//       "Through nuanced stakeholder relations and astute partnership building.",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="currentColor"
//       >
//         <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//         <path d="M22.5 12a10.5 10.5 0 11-21 0 10.5 10.5 0 0121 0z" />
//       </svg>
//     ),
//   },
// ];
{
  /* <div className="min-h-screen bg-gray-900 text-white p-8 font-sans">
          <header className="text-center mb-16 px-4">
            <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full mb-4">
              Gully Game eSports Features
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
              Why you will choose Gully Game
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We Provide Impressive Features For Your Website. You can easily
              manage Your website. You will love it.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-gray-800 p-8 rounded-lg shadow-xl text-center transform transition-transform duration-300 hover:scale-105 border border-gray-700"
              >
                <div className="flex justify-center items-center mb-4">
                  <div className="w-16 h-16 text-blue-400">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div> */
}
