import './App.css';
import Placements from './Images/placement.jpeg';

function Placement() {
  return (
   <> <hr></hr>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img className="Content-img" src={Placements} alt="Introduction" />
        </div>
        <div className="col-md-6">
          <div className="content-details-right">
          <h2>Placements</h2>
          <p>We provide Placement with Top companies and also offer trainig to students to prepare themselves for palcement</p>
            
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Placement;
