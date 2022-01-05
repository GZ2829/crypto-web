<template>
    <div
        @click="$emit('connect')"
        class="s-MetaMask flex flex-row w-1/4 justify-center items-center p-3 border-2 text-blue-600 border-blue-600 font-bold hover:text-white hover:bg-blue-600">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="Metamask"
            class="s-MetaMask--image">
        <p class="s-MetaMask--text">Connect to Metamask</p>
    </div>
</template>
