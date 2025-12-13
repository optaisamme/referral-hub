"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

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

  // Request form state
  const [brand, setBrand] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notify, setNotify] = useState(true);
  const [newsletter, setNewsletter] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const filtered = REFERRALS.filter((r) =>
    `${r.name} ${r.category}`.toLowerCase().includes(query.toLowerCase())
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await supabase.from("referral_requests").insert({
      brand,
      email: email || null,
      phone: phone || null,
      wants_notification: notify,
      notify_via_email: notify && !!email,
      notify_via_sms: notify && !!phone,
      newsletter_opt_in: newsletter,
    });

    setSubmitted(true);
    setBrand("");
    setEmail("");
    setPhone("");
    setNotify(true);
    setNewsletter(false);
  };

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

        {submitted ? (
          <p className="text-green-600 mt-4">
            Thanks! Your request has been submitted.
          </p>
        ) : (
          <form className="space-y-3 mt-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Service name"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              required
              className="w-full border p-3 rounded"
            />

            <input
              type="email"
              placeholder="Your email (optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-3 rounded"
            />

            <input
              type="tel"
              placeholder="Your phone (optional)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border p-3 rounded"
            />

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={notify}
                onChange={(e) => setNotify(e.target.checked)}
              />
              Notify me when the referral is added
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={newsletter}
                onChange={(e) => setNewsletter(e.target.checked)}
              />
              Sign me up for your newsletter
            </label>

            <button className="bg-black text-white px-4 py-2 rounded">
              Submit Request
            </button>
          </form>
        )}
      </section>
    </main>
  );
}