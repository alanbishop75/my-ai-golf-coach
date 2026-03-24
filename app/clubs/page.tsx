export default function GolfClubs() {
  const clubs = [
    { name: "Driver", type: "Wood" },
    { name: "3 Wood", type: "Wood" },
    { name: "5 Wood", type: "Wood" },
    { name: "2 Iron", type: "Iron" },
    { name: "3 Iron", type: "Iron" },
    { name: "4 Iron", type: "Iron" },
    { name: "5 Iron", type: "Iron" },
    { name: "6 Iron", type: "Iron" },
    { name: "7 Iron", type: "Iron" },
    { name: "8 Iron", type: "Iron" },
    { name: "9 Iron", type: "Iron" },
    { name: "Pitching Wedge", type: "Wedge" },
    { name: "Gap Wedge", type: "Wedge" },
    { name: "Sand Wedge", type: "Wedge" },
    { name: "Lob Wedge", type: "Wedge" },
    { name: "Putter", type: "Putter" },
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-12 text-center">
          Golf Clubs
        </h1>

        <div className="grid gap-4">
          {clubs.map((club, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:bg-gray-100 transition"
            >
              <span className="text-lg font-semibold text-gray-900">
                {club.name}
              </span>
              <span className="text-sm text-gray-600 bg-gray-200 px-3 py-1 rounded-full">
                {club.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
