"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

const CATEGORIES = [
  "Shopping & Retail",
  "Money & Finance",
  "Services & Utilities",
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
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [success, setSuccess] = useState(false);

  const correctPassword = process.env.NEXT_PUBLIC_ADD_PAGE_PASSWORD;

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!correctPassword) {
      setError("Password is not configured.");
      return;
    }

    if (password === correctPassword) {
      setAuthorized(true);
      setError(null);
    } else {
      setError("Incorrect password.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const { error } = await supabase.from("referrals").insert({
      name,
      url,
      category,
    });

    if (error) {
      setError("Something went wrong. Please try again.");
      return;
    }

    setSuccess(true);
    setName("");
    setUrl("");
    setCategory(CATEGORIES[0]);
  };

  if (!authorized) {
    return (
      <main className="max-w-md mx-auto p-6 space-y-4 bg-[#FAF9F7] min-h-screen">
        <h1 className="text-2xl font-bold">Admin Access</h1>

        <form onSubmit={handlePasswordSubmit} className="space-y-3">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded"
            required
          />
          <button className="w-full bg-[#6F8F7A] text-white py-2 rounded">
            Enter
          </button>
        </form>

        {error && <p className="text-red-600">{error}</p>}
      </main>
    );
  }

  return (
    <main className="max-w-md mx-auto p-6 space-y-6 bg-[#FAF9F7] min-h-screen">
      <h1 className="text-2xl font-bold">Add a Referral</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Referral name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border p-3 rounded"
        />

        <input
          type="url"
          placeholder="Referral URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="w-full border p-3 rounded"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border p-3 rounded"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <button className="w-full bg-[#6F8F7A] text-white py-3 rounded">
          Add Referral
        </button>
      </form>

      {success && <p className="text-green-700">✅ Referral added</p>}
      {error && <p className="text-red-600">{error}</p>}
    </main>
  );
}