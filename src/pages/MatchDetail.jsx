// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { useLocation } from "react-router-dom";

// const MatchDetail = () => {
//   const location = useLocation();
//   const [data, setData] = useState();
//   const tournamentId = location.state?.tournament_id;
//   const [showPopup, setShowPopup] = useState(false);

//   const [formData, setFormData] = useState({
//     tournament_id: tournamentId || "",
//     game_id: "",
//     transaction_id: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const savedToken = sessionStorage.getItem("token");
//     try {
//       const res = await axios.post(
//         "https://gali-game.onrender.com/api/user/join",
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${savedToken}`,
//           },
//         }
//       );
//       console.log("Register successful", res.data);
//       // Then, fetch room credentials
//       const credRes = await axios.get(
//         `https://gali-game.onrender.com/api/user/rooms-creds/${tournamentId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${savedToken}`,
//           },
//         }
//       );
//       console.log("Room Creds Response:", credRes.data.creds);
//       setData(credRes.data.creds);

//       toast.success("Registered and fetched room details!");

//       setShowPopup(true); // Show the popup only when both succeed
//     } catch (error) {
//       console.error(
//         "Form submit nhee huyaa yaar",
//         error.response?.data || error.message
//       );
//       toast.error(
//         error.response?.data?.message || "Login karke dubara try kar!"
//       );
//     }
//   };
//   return (
//     <>
//       <Navbar />
//       <div className="flex justify-center items-center h-155">
//         <div className="bg-white p-6 rounded-2xl shadow-xl w-96">
//           <h4 className="text-center text-xl font-semibold mb-6">
//             Register for Tournament
//           </h4>

//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <input
//                 type="hidden"
//                 name="tournament_id"
//                 value={tournamentId}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 mb-1">In-game ID</label>
//               <input
//                 type="text"
//                 name="game_id"
//                 placeholder="Enter In-game ID"
//                 value={formData.game_id}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 mb-1">
//                 UPI Transaction ID
//               </label>
//               <input
//                 type="text"
//                 name="transaction_id"
//                 placeholder="Enter UPI Transaction ID"
//                 value={formData.transaction_id}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 cursor-pointer  "
//             >
//               Submit
//             </button>
//           </form>
//         </div>

//         {showPopup && (
//           <div className="fixed inset-0 flex items-center justify-center h-156 mt-18 bg-black bg-opacity-50 z-50">
//             <div className="bg-gray-800 rounded-2xl p-6 w-96 shadow-lg">
//               <h2 className="text-xl font-bold text-indigo-400 mb-4 text-center">
//                 Room Details
//               </h2>
//               <p className="mb-2">
//                 <span className="font-semibold text-indigo-300">
//                   Tournament Name:
//                 </span>
//                 {/* <span className="ml-2">{match.tournamentName}</span> */}
//                 <span className="ml-2 text-white">{"***"}</span>
//               </p>
//               <p className="mb-2">
//                 <span className="font-semibold text-indigo-300">Room ID:</span>
//                 {/* <span className="ml-2">{match.roomId}</span> */}
//                 <span className="ml-2 text-white">{data.room_id || "***"}</span>
//               </p>
//               <p className="mb-4">
//                 <span className="font-semibold text-indigo-300">
//                   Room Password:
//                 </span>
//                 {/* <span className="ml-2">{match.roomPassword}</span> */}
//                 <span className="ml-2 text-white">{data.passwd || "***"}</span>
//               </p>
//             </div>
//           </div>
//         )}
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default MatchDetail;

{
  /* <div className="min-h-screen bg-gray-900 text-white p-8">
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-2xl shadow-xl p-6">
          <h1 className="text-3xl font-bold text-indigo-400 mb-6 text-center">
            Match Details
          </h1>

          <div className="space-y-4">
            <p>
              <span className="font-semibold text-indigo-300">
                Tournament ID:
              </span>
              <span className="ml-2">{match.tournamentId}</span>
            </p>
            <p>
              <span className="font-semibold text-indigo-300">
                Player In-game ID:
              </span>
              <span className="ml-2">{match.playerIngameId}</span>
            </p>
            <p>
              <span className="font-semibold text-indigo-300">
                Transaction ID:
              </span>
              <span className="ml-2">{match.transactionId}</span>
            </p>
            <p>
              <span className="font-semibold text-indigo-300">
                Payment Status:
              </span>
              <span
                className={`ml-2 ${
                  match.paymentStatus === "Success"
                    ? "text-green-400"
                    : "text-yellow-400"
                }`}
              >
                {match.paymentStatus}
              </span>
            </p>

            <div>
              <span className="font-semibold text-indigo-300">Screenshot:</span>
              <img
                src={match.screenshot}
                alt="Match Screenshot"
                className="w-full h-64 object-cover rounded-xl mt-3 border border-gray-700"
              />
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => setShowPopup(true)}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl transition"
            >
              See Room Details
            </button>
          </div>
        </div>

        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-gray-800 rounded-2xl p-6 w-96 shadow-lg">
              <h2 className="text-xl font-bold text-indigo-400 mb-4 text-center">
                Room Details
              </h2>
              <p className="mb-2">
                <span className="font-semibold text-indigo-300">
                  Tournament:
                </span>
                <span className="ml-2">{match.tournamentName}</span>
              </p>
              <p className="mb-2">
                <span className="font-semibold text-indigo-300">Room ID:</span>
                <span className="ml-2">{match.roomId}</span>
              </p>
              <p className="mb-4">
                <span className="font-semibold text-indigo-300">
                  Room Password:
                </span>
                <span className="ml-2">{match.roomPassword}</span>
              </p>
              <div className="text-center">
                <button
                  onClick={() => setShowPopup(false)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div> */
}

// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { useLocation } from "react-router-dom";

// const MatchDetail = () => {
//   const location = useLocation();
//   const tournamentId = location.state?.tournament_id;
//   const [data, setData] = useState({});
//   const [showPopup, setShowPopup] = useState(false);
//   const [alreadyJoined, setAlreadyJoined] = useState(false);

//   const [formData, setFormData] = useState({
//     tournament_id: tournamentId || "",
//     game_id: "",
//     transaction_id: "",
//   });

//   const savedToken = sessionStorage.getItem("token");

//   // Fetch existing room creds to check if user already joined
//   useEffect(() => {
//     const checkIfJoined = async () => {
//       if (!tournamentId || !savedToken) return;

//       try {
//         const res = await axios.get(
//           `https://gali-game.onrender.com/api/user/rooms-creds/${tournamentId}`,
//           {
//             headers: { Authorization: `Bearer ${savedToken}` },
//           }
//         );

//         if (res.data.creds) {
//           setData(res.data.creds);
//           setAlreadyJoined(true);
//         }
//       } catch (err) {
//         console.log("User has not joined yet or creds not available");
//       }
//     };

//     checkIfJoined();
//   }, [tournamentId, savedToken]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Join match
//       const res = await axios.post(
//         "https://gali-game.onrender.com/api/user/join",
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${savedToken}`,
//           },
//         }
//       );
//       console.log("Register successful", res.data);

//       // Fetch room credentials
//       const credRes = await axios.get(
//         `https://gali-game.onrender.com/api/user/rooms-creds/${tournamentId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${savedToken}`,
//           },
//         }
//       );

//       setData(credRes.data.creds);
//       setAlreadyJoined(true);
//       toast.success("Registered and fetched room details!");
//       setShowPopup(true);
//     } catch (error) {
//       console.error("Error during join", error.response?.data || error.message);
//       toast.error(
//         error.response?.data?.message || "Login karke dubara try kar!"
//       );
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="flex justify-center items-center h-155">
//         {/* Show JOIN FORM only if user has NOT joined */}
//         {!alreadyJoined ? (
//           <div className="bg-white p-6 rounded-2xl shadow-xl w-96">
//             <h4 className="text-center text-xl font-semibold mb-6">
//               Register for Tournament
//             </h4>

//             <form className="space-y-4" onSubmit={handleSubmit}>
//               <input type="hidden" name="tournament_id" value={tournamentId} />

//               <div>
//                 <label className="block text-gray-700 mb-1">In-game ID</label>
//                 <input
//                   type="text"
//                   name="game_id"
//                   placeholder="Enter In-game ID"
//                   value={formData.game_id}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 mb-1">
//                   UPI Transaction ID
//                 </label>
//                 <input
//                   type="text"
//                   name="transaction_id"
//                   placeholder="Enter UPI Transaction ID"
//                   value={formData.transaction_id}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 cursor-pointer"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         ) : (
//           /* If already joined, show button */
//           <div className="bg-white p-6 rounded-2xl shadow-xl w-96 text-center">
//             <h4 className="text-xl font-semibold mb-4">
//               You have already joined this match
//             </h4>
//             <button
//               onClick={() => setShowPopup(true)}
//               className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl transition cursor-pointer"
//             >
//               See Room Details
//             </button>
//           </div>
//         )}

//         {/* POPUP */}
//         {showPopup && (
//           <div className="fixed inset-0 flex items-center justify-center h-156 mt-18 bg-black bg-opacity-50 z-50">
//             <div className="bg-gray-800 rounded-2xl p-6 w-96 shadow-lg">
//               <h2 className="text-xl font-bold text-indigo-400 mb-4 text-center">
//                 Room Details
//               </h2>
//               <p className="mb-2">
//                 <span className="font-semibold text-indigo-300">
//                   Tournament Name:
//                 </span>
//                 <span className="ml-2 text-white">{"***"}</span>
//               </p>
//               <p className="mb-2">
//                 <span className="font-semibold text-indigo-300">Room ID:</span>
//                 <span className="ml-2 text-white">{data.room_id || "***"}</span>
//               </p>
//               <p className="mb-4">
//                 <span className="font-semibold text-indigo-300">
//                   Room Password:
//                 </span>
//                 <span className="ml-2 text-white">{data.passwd || "***"}</span>
//               </p>
//               <button
//                 onClick={() => setShowPopup(false)}
//                 className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default MatchDetail;

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import axios from "axios";
import { useLocation } from "react-router-dom";

const MatchDetail = () => {
  const location = useLocation();
  const tournamentId = location.state?.tournament_id;
  const [data, setData] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [alreadyJoined, setAlreadyJoined] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [resultData, setResultData] = useState(null);
  console.log(resultData)

  const [formData, setFormData] = useState({
    tournament_id: tournamentId || "",
    game_id: "",
    transaction_id: "",
  });

  const savedToken = sessionStorage.getItem("token");

  // Check if user already joined
  useEffect(() => {
    const checkIfJoined = async () => {
      if (!tournamentId || !savedToken) return;

      try {
        const res = await axios.get(
          `https://gali-game.onrender.com/api/user/rooms-creds/${tournamentId}`,
          {
            headers: { Authorization: `Bearer ${savedToken}` },
          }
        );

        if (res.data.creds) {
          setData(res.data.creds);
          setAlreadyJoined(true);
        }
      } catch (err) {
        console.log("User has not joined yet or creds not available");
      }
    };

    checkIfJoined();
  }, [tournamentId, savedToken]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Join match
      await axios.post(
        "https://gali-game.onrender.com/api/user/join",
        formData,
        {
          headers: {
            Authorization: `Bearer ${savedToken}`,
          },
        }
      );

      // Fetch room credentials
      const credRes = await axios.get(
        `https://gali-game.onrender.com/api/user/rooms-creds/${tournamentId}`,
        {
          headers: {
            Authorization: `Bearer ${savedToken}`,
          },
        }
      );

      setData(credRes.data.creds);
      setAlreadyJoined(true);
      toast.success("Registered and fetched room details!");
      setShowPopup(true);
    } catch (error) {
      console.error("Error during join", error.response?.data || error.message);
      toast.error(
        error.response?.data?.message || "Login karke dubara try kar!"
      );
    }
  };
  // Fetch match result from API
  const fetchMatchResult = async () => {
    try {
      const res = await axios.get(
        `https://gali-game.onrender.com/api/user/result?tournament_id=${tournamentId}`
      );
      console.log(res.data)
      setResultData(res.data);
      setShowPopup(false); // Hide room popup
      setShowResultPopup(true); // Show result popup
    } catch (err) {
      console.error("Fetch result error:", err.response?.data || err.message);
      toast.error("Result not uploaded yet by admin.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center h-155">
        {/* Show JOIN FORM only if user has NOT joined */}
        {!alreadyJoined ? (
          <div className="bg-white p-6 rounded-2xl shadow-xl w-96">
            <h4 className="text-center text-xl font-semibold mb-6">
              Register for Tournament
            </h4>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="hidden" name="tournament_id" value={tournamentId} />

              <div>
                <label className="block text-gray-700 mb-1">In-game ID</label>
                <input
                  type="text"
                  name="game_id"
                  placeholder="Enter In-game ID"
                  value={formData.game_id}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">
                  UPI Transaction ID
                </label>
                <input
                  type="text"
                  name="transaction_id"
                  placeholder="Enter UPI Transaction ID"
                  value={formData.transaction_id}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        ) : (
          /* If already joined, show button */
          <div className="bg-white p-6 rounded-2xl shadow-xl w-96 text-center">
            <h4 className="text-xl font-semibold mb-4">
              You have already joined this match
            </h4>
            <button
              onClick={() => setShowPopup(true)}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl transition cursor-pointer"
            >
              See Room Details
            </button>
          </div>
        )}

        {/* POPUP for Room Details */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center h-156 mt-18 bg-black bg-opacity-50 z-50">
            <div className="bg-gray-800 rounded-2xl p-6 w-96 shadow-lg">
              <h2 className="text-xl font-bold text-indigo-400 mb-4 text-center">
                Room Details
              </h2>
              <p className="mb-2">
                <span className="font-semibold text-indigo-300">
                  Tournament Name:
                </span>
                <span className="ml-2 text-white">{"***"}</span>
              </p>
              <p className="mb-2">
                <span className="font-semibold text-indigo-300">Room ID:</span>
                <span className="ml-2 text-white">{data.room_id || "***"}</span>
              </p>
              <p className="mb-4">
                <span className="font-semibold text-indigo-300">
                  Room Password:
                </span>
                <span className="ml-2 text-white">{data.passwd || "***"}</span>
              </p>
              <button
                onClick={fetchMatchResult}
                className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                See Match Result
              </button>
            </div>
          </div>
        )}

        {/* POPUP for Match Result */}
        {showResultPopup && (
          <div className="fixed inset-0 flex items-center justify-center h-156 mt-18 bg-black bg-opacity-50 z-50">
            <div className="bg-gray-800 rounded-2xl p-6 w-96 shadow-lg">
              <h2 className="text-xl font-bold text-green-400 mb-4 text-center">
                Match Result
              </h2>

              {resultData ? (
                <div>
                  <p className="mb-2 text-white">
                    Winner:{" "}
                    <span className="font-bold">{resultData.player_id}</span>
                  </p>
                  <p className="mb-2 text-white">
                    Kills: <span className="font-bold">{resultData.kills}</span>
                  </p>
                  <p className="mb-2 text-white">
                    Prize: <span className="font-bold">{resultData.prize}</span>
                  </p>
                  <p className="mb-2 text-white">
                    Match Time:{" "}
                    <span className="font-bold">{resultData.match_time}</span>
                  </p>
                </div>
              ) : (
                <p className="text-white text-center">
                  Result not available yet.
                </p>
              )}

              <button
                onClick={() => setShowResultPopup(false)}
                className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default MatchDetail;
