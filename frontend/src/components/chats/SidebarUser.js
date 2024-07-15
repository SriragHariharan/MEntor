import React from 'react'

function SidebarUser({ details, setSelectedChat }) {
    
    const handleChatSelect = ()=>{
        setSelectedChat(details)
    }
  return (
        <div onClick={handleChatSelect} class="bg-white px-3 flex items-center hover:bg-grey-lighter cursor-pointer">
            <div>
                <img class="h-12 w-12 rounded-full"
                        src="https://th.bing.com/th/id/R.2d03b064d632fb7920295b0c1b07cf01?rik=gjWpu1mZvKqCDA&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f35600000%2fJack-3-captain-jack-sparrow-35678809-960-771.jpg&ehk=h63xmGopRTCHKsYf0mZMx6cncUihFjCUGq%2f4mch69uM%3d&risl=&pid=ImgRaw&r=0"/>
            </div>
            <div class="ml-4 flex-1 border-b border-grey-lighter py-4">
                <div class="flex items-bottom justify-between">
                    <p class="text-grey-darkest text-xs">
                        {details.username}
                    </p>
                    <small class="text-xs text-grey-darkest">
                        12:45 pm
                    </small>
                </div>
                <p class="text-slate-500 mt-1 text-sm">
                    No messages yet
                </p>
            </div>
        </div>
  )
}

export default SidebarUser

