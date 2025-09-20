import { useState } from "react";

export default function Profile() {
  const [farmer, setFarmer] = useState({
    name: "John Doe",
    phone: "08012345678",
    location: "Kaduna, Nigeria",
    contact: "john@example.com",
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Farmer Profile
        </h2>
        <div className="space-y-3">
          <p><strong>Name:</strong> {farmer.name}</p>
          <p><strong>Phone:</strong> {farmer.phone}</p>
          <p><strong>Farm Location:</strong> {farmer.location}</p>
          <p><strong>Contact:</strong> {farmer.contact}</p>
        </div>
        <button className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
