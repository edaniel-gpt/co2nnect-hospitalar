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
  return <div>App carregado corretamente.</div>;
}
