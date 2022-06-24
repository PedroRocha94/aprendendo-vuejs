import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/Inicio';
import Menu from './components/template/Menu';
import MenuAlt from './components/template/MenuAlt';
// import Usuario from './components/usuario/Usuario';
// import UsuarioList from './components/usuario/UsuarioList';
// import UsuarioDetalhe from './components/usuario/UsuarioDetalhe';
// import UsuarioEditar from './components/usuario/UsuarioEditar';

Vue.use(Router)

const Usuario = () => import(/* webpackChunkName: "usuario" */'./components/usuario/Usuario');
const UsuarioList = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioList');
const UsuarioDetalhe = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioDetalhe');
const UsuarioEditar = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioEditar');

const router =  new Router({
    mode: "history",
    routes: [{
        path: '/',
        components:{
            default: Inicio,
            menu: Menu,
        }
    },
    {
        path: '/usuario',
        // component: Usuario,
        components:{
            default: Usuario,
            menu: MenuAlt,
        },
        props: true,
        children:[
            {path: '', component: UsuarioList},
            {path: ':id', component: UsuarioDetalhe, props: true,
                beforeEnter: (to, from, next)=>{
                    console.log('antes da rota -> usuario detalhe')
                    next()
                }},
            {path: ':id/editar', component: UsuarioEditar, props: true,
                name: 'usuarioEditar'}
        ]
    },
    {
        path: '*',
        redirect: '/'
    }]
})

router.beforeEach((to, from, next) => {
    console.log('antes das rotas -> global')
    next()
})


export default router;