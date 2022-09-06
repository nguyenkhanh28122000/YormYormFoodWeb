import { FormInput } from '~/layouts/componentLayouts';
import { Input } from '~/component';

function Register() {
    return (
        <section>
            <FormInput title="register now" titleBtn="register now" register>
                <Input type="text" placeholder="enter your name" />
                <Input type="text" placeholder="enter your email" />
                <Input type="text" placeholder="enter your number" />
                <Input type="text" placeholder="enter your password" />
                <Input type="text" placeholder="confirm your passwprd" />
            </FormInput>
        </section>
    );
}

export default Register;
