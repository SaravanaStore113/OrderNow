import { useState, useEffect } from "react";
import { FaGift, FaTicketAlt, FaWhatsapp, FaCoins, FaHistory, FaCamera } from "react-icons/fa";
import { GiSpinningWheel } from "react-icons/gi";

export const LuckyDraw = () => {
  const prizes = [
    "₹50 Voucher",
    "Free Delivery",
    "Buy 1 Get 1 Free",
    "₹100 Voucher",
    "Mystery Box",
    "10% Off",
    "₹200 Voucher",
    "20% Off"
  ];

  const [result, setResult] = useState(null);
  const [spinning, setSpinning] = useState(false);
  const [spinCount, setSpinCount] = useState(0);
  const [totalBill, setTotalBill] = useState(0);
  const [history, setHistory] = useState([]);
  const [showSubmission, setShowSubmission] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    phone: ""
  });

  // Load from localStorage
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('luckyDrawData')) || {};
    setSpinCount(savedData.spinCount || 0);
    setTotalBill(savedData.totalBill || 0);
    setHistory(savedData.history || []);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('luckyDrawData', JSON.stringify({
      spinCount, 
      totalBill, 
      history
    }));
  }, [spinCount, totalBill, history]);

  const handleSpin = () => {
    if (spinning || spinCount >= 2) return;
    
    setSpinning(true);
    setResult(null);
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * prizes.length);
      const prize = prizes[randomIndex];
      
      setResult(prize);
      const newSpinCount = spinCount + 1;
      setSpinCount(newSpinCount);
      
      setHistory(prev => [
        {
          prize,
          date: new Date().toLocaleString(),
          spinNumber: newSpinCount
        },
        ...prev
      ].slice(0, 10));
      
      setSpinning(false);

      if (newSpinCount >= 2) {
        setShowSubmission(true);
      }
    }, 2000);
  };

  const handleBillSubmission = () => {
    if (!customerDetails.name || !customerDetails.phone) {
      alert("Please fill all required fields");
      return;
    }

    const message = `*Lucky Draw Submission*\n\n` +
      `Name: ${customerDetails.name}\n` +
      `Phone: ${customerDetails.phone}\n` +
      `Total Bill: ₹${totalBill.toFixed(2)}\n` +
      `Spins Used: ${spinCount}\n\n` +
      `Please attach your bill photo below`;
    
    window.open(`https://wa.me/919551380284?text=${encodeURIComponent(message)}`, '_blank');
    setShowSubmission(false);
  };

  const resetSession = () => {
    setTotalBill(0);
    setSpinCount(0);
    localStorage.removeItem('luckyDrawData');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-yellow-600 rounded-full mb-4">
            <FaGift className="text-white text-3xl" />
          </div>
          <h1 className="text-2xl font-bold text-yellow-500 mb-1">Lucky Draw</h1>
          <p className="text-gray-300">Spin to win exciting prizes</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6 bg-gray-800 p-3 rounded-lg">
          <div className="text-center">
            <div className="text-yellow-400 text-sm">Spins</div>
            <div className="font-bold">{spinCount}/2</div>
          </div>
          <div className="text-center">
            <div className="text-yellow-400 text-sm">Total Bill</div>
            <div className="font-bold">₹{totalBill.toFixed(2)}</div>
          </div>
          <div className="text-center">
            <div className="text-yellow-400 text-sm">Status</div>
            <div className="font-bold">
              {spinCount >= 2 ? "Submit Bill" : "Ready"}
            </div>
          </div>
        </div>

        {/* Wheel */}
        <div className="bg-gray-800 p-6 rounded-lg mb-6 text-center">
          <div className={`text-xl font-bold min-h-16 mb-4 ${
            spinning ? "animate-pulse text-yellow-300" : "text-white"
          }`}>
            {spinning ? (
              <div className="flex items-center justify-center gap-2">
                <GiSpinningWheel className="animate-spin" />
                Spinning...
              </div>
            ) : result ? (
              <div className="animate-bounce">🎉 {result} 🎉</div>
            ) : (
              "Spin the wheel!"
            )}
          </div>

          <button
            onClick={handleSpin}
            disabled={spinning || spinCount >= 2}
            className={`bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-full w-full
              ${spinning ? "opacity-50" : ""}
              ${spinCount >= 2 ? "bg-gray-600" : ""}`}
          >
            <FaTicketAlt className="inline mr-2" />
            {spinning ? "Spinning..." : "Spin Now"}
          </button>
        </div>

        {/* Bill Controls */}
        <div className="mb-6">
          <h3 className="text-yellow-400 mb-2">Add to Bill</h3>
          <div className="grid grid-cols-4 gap-2">
            {[500, 1000, 1500, 2000].map(amount => (
              <button
                key={amount}
                onClick={() => setTotalBill(prev => prev + amount)}
                className="bg-gray-700 hover:bg-gray-600 py-2 rounded flex items-center justify-center gap-1 text-sm"
              >
                <FaCoins className="text-yellow-400" /> ₹{amount}
              </button>
            ))}
          </div>
        </div>

        {/* Rules */}
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <h3 className="text-yellow-400 font-bold mb-2">Rules:</h3>
          <ul className="text-sm space-y-1">
            <li>• Maximum 2 spins per customer</li>
            <li>• Submit bill photo via WhatsApp</li>
            <li>• Visit shop to claim your prize</li>
            <li>• No bill number required</li>
          </ul>
        </div>

        {/* History */}
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <h3 className="text-yellow-400 font-bold mb-2 flex items-center gap-2">
            <FaHistory /> Spin History
          </h3>
          {history.length === 0 ? (
            <p className="text-gray-400 text-center py-2">No spins yet</p>
          ) : (
            <div className="space-y-2">
              {history.map((item, index) => (
                <div key={index} className="flex justify-between bg-gray-700/50 p-2 rounded text-sm">
                  <div>
                    <div>{item.prize}</div>
                    <div className="text-xs text-gray-400">{item.date}</div>
                  </div>
                  <div className="text-yellow-400">#{item.spinNumber}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submission Modal */}
        {showSubmission && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-lg max-w-sm w-full border border-yellow-500/30">
              <div className="bg-yellow-600 p-3">
                <h3 className="font-bold text-center">Submit Bill Photo</h3>
              </div>
              
              <div className="p-4">
                <div className="space-y-3 mb-4">
                  <div>
                    <label className="block text-gray-300 text-sm mb-1">Full Name*</label>
                    <input
                      type="text"
                      value={customerDetails.name}
                      onChange={(e) => setCustomerDetails({...customerDetails, name: e.target.value})}
                      className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-sm"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm mb-1">Phone*</label>
                    <input
                      type="tel"
                      value={customerDetails.phone}
                      onChange={(e) => setCustomerDetails({...customerDetails, phone: e.target.value})}
                      className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-sm"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4 text-center text-sm text-gray-300">
                  <FaCamera className="inline-block text-2xl mb-2" />
                  <p>Please attach your bill photo in WhatsApp</p>
                </div>
                
                <button
                  onClick={handleBillSubmission}
                  className="w-full bg-green-600 hover:bg-green-500 py-2 rounded flex items-center justify-center gap-2 mb-2"
                >
                  <FaWhatsapp /> Open WhatsApp
                </button>
                
                <button
                  onClick={() => setShowSubmission(false)}
                  className="w-full text-gray-400 hover:text-white text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Reset Button */}
        <button
          onClick={resetSession}
          className="text-gray-400 hover:text-yellow-400 text-sm underline"
        >
          Reset Session
        </button>
      </div>
    </div>
  );
};

