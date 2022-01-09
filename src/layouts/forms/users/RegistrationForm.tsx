import React, { FunctionComponent } from 'react';
import _ from 'lodash';
import { connect, ConnectedProps } from 'react-redux';
import { useForm } from 'react-hook-form';
import { HelperContainer, LabeledTextField } from '../../../components/TextField';
import styled from 'styled-components';
import Button from '../../../components/Button';
import { StudentUser } from '../../../modules/student/types';
import * as studentActions from '../../../modules/student/actions';
import { regValidationOption } from '../../../constants/validations';

interface RegistrationProps {
    submitText?: string;
}

const Container = styled.div`
    > form > button {
        float: right;
    }
`;

const InlineFields = styled.div`
    display: flex;
    flex-direction: row;
    > div {
        width: 32%;
        margin-right: 10px;
    }
    > div:last-of-type {
        width: 33%;
        margin-right: 0;
    }
`;

type RegistrationData = StudentUser & { confirmPassword: string };

type Props = RegistrationProps & ReduxProps;

const RegistrationForm: FunctionComponent<Props> = (props: Props) => {
    const { submitText, registerStudent } = props;
    
    const { register, handleSubmit, formState: { errors } } = useForm<RegistrationData>(regValidationOption);

    const handleRegistration = (data: RegistrationData) => {
        data.grade = data.grade.toString()
        const regData = _.omit(data, 'confirmPassword', 'middleName', 'suffix');
        registerStudent(regData);
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(handleRegistration)}>
                <HelperContainer errorText={errors.firstName?.message}>
                    <LabeledTextField label={'First Name'} required {...register('firstName')}/>
                </HelperContainer>

                <HelperContainer errorText={errors.middleName?.message}>
                    <LabeledTextField label={'Middle Name'} {...register('middleName')}/>
                </HelperContainer>

                <HelperContainer errorText={errors.lastName?.message}>
                    <LabeledTextField label={'Last Name'} required  {...register('lastName')}/>
                </HelperContainer>

                <HelperContainer errorText={errors.suffix?.message}>
                 <LabeledTextField label={'Suffix'} {...register('suffix')}/>
                </HelperContainer>

                <HelperContainer errorText={errors.emailAddress?.message}>
                    <LabeledTextField label={'Email Address'} required type='email' {...register('emailAddress')}/>
                </HelperContainer>

                <InlineFields>
                    <HelperContainer errorText={errors.grade?.message}>
                        <LabeledTextField label={'Grade'} type='number' required {...register('grade')}/>
                    </HelperContainer>
                    <HelperContainer errorText={errors.section?.message}>
                        <LabeledTextField label={'Section'} required {...register('section')}/>
                    </HelperContainer>
                    <HelperContainer errorText={errors.studentID?.message}>
                        <LabeledTextField label={'Student ID'} required {...register('studentID')}/>
                    </HelperContainer>
                </InlineFields>

                <HelperContainer errorText={errors.username?.message}>
                    <LabeledTextField label={'Username'} required {...register('username')}/>
                </HelperContainer>
                <HelperContainer errorText={errors.password?.message}>
                    <LabeledTextField label={'Password'} type='password' required {...register('password')}/>
                </HelperContainer>
                <HelperContainer errorText={errors.confirmPassword?.message}>
                    <LabeledTextField label={'Confirm Password'} type='password' required {...register('confirmPassword')}/>
                </HelperContainer>
                <Button shade="filled" type='submit'>{submitText ?? 'Submit'}</Button>
            </form>
        </Container>
    )
};

const mapDispatchToProps = {
    registerStudent: studentActions.registerStudent,
};

const connector = connect(null, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(RegistrationForm);