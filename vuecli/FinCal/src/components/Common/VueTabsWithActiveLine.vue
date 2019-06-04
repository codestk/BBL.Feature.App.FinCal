<template>
    <!--<nav class="tabs" :class="wrapperClass">
        <div v-for="tab in tabs">
            <button class="tabs__item"
                    type="button"
                    :ref="tab.value"
                    :key="tab.title"
                    :class="[
        { 'tabs__item_active' : tab.value === currentTab },
        tab.value === currentTab && tabActiveClass ? tabActiveClass: '',
        tabClass,
      ]"
                    :disabled="tab.disabled || false"
                    @click="handleClick(tab.value)"
                    v-html="tab.title" />
        </div>
        <div class="tabs__active-line"
             :class="lineClass"
             :style="{ width: `${activeLineWidth}px`, transform: `translateX(${activeLineOffset}px)` }" />
    </nav>-->
    <article data-tab="" class="tabs">
        <ul data-tab-header="" class="tab-header">
            <li v-for="tab in tabs" :class="[{ 'active' : tab.value === currentTab },tab.value === currentTab && tabActiveClass ? tabActiveClass: '', tabClass,]">
                <a :ref="tab.value" :key="tab.title" :disabled="tab.disabled || false" v-html="tab.title" @click="handleClick(tab.value)"></a>
            </li>
        </ul>
    </article>
</template>

<script>
    export default {
        name: 'vue-tabs-with-active-line',
        props: {
            currentTab: {
                type: String,
                required: true,
            },
            tabs: {
                type: Array,
                required: true,
            },
            updated: {
                type: [Boolean, String, Array],
                default: undefined,
            },
            wrapperClass: {
                type: String,
                required: false,
            },
            tabClass: {
                type: String,
                required: false,
            },
            tabActiveClass: {
                type: String,
                required: false,
            },
            lineClass: {
                type: String,
                required: false,
            },
        },
        watch: {
            currentTab(newCurrentTab) {
                if (this.newTab === newCurrentTab) return;
                this.moveActiveLine(newCurrentTab);
            },
            updated() {
                this.moveActiveLine(this.currentTab);
            },
        },
        data: () => ({
            activeLineWidth: 0,
            activeLineOffset: 0,
            newTab: '',
        }),
        methods: {
            handleClick(value) {
                this.$emit('onClick', value);
                this.moveActiveLine(value);

                this.newTab = value;
            },
            moveActiveLine(newValue) {
                if (!this.currentTab) return;

                const element = this.$refs[newValue][0];
                if (!element) return;

                this.activeLineWidth = element.clientWidth;
                this.activeLineOffset = element.offsetLeft;
            },
        },
        mounted() {
            this.moveActiveLine(this.currentTab);
        },
    };
</script>

<style>
    [data-tab] .tab-header li {
        display: inline-block;
        margin-right: 25px;
    }

        [data-tab] .tab-header li.active {
            border-bottom: 2px solid #003fbd;
            transition: all .3s ease;
        }
    /*.tabs .tab-header {
    border-bottom: 2px solid #eee;
    }

    [data-tab] .tab-header {
    padding: 0 0 12px;
    }*/
    .tabs-content p {
        font-size: 0.95rem;
    }
</style>
