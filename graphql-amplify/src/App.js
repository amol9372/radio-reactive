import "./App.css";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import config from "./aws-exports";
import { useEffect, useState } from "react";
import { listTalks as lt } from "./graphql/queries";
Amplify.configure(config);

function App() {
  const [talks, setTalks] = useState([]);

  useEffect(() => {
    API.graphql(graphqlOperation(lt)).then((res) => {
      setTalks(res.data.listTalks.items);
      console.log(res.data.listTalks.items);
    });

    console.log("Use effect is working");
  }, []);

  return (
    <div className="App">
      <p className="text-monospace m-3">this is sample graphqlOperation API</p>
      {talks.map((talk) => (
        <div className="d-flex m-2" key={talk.id}>
          {" "}
          {talk.speakerName}
        </div>
      ))}
    </div>
  );
}

export default App;
