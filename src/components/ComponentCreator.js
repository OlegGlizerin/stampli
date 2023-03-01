const ComponentCreator = ({ row }) => {
   return (
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
         <div style={{ paddingRight: '12px'}}>Enter new data:</div>
         <input name={name} />
      </div>
   );
};

export default { ComponentCreator };
export { ComponentCreator };
