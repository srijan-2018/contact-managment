import React from 'react';
import { Link } from 'react-router-dom';
import user1 from '../../../assets/user-1.png';

const ViewContact = () => {
  return (
    <>
      <section className='view-contact-intro p-3'>
        <div className="container">
          <div className="row">
            <div className="col">
              <p className='h3 text-warning fw-bold'>View contact</p>
              <p className='fst-italic'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus ipsa consequatur accusamus ad laudantium sequi eveniet sunt iusto ut, quasi
                assumenda illo nemo dignissimos similique fugiat facilis sit architecto quaerat.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="view-contact mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={user1} alt="" className='img-fluid' />
            </div>
            <div className="col-md-8">
              <ul className='list-group'>
                <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>
                  Name : <span className='fw-bold'>Srijan</span>
                </li>

                <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>
                  Mobile : <span className='fw-bold'>9876543210</span>
                </li>

                <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>
                  Email : <span className='fw-bold'>srijandas@gmail.com</span>
                </li>

                <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>
                  Company : <span className='fw-bold'>srijandas@gmail.com</span>
                </li>

                <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>
                  Title : <span className='fw-bold'>srijandas@gmail.com</span>
                </li>

                <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>
                  Group : <span className='fw-bold'>srijandas@gmail.com</span>
                </li>

              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link to={'/Contacts/list'} className="btn btn-warning">Back</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ViewContact