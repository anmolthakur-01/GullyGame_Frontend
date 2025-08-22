import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MatchResult() {
  // Dummy data for UI preview
  const results = [
    { playerId: "ProGamer_007", rank: 1, kills: 15, prize: "$500" },
    { playerId: "SharpShooter77", rank: 2, kills: 12, prize: "$300" },
    { playerId: "NoobMaster69", rank: 3, kills: 9, prize: "$150" },
    { playerId: "CasualPlayerX", rank: 4, kills: 5, prize: "$50" },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <div className="max-w-5xl mx-auto bg-gray-800 rounded-2xl shadow-xl p-6">
          <h1 className="text-3xl font-bold text-indigo-400 mb-6 text-center">
            Match Results
          </h1>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-700 text-indigo-300">
                <th className="py-3 px-4 border-b border-gray-600">
                  Player ID
                </th>
                <th className="py-3 px-4 border-b border-gray-600">Rank</th>
                <th className="py-3 px-4 border-b border-gray-600">Kills</th>
                <th className="py-3 px-4 border-b border-gray-600">Prize</th>
              </tr>
            </thead>
            <tbody>
              {results.map((player, index) => (
                <tr
                  key={index}
                  className={`${
                    player.rank === 1
                      ? "bg-yellow-800"
                      : player.rank === 2
                      ? "bg-gray-700"
                      : player.rank === 3
                      ? "bg-orange-800"
                      : "bg-gray-800"
                  } hover:bg-gray-700 transition`}
                >
                  <td className="py-3 px-4 border-b border-gray-700">
                    {player.playerId}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-700">
                    {player.rank}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-700">
                    {player.kills}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-700">
                    {player.prize}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}
