import Vue from 'vue'

const requireComponent=require.context(
    './',
    false,
    /Pr[A-Z]\w+\.vue$/
)

requireComponent.keys().forEach(fileName=>{
    const componentConfig=requireComponent(fileName);
    const componentName=fileName.replace(/^\.\/(.*)\.\w+$/,'$1');
    Vue.component(
        componentName,
        componentConfig.default||componentConfig
    )
})