import React from 'react';

class Habit extends React.Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  render () {
    return (
      <>
        <section className='d-flex flex-column justify-content-center align-items-center'>
          <h1>New Habit</h1>
          <form className='col-3'>
            <div className='mb-3'>
              <label className='form-label'>Habit:</label>
              <input className='form-control' type='text' required />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Description:</label>
              <textarea className='form-control'></textarea>
            </div>
            <div className='mb-3'>
              <label className='form-label'>Every:</label>
              <div className="input-group">
                <input className='form-control' type='number' step='1' min='0' value='1' />
                <select className='form-select'>
                  <option>Hour(s)</option>
                  <option selected>Day(s)</option>
                  <option>Week(s)</option>
                  <option>Month(s)</option>
                  <option>Year(s)</option>
                </select>
              </div>
            </div>
            <div className='mb-3'>
              <label className='form-label'>At:</label>
              <input className='form-control' type='time' />
            </div>
          </form>
        </section>
      </>
    );
  }
}

export { Habit };
