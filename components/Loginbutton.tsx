import { Button, ButtonGroup } from "@nextui-org/react";
import Link from "next/link";
import React from 'react'

const Loginbutton = () => {
  return (
    <div>
        <Link href="/login">
        <Button color="success" variant="ghost" size="sm">
        Login
      </Button> 
        </Link>
        
    </div>
  )
}

export default Loginbutton