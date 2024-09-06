import './App.css';
import live from './Images/live.jpg'

function LiveClassFeature() {
  return (
    <> <hr></hr>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img className="Content-img" src={live} alt="Introduction" />
        </div>
        <div className="col-md-6">
          <div className="content-details-right">
            <h2>Attend Live classes</h2>
            
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default LiveClassFeature;
