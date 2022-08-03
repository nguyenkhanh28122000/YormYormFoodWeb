import {
    Home,
    About,
    Cart,
    Checkout,
    Contact,
    Login,
    Menu,
    Orders,
    Profile,
    Register,
    UpdateAddress,
    UpdateProfile,
} from '~/pages';

const publicRoutes = [
    { path: '/', component: Home },
    { path: 'about', component: About },
    { path: 'cart', component: Cart },
    { path: 'checkout', component: Checkout },
    { path: 'contact', component: Contact },
    { path: 'login', component: Login },
    { path: 'menu', component: Menu },
    { path: 'orders', component: Orders },
    { path: 'profile', component: Profile },
    { path: 'register', component: Register },
    { path: 'updateAddress', component: UpdateAddress },
    { path: 'updateProfile', component: UpdateProfile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
