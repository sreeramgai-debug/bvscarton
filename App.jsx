import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-600 flex items-center justify-center text-white font-bold">BVS</div>
            <div>
              <h1 className="text-xl font-semibold">BVS Carton Crafts Pvt Ltd</h1>
              <p className="text-sm text-gray-500">Quality corrugated packaging • Gudivada, Andhra Pradesh</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#home" className="hover:text-orange-600">Home</a>
            <a href="#about" className="hover:text-orange-600">About</a>
            <a href="#products" className="hover:text-orange-600">Products</a>
            <a href="#gallery" className="hover:text-orange-600">Gallery</a>
            <a href="#clients" className="hover:text-orange-600">Clients</a>
            <a href="#contact" className="hover:text-orange-600">Contact</a>
          </nav>
          <a href="#contact" className="hidden md:inline-block bg-orange-600 text-white px-4 py-2 rounded-lg text-sm">Get a Quote</a>
        </div>
      </header>

      <main id="home">
        <section className="bg-gray-100 py-20">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="bg-white p-8 rounded-lg shadow">
              <h2 className="text-3xl font-extrabold mb-3">Packaging that protects & elevates your product</h2>
              <p className="text-gray-700 mb-6">We manufacture corrugated boxes, bespoke carton solutions, and high-volume packaging for bottling & industrial needs. Fast turnaround, bulk capacity, and strict quality control.</p>
              <div className="flex gap-3">
                <a href="#contact" className="bg-orange-600 text-white px-4 py-2 rounded-lg">Request Quote</a>
                <a href="#products" className="px-4 py-2 rounded-lg border">See Products</a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="h-64 rounded-lg bg-gray-200 flex items-center justify-center text-gray-500">Hero image placeholder</div>
            </div>
          </div>
        </section>

        <section id="about" className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3">About BVS Carton Crafts</h3>
              <p className="text-gray-700 mb-3">BVS Carton Crafts Pvt Ltd is a Gudivada, Andhra Pradesh-based manufacturer specialising in corrugated cardboard boxes, customised packaging for bottles, and industrial shipping solutions. We focus on durability, sustainability, and cost-effectiveness.</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">Factory photo placeholder</div>
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-3xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-bold mb-4">Contact & Enquiries</h3>
          <p className="text-gray-700 mb-6">Get a custom quote for packaging, volume pricing, or a factory visit.</p>
          <div className="mt-8 text-sm text-gray-600">
            <p><strong>Address:</strong> Gudivada, Andhra Pradesh, India</p>
            <p><strong>Contact:</strong> +91 90000 00000 • enquiries@bvscartoncrafts.com</p>
            <p className="mt-2">Website prepared for <strong>BVS Carton Crafts Pvt Ltd</strong> — Sreeram G, Director – Operations & Accounts.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
