<template>
  
</template>

<script>

import ServicioAPI from "./ServicioAPI";

export default {
    name: "Pixabay",
    data(){
        return{
            pixaImagenes:[],
            buscar:""
        }
    },
    methods:{
        async buscarImagenes(){
            const consulta = await ServicioAPI.getImagenes(this.buscar);
            this.pixaImagenes = consulta;
            console.log(consulta);
        }
    },
    mounted(){
        this.buscarImagenes();

    }
}
</script>

<style>

</style>