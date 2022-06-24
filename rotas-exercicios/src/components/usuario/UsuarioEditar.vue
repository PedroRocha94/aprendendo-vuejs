<template>
    <div class="usuario-editar">
        <h3>Usuario Editar</h3>
        <p><strong>Codigo: </strong> {{ id }}</p>
        <p><strong>Completo:</strong> {{ $route.query.completo ? 'sim' : 'nao' }}</p>
        <p><strong>Lingua:</strong> {{$route.query.lingua}}</p>
        <hr>
        <button primario @click="confirmou = true">Confirmar</button>
        <div id="rodape">
            <h3>Curso Vue</h3>
        </div>
    </div>
</template>
<script>
export default {
    props: ['id'],
    data(){
        return{
            confirmou: false
        }
    },
    beforeRouteLeave(to, from, next){
        if (this.confirmou){
            next()
        } else {
            if (confirm('Tem certeza?')){
                next()
            } else {
                next(false)
            }
        }
    }
}
</script>

<style scoped>
    #rodape{
        margin-top: 1000px;
    }
</style>