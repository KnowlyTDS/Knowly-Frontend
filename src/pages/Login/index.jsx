import { Form } from '@/components';
import './index.scss'
import { AuthConsumer } from '../../auth';


function Login() {
    const [authed, dispatch] = AuthConsumer();
    return (
        <div id="login">
            <Form type="login" />
        </div>

    )
}

export default Login