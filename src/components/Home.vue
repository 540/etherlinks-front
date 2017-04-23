<template>
    <div class="content">
        <span>Introduce el link al contenido que quieras asegurar</span>
        <div class="form-group" :class="{'has-danger': errors.has('link')}">
            <b-form-input v-model.trim="link" id="link" name="link" v-validate="'required|url|urlExists'" type="text"
                          data-vv-as="link" :state="'warning'" :class="{'shake': shake}"></b-form-input>
            <b-tooltip content="La url no es válida" :show="showTooltip">
                <i class="fa fa-times" aria-hidden="true" @onmouseover="'showTooltip: true'"
                   :class="{'shake': shake}" @onmouseleave="'showTooltip: false'"></i>
            </b-tooltip>
        </div>
        <b-button type="submit" @click.prevent="handleSubmission" :variant="'secondary'" href="">Firmar</b-button>
    </div>
</template>

<script>
  import SignatureRepository from '../model/SignatureRepository'
  const signatureRepository = new SignatureRepository()

  export default {
    data: function () {
      return {
        link: '',
        showTooltip: false,
        shake: false
      }
    },
    methods: {
      handleSubmission: function () {
        this.$validator.validateAll().then(() => {
          signatureRepository.new(this.link).then(id => {
            this.$router.push({name: 'detail', params: {id: id}})
          })
        }).catch(() => {
          this.shake = false
          this.$nextTick(function () {
            this.shake = true
          })
        })
      }
    },
    watch: {
      link: function () {
        this.shake = false
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
    .shake {
        border-color: #8e4947;
        animation: shake .5s;
    }
    @keyframes shake {
        8%, 41% {
            -webkit-transform: translateX(-10px);
        }
        25%, 58% {
            -webkit-transform: translateX(10px);
        }
        75% {
            -webkit-transform: translateX(-5px);
        }
        92% {
            -webkit-transform: translateX(5px);
        }
        0%, 100% {
            -webkit-transform: translateX(0);
        }
    }
</style>
