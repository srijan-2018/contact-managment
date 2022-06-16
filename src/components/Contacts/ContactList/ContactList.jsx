import React from 'react';
import {Link} from 'react-router-dom';
import user1 from '../../../assets/user-1.png';

const ContactList = () => {
  return (
    <>
      <section className='contact-search p-3'>
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3">Contact Manager
                  <Link to={'/Contacts/add'} className="btn btn-success ms-2">
                    <i className='fa fa-plus-circle me-2'></i>
                  New</Link>
                </p>

                <p className='fst-italic'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum quae repellat, quisquam quo debitis voluptatum ducimus possimus dolores eveniet necessitatibus blanditiis soluta iusto dolorum? Cum praesentium corporis perspiciatis fugiat consectetur?</p>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-6'>
                <form className='row'>
                  <div className="col">
                    <div className='mb-2'>
                      <input type="text" className="form-control" placeholder='Search Names' />
                    </div>
                  </div>

                  <div className="col">
                    <div className='mb-2'>
                      <input type="submit" className="btn btn-outline-dark" value='Search' />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='contact-list'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className='row align-items-center justify-content-around'>
                    <div className="col-4">
                      <img src={user1} alt="" className='contact_img'/> 
                    </div>
                    <div className="col-8">
                      <ul className='list-group'>
                        <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>
                          Name : <span className='fw-bold'>Srijan</span>

                        <Link to={'/Contacts/view/:contactId'}className='btn btn-warning'>
                          <i className='fa fa-eye'></i>
                        </Link>
                        </li>

                        <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>
                          Mobile : <span className='fw-bold'>9876543210</span>

                        <Link to={'/Contacts/edit/:contactId'}className='btn btn-primary'>
                          <i className='fa fa-edit'></i>
                        </Link>
                        </li>

                        <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>
                          Email : <span className='fw-bold'>srijandas@gmail.com</span>

                        <button className='btn btn-danger'>
                          <i className='fa fa-trash'></i>
                        </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 mt-3">
              <div className="card">
                <div className="card-body">
                  <div className='row align-items-center justify-content-around'>
                    <div className="col-4">
                      <img src={user1} alt="" className='contact_img'/> 
                    </div>
                    <div className="col-8">
                      <ul className='list-group'>
                        <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>
                          Name : <span className='fw-bold'>Srijan</span>

                        <Link to={'/Contacts/view/:contactId'}className='btn btn-warning'>
                          <i className='fa fa-eye'></i>
                        </Link>
                        </li>

                        <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>
                          Mobile : <span className='fw-bold'>9876543210</span>

                        <Link to={'/Contacts/edit/:contactId'}className='btn btn-primary'>
                          <i className='fa fa-edit'></i>
                        </Link>
                        </li>

                        <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>
                          Email : <span className='fw-bold'>srijandas@gmail.com</span>

                        <button className='btn btn-danger'>
                          <i className='fa fa-trash'></i>
                        </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactList