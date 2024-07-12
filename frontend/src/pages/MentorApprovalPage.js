import React from 'react'
import { Link } from 'react-router-dom'

function MentorApprovalPage() {
  return (
    <div class="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-50 to-green-200">
        <div class="text-center">
            <h2 class="text-3xl font-bold mb-2">Hi <span class="text-blue-600">User</span> 👋</h2>
            <h1 class="text-4xl font-bold mb-4">Waiting for Approval</h1>
            <p class="text-xl mb-8">
            We will reach out to you in 7 business days via mobile.
            <br /> once we approve you as a mentor, You wil recieve an email
            <br /> shortly after which you could become a mentor for many.
            </p>
            <p class="text-gray-600 text-2xl mb-12">Have a great MEntoring ahead! : )</p>
            <Link to="/" class="bg-black text-white py-2 px-4 rounded hover:text-black hover:bg-white">Go home</Link>
        </div>
    </div>
  )
}

export default MentorApprovalPage