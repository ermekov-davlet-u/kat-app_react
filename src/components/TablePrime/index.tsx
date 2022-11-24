import { Workbook } from "@fortune-sheet/react";
// try commenting the next line out
import "@fortune-sheet/react/dist/index.css";
import { useEffect } from 'react';

const TablePrime = () => {
  
  return (
    <div
      style={{
        width: "100%",
        height: "800px"
      }}
    >
      <Workbook data={[{ name: "Sheet1" }]} onChange={(e) => {
        console.log(e[0].data);
      }} />
    </div>
  );
};

export default TablePrime;