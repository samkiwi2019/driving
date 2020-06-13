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
                path: 'add',
                component: () => import("../components/admin/AddQuiz"),
            },
            {
                path: 'edit',
                component: () => import("../components/admin/EditQuiz"),
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
