import React from 'react';

type Props = {
  athleteDetails: Object
}

const PersonalDetails = ({ athleteDetails } : Props) => (
  <div className="athleteDetails">
    <ul>
      <li>{athleteDetails.username}</li>
      <li>{`${athleteDetails.firstname} ${athleteDetails.lastname}`}</li>
      <li><img src={athleteDetails.profile} alt="Athlete profile" /></li>
      {(athleteDetails.clubs || []).filter((i, index) => (index < 1)).map(club =>
        <li key={club.name}>{club.name} <img src={club.cover_photo_small} alt="Club badge" /></li>)}
    </ul>
  </div>
);

export default PersonalDetails;
