"use client";

import { useState } from "react";

type Referral = {
  name: string;
  category: string;
  url: string;
};

const REFERRALS: Referral[] = [
  { name: "Amazon", category: "Shopping & Retail", url: "#" },
  { name: "Honeylove", category: "Shopping & Retail", url: "#" },
  { name: "Chase Sapphire", category: "Credit Cards & Banking", url: "#" },
  { name: "Amex Platinum", category: "Credit Cards & Banking", url: "#" },
  { name: "Airbnb", category: "Travel & Lodging", url: "#" },
  { name: "Uber Eats", category: "Food & Dining", url: "#" },
  { name: "ClassPass", category: "Fitness & Wellness", url: "#" },
  { name: "Sephora", category: "Beauty & Personal Care", url: "#" },
  { name: "Notion", category: "Technology & Apps", url: "#" },
  { name: "IKEA", category: "Home & Lifestyle", url: "#" },
  { name: "Stitch Fix", category: "Fashion & Accessories", url: "#" },
  { name: "Spotify", category: "Subscriptions & Memberships", url: "#" },
];

const CATEGORIES = [
  "Shopping & Retail",
  "Credit Cards & Banking",
  "Travel & Lodging",
  "Food & Dining",
  "Fitness & Wellness",
  "Beauty & Personal Care",
  "Technology & Apps",
  "Home & Lifestyle",
  "Fashion & Accessories",
  "Subscriptions & Memberships",
];

const CATEGORY_COLORS: Record<string, string> = {
  "Shopping & Retail": "border-l-[#6F8F7A]",   // sage
  "Credit Cards & Banking": "border-l-[#6FA3A0]", // green-teal
  "Travel & Lodging": "border-l-[#6B8FA3]",    // dusty blue
  "Food & Dining": "border-l-[#6B7FB8]",       // indigo-blue
  "Fitness & Wellness": "border-l-[#8E7EB9]",  // violet
  "Beauty & Personal Care": "border-l-[#B48EAD]", // rose-violet
  "Technology & Apps": "border-l-[#C38CB4]",   // warm pink-violet
  "Home & Lifestyle": "border-l-[#E3A08F]",    // coral
  "Fashion & Accessories": "border-l-[#D07A5C]", // terracotta
  "Subscriptions & Memberships": "border-l-[#A65A6E]", // rose-wine
};

export default function Home() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const filtered = REFERRALS.filter((r) =>
    `${r.name} ${r.category}`.toLowerCase().includes(query.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="max-w-6xl mx-auto p-6 space-y-8 bg-[#FAF9F7] text-[#2E2E2E]">
      <h1 className="text-3xl font-bold">My Referral Links</h1>

      <input
        type="text"
        placeholder="Search for a service..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border border-[#E2E0DC] p-3 rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#6F8F7A]"
      />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CATEGORIES.map((category) => {
          const items = filtered.filter((r) => r.category === category);
          if (items.length === 0) return null;

          return (
            <div
              key={category}
              className={`border border-[#E2E0DC] border-l-4 ${CATEGORY_COLORS[category]} rounded p-4 h-[320px] flex flex-col bg-[#FDFEFE]`}
            >
              <h2 className="font-semibold text-lg mb-3">{category}</h2>

              <div className="flex-1 overflow-y-auto space-y-2 pr-1">
                {items.map((ref) => (
                  <div
                    key={ref.name}
                    className="flex justify-between items-center border-b border-[#E2E0DC] pb-1"
                  >
                    <span>{ref.name}</span>
                    <a
                      href={ref.url}
                      className="text-sm text-[#4F7F67] hover:text-[#D07A5C] underline"
                    >
                      Use referral
                    </a>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="border-t border-[#E2E0DC] pt-6">
        <h2 className="text-xl font-semibold">Request a Referral</h2>

        {submitted ? (
          <p className="mt-4 text-[#6F8F7A]">
            Thanks! Your request has been submitted.
          </p>
        ) : (
          <form className="space-y-3 mt-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Service name"
              required
              className="w-full border border-[#E2E0DC] p-3 rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#6F8F7A]"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-[#E2E0DC] p-3 rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#6F8F7A]"
            />
            <button className="bg-[#6F8F7A] text-[#FAF9F7] px-4 py-2 rounded hover:bg-[#D07A5C] transition-colors">
              Submit Request
            </button>
          </form>
        )}
      </section>
    </main>
  );
}