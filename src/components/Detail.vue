<template>
    <div>
        <h1>Detalle de firma</h1>
        <div class="text-left">
            ID: {{ signature.id }}
            <br/>
            Hash: {{ signature.hash }}
        </div>
        <img :src="signature.image" class="screenshot center-block" />
        <b-card show-footer>
            <b-btn v-b-toggle.htmlCollapse class="collapser">Mostrar HTML</b-btn>
            <b-collapse id=htmlCollapse class="text-left collapse">
                <b-card class="mb-2"><pre class="pre-scrollable"><code>{{ this.prettiedHtml }}</code></pre></b-card>
            </b-collapse>
            <small slot="footer" class="text-muted">
                Creado el {{ this.formattedDate }}
            </small>
        </b-card>
    </div>
</template>

<script>
  import pretty from 'pretty'
  import moment from 'moment'
  import SignatureRepository from '../model/SignatureRepository'
  const signatureRepository = new SignatureRepository()

  export default {
    props: ['id'],
    data: function () {
      return {
        signature: signatureRepository.findById(this.id)
      }
    },
    computed: {
      prettiedHtml: function () {
        return pretty(this.signature.html)
      },
      formattedDate: function () {
        return moment(this.signature.date).format('D MMMM YYYY [-] HH:mm')
      }
    }
  }
</script>

<style scoped>
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
    form {
        width: 50%;
        margin: 0 auto;
    }
    textarea {
        height: 150px;
    }

    .pre-scrollable {
        max-height: 350px;
        overflow-y: scroll;
        overflow-x: scroll;
    }

    .collapse {
        margin: 10px 0px;
    }

    .collapser {
        cursor: pointer;
        margin: 10px 0px;
    }

    .screenshot {
        margin: 30px 0px;
        width: 100%;
    }
</style>
