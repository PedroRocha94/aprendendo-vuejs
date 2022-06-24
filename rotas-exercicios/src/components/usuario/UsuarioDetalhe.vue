<template>
    <div class="usuario-detalhe">
        <h3>Usuario Detalhe</h3>
        <p><strong>Codigo: </strong> {{ id }}</p>
        <router-link 
            tag="button" 
            primario
            :to="`/usuario/${id}/editar`"
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