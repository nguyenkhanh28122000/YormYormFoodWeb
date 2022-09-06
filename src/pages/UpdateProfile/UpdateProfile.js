import { FormInput } from '~/layouts/componentLayouts';
import { Input } from '~/component';

function UpdateProfile() {
    return (
        <section>
            <FormInput title="update profile" titleBtn="update now">
                <Input type="text" placeholder="enter your name" value="nguyễn khánh" />
                <Input type="text" placeholder="enter your email" value="kh2000987@gmail.com" />
                <Input type="text" placeholder="enter your number" value="+84 338204180" />
                <Input type="text" placeholder="enter your old password" />
                <Input type="text" placeholder="enter your new password" />
                <Input type="text" placeholder="confirm your passwprd" />
            </FormInput>
        </section>
    );
}

export default UpdateProfile;
