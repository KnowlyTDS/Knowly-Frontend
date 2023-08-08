import { useLocation, Navigate } from 'react-router-dom'
import { AuthConsumer } from '@/auth';
import { toast } from 'sonner';

export const RequireAuth = ({ children }) => {
    const [{ isLoggedIn }] = AuthConsumer();
    const location = useLocation();
    if (isLoggedIn) return children;
    if (!isLoggedIn) {
        toast.error('You must be logged in to access this page')
        return <Navigate to={{ pathname: '/login', state: { from: location } }} />
    }

}
