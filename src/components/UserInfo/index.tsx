import React, { FunctionComponent} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { AccountTypes } from '../../constants/types';
import StudentInfo from '../../components/UserInfo/Student/index';
import AdminInfo from '../../components/UserInfo/Admin/index';

const index: FunctionComponent = () => {

	const { userInfo } = useSelector((state: RootState) => state.users);

	return (
		<>
			{
				userInfo.accountType === AccountTypes.STUDENT ? <StudentInfo /> : <AdminInfo />
			}		
		</>
	);
};

export default index;
