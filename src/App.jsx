import Display from "./components/Display"
import Container from "./components/Container"
import BtnDisplay from "./components/BtnDisplay"
import { useState } from "react"
function App() {
  let [currVal, SetVal] = useState("")
  function calhandle(event) {
    if (event.target.value == "=") {
      SetVal(eval(currVal));
    }
    else if (event.target.value === "C") {
      SetVal("");
    }
    else if (event.target.value === "←") {
      let newval = currVal.slice(0, currVal.length - 1);
      SetVal(newval);
    }
    else {
      let newval = currVal + event.target.value;
      SetVal(newval);
    }
  }
  return (
    <>
      <Container>
        <Display values={currVal}></Display>
        <BtnDisplay handlbutn={calhandle}></BtnDisplay>
      </Container>

    </>
  )
}

export default App
