import {Chart, registerables} from 'chart.js';
import LineChart from "./LineChart";
import PieChart from "./PieChart";
Chart.register(...registerables);

function Home() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
          <div className='d-flex justify-content-around align-items-center border border-secondary p-3 my-2 shadow-sm'>
            <i className='bi bi-currency-dollar fs-1 text-success'></i>
            <div>
              <span>Sales</span>
              <h2>234</h2>
            </div>
          </div>
        </div>
        <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
          <div className='d-flex justify-content-around align-items-center border border-secondary p-3 my-2 shadow-sm'>
            <i className='bi bi-truck fs-1 text-primary'></i>
            <div>
              <span>Delivery</span>
              <h2>240</h2>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className='d-flex justify-content-around align-items-center border border-secondary p-3 my-2 shadow-sm'>
            <i className='bi bi-graph-up-arrow fs-1 text-warning'></i>
            <div>
              <span>Increase</span>
              <h2>20%</h2>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className='d-flex justify-content-around align-items-center  border border-secondary p-3 my-2 shadow-sm'>
            <i className='bi bi-truck fs-1 text-danger'></i>
            <div>
              <span>Delivery</span>
              <h2>240</h2>
            </div>
          </div>
        </div>
        
      </div>
      <div className='row'>
        <div className='col-12 col-md-8 p-3'>
          <LineChart />
        </div>
        <div className='col-12 col-md-4 p-3'>
          <PieChart />
        </div>
      </div>
    </div>
  ) 
}

export default Home;