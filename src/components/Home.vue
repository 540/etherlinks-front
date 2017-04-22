<template>
    <div class="content">
        <span>Introduce el link al contenido que quieras asegurar</span>
        <div class="form-group" :class="{'has-danger': errors.has('link') }">
            <b-form-input v-model.trim="link" id="link" name="link" v-validate="'url'" type="text"
                          data-vv-as="link"  :state="'warning'"></b-form-input>
            <b-tooltip content="La url no es válida" :show="showTooltip">
                <i class="fa fa-times" aria-hidden="true" @onmouseover="'showTooltip: true'" @onmouseleave="'showTooltip: false'"></i>
            </b-tooltip>
        </div>
        <b-button type="submit" @click.prevent="" :variant="'secondary'" href="">Firmar</b-button>
    </div>
</template>

<script>
  export default {
    data: function () {
      return {
        link: '',
        showTooltip: false
      }
    }
  }
</script>

<style scoped lang="scss">
    @import '../../node_modules/bootstrap/scss/_variables.scss';
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    .content {
        width: 50%;
        margin: auto;
        margin-top: 220px;

        span {
            display: block;
            text-align: left;
            margin-bottom: 10px;
        }
    }
    input {
        -webkit-box-shadow: 2px 2px 10px -2px rgba(112, 112, 112, 1);
        -moz-box-shadow: 2px 2px 10px -2px rgba(112, 112, 112, 1);
        box-shadow: 2px 2px 10px -2px rgba(112, 112, 112, 1);
    }
    button {
        margin-top: 40px;
        cursor: pointer;
    }
    .form-group {
        position: relative
    }
    i {
        position: absolute;
        right: 10px;
        margin: auto;
        top: 0;
        bottom: 0;
        height: 50%;
        color: $brand-danger;
        display: none;
        font-size: 20px;
    }
    .has-danger i {
        display: block;
    }
</style>
