import React, { useState } from "react";
import './PgTask.css';
function PgTask() {
  const inputArr = [
    {
      type: "text",
      id: 1,
      value: ""
    }
  ];

  const [arr, setArr] = useState(inputArr);
  const addInput = () => {
    setArr(s => {
      return [
        ...s,
        {
          type: "text",
          value: ""
        }
      ];
    });
  };

  const handleChange = e => {
    e.preventDefault();
    const index = e.target.id;
    setArr(s => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;
      return newArr;
    });
  };

  return (
    <div>
      {arr.map((item, i) => {
        return (
          <div className="">
            <div className="">
              <input
                className="box "
                onChange={handleChange}
                value={item.value}
                id={i}
                type={item.type}
                size="40"
              />
              <button className="btn btn-primary"
               onClick={addInput}>+</button>

            </div>
           

          </div>

        );
      })}
      <ul className="mt-5">{arr.map(v => {
        return (
          <li>{v.value}</li>
        )
      })}
      </ul>
    </div>
  );
}
export default PgTask;