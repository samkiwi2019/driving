const routes = [
    {
        path: '/admin',
        redirect: {path: '/admin/dashboard'},
        component: () => import("../components/admin/Layout"),
        children: [
            {
                path: 'dashboard',
                component: () => import("../components/admin/Dashboard"),
            },
            {
                path: 'list',
                component: () => import("../components/admin/ListQuiz"),
            },
            {
                path: 'about',
                component: () => import("../components/admin/About"),
            }
        ]
    },
]

export default routes
