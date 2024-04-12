import { XyzTransitionGroup } from "@animxyz/react";

function Profile() {

  return (
    <>
    <XyzTransitionGroup
        appear
        xyz="fade in-left-100% out-right-100%"
        mode="out-in"
      >
        <h1 className=' font-throwupColor-Pink text-5xl pt-5'>
          I'm a profile page!
        </h1>
      </XyzTransitionGroup>
    </>
  )
}

export default Profile
