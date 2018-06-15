import MainPage from './components/features/MainPage/MainPage';
import HelloPage from './components/features/HelloPage/HelloPage';

const Routes = {
    MAIN: {
        exact: true,
        url: '/',
        label: 'Main page',
        component: MainPage,
        showInHeader: false,
        showInFooter: true
    },
    HELLO: {
        url: '/hello',
        label: 'Hello page',
        component: HelloPage,
        showInHeader: true,
        showInFooter: true
    },
};

export default Routes;
