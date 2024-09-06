import './App.css';
import EdTech from './Images/edtech.png';

function Content() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="content-details-left">
            <h1>What is EdTech ?</h1>
            <p>EdTech, short for education technology, refers to new technological implementations in the classroom. 
              In-classroom tablets, interactive projection screens and whiteboards, 
              online content delivery, and MOOCs are all examples of EdTech.
            </p>
            <button className="btn btn-dark btn-signup">Sign up for Free</button>
          </div>
        </div>
        <div className="col-md-6">
          <img className="intro-img" src={EdTech} alt="Introduction" />
        </div>
      </div>
    </div>
  );
}

export default Content;
