import { Switch as MuiSwitch } from '@material-ui/core';
import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

const Switch = styled(MuiSwitch)`
	&.MuiSwitch-root {
		> span > span > .MuiSwitch-thumb {
			background: #25396f;
		}
		> .MuiSwitch-track {
			background: #e7f0ff;
		}
		> .Mui-checked {
			+ .MuiSwitch-track {
				background: #25396f;
			}
			&:hover {
				background: #25396f0a;
			}
		}
	}
`;

interface Props {
	checkedLabel: string;
	uncheckedLabel: string;
	value?: boolean;
	defaultChecked?: boolean;
	onChange?: (v: boolean) => void;
}

const SwitchContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Label = styled.span`
	font-size: 12px;
	font-family: OpenSans-SemiBold;
`;

export const LabeledSwitch: FunctionComponent<Props> = (props: Props) => {
	const { value, checkedLabel, uncheckedLabel, onChange } = props;
	const [checked, setCheck] = useState(value);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const isChecked = e.target.checked;
		setCheck(isChecked);
		if (typeof onChange === 'function') onChange(isChecked);
	};

	return (
		<SwitchContainer>
			<Switch value={checked} onChange={handleChange} />
			<Label>{checked ? checkedLabel : uncheckedLabel}</Label>
		</SwitchContainer>
	);
};

export default Switch;
