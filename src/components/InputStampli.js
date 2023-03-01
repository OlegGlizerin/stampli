const InputStampli = ({ name }) => {
   return (
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
         <div style={{ paddingRight: '12px'}}>{name}:</div>
         <input name={name} />
      </div>
   );
};

export default { InputStampli };
export { InputStampli };
