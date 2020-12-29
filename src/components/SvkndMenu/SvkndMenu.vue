<template>
  <div class="svknd-menu">
    <div class="flex justify-center">
      <div class="relative">
        <div
          v-if="open"
          @click="open = false"
          class="fixed inset-0"
          style="background: rgba(0,0,0,0.1);"
        ></div>
        <div :open="open" :toggleOpen="toggleOpen">
          <button
            class="h-10 w-10 cursor-pointer border-gray-400 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            @click="toggleOpen"
          >
            <img
              class="h-8 w-h-8"
              src="@/assets/icons/menu.svg"
              alt="profile image"
            />
          </button>

          <transition
            enter-active-class="transition-all duration-100 ease-out"
            leave-active-class="transition-all duration-100 ease-in"
            enter-class="opacity-0 scale-75"
            enter-to-class="opacity-100 scale-100"
            leave-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-75"
          >
            <div
              v-if="open"
              class="origin-top-right absolute right-0 mt-2 bg-white border overflow-hidden rounded-lg shadow-md"
              style="width: 25rem"
            >
              <div class="grid grid-flow-cols grid-cols-4 gap-5 p-5">
                <div
                  v-for="data in dataMenu"
                  :key="data.title"
                  class="flex flex-col justify-center rounded-md cursor-pointer hover:bg-gray-200"
                >
                  <img class="h-10 w-h-10" :src="data.icon" alt="menu image" />
                  <div class="text-gray-800 text-center truncate">
                    {{ data.title }}
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'svknd-menu',
  data() {
    return {
      open: false,
      dataMenu: [
        {
          icon: require('@/assets/icons/home.svg'),
          title: 'Home'
        },
        {
          icon: require('@/assets/icons/home.svg'),
          title: 'akun'
        },
        {
          icon: require('@/assets/icons/home.svg'),
          title: 'bimbel'
        },
        {
          icon: require('@/assets/icons/home.svg'),
          title: 'konseling'
        },
        {
          icon: require('@/assets/icons/home.svg'),
          title: 'akademik'
        },
        {
          icon: require('@/assets/icons/home.svg'),
          title: 'keuangan'
        },
        {
          icon: require('@/assets/icons/home.svg'),
          title: 'akredikasi'
        },
        {
          icon: require('@/assets/icons/home.svg'),
          title: 'pembelajaran'
        },
        {
          icon: require('@/assets/icons/home.svg'),
          title: 'admin'
        }
      ]
    }
  },
  methods: {
    toggleOpen() {
      this.open = !this.open
    }
  }
}
</script>

<style></style>
