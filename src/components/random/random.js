import React, { useState } from "react";
import RandomBtn from "../RandomBtn/RandomBtn";
import ShowRandom from "../ShowRandomNumber/ShowRandom";

const arr1 = ["0", "0", "0", "0", "0", "0", "0", "0"];
const arr = [
  "55742147",
  "55486600",
  "22574217",
  "99742143",
  "55994244",
  "55749047",
  "55742187",
  "50742147",
];

const Random = () => {
  const [result, setResult] = useState(arr1);

  const randomHandler = () => {
    let refreshIntervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * arr.length);
      const item = arr[randomIndex].split("");
      setResult(item);
      setTimeout(() => {
        clearInterval(refreshIntervalId);
      }, 6000);
    }, [1]);
  };
  console.log("arr===>: ", arr);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {result &&
          result.map((val) => {
            return <div id="boxCount">{val && val} </div>;
          })}
      </div>

      <div>
        <RandomBtn randomHandler={randomHandler} />
      </div>
    </div>
  );
};

export default Random;

// const arrList = [
//   { key: 1, value: "55742147", name: "ສົມພອນ" },
//   { key: 2, value: "55486600", name: "ສົມສີ" },
//   { key: 3, value: "225742147", name: "ສົມດີ" },
//   { key: 4, value: "99742147", name: "ສົມສະອາດ" },
//   { key: 5, value: "559942147", name: "ສົມກອນ" },
//   { key: 6, value: "55749947", name: "ສົມກົມ" },
//   { key: 7, value: "55742187", name: "ສົມພອຍ" },
//   { key: 8, value: "56142147", name: "ສົມຊາຍ" },
//   { key: 9, value: "558842147", name: "ສົມພູ" },
//   { key: 10, value: "50742147", name: "ສົມດອນ" },
// ];
