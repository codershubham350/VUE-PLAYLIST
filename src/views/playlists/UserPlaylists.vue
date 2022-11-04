<template>
  <div class="user-playlists">
    <h2>My Playlists</h2>
    <div v-if="playlists">
       <ListView :playlists="playlists"/>
    </div>
    <router-link :to="{name: 'CreatePlaylist'}" class="btn">Create new Playlist</router-link>
  </div>
</template>

<script>
import getUser from '@/composables/getUser.js'
import getCollection from "@/composables/getCollection.js"
import ListView from "@/components/ListView.vue"

export default {
  components: {ListView},
setup(){
    const { user } = getUser()
    const { documents: playlists} = getCollection(
        'playlists',
        ['userId', '==', user.value.uid]
        )

console.log(playlists)
    return { playlists }
}
}
</script>

<style>

</style>