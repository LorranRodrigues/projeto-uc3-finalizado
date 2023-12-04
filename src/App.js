import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  return (
   <div className='container-fluid p-0 m-0'>
      <div className="row p-0 m-0">
        <div className="col-12 p-0 m-0">
        <NavBar/>
        </div>
      </div>
      <div className="row p-0 m-0">
        <div className="col-12 p-0 m-0">
          <Footer/>
        </div>
      </div>
   </div>
  );
}

export default App;
