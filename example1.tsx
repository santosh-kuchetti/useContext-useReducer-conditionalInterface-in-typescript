import React from 'react'
interface square{
    shape:'square';
    width:number;
    height:number;
    
}
interface circle{
    shape: 'circle';
    radius:number;
}
export function Drawer(props:square | circle){
    
    return <pre>{JSON.stringify(props)}</pre>
}

const example1 = () => {
  return (
    
        <Drawer shape={'circle'} radius={45}/> 
    
  )
}

export default example1