import React,{Suspense} from "react";
import 'antd/dist/antd.css'
import './App.css';
const PageLayout=React.lazy(()=>import("./components/Layout"));
const LazyFallback = () => <h4>Loading...</h4>;

function App() {
  return (
    <div className="App">
        <Suspense fallback={<LazyFallback />}>
            <PageLayout/>
        </Suspense>

    </div>
  );
}

export default App;
