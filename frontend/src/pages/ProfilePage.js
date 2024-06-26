import React from 'react'
import ProfileDetailsCard from '../components/profile page/ProfileDetailsCard'
import EducationCard from '../components/profile page/EducationCard'
import ExperienceCard from '../components/profile page/ExperienceCard'
import SkillsCard from '../components/profile page/SkillsCard'
import SlotsPage from '../components/profile page/SlotsPage'

function ProfilePage() {
  return (
    
        <div className="">
            <ProfileDetailsCard />
            <div className="grid grid-cols-1 px-4 dark:bg-gray-800 gap-4 py-8">
                <EducationCard />
                <ExperienceCard />
                <SkillsCard />
                <SlotsPage />
            </div>
        </div>
  )
}

export default ProfilePage