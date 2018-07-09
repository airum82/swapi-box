import React from 'react';
import PropTypes from 'prop-types'

export const PeopleButton = ({ viewPeople, cleanPeople, retrieveData}) => {
  return (
    <button onClick={() => viewPeople(cleanPeople, retrieveData)}>
      people
    </button>
  )
}

PeopleButton.propTypes = {
  viewPeople: PropTypes.func,
  cleanPeople: PropTypes.func,
  retrieveData: PropTypes.func
}
