import './App.css';
import Recording from './Images/live_class_recording_1.webp'

function RecordedClass() {
  return (
    <> <hr></hr>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="content-details-left">
          <h2>Attend Recorded Classes</h2>
            
          </div>
        </div>
        <div className="col-md-6">
          <img className="Content-img" src={Recording} alt="Introduction" />
        </div>
      </div>
    </div>
    </>
  );
}

export default RecordedClass;
