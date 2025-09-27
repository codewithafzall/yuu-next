"use client";

import React from "react";

const NriCorner = () => {
  return (
    <section className="px-6 pt-20 desktop:pt-32 max-w-5xl mx-auto">
      {/* Main Heading */}
      <h1 className="text-3xl desktop:text-5xl font-bold mb-6">
        NRI Corner – YUU by Nahar
      </h1>

      {/* Sub Heading */}
      <h1 className="text-xl md:text-2xl font-semibold mb-4">
        Your Home, Your YUU – No Matter Where You Are
      </h1>
      <p className="mb-8 text-gray-700">
        At YUU by Nahar, we make investing in your dream home from abroad
        seamless, transparent &amp; future-ready.
      </p>

      {/* Housing Loans */}
      <h2 className="text-2xl font-semibold mb-4">Housing Loans for NRIs</h2>
      <p className="mb-6 text-gray-700">
        As a Non-Resident Indian, you are eligible for specialized home loan
        schemes offered by leading banks &amp; housing finance companies in
        India. These plans come with competitive interest rates &amp; flexible
        repayment options designed to suit your needs. Our team is here to guide
        you in choosing the right financing option.
      </p>

      {/* Legal Simplicity */}
      <h2 className="text-2xl font-semibold mb-4">Legal Simplicity</h2>
      <p className="mb-6 text-gray-700">
        NRIs holding an Indian passport do not need prior RBI approval to
        purchase residential property in India. Payments can be made via NRO,
        NRE, or FCNR accounts, or through standard banking channels. We’ll help
        you navigate documentation &amp; compliance with ease.
      </p>

      {/* Why Chandivali */}
      <h2 className="text-2xl font-semibold mb-4">Why Chandivali?</h2>
      <p className="mb-4 text-gray-700">
        Peaceful living, yet connected to Mumbai’s key hubs
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Close to the International Airport, BKC &amp; major business districts</li>
        <li>Strong growth potential with attractive property rates</li>
        <li>Chandivali is where convenience, investment, and lifestyle come together.</li>
      </ul>

      {/* Contact Section */}
      <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
      <p className="text-gray-700">
        📩 <a
          href="mailto:nri@yuubynahar.com"
          className="text-blue-600 hover:underline"
        >
          nri@yuubynahar.com
        </a>
      </p>
    </section>
  );
};

export default NriCorner;
