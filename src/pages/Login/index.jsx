import { Form } from '@/components';
import { AuthConsumer } from '@/auth';


function Login() {
    const [authed, dispatch] = AuthConsumer();
    console.log(authed)
    return (
        <div id="login">
            <Form type="login" />
        </div>

    )
}

export default Login