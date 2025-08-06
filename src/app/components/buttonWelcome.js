"use client"
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/navigation';
import React from 'react';
const ButtonWel = () => {
  //Setting up the router
  const router = useRouter();
  //Handling Navigation 
  const handleClick = () => {
  router.push('/calculator');
}
  return ( 
    <Button onClick={handleClick} variant='dark'>Naviage to Calculator</Button>
   );
}
 
export default ButtonWel;