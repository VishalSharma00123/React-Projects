import { useState, useEffect } from 'react';
import useCounter from '.././hooks/use-counter'
import Card from './Card';

const ForwardCounter = () => {

  const mycounter = useCounter(false);
  return <Card>{mycounter} </Card>;
};

export default ForwardCounter;
