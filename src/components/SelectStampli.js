import Select from "react-select";
import React from "react";

const SelectStampli = ({ name, options }) => {
   return (
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
         <div style={{ paddingRight: '12px'}}>
            {name}
         </div>
         <Select options={options} />
      </div>
   );
};

export default { SelectStampli };
export { SelectStampli };
