import logo from "./logo.svg";
import "./App.css";
import { Input } from "./components/InputStampli";
import { SelectStampli } from "./components/SelectStampli";
import { Container } from "./components/Container";

const data = [
   "2;1;gender;SELECT;Male,Female",
   "1;1;First Name;TEXT_INPUT;Enter your first name",
   "2;2;marital status;SELECT;Single,Maried,Divorced",
   "1;2;Last Name;TEXT_INPUT;Enter your last name",
];

function App() {
   return (
      <div className="App">
         {/* <Input name="stampli" />
         <SelectStampli /> */}
         <Container data={data} />
      </div>
   );
}

export default App;
