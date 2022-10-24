import React from 'react';
import ApplicantData from '../components/ApplicantData';
import MediaCard from '../components/Cards';


let applicantComponent = ApplicantData.map(applicant => {
    return <MediaCard fullName={applicant.fullName} position={applicant.position} intro={applicant.intro} portfolio={applicant.portfolio}/>});

const Portfolio = () => {
  return (
    <div className='cards'>
      {applicantComponent}
    </div>
  )
}

export default Portfolio;

