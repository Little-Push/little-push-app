import React from 'react';
import { Client } from './models/client.js';
import { HabitModel } from './models/habit.js';

class Habit extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      habit: null
    };
  }

  componentDidMount () {
    this.habit = new HabitModel(this, 'habit');
  }

  render () {
    if (!this.state.habit) {
      return null;
    }
    return (
      <>
        <section className='d-flex flex-column justify-content-center align-items-center'>
          <h1>New Habit</h1>
          <form
            className='col-3'
            onSubmit={async e => {
              e.preventDefault()
              const response = await this.habit.save()
              console.log({ response })
            }}
          >
            <div className='mb-3'>
              <label className='form-label'>Habit:</label>
              <input
                className='form-control'
                type='text'
                required
                value={this.habit.name}
                onChange={e => this.habit.name = e.target.value}
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Description:</label>
              <textarea
                className='form-control'
                value={this.habit.description}
                onChange={e => this.habit.description = e.target.value}
              ></textarea>
            </div>
            <div className='mb-3'>
              <label className='form-label'>Every:</label>
              <div className="input-group">
                <input
                  className='form-control'
                  type='number'
                  step='1'
                  min='0'
                  value={this.habit.intervalCount}
                  onChange={e => this.habit.intervalCount = e.target.value}
                />
                <select
                  className='form-select'
                  value={this.habit.intervalType}
                  onChange={e => this.habit.intervalType = e.target.value}
                >
                  <option>Hour(s)</option>
                  <option>Day(s)</option>
                  <option>Week(s)</option>
                  <option>Month(s)</option>
                  <option>Year(s)</option>
                </select>
              </div>
            </div>
            <div className='mb-3'>
              <label className='form-label'>At:</label>
              <input
                className='form-control'
                type='time'
                value={this.habit.time}
                onChange={e => this.habit.time = e.target.value}
              />
            </div>
            <div className="text-end">
              <button type='submit' className='btn btn-primary'>Save</button>
            </div>
          </form>
        </section>
      </>
    );
  }
}

export { Habit };
