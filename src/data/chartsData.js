const chartOneData = {
  chart: {
    type: "bar",
    // height: "auto",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10,
    },
    dataLabels: {
      position: "top",
    },
    backgroundBarColors: ["#F0F0F4"],
  },
  fill: {
    colors: ["#F0F0F4"],
  },
  series: [
    {
      name: "Example Series",
      data: [91, 40, 45, 50, 49, 60, 70, 91, 49, 60, 70, 91],
    },
  ],
  grid: { show: false },
  xaxis: {
    show: false,
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    lines: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    lines: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
    style: {
      colors: ["#F44336", "#E91E63", "#9C27B0"],
    },
  },
};

const chartTwoData = {
  series: [
    {
      name: "Q1 Budget",
      group: "budget",
      data: [120, 450, 340, 850],
    },
    {
      name: "Q2 Budget",
      group: "budget",
      data: [200, 1000],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 550,
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    dataLabels: {
      formatter: (val) => {
        return val / 100 + "%";
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        // borderRadius: 8,
      },
    },
    xaxis: {
      categories: ["Service", "Qualité", "Ambiance", "Prix"],
      labels: {
        formatter: (val) => {
          return val / 100 + "%";
        },
      },
      show: true,
    },

    fill: {
      opacity: 1,
    },
    colors: ["#A1A3F7", "#4285F4", "#4285F4", "#00E396"],
    legend: {
      show: false,
    },
    grid: { show: false },
  },
};

const chartThreeData = {
  series: [
    {
      name: "High - 2013",
      data: [4, 3.5, 4.5, 2.9, 3.2, 3],
    },
  ],
  options: {
    chart: {
      height: "auto",
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#A1A3F7", "#A1A3F7"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#fff", "transparent"],
        opacity: 0,
      },
    },
    xaxis: {
      categories: ["Ap", "Ma", "Ju", "Jul", "Au", "Se", "Oc", "No", "De"],
    },
    yaxis: {
      min: 0,
      max: 5,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
  },
};

export { chartOneData, chartTwoData, chartThreeData };
