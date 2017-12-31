import React from 'react';
import MuscleGroupInput from './MuscleGroupInput'

export class ExerciseForm extends React.Component {

  render() {
    return (
      <div>
        <h2>Add Exercise</h2>
        <form>
          <label htmlFor="name">Name</label> 
          <input type="text" name="name"/>
          <label htmlFor="muscleGroup">MuscleGroup</label>
          <select name="muscleGroup"><MuscleGroupInput /></select>
        </form>
      </div>

    )

  }
}