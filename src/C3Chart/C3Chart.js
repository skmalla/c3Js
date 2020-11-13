import React, { useEffect } from "react";
import c3 from "c3";

const getConfig = () => {
  return fetch(
    "https://grcnext-api.firebaseio.com/chartData.json"
  ).then((data) => data.json());
};

const C3Chart = () => {
  useEffect(() => {
    getConfig().then((items) => {
      const {
        data: { json, type, colors, names },
        axis,
        size,
        title,
      } = items;

      c3.generate({
        bindto: "#chart",
        size: size,
        data: {
          json: json,
          type: type,
          colors: colors,
          names: names,
        },
        title: title,
        axis: axis,
      });
    });
  }, []);

  return <div id="chart" />;
};

export default C3Chart;
