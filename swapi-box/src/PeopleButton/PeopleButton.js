import React from 'react';

export const PeopleButton = ({ viewPeople, cleanPeople, retrieveData}) => {
  return (
    <button onClick={() => viewPeople(cleanPeople, retrieveData)}>
      people
    </button>
  )
}
