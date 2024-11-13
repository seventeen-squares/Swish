
import {Swish} from "@/components/swish.tsx";
import Layout from "./components/layout/Layout";
import "./App.css";

function App() {

  return (
    <>
      <Layout>
        <Swish />
        {/*<div className="">*/}
        {/*  <a href="https://vite.dev" target="_blank">*/}
        {/*    <img src={viteLogo} className="logo" alt="Vite logo" />*/}
        {/*  </a>*/}
        {/*  <a href="https://react.dev" target="_blank">*/}
        {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/}
        {/*  </a>*/}
        {/*</div>*/}
        {/*<h1>Vite + React</h1>*/}
        {/*<div className="card">*/}
        {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
        {/*    count is {count}*/}
        {/*  </button>*/}
        {/*  <p>*/}
        {/*    Edit <code>src/App.tsx</code> and save to test HMR*/}
        {/*  </p>*/}
        {/*  <Button>Click me</Button>*/}
        {/*</div>*/}
        {/*<p className="read-the-docs">*/}
        {/*  Click on the Vite and React logos to learn more*/}
        {/*</p>*/}
      </Layout>
    </>
  );
}

export default App;
