import Home, {
    fetchData as HomeFetch
} from './../../components/pages/Home/Home.jsx';
const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        fetchFn: HomeFetch,
        authLevel: 'public'
    }
];

export default routes;
