import "@animxyz/core";
import { XyzTransitionGroup } from "@animxyz/react";



export default function Landing() {
    return (
        <> 
       <XyzTransitionGroup appear xyz="fade ease-in">
       <h1 className=' font-throwupColor-Pink text-5xl pt-5'>
          I'm a landing page!
        </h1>
      
      <h1 className=' font-throwupColor-Pink text-5xl pt-5'>
          I'm late
        </h1>
      </XyzTransitionGroup>


      </>
    )
}
