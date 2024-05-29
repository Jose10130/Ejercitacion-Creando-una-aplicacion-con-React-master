// import logo from './logo.svg';
import './assets/css/app.css';
import { Contentwrapper } from './components/ContentWrapper';
import { Sidebar } from './components/SideBar';

function App() {
  return (
    <div id="wrapper">

      {/* Sidebar */}
      <Sidebar />
      {/* End of Sidebar */}

      {/* Content Wrapper */}
      <Contentwrapper/>
      {/* End of Content Wrapper */}

    </div>
  );
}

export default App;
