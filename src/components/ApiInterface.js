import React from 'react';

class ApiInterface {
  muscleGroups = ['Select','Pecs','Abs','Obliques','Glutes','Hamstrings'];

  getWorkoutTypes = () => {
    return ['Full Body','Upper Body','Lower Body'];
  }
  getMuscleGroups = () => {
    return this.muscleGroups;
  }

}

export default ApiInterface;