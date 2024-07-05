import React, { useEffect, useState } from 'react'
import ProfileDetailsCard from '../components/profile page/ProfileDetailsCard'
import EducationCard from '../components/profile page/EducationCard'
import ExperienceCard from '../components/profile page/ExperienceCard'
import SkillsCard from '../components/profile page/SkillsCard'
import SlotsPage from '../components/profile page/SlotsPage'
import { axiosInstance } from '../helpers/axios'
import { useDispatch } from 'react-redux'
import { 
    changeUserDetails,
    addEducationAction,
    addSkillsAction,
    updateProfilePic,
    updateCoverPic,
    setFollowers,
    addExperienceAction,
} from '../redux toolkit/profileSlice'

function ProfilePage() {
  const[profileDetails, setProfileDetails] = useState(null);
  const[skills, setSkills] = useState([]);
  const[experience, setExperience] = useState([]);
  const[education, setEducation] = useState([]);
  const[editAccess,setEditAccess] = useState(false);

  const dispatch = useDispatch();
  
  useEffect(() => {
    axiosInstance.post(process.env.REACT_APP_PROFILE_SVC_ENDPOINT + "/profile")
    .then(resp => {
      console.log(resp.data?.profileDetails)
      setSkills(resp.data?.profileDetails?.skills)
      setExperience(resp.data?.profileDetails?.experience)
      setEducation(resp.data?.profileDetails?.education)
      setProfileDetails(resp?.data?.profileDetails)
      setEditAccess(resp.data?.editAccess)

      //send to redux tk
      dispatch(changeUserDetails(resp.data?.profileDetails))
      dispatch(addSkillsAction(resp.data?.profileDetails?.skills))
      dispatch(addExperienceAction(resp.data?.profileDetails?.experience))
      dispatch(addEducationAction(resp.data?.profileDetails?.education))
      dispatch(updateProfilePic(resp.data?.profileDetails?.profilePic?.secure_url))
      dispatch(updateCoverPic(resp.data?.profileDetails?.coverPic?.secure_url))
      dispatch(setFollowers(resp.data?.profileDetails?.followers))
    })
    .catch(err => console.log(err.message))
  }, [])

  if(profileDetails === false) return <h1 className="text-6xl text-center text-gray-500">Loading....</h1>
  if(profileDetails === null) return <h1 className="text-center text-6xl text-gray-500">Oops, Something went wrong...!</h1>
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
        // <div className="">
        //     <ProfileDetailsCard editAccess={editAccess} />
        //     <div className="grid grid-cols-1 px-4 dark:bg-gray-800 gap-4 py-8">
        //         <EducationCard editAccess={editAccess} />
        //         <ExperienceCard editAccess={editAccess} />
        //         <SkillsCard editAccess={editAccess} />
        //         <SlotsPage />
        //     </div>
        // </div>
  )
}

export default ProfilePage