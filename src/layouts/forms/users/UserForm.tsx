import React, { FunctionComponent, useState } from 'react';
import { LabeledSwitch } from '../../../components/Switch';
import { HelperContainer, LabeledTextField } from '../../../components/TextField';
import styled from 'styled-components';
import Button from '../../../components/Button';
import { useForm } from 'react-hook-form';
import { Student } from '../../../modules/student/types';
import { userUpdateValidationOption } from '../../../constants/validations';

interface Props {
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

type UserData = Student;

const UserForm: FunctionComponent<Props> = (props: Props) => {
	const { submitText } = props;
	const [isActive, setActive] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<UserData>(userUpdateValidationOption);

	const handleUpdateUser = (data: UserData) => {
		alert(JSON.stringify({ ...data, status: isActive }));
	};

	const handleSwitchChange = (v: boolean) => {
		setActive(v);
	};

	return (
		<Container>
			<form onSubmit={handleSubmit(handleUpdateUser)}>
				<HelperContainer errorText={errors.firstName?.message}>
					<LabeledTextField label={'First Name'} required {...register('firstName')} />
				</HelperContainer>

				<HelperContainer errorText={errors.middleName?.message}>
					<LabeledTextField label={'Middle Name'} {...register('middleName')} />
				</HelperContainer>

				<HelperContainer errorText={errors.lastName?.message}>
					<LabeledTextField label={'Last Name'} required {...register('lastName')} />
				</HelperContainer>

				<HelperContainer errorText={errors.suffix?.message}>
					<LabeledTextField label={'Suffix'} {...register('suffix')} />
				</HelperContainer>

				<HelperContainer errorText={errors.emailAddress?.message}>
					<LabeledTextField
						label={'Email Address'}
						required
						{...register('emailAddress')}
					/>
				</HelperContainer>

				<InlineFields>
					<HelperContainer errorText={errors.grade?.message}>
						<LabeledTextField label={'Grade'} required {...register('grade')} />
					</HelperContainer>
					<HelperContainer errorText={errors.section?.message}>
						<LabeledTextField label={'Section'} required {...register('section')} />
					</HelperContainer>
					<HelperContainer errorText={errors.studentID?.message}>
						<LabeledTextField
							label={'Student ID'}
							required
							{...register('studentID')}
						/>
					</HelperContainer>
				</InlineFields>

				<LabeledSwitch
					value={isActive}
					checkedLabel={'Active'}
					uncheckedLabel={'Inactive'}
					onChange={handleSwitchChange}
					defaultChecked
				/>
				<Button shade="filled" type="submit">
					{submitText ?? 'Submit'}
				</Button>
			</form>
		</Container>
	);
};

export default UserForm;
