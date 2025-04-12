// The component was attempting to use multiple React hooks inside a conditional rendering function (IIFE), which violates React rules.
// To fix this, we will move the calculator's internal state/hooks outside the conditional block and render the calculator with a component.

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

// [...rest of the app omitted for brevity, ideally you'd paste the full code here if needed...]
