import React, { useState } from "react";

const Contact = ({ layout = "col" }) => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const url =
      "https://script.google.com/macros/s/AKfycbxVE94G0mFuW2b15rkYHaLWrvh7Jvy9MPRQy4LzLt7JBAQ-SRoq22qLI6y3a1T8rLSS/exec";

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        e.target.reset();
      } else {
        setSuccessMessage("Error sending message. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccessMessage("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`flex items-center justify-center my-6 w-full ${
        layout === "row" && " md:absolute md:-top-32 lg:absolute lg:-top-40  "
      }`}
    >
      <div
        className={`bg-white p-2  md:p-6 shadow-md w-full md:w-[80%] ${
          layout === "row"
            ? "rounded-full flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            : "rounded-lg"
        }`}
      >
        {/* Title for column layout */}
        {layout === "col" && (
          <h2 className="text-xl font-semibold text-blue-700 text-center mb-4">
            Get In Touch
          </h2>
        )}

        <form
          onSubmit={handleSubmit}
          className={`${
            layout === "row"
              ? "flex flex-col items-center md:flex-row md:items-center text-sm gap-4 w-full"
              : "grid grid-cols-2 text-xs gap-4"
          }`}
        >
          {/* First Name */}
          <input
            type="text"
            name="clientName"
            placeholder="Name"
            required
            className="bg-gray-100 rounded-full border px-5 py-2 h-12 w-[90%]"
          />

          {/* Email */}
          <input
            type="email"
            name="clientEmail"
            placeholder="Email"
            required
            className="bg-gray-100 rounded-full border px-5 py-2 h-12 w-[90%]"
          />

          {/* Phone */}
          <input
            type="tel"
            name="clientMobileNumber"
            placeholder="Phone"
            required
            className="bg-gray-100 rounded-full border px-5 py-2 h-12 w-[90%]"
          />

          {/* Message */}
          <input
            type="text"
            name="clientMessage"
            placeholder="Type your message here"
            required
            className="bg-gray-100 rounded-full border px-5 py-2 h-12 w-[90%]"
          />

          <input type="hidden" name="contact_submit" value="1" />

          {/* Submit Button */}
          <div
            className={`flex ${
              layout === "row"
                ? "justify-center md:justify-end"
                : "col-span-2 justify-end"
            }`}
          >
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>

        {/* Success Message */}
        {successMessage && (
          <p className="text-center text-green-500 mt-3">{successMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Contact;
