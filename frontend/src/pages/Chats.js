import React from 'react'
import SidebarUser from '../components/chats/SidebarUser'
import ChatUserHeader from '../components/chats/ChatUserHeader'
import MyMessage from '../components/chats/MyMessage'
import OtherMessage from '../components/chats/OtherMessage'
import MessageInput from '../components/chats/MessageInput'


function Chats() {
  return (
    <div class="container mx-auto">
        <div class="h-screen-85 lg:h-screen-95 flex lg:py-12">
            <div class="flex-col border border-grey rounded shadow-lg h-full hidden lg:flex">

                    {/* <!-- Search --> */}
                    <div class="py-2 px-2 bg-grey-lightest">
                        <input type="text" class="w-full px-2 py-2 text-sm" placeholder="Search or start new chat"/>
                    </div>

                    {/* <!-- Contacts --> */}
                    <div class="bg-grey-lighter overflow-auto flex-1">
                        <SidebarUser />
                        <SidebarUser />
                        <SidebarUser />
                        <SidebarUser />
                        <SidebarUser />
                        <SidebarUser />
                        <SidebarUser />
                        <SidebarUser />
                        <SidebarUser />
                        <SidebarUser />
                        <SidebarUser />
                        <SidebarUser />
                        <SidebarUser />
                        <SidebarUser />
                        <SidebarUser />
                    </div>

            </div>


            {/* <!-- Right --> */}
            <div class="w-full lg:w-2/3 border flex flex-col">

                {/* <!-- Header --> */}
                <ChatUserHeader />

                {/* <!-- Messages --> */}
                <div class="flex-1 overflow-auto" style={{backgroundColor: "#DAD3CC"}}>
                    <div class="py-2 px-3">

                        <MyMessage /><OtherMessage /><OtherMessage /><MyMessage /><OtherMessage /><MyMessage /><MyMessage />
                        

                    </div>
                </div>

                {/* <!-- Input --> */}
                <MessageInput />
            </div>

            </div>
        </div>
  )
}

export default Chats