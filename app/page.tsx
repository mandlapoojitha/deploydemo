"use client"
import Herobanner from "@/components/Herobanner";
import Homepagecontent from "@/components/Homepagecontent";
import Image from "next/image";
import {NextUIProvider} from "@nextui-org/react";


export default function Home() {
  return (
    <NextUIProvider>
    <>
    <Herobanner></Herobanner>
    <Homepagecontent></Homepagecontent>
    
    </>
    </NextUIProvider>
  );
}
