import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import MainRoutes from './Components/MainRoutes';

function App() {
  return (
    <div className="App" style={{display:"flex",margin:"0px",padding:"0px",width:"100%"}}>
 <div style={{width:"249px",backgroundColor:"#181818"}}>
 <Sidebar />
 </div>
  <div style={{width:"calc(100% - 249px)",backgroundColor:"#FAFAFA"}}>
  <MainRoutes />
  </div>
 </div>
  );
}

export default App;
