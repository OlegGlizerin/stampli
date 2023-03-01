import { InputStampli } from "./InputStampli";
import { SelectStampli } from "./SelectStampli";
import React, { useState, useEffect, useRef } from "react";
import useMediaQuery from "./MediaQuery";
const mainContainerStyle = {
   minWidth: "300px",
   width: "600px",
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   justifyContent: "center",
};

const mainContainerMobileStyle = {
   minWidth: "300px",
   width: "400px",
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   justifyContent: "center",
};

const itemsContainerStyle = {
   color: "blue",
   display: "flex",
   flexWrap: "wrap",
   alignItems: "center",
   justifyContent: "center",
   overflowY: "scroll",
   height: "300px",
   border: "1px solid black",
};

const divStyle2 = {
   display: "flex",
   flexBasis: "40%",
   margin: "1px solid gray",
   minHeight: "120px",
   border: "1px solid lightgray",
};

// "2;1;gender;SELECT;Male,Female",
// "1;1;First Name;TEXT_INPUT;Enter your first name",
// "2;2;marital status;SELECT;Single,Maried,Divorced",
// "1;2;Last Name;TEXT_INPUT;Enter your last name",

const Container = ({ data }) => {
   const [items, setItems] = useState([]);
   const [newRowStr, setNewRowStr] = useState("");
   const divRef = useRef(null);

   const isDesktop = useMediaQuery("(min-width: 960px)");


   useEffect(() => {
      divRef.current.scrollIntoView({ behavior: "smooth" });
      console.log("item created");
   }, [items]);

   return (
      <div style={isDesktop ? mainContainerStyle : mainContainerMobileStyle}>
         <div style={itemsContainerStyle}>
            {items.length === 0 ? (
               <div style={{ padding: "124px" }}>Empty state</div>
            ) : (
               items.map(function (item, i) {
                  const splittedItems = item.split(";");
                  if (splittedItems[3] === "TEXT_INPUT") {
                     return (
                        <div style={divStyle2}>
                           <InputStampli name={splittedItems[4]} key={i} />
                        </div>
                     );
                  } else if (splittedItems[3] === "SELECT") {
                     return (
                        <div style={divStyle2}>
                           <SelectStampli
                              options={splittedItems[4].split(",").map(function (option, i) {
                                 return { value: option, label: option };
                              })}
                              name={splittedItems[2]}
                              key={i}
                           />
                        </div>
                     );
                  }
               })
            )}
            <div id={"el"} ref={divRef}></div>
         </div>

         <div>
            <div>Enter new data:</div>
            <input value={newRowStr} onChange={(e) => setNewRowStr(e.target.value)} />
            <button
               style={{ width: "44px", height: "24px", margin: "12px" }}
               onClick={() => setItems([...items, newRowStr])}
            >
               Add
            </button>
         </div>
      </div>
   );
};

export default { Container };
export { Container };
