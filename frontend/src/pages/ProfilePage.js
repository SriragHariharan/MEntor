import React, { useEffect, useState } from 'react'
import ProfileDetailsCard from '../components/profile page/ProfileDetailsCard'
import EducationCard from '../components/profile page/EducationCard'
import ExperienceCard from '../components/profile page/ExperienceCard'
import SkillsCard from '../components/profile page/SkillsCard'
import SlotsPage from '../components/profile page/SlotsPage'
import { axiosInstance } from '../helpers/axios'

function ProfilePage() {
  const[profileDetails, setProfileDetails] = useState(null);
  const[skills, setSkills] = useState([]);
  const[editAccess,setEditAccess] = useState(false);
  
  useEffect(() => {
    axiosInstance.post(process.env.REACT_APP_PROFILE_SVC_ENDPOINT + "/profile")
    .then(resp => {
      setSkills(resp.data?.profileDetails?.skills)
      setProfileDetails(resp?.data?.profileDetails)
      setEditAccess(resp.data?.editAccess)
    })
    .catch(err => console.log(err.message))
  }, [])

  console.log(profileDetails?.skills)
  // console.log(Object.keys(profileDetails?.skills))

  if(profileDetails === false) return <h1 className="text-center text-gray-500">Loading....</h1>
  if(profileDetails === null) return <h1 className="text-center text-gray-500">Oops, Something went wrong...!</h1>
  return (
        <div className="">
            <ProfileDetailsCard profileDetails={profileDetails} editAccess={editAccess} />
            <div className="grid grid-cols-1 px-4 dark:bg-gray-800 gap-4 py-8">
                <EducationCard education={profileDetails?.education} editAccess={editAccess} />
                <ExperienceCard experience={profileDetails?.experience} editAccess={editAccess} />
                <SkillsCard skills={skills} editAccess={editAccess} />
                <SlotsPage />
            </div>
        </div>
  )
}

export default ProfilePage