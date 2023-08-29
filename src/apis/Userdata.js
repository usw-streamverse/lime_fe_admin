import {axois} from 'axios'
import REact, {useState} from 'react';


const App = () => {
    const [data,setData] = useState(null);
    const onClick=()=>{
        axois.get('http://localhost:8000').then(reponse=>{
            setData(reponse.data);
        });
    }

    return(
        screenX
    );



}