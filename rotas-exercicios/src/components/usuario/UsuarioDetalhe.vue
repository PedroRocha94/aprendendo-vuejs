<template>
    <div class="usuario-detalhe">
        <h3>Usuario Detalhe</h3>
        <p><strong>Codigo: </strong> {{ id }}</p>
        <!-- :to="`/usuario/${id}/editar`" -->
        <router-link 
            tag="button" 
            primario
            :to="{name: 'usuarioEditar', params: {id},
                query: {completo: true, lingua: 'pt'},}"
        >
            Editar
        </router-link>
    </div>
</template>

<script>
export default {
    
  props:['id'],
  // data(){
  //   return {
  //     id: this.$route.params.id
  //   }
  // },
  // watch:{
  //   $route(to, from){
  //     this.id = to.params.id
  //   }
  // },
    
}
</script>