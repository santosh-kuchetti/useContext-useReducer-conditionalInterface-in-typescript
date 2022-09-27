import { useContext, useState } from 'react';
import DoopContext,{userState} from './store';  // we can give any name for context like UserContext, DoopContext whatever.

function ConsumerComponent(){
    const user = useContext<userState>(DoopContext);
    // we use the useContext of the DoopContext. Since it is the object which is provided in the contextProvider in the userContextComponent, we have the aceability to it.
    return (
      <div>
        <div>{user.first}</div>
        <div>{user.last}</div>
      </div>
    );
}

function UserContextComponent(){
    const[user,setUser] = useState<userState>({
        first:'Kuchetti',
        last:'devi',
    })
    return(
        /* 
            here whatever we provide as value will be accessable to all the children that are provided
            we have provided functional component ConsumerComponent as a children.
            in the functionalComponent that is ConsumerComponent, we will use useContext, now we have the accessability of the user values in the ConsumerComponent.
            we didn't do any props drilling in the ConsumerComponent. But due to the useContext we have the accessabity of using the values all over the children.
        */
        
        <DoopContext.Provider value={user}>  
            <button onClick={() => setUser({
                first:'Kuchetti',
                last:'Santosh'
            })}>Change Context</button>
            <ConsumerComponent/>
            
        </DoopContext.Provider>
    )
}

export default UserContextComponent;