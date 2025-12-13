export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold">My Referral Links</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search for a service..."
        className="w-full border p-3 rounded"
      />

      {/* Referral List */}
      <section className="space-y-4">
        <div className="border p-4 rounded">
          <h2 className="font-semibold">Amazon</h2>
          <p className="text-sm text-gray-600">Shopping</p>
          <a
            href="#"
            className="inline-block mt-2 text-blue-600 underline"
          >
            Use referral
          </a>
        </div>

        <div className="border p-4 rounded">
          <h2 className="font-semibold">Chase Sapphire</h2>
          <p className="text-sm text-gray-600">Credit Cards</p>
          <a
            href="#"
            className="inline-block mt-2 text-blue-600 underline"
          >
            Use referral
          </a>
        </div>
      </section>

      {/* Request Box */}
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