import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, TimeScale, Tooltip, Filler } from "chart.js";
import "chartjs-adapter-date-fns";

ChartJS.register(LineElement, PointElement, LinearScale, TimeScale, Tooltip, Filler);

const WeightLossChart = ({ startDateUnix, startWeight, endDateUnix, targetWeight }) => {
  const startDate = new Date(startDateUnix * 1000);
  const endDate = new Date(endDateUnix * 1000);
  const twoWeeksAfterStart = new Date(startDate.getTime() + 14 * 24 * 60 * 60 * 1000);
  const twoWeeksAfterEnd = new Date(endDate.getTime() + 21 * 24 * 60 * 60 * 1000);
  const isWeightEqual = startWeight === targetWeight;

  const middleDate = isWeightEqual ? new Date((startDate.getTime() + endDate.getTime()) / 2) : endDate;

  const formatMonth = (date) => date.toLocaleString("en-US", { month: "short" }).slice(0, 3);

  const data = {
    datasets: [
      {
        label: "Weight Progress",
        data: [
          { x: startDate, y: startWeight },
          { x: twoWeeksAfterStart, y: startWeight },
          { x: middleDate, y: targetWeight },
          { x: twoWeeksAfterEnd, y: targetWeight },
        ],
        borderColor: "#241063",
        backgroundColor: "#FFC1CC",
        fill: "start",
        pointRadius: (context) => (context.dataIndex === 2 ? 6 : 0),
        pointBackgroundColor: "#FF5C1D",
        pointBorderColor: "#FF5C1D",
        tension: 0.1,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "month",
          displayFormats: {
            month: "MMM",
          },
        },
        ticks: {
          color: "#999",
          font: {
            family: '"Circular Std"',
            size: 14,
            style: "normal",
            weight: 500,
            lineHeight: 1.14286,
          },
          callback: function (value, index, values) {
            const date = new Date(value);
            if (index === 0 || index === values.length - 1) {
              return formatMonth(date);
            }
            return null;
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        min: Math.min(startWeight, targetWeight) - 6,
        max: isWeightEqual ? Math.max(startWeight, targetWeight) + 20 : Math.max(startWeight, targetWeight) + 6,
        ticks: {
          color: "#999",
          font: {
            family: "Circular Std",
            size: 14,
            style: "normal",
            weight: 500,
            lineHeight: 1.14286,
          },
          callback: function (value) {
            if (value === startWeight || value === targetWeight) {
              return value;
            }
            return null;
          },
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      customTooltip: {
        id: "customTooltip",
        afterDraw: (chart) => {
          const ctx = chart.ctx;
          const targetPoint = chart.getDatasetMeta(0).data[2];

          if (targetPoint) {
            const x = targetPoint.x;
            const y = targetPoint.y - 40;
            const text = isWeightEqual ? "Lifestyle shift" : `Goal\n${targetWeight} kg`;
            const fontSize = 12;
            const lineHeight = fontSize + 4;

            ctx.font = `${fontSize}px Circular Std`;
            const textMetrics = ctx.measureText(isWeightEqual ? text : "Goal");
            const tooltipWidth = isWeightEqual ? textMetrics.width + 20 : 40;
            const tooltipHeight = isWeightEqual ? 30 : 40;

            ctx.save();
            ctx.fillStyle = "#FF5C1D";
            ctx.beginPath();
            ctx.roundRect(x - tooltipWidth / 2, y - tooltipHeight / 2, tooltipWidth, tooltipHeight, 5);
            ctx.fill();

            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            if (isWeightEqual) {
              ctx.fillText(text, x, y + fontSize / 2);
            } else {
              ctx.fillText("Goal", x, y - lineHeight / 2 + fontSize / 2);
              ctx.fillText(`${targetWeight} kg`, x, y + lineHeight / 2 + fontSize / 2);
            }
            ctx.restore();
          }
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ height: "120px", width: "100%", position: "relative" }}>
      <Line
        data={data}
        options={options}
        plugins={[
          {
            id: "customTooltip",
            afterDraw: options.plugins.customTooltip.afterDraw,
          },
        ]}
      />
    </div>
  );
};

export default WeightLossChart;
