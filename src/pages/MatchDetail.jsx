import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import axios from "axios";
import { useLocation } from "react-router-dom";

const MatchDetail = () => {
  const location = useLocation();
  const [cred, setCred] = useState([]);
  const tournamentId = location.state?.tournament_id;
  const [showPopup, setShowPopup] = useState(false);
  console.log(setCred)

  const [formData, setFormData] = useState({
    tournament_id: tournamentId || "",
    game_id: "",
    transaction_id: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const savedToken = sessionStorage.getItem("token");
    try {
      const res = await axios.post(
        "https://gali-game.onrender.com/api/user/join",
        formData,
        {
          headers: {
            Authorization: `Bearer ${savedToken}`,
          },
        }
      );
      // Then, fetch room credentials
      const credRes = await axios.get(
        `https://gali-game.onrender.com/api/user/rooms-creds/${tournamentId}`,
        {
          headers: {
            Authorization: `Bearer ${savedToken}`,
          },
        }
      );
      setCred(credRes.data);
      console.log("Room credentials fetched:", credRes.data);

      console.log("form submit hoo hya", res.data);
      // Show the popup only when both succeed
      setShowPopup(true);
    } catch (error) {
      console.error("Form submit nhee huyaa yaar", error.message);
      toast.error("Login karke dubara try kar!");
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center h-155">
        <div className="bg-white p-6 rounded-2xl shadow-xl w-96">
          <h4 className="text-center text-xl font-semibold mb-6">
            Register for Tournament
          </h4>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="hidden"
                name="tournament_id"
                value={tournamentId}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
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
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 cursor-pointer  "
            >
              Submit
            </button>
          </form>
          {/* <div className="mt-6 text-center ">
            <button
              onClick={() => setShowPopup(true)}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl transition cursor-pointer"
            >
              See Room Details
            </button>
          </div> */}
        </div>
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-gray-800 rounded-2xl p-6 w-96 shadow-lg">
              <h2 className="text-xl font-bold text-indigo-400 mb-4 text-center">
                Room Details
              </h2>
              <p className="mb-2">
                <span className="font-semibold text-indigo-300">
                  Tournament Name:
                </span>
                {/* <span className="ml-2">{match.tournamentName}</span> */}
                <span className="ml-2 text-white">{"***"}</span>
              </p>
              <p className="mb-2">
                <span className="font-semibold text-indigo-300">Room ID:</span>
                {/* <span className="ml-2">{match.roomId}</span> */}
                <span className="ml-2 text-white">{cred.room_id}</span>
              </p>
              <p className="mb-4">
                <span className="font-semibold text-indigo-300">
                  Room Password:
                </span>
                {/* <span className="ml-2">{match.roomPassword}</span> */}
                <span className="ml-2 text-white">{cred.passwd}</span>
              </p>
              {/* <div className="text-center">
                <button
                  onClick={() => setShowPopup(false)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                >
                  Close
                </button>
              </div> */}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default MatchDetail;

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
