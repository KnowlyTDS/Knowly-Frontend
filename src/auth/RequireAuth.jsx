import { useLocation, Navigate } from 'react-router-dom'
import { AuthConsumer } from '@/auth';

export const RequireAuth = ({ children }) => {
    const [{ auth }] = AuthConsumer();
    const location = useLocation();
    if (auth) return children;
    if (!auth) return <Navigate to='/login' state={{path:location}}/>

}
