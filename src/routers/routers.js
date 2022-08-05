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

import configs from '~/configs';

const publicRoutes = [
    { path: configs.routes.home, component: Home },
    { path: configs.routes.about, component: About },
    { path: configs.routes.cart, component: Cart },
    { path: configs.routes.checkout, component: Checkout },
    { path: configs.routes.contact, component: Contact },
    { path: configs.routes.login, component: Login },
    { path: configs.routes.menu, component: Menu },
    { path: configs.routes.orders, component: Orders },
    { path: configs.routes.profile, component: Profile },
    { path: configs.routes.register, component: Register },
    { path: configs.routes.updateAddress, component: UpdateAddress },
    { path: configs.routes.updateProfile, component: UpdateProfile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
