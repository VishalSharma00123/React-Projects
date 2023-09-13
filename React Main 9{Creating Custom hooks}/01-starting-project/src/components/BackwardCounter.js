import { useState, useEffect } from 'react';
// now import the component which you want to use as a custom hook
import Card from './Card';
import useCounter from '../hooks/use-counter'

const BackwardCounter = () => {

  // now call the custom hook which which we want use
  const mycounter = useCounter();


  return <Card>{mycounter}</Card>;
};

export default BackwardCounter;
