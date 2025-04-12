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

const groupedItems = {
  "Itens de Uso Único / Descartáveis": [
    { item: "Luva estéril (par)", co2: 0.060, suggestion: "Use luvas reutilizáveis esterilizáveis." },
    { item: "Máscara cirúrgica", co2: 0.021, suggestion: "Considere máscaras reutilizáveis esterilizadas." },
    { item: "Avental descartável", co2: 0.300, suggestion: "Use aventais de tecido com lavagem hospitalar." },
    { item: "Seringa e agulha", co2: 0.030, suggestion: "Avalie opções de seringas reutilizáveis com esterilização adequada." },
    { item: "Fio de sutura", co2: 0.040 },
    { item: "Campo cirúrgico descartável", co2: 0.150, suggestion: "Substitua por campos cirúrgicos de tecido reutilizável." },
    { item: "Dreno cirúrgico", co2: 0.050 },
    { item: "Touca descartável", co2: 0.020, suggestion: "Considere toucas de tecido reutilizável." },
    { item: "Lâmina de bisturi descartável", co2: 0.030 },
    { item: "Esponja/gaze", co2: 0.010 },
    { item: "Kit de aspiração", co2: 0.050 },
    { item: "Filtro respiratório", co2: 0.050 }
  ],
  "Materiais de Apoio e Insumos": [
    { item: "Clorexidina", co2: 0.015 },
    { item: "PVPI", co2: 0.015 },
    { item: "Soro fisiológico", co2: 0.010 },
    { item: "Álcool 70%", co2: 0.010 },
    { item: "Adesivo cirúrgico", co2: 0.015 },
    { item: "Curativo pós-operatório", co2: 0.020 },
    { item: "Anestésico", co2: 0.025 },
    { item: "Cimento ósseo", co2: 0.500 },
    { item: "Resíduo infectante", co2: 0.250, suggestion: "Implemente segregação eficiente para reduzir volume de resíduos infectantes." },
    { item: "Resíduo perfurocortante", co2: 0.150 },
    { item: "Resíduo reciclável", co2: 0.050, suggestion: "Garanta triagem correta de resíduos recicláveis para aumentar reciclagem." },
    { item: "Resíduo comum", co2: 0.020 }
  ],
  "Equipamentos e Energia": [
    { item: "Foco cirúrgico", co2: 1.500, suggestion: "Reduza tempo de uso e otimize iluminação." },
    { item: "Equipamento de vídeo", co2: 1.200, suggestion: "Desligue equipamentos de vídeo quando não estiverem em uso." },
    { item: "Equipamento de anestesia", co2: 2.000, suggestion: "Evite vazamentos e mantenha a manutenção preventiva em dia." },
    { item: "Monitor multiparamétrico", co2: 1.800 },
    { item: "Eletrocautério", co2: 1.000 },
    { item: "Aspirador cirúrgico", co2: 1.000 },
    { item: "Autoclave", co2: 0.500, suggestion: "Utilize autoclave sempre com carga máxima para melhor eficiência." }
  ]
};

export default function App() {
  const [showCalculator, setShowCalculator] = useState(false);
  const [selected, setSelected] = useState({});
  const [total, setTotal] = useState(null);
  const [tips, setTips] = useState([]);

  const toggleItem = (itemName) => {
    setSelected((prev) => {
      const newSelected = { ...prev };
      if (newSelected[itemName]) {
        delete newSelected[itemName];
      } else {
        newSelected[itemName] = 1;
      }
      return newSelected;
    });
  };

  const updateQuantity = (itemName, qty) => {
    setSelected((prev) => ({
      ...prev,
      [itemName]: Number(qty),
    }));
  };

  const calculate = () => {
    const tipsSet = new Set();
    const totalValue = Object.values(groupedItems)
      .flat()
      .reduce((sum, i) => {
        const qty = selected[i.item] || 0;
        if (qty > 0 && i.suggestion) tipsSet.add(i.suggestion);
        return sum + i.co2 * qty;
      }, 0);
    setTotal(totalValue.toFixed(3));
    setTips(Array.from(tipsSet));
  };

  if (showCalculator) {
    return (
      <div className="max-w-4xl mx-auto p-6 space-y-6 bg-white rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold text-center text-[#007f7f]">Calculadora de CO₂ de Procedimento Cirúrgico</h1>
        <div className="overflow-y-scroll h-[450px] border border-gray-200 rounded-xl p-4 bg-gray-50">
          {Object.entries(groupedItems).map(([group, items]) => (
            <div key={group} className="mb-4">
              <h2 className="text-lg font-semibold text-[#007f7f] border-b pb-1">{group}</h2>
              {items.map((i, idx) => (
                <div key={idx} className="flex items-center gap-4 py-1">
                  <input
                    type="checkbox"
                    checked={selected[i.item] > 0}
                    onChange={() => toggleItem(i.item)}
                  />
                  <span className="w-72 text-gray-700">{i.item}</span>
                  {selected[i.item] > 0 && (
                    <input
                      type="number"
                      min={1}
                      value={selected[i.item]}
                      onChange={(e) => updateQuantity(i.item, e.target.value)}
                      className="w-20 border rounded px-2 py-1"
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="bg-[#007f7f] hover:bg-[#005b5b] text-white px-6 py-2 text-lg rounded" onClick={calculate}>
            Calcular CO₂
          </button>
        </div>
        {total !== null && (
          <div className="bg-green-50 border border-green-200 p-6 text-center rounded">
            <p className="text-xl font-semibold text-green-800">
              Emissão estimada: <span className="font-bold">{total} kg CO₂</span>
            </p>
            {tips.length > 0 && (
              <div className="text-left text-sm text-gray-700 space-y-1 mt-4">
                <p className="font-semibold text-green-700">Dicas para reduzir emissões:</p>
                <ul className="list-disc list-inside">
                  {tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-6">
              <button className="text-sm text-[#007f7f] underline" onClick={() => setShowCalculator(false)}>
                Voltar para a tela principal
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

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
            <p className="text-center text-sm text-[#007f7f] whitespace-nowrap">60% das metas de sustentabilidade alcançadas</p>
            <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#007f7f]" style={{ width: `60%` }}></div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 gap-4">
        <button
          onClick={() => setShowCalculator(true)}
          className="bg-[#007f7f] hover:bg-[#005b5b] text-white py-3 px-4 text-sm font-bold rounded-xl"
        >
          Calculadora de Emissão de CO₂
        </button>
      </div>
    </div>
  );
}
