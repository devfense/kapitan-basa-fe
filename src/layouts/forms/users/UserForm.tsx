import React, { FunctionComponent } from 'react';
import { LabeledSwitch } from '../../../components/Switch';
import { LabeledTextField } from '../../../components/TextField';
import styled from 'styled-components';
import Button from '../../../components/Button';

interface Props {
    submitText?: string;
}

const Container = styled.div`
    > button {
        float: right;
    }
`;

const InlineFields = styled.div`
    display: flex;
    flex-direction: row;
    > .MuiTextField-root {
        width: 32%;
        margin-right: 10px;
    }
    > .MuiTextField-root:last-of-type {
        width: 33%;
        margin-right: 0;
    }
`;

const UserForm: FunctionComponent<Props> = (props: Props) => {
    const { submitText } = props;
    return (
        <Container>
            <LabeledTextField label={'First Name'} required/>
            <LabeledTextField label={'Middle Name'}/>
            <LabeledTextField label={'Last Name'} required/>
            <LabeledTextField label={'Suffix'}/>
            <LabeledTextField label={'Email Address'} required/>
            <InlineFields>
                <LabeledTextField label={'Grade'} required/>
                <LabeledTextField label={'Section'} required/>
                <LabeledTextField label={'Student ID'} required/>
            </InlineFields>
            <LabeledSwitch checkedLabel={'Active'} uncheckedLabel={'Inactive'} defaultChecked/>
            <Button>{submitText ?? 'Submit'}</Button>
        </Container>
    )
};

export default UserForm;