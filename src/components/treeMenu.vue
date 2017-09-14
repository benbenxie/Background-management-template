<template>
    <li>
    <span @click="toggle">
      <i v-if="isFolder" class="agent" :class="[open ? 'agent-folder-open': 'agent-folder']"></i>
      <i v-if="!isFolder" class="agent agent-file-text"></i>
      {{ model.menuName }}
    </span>
        <ul v-show="open" v-if="isFolder">
            <tree-menu v-for="(item,index) in model.children" :key="index" :model="item"></tree-menu>
        </ul>
    </li>
</template>

<script>
    export default {
        name: 'treeMenu',
        props: ['model'],
        data() {
        return {
            open: false,
            isFolder: true
        }
    },
    computed: {
        isFolder: function() {
            return this.model.children && this.model.children.length
        }
    },
    methods: {
        toggle: function() {
            if (this.isFolder) {
                this.open = !this.open
            }
        }
    }
    }
</script>

<style scoped>
    ul {
        padding-left: 30px;
    }
    .agent {
        display: inline-block;
        width: 15px;
        height: 15px;
        background-repeat: no-repeat;
        vertical-align: bottom;
    }

    .tree-menu li {
        line-height: 1.5;
    }
</style>