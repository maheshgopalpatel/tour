import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "7006152544"; 

  const sendMessage = () => {
    const message = encodeURIComponent(document.getElementById("chatInput").value);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp size={24} />
      </button>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-72 bg-white shadow-lg rounded-lg p-4">
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="text-gray-800 font-semibold">Chat with Us</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-600">
              <X size={20} />
            </button>
          </div>
          <textarea
            id="chatInput"
            placeholder="Type your message..."
            className="w-full border rounded p-2 mt-2"
          />
          <button
            onClick={sendMessage}
            className="mt-2 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
          >
            Send on WhatsApp
          </button>
        </div>
      )}
    </div>
  );
};

export default WhatsAppChat;
