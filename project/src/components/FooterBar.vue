<template>
    <div class="shadow-[0_0_10px_rgba(0,0,0,0.3)] flex h-16">
        <div class="md:mx-auto grid grid-cols-3 w-full px-4 max-w-3xl">
            <div class="flex mb-3 mt-1 justify-evenly">
                <router-link class="flex flex-col items-center cursor-pointer" to="/feed">
                    <rss-icon size="30" fill-color="#A0A0A0" />
                    <span class="text-gray-400 text-xs">
                        Feed
                    </span>
                </router-link>
                <router-link class="flex flex-col items-center cursor-pointer" to="/wiki">
                    <light-bulb-outline-icon size="30" fill-color="#A0A0A0" />
                    <span class="text-gray-400 text-xs">
                        Wiki
                    </span>
                </router-link>
            </div>
            <div
                class="justify-self-center cursor-pointer"
                @click="$router.push('/')"
            >
                <div class="bg-gray-400 rounded-t-full h-16 w-28 flex items-center justify-center container overflow-hidden">
                    <img src="../assets/ic_Beebot.png" alt="" class="h-20 object-center mt-3">
                </div>
            </div>
            <div class="flex mb-3 mt-1 justify-evenly">
                <router-link class="flex flex-col items-center cursor-pointer" to="/">
                    <lightning-bolt-outline-icon size="30" fill-color="#E06215" />
                    <span class="text-[##E06215] text-xs">
                        Teste relâ...
                    </span>
                </router-link>
                <router-link class="flex flex-col items-center cursor-pointer" to="/courses">
                    <checkbox-marked-outline-icon size="30" fill-color="#A0A0A0" />
                    <span class="text-gray-400 text-xs">
                        Cursos
                    </span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import RssIcon from 'vue-material-design-icons/Rss.vue';
import LightBulbOutlineIcon from 'vue-material-design-icons/LightbulbOutline.vue';
import LightningBoltOutlineIcon from 'vue-material-design-icons/LightningBoltOutline.vue';
import CheckboxMarkedOutlineIcon from 'vue-material-design-icons/CheckboxMarkedOutline.vue';
import { RouterLink } from 'vue-router';

export default {
    components: {
        RssIcon,
        LightBulbOutlineIcon,
        LightningBoltOutlineIcon,
        CheckboxMarkedOutlineIcon,
        RouterLink,
    },
}
</script>
