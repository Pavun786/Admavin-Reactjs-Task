import logo from './logo.svg';
import './App.css';
import AllTasks from './AllTasks';
import {Routes,Route} from "react-router-dom"
import ElementTransfer from './ElementTransfer';
import InfiniteScroll from './InfiniteScroll';
import MindGame from './MindGame';
import NestedList from "./Components4/NestedList"

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<AllTasks/>}/>
      <Route path='/element-transfer' element={<ElementTransfer/>}/>
      <Route path='/infinite-scroll' element={<InfiniteScroll/>}/>
      <Route path='/game' element={<MindGame/>}/>
      <Route path='/nested-link' element={<NestedList/>}/>
     </Routes>
    </div>
  );
}

export default App;
