import { FormInput } from '~/layouts/componentLayouts';
import { Input } from '~/component';

function UpdateAddress() {
    return (
        <section>
            <FormInput title="your address" titleBtn="save address">
                <Input type="text" placeholder="flat no. and building name" />
                <Input type="text" placeholder="area name" />
                <Input type="text" placeholder="city name" />
                <Input type="text" placeholder="state name" />
                <Input type="text" placeholder="country name" />
                <Input type="number" placeholder="pin code" />
            </FormInput>
        </section>
    );
}

export default UpdateAddress;
