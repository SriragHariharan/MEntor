import React from 'react'

function MyMessage() {
  return (
    <div class="flex justify-end mb-2">
        <div class="rounded py-2 px-4 bg-lime-200" >
            <p class="text-md  mt-1">
            Count me in
            </p>
            <div class="flex justify-end text-xs text-grey-dark mt-1">
            <small>12:45 pm</small>
            <p class="mx-1">·</p>
            <small>Today</small>
            <span class="text-blue-500">✓</span>
            </div>
        </div>
    </div>
  )
}

export default MyMessage