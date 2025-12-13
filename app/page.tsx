"use client";

import { useState } from "react";

type Referral = {
  name: string;
  category: string;
  url: string;
};

const REFERRALS: Referral[] = [
  { name: "Amazon", category: "Shopping", url: "#" },
  { name: "Chase Sapphire", category: "Credit Cards", url: "#" },
  { name: "Airbnb", category: "Travel", url: "#" },
];

export default function Home() {
  const [query, setQuery] = useState("");

  const filtered = REFERRALS.filter((r) =>
    `${r.name} ${r.category}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold">My Referral Links</h1>

      <input
        type="text"
        placeholder="Search for a service..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border p-3 rounded"
      />

      <section className="space-y-4">
        {filtered.length === 0 && (
          <p className="text-gray-500">No referrals found.</p>
        )}

        {filtered.map((ref) => (
          <div key={ref.name} className="border p-4 rounded">
            <h2 className="font-semibold">{ref.name}</h2>
            <p className="text-sm text-gray-600">{ref.category}</p>
            <a href={ref.url} className="text-blue-600 underline">
              Use referral
            </a>
          </div>
        ))}
      </section>

      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold">Request a Referral</h2>

        <form className="space-y-3 mt-4">
          <input
            type="text"
            placeholder="Service name"
            className="w-full border p-3 rounded"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full border p-3 rounded"
          />
          <button className="bg-black text-white px-4 py-2 rounded">
            Submit Request
          </button>
        </form>
      </section>
    </main>
  );
}