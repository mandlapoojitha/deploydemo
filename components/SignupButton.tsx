import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from 'react'

const Signupbutton = () => {
  return (
    <div>
      <Link href="/signup">
      <Button color="danger" variant="ghost" size="sm">
        Sign up
      </Button> 
      </Link>
        
    </div>
  )
}

export default Signupbutton