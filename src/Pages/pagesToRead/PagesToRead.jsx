import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { BookContext } from "../../context/BookContext";

const COLORS = ["#22a7f0", "#1abc9c", "#f5a623", "#e67e22", "#e74c3c"];

// Custom spike shape: draws a sharp mountain/flame using SVG cubic bezier curves.
// The spike is wide at the base and tapers to a sharp point at the top.
const SpikeShape = (props) => {
  const { x, y, width, height, fill } = props;
  if (!height || height <= 0) return null;

  const cx = x + width / 2; // center x
  const bottom = y + height; // base y
  const top = y; // peak y
  const halfW = width * 0.48; // half base width

  // Control points: pull inward aggressively to create the narrow flame shape
  // The spike is very narrow in the middle, wide at the base
  const cp1x = cx - halfW * 0.15;
  const cp1y = bottom - height * 0.35;
  const cp2x = cx + halfW * 0.15;
  const cp2y = bottom - height * 0.35;

  const d = [
    `M ${cx - halfW} ${bottom}`,          // bottom-left corner
    `C ${cx - halfW * 0.6} ${bottom}`,    // control: curve inward from base
    `  ${cp1x} ${cp1y}`,                   // control: narrow toward peak
    `  ${cx} ${top}`,                      // peak (sharp point)
    `C ${cp2x} ${cp2y}`,                   // control: widen from peak
    `  ${cx + halfW * 0.6} ${bottom}`,    // control: back to base
    `  ${cx + halfW} ${bottom}`,           // bottom-right corner
    "Z",
  ].join(" ");

  return <path d={d} fill={fill} opacity={0.9} />;
};

// Custom label above each spike
const CustomLabel = (props) => {
  const { x, y, width, value, fill } = props;
  if (!value) return null;
  return (
    <text
      x={x + width / 2}
      y={y - 10}
      textAnchor="middle"
      fontSize={13}
      fontWeight="700"
      fill={fill}
      fontFamily="sans-serif"
    >
      {value}
    </text>
  );
};

// Custom tooltip
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const d = payload[0].payload;
    return (
      <div className="bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-lg text-sm">
        <p className="font-bold text-gray-800">{d.bookName}</p>
        <p className="text-gray-500">Pages: <span className="font-semibold text-gray-700">{d.totalPages}</span></p>
      </div>
    );
  }
  return null;
};

const PagesToRead = () => {
  const { readList } = useContext(BookContext);

  const books = readList.slice(0, 5);

  const data = books.map((book) => ({
    bookName: book.bookName,
    totalPages: book.totalPages,
  }));

  const maxPages = Math.max(...data.map((d) => d.totalPages), 340);
  const yMax = Math.ceil(maxPages / 85) * 85;
  const yTicks = [];
  for (let v = 0; v <= yMax; v += 85) yTicks.push(v);

  return (
    <div className="bg-[#13131310] rounded-3xl p-6 mx-auto my-10 max-w-4xl">
      <ResponsiveContainer width="100%" height={480}>
        <BarChart
          data={data}
          margin={{ top: 50, right: 40, left: 10, bottom: 20 }}
          barCategoryGap="30%"
        >
          <CartesianGrid
            strokeDasharray="5 5"
            vertical={false}
            stroke="#cccccc"
          />
          <XAxis
            dataKey="bookName"
            tick={{ fontSize: 12, fill: "#555", fontFamily: "sans-serif" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[0, yMax]}
            ticks={yTicks}
            tick={{ fontSize: 12, fill: "#888", fontFamily: "sans-serif" }}
            axisLine={false}
            tickLine={false}
            width={40}
            tickFormatter={(v) => (v === 0 ? "00" : v)}
          />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Bar
            dataKey="totalPages"
            shape={<SpikeShape />}
            isAnimationActive={true}
            animationDuration={800}
            label={(props) => {
              const idx = data.findIndex(
                (d) => d.bookName === props.bookName
              );
              return (
                <CustomLabel
                  {...props}
                  fill={COLORS[props.index % COLORS.length]}
                />
              );
            }}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;