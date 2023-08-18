<template>
    <div>
        <h1>FUNFACT</h1>
        <p>Jedes Mal, wenn du auf den Knopf unten drückst, wirst eine neue andere Katze sehen :D</p>
        <button>
            <img src="https://cataas.com/cat/gif" alt="cat" />
        </button>
        <br>
        <br>
        <button @click="reload()">
            Neue Katze! :3
        </button>
        <br>
        <br>
        <router-link to="/">
            <button>
                Zurück zur Startseite :(
            </button>
        </router-link>
    </div>
</template>

<script lang="ts" setup>

function reload() {
    window.location.reload()
}

</script>