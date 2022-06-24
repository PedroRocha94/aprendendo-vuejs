import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/Inicio';
import Menu from './components/template/Menu';
import MenuAlt from './components/template/MenuAlt';
import Usuario from './components/usuario/Usuario';
import UsuarioList from './components/usuario/UsuarioList';
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe';
import UsuarioEditar from './components/usuario/UsuarioEditar';

Vue.use(Router)

export default new Router({
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
            {path: ':id', component: UsuarioDetalhe, props: true},
            {path: ':id/editar', component: UsuarioEditar, props: true,
                name: 'usuarioEditar'}
        ]
    },
    {
        path: '/redirecionar',
        redirect: '/usuario'
    }]
})