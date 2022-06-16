import React from 'react';
import {Link} from 'react-router-dom';

const AddContact = () => {
  return (
    <>
      <section className='add-contact p-3'>
        <div className="container">
          <div className="row">
            <div className="col">
              <p className='h3 text-success fw-bold'>Create Contact</p>
              <p className='fst-italic'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia necessitatibus incidunt, 
              debitis ad quibusdam consectetur repellendus id amet. Magnam, qui. Optio cum non beatae doloribus inventore, nemo 
              ratione mollitia adipisci!</p>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-4'>
              <form>
                <div className='mb-2'>
                  <input type="text" className='form-control' placeholder='Name'/>
                </div>
                <div className='mb-2'>
                  <input type="text" className='form-control' placeholder='Photo URL'/>
                </div>
                <div className='mb-2'>
                  <input type="number" className='form-control' placeholder='Mobile Number'/>
                </div>
                <div className='mb-2'>
                  <input type="email" className='form-control' placeholder='E-mail'/>
                </div>
                <div className='mb-2'>
                  <input type="text" className='form-control' placeholder='Company Name'/>
                </div>
                <div className='mb-2'>
                  <input type="text" className='form-control' placeholder='Job Title'/>
                </div>
                <div className='mb-2'>
                  <select className='form-control'>
                    <option value="">Select a Group</option>
                  </select>
                </div>
                <div className='mb-2'>
                  <input type="submit" className='btn btn-success' value="create"/>
                  <Link to={'/Contacts/list'} className="btn btn-dark ms-2">Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AddContact