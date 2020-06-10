import React from 'react';
import {useParams, useLocation} from 'react-router-dom';
const Dashboard = (props) => {
    const usequery = new URLSearchParams(useLocation().search);
    let {id, age} = useParams(); 
    console.log(usequery.get('isLogin'));

    return (
        <div>
            {usequery.get('isLogin') === 'true' ? (<div>Welcome to Dashboard</div>) : (<div>Please Login In</div>)}
            Welcome to Dashboard Page {id} and age is {age}
            
        </div>
    );
}

export default Dashboard;


// lcoahost:3000/my-app/Dashboard/r