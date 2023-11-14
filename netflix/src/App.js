import Header from "./Componets/Header/Header";
import './App.css'
import Banner from "./Componets/Banner/Banner";
import '@fortawesome/fontawesome-free/css/all.css';
import RowPoster from "./Componets/RowPoster/RowPoster";
import {actions,originals,Crime,Family,Fantasy,HistoryMovies,Horror,Romance,AnimationMovies,Adventure} from './Constants/urls'
import Footer from "./Componets/Footer/Footer";
function App() {
  return (
    <div className="App">
    <Header/>
    <Banner/>
    <RowPoster url={originals}  title='Netflix Originals'/>
    <RowPoster url={actions} title='Actions' isSmall/>
    <RowPoster url={Crime} title='Crime' isSmall/>
    <RowPoster url={Family} title='Family' isSmall/>
    <RowPoster url={Fantasy} title='Fantasy' isSmall/>
    <RowPoster url={HistoryMovies} title='HistoryMovies' isSmall/>
    <RowPoster url={Horror} title='Horror' isSmall/>
    <RowPoster url={Romance} title='Romance' isSmall/>
    <RowPoster url={AnimationMovies} title='AnimationMovies' isSmall/>
    <RowPoster url={Adventure} title='Adventure' isSmall/>
    <Footer/>
    </div>
  );
}

export default App;
