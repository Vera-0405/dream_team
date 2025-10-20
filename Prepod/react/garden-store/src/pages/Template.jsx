import {Menu} from '../components/Menu';
import { Outlet } from 'react-router-dom';

export const Template = () => {
    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    );
};