<template>
  <div class="navbar">
    <nav>
        <img src="@/assets/music.png" alt="guy_with_headphone">
        <h1>
            <router-link :to="{name: 'Home'}">Sunny Rhythms</router-link>
        </h1>
        <div class="links">
            <div v-if="user">
                <router-link :to="{name: 'CreatePlaylist'}">Create Playlist</router-link>
                <router-link :to="{name: 'UserPlaylists'}">My Playlists</router-link>
                <span>Hi welcome, {{user.displayName}}</span>
                <button @click="handleClick">Logout</button>
            </div>  
            <div v-else>
                <router-link class="btn" :to="{name: 'Signup'}">Sign up</router-link>
                <router-link class="btn" :to="{name: 'Login'}">Log in</router-link>    
            </div>          
           
        </div>
    </nav>
  </div>
</template>

<script>
import useLogout from '@/composables/useLogout.js'
import { useRouter } from 'vue-router';
import getUser from '@/composables/getUser';
export default {

setup(){
    const router = useRouter()
    const {error,logout} = useLogout();
    const {user} = getUser();

    const handleClick= async()=>{
        await logout()
        if(!error.value){
            console.log('User Logged out')
        }
        router.push({name: 'Login'})
    }

    return { handleClick, user}
}
}
</script>

<style scoped>
    .navbar{
        padding: 16px 10px;
        margin-bottom: 60px;
        background: #fff;
    }
    nav{
        display: flex;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
    }
    nav h1{
        margin-left: 20px;
    }
    nav .links{
        margin-left: auto;
    }
    nav .links a, button{
        margin-left: 16px;
        font-size: 14px;
    }
    nav img{
        max-height: 60px;
        border-radius: 50%;
    }
    span{
        font-size: 14px;
        display: inline-block;
        margin-left: 16px;
        padding-left: 16px;
        border-left: 1px solid #eee; 
    }
</style>