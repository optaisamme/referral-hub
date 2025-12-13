"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

type Referral = {
  name: string;
  category: string;
  url: string;
};

/* =========================
   CATEGORY OPTIONS
   Must match homepage exactly
   ========================= */

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

export default function AddReferralPage() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const { error } = await supabase.from("referrals").insert({
      name: name.trim(),
      url: url.trim(),
      category,
    });

    setLoading(false);

    if (error) {
      setError("Something went wrong. Please try again.");
      return;
    }

    setSuccess(true);
    setName("");
    setUrl("");
    setCategory(CATEGORIES[0]);
  };

  return (
    <main className="max-w-md mx-auto p-6 space-y-6 bg-[#FAF9F7] text-[#2E2E2E] min-h-screen">
      <h1 className="text-2xl font-bold">Add a Referral</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Referral name (e.g. Honeylove)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border border-[#E2E0DC] p-3 rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#6F8F7A]"
        />

        <input
          type="url"
          placeholder="Referral URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="w-full border border-[#E2E0DC] p-3 rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#6F8F7A]"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-[#E2E0DC] p-3 rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#6F8F7A]"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#6F8F7A] text-[#FAF9F7] py-3 rounded hover:bg-[#D07A5C] transition-colors disabled:opacity-50"
        >
          {loading ? "Adding..." : "Add Referral"}
        </button>
      </form>

      {success && (
        <p className="text-[#6F8F7A] font-medium">
          ✅ Referral added successfully
        </p>
      )}

      {error && <p className="text-red-600">{error}</p>}
    </main>
  );
}