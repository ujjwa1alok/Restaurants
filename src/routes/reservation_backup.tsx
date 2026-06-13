import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/reservation_backup")({
  component: Reservation,
});

function Reservation() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">
          Reserve Your Table
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded text-black"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 rounded text-black"
          />

          <input
            type="date"
            className="w-full p-3 rounded text-black"
          />

          <input
            type="time"
            className="w-full p-3 rounded text-black"
          />

          <input
            type="number"
            placeholder="Guests"
            className="w-full p-3 rounded text-black"
          />

          <button
            type="submit"
            className="bg-yellow-500 px-6 py-3 rounded"
          >
            Book Table
          </button>
        </form>
      </div>
    </div>
  );
}