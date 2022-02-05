<!--
    Responsive Images with Imgix
    
    Use like:
    
    <v-img src="pathtoimage.jpg" :sizes="imageSizes" />
    
    Where imageSizes is similar to: 
    
    {
        min-bp: {
            (imgix params)
        },
        320: {
            w: 600
        },
        600: {
            w: 1024
        }
    }
    
    If the width in the options is not set, the fallback
    will get the highest breakpoint and use those values.
-->
<template>
    <picture>
        <source v-for="breakpoint in breakpoints" :key="breakpoint" :media="'(min-width: '+ breakpoint +'px)'" v-bind="attributes(breakpoint)" :class="sourceClass">
        <img v-bind="defaultSrc" :alt="alt" :class="buildClasses" class="block max-w-full max-h-full object-cover"></img>
    </picture>
</template>

<script>
import qs from 'qs'

export default {
    name: 'v-img',
    props: {
        src: {
            type: String,
            required: true
        },
        lazyLoad: {
            type: Boolean,
            default: true
        },
        sourceClass: {
            type: String,
            default: null
        },
        imgClass: {
            type: String,
            default: null
        },
        sizes: {
            type: Object,
            default: () => ({
            })
        },
        pixelDensity: {
            type: Number,
            default: 2
        },
        alt: {
            type: String,
            default: ''
        },
        focalPoint: {
            type: Object | Array,
            default: null
        },
        options: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    computed: {
        breakpoints() {
            return Object.keys(this.sizes).sort((a, b) => a - b).reverse()
        },
        defaultSrc() {
            const src = this.lazyLoad ? 'data-src' : 'src'
            
            const largestBp = Math.max(...Object.keys(this.sizes))

            return {
                [src]: this.src + '?' + this.getParams(this.sizes[largestBp])
            }
        },
        buildClasses() {
            const result = []
            if (this.imgClass) {
                result.push(this.imgClass)
            }
            if (this.lazyLoad) {
                result.push('lazy')
            }
            
            return result
        },
        parsedFocalPoint() {
            if (this.focalPoint.constructor === Array) {
                return {
                    x: this.focalPoint[0],
                    y: this.focalPoint[1]
                }
            }
            
            return this.focalPoint
        }
    },
    mounted() {
        if (window.lazyLoad) {
            window.lazyLoad.update()
        }
    },
    methods: {
        attributes(breakpoint) {
            const srcset = this.lazyLoad ? 'data-srcset' : 'srcset'
            
            return {
                [srcset]: this.buildSrcSet(this.sizes[breakpoint])
            }
        },
        buildSrcSet(params) {
            const result = []
            
            for (let i = 1; i <= this.pixelDensity; i++) {
                result.push(this.src + '?' + this.getParams(params, i) + ' ' + i + 'x')
            }
            
            return result.join(',')
        },
        getParams(params = {}, pixelDensity = null) {
            const result = {
                q: 80,
                auto: 'format',
                ...params,
                ...this.options
            }
            
            if (pixelDensity) {
                result['dpr'] = pixelDensity
            }
                
            if (this.focalPoint) {
                result['fp-x'] = this.parsedFocalPoint.x
                result['fp-y'] = this.parsedFocalPoint.y
            }
            
            return qs.stringify(result)
        }
    }
}
</script>
