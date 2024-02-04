import {useState} from 'react';
import {Link} from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Sidebar() {
  const [active, setActive] = useState(1);

  return (
    <div className='sidebar d-flex flex-column justify-content-between bg-dark text-white p-3 vh-100'>
      <div>
        <a href="" className='p-3 text-decoration-none text-white'>
          <i className="bi bi-robot me-4"></i>
          <span className="fs-3">MinTek</span>
        </a>
        <hr className='text-white' />
        <ul className='nav nav-pills flex-column mt-3'>
          <li className={active===1? 'active nav-item p-2': 'nav-item p-2'}
            onClick={e=>setActive(1)}>
            <Link to="/"className='link-light p-1 text-decoration-none'>
              <i className='bi bi-speedometer2 me-3 fs-6'></i>
              <span className='fs-6'>Dashboard</span>
            </Link>
          </li>
          <li className={active===2? 'active nav-item p-2': 'nav-item p-2'}
            onClick={e=>setActive(2)}>
            <Link to="/users" className='link-light p-1 text-decoration-none'>
              <i className='bi bi-people me-3 fs-6'></i>
              <span className='fs-6'>Users</span>
            </Link>
          </li>
          <li className={active===3? 'active nav-item p-2 text-decoration-none': 'nav-item p-2'}
            onClick={e=>setActive(3)}>
            <Link to="/orders" className='link-light p- text-decoration-none'>
              <i className='bi bi-table me-3 fs-6'></i>
              <span className='fs-6'>Orders</span>
            </Link>
          </li>
          <li className={active===4? 'active nav-item p-2': 'nav-item p-2'}
            onClick={e=>setActive(4)}>
            <span className='link-light p-1'>
              <i className='bi bi-grid me-3 fs-6'></i>
              <span className='fs-6'>Report</span>
            </span>
          </li>
        </ul> 
      </div>

      <div>
        <hr className='text-white' />
        <div className='nav-item p-2 fs-6'>
          <a href="" className='link-light p-1 text-decoration-none text-white'>
            <i className='bi bi-person-cirle me-3'></i>
            <span>PHM1605</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;