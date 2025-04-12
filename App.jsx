import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const data = [
  { month: "Jan", carbon: 450 },
  { month: "Fev", carbon: 400 },
  { month: "Mar", carbon: 350 },
  { month: "Abr", carbon: 300 },
  { month: "Mai", carbon: 280 },
];

export default function App() {
  const [progress, setProgress] = useState(60);

  return (
    <div className="p-6 space-y-6 max-w-sm mx-auto bg-white rounded-lg shadow-md text-[#005b96]">
      <h1 className="text-2xl font-bold text-center text-[#007f7f] mt-2">CO₂nnect Hospitalar</h1>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className="p-2 shadow-md rounded-lg border border-gray-200">
          <div className="flex justify-center items-center h-[250px]">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <XAxis dataKey="month" tick={{ fontSize: 14 }} padding={{ left: 10, right: 10 }} />
                <YAxis tick={{ fontSize: 14 }} padding={{ top: 10, bottom: 10 }} />
                <Tooltip formatter={(value) => `${value} kg CO₂`} />
                <Line type="monotone" dataKey="carbon" stroke="#007f7f" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className="p-4 shadow-md rounded-lg border border-gray-200">
          <div className="flex flex-col justify-center items-center">
            <p className="text-center text-sm text-[#007f7f] whitespace-nowrap">{progress}% das metas de sustentabilidade alcançadas</p>
            <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#007f7f]" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
