import { auth } from './auth/reducers';
import { gamelevel } from './game-levels/reducers';
import { student } from './student/reducers';
import { users } from './users/reducers';

const reducers = {
	auth,
	gamelevel,
	student,
	users,
};

export default reducers;
