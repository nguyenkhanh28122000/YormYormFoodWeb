import { FormInput } from '~/layouts/componentLayouts';
import { Input } from '~/component';

function Login() {
    return (
        <section>
            <FormInput title="login now" titleBtn="login now" login>
                <Input type="text" placeholder="enter your name" />
                <Input type="text" placeholder="enter your password" />
            </FormInput>
        </section>
    );
}

export default Login;
