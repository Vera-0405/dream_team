import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';


export const Product = () => {
    const [state, setState] = useState({});
    const lala = useParams();
    const test = useLocation();
    const navigate = useNavigate();



    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${lala.id}`)
        .then((data) => {
            
            if (data.status === 404) {
                navigate('/not-found');

                return undefined;
            }

            return data.json();
        })
        .then((data) => {
            if (data !== undefined) {
                setState(data);
            }
        });

    }, []);

    return <>
        <div>Product {lala.id}</div>
        <div>{state.body}</div>
    </>
};
