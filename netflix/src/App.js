import Header from "./Componets/Header/Header";
import './App.css'
import Banner from "./Componets/Banner/Banner";
import '@fortawesome/fontawesome-free/css/all.css';
import RowPoster from "./Componets/RowPoster/RowPoster";
import {actions,originals} from './Constants/urls'
function App() {
  return (
    <div className="App">
    <Header/>
    <Banner/>
    <RowPoster url={originals}  title='Netflix Originals'/>
    <RowPoster url={actions} title='Actions' isSmall/>
    </div>
  );
}

export default App;
