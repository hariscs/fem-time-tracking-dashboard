import useFetchData from './useFetchData';

const Users = () => {
	const { data } = useFetchData('http://localhost:3000/data/data.json');
	return <div>{data && data.map((user) => <h1>{user.title}</h1>)}</div>;
};

export default Users;
