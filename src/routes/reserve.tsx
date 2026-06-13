import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/reserve")({
  component: ReservePage,
});

function ReservePage() {
  return (
    <Layout>
      <section className="min-h-screen pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-6">

          <h1 className="text-5xl text-center text-cream mb-12">
            Reserve Your Table
          </h1>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 bg-[#1a1510] border border-[var(--gold)]/20"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-4 bg-[#1a1510] border border-[var(--gold)]/20"
            />

            <input
              type="date"
              className="w-full p-4 bg-[#1a1510] border border-[var(--gold)]/20"
            />

            <input
              type="time"
              className="w-full p-4 bg-[#1a1510] border border-[var(--gold)]/20"
            />

            <input
              type="number"
              placeholder="Guests"
              className="w-full p-4 bg-[#1a1510] border border-[var(--gold)]/20"
            />

            <textarea
              placeholder="Special Requests"
              rows={4}
              className="w-full p-4 bg-[#1a1510] border border-[var(--gold)]/20"
            />

            <button
              type="submit"
              className="btn-gold w-full"
            >
              Reserve Table
            </button>

          </form>

        </div>
      </section>
    </Layout>
  );
}