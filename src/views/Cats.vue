<template>
    <div>
        <h1>FUNFACT</h1>
        <p>
            Jedes Mal, wenn du auf den Knopf unten drückst, wirst du eine neue
            Katze sehen :D
        </p>
        <button>
            <img src="https://cataas.com/cat/gif" alt="cat" />
        </button>
        <br />
        <br />
        <q-btn @click="reload()">Neue Katze! :3</q-btn>
        <br />
        <br />
        <router-link to="/">
            <button>Zurück zur Startseite :(</button>
        </router-link>
        <p>{{ t('message') }}</p>
    </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

function reload() {
    window.location.reload()
}
</script>
