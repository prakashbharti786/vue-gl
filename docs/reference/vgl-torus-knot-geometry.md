---
layout: reference
---
[Home](..) &gt; [References](.) &gt; [Geometries](.#geometries) &gt; VglTorusKnotGeometry
# VglTorusKnotGeometry `<vgl-torus-knot-geometry>`
A component for generating torus knot geometries, corresponding [THREE.TorusKnotGeometry](https://threejs.org/docs/index.html#api/geometries/TorusKnotGeometry).
## Mixins
See the mixin components below for common properties.
* [VglGeometry](vgl-geometry)

## Properties
* `radius` - Radius of the torus.
* `tube` - Diamiter of the tube.
* `radialSegments` - Number of segments of the tube's section.
* `tubularSegments` - Number of segments along to the tube length direction.
* `p` - This value determines how many times the geometry winds around its axis of rotational symmetry.
* `q` - This value determines, how many times the geometry winds around a circle in the interior of the torus.

## Example usage
```html
<vgl-renderer :antialias="true" style="width: 300px; height: 150px;">
    <vgl-scene>
        <vgl-torus-knot-geometry name="torus" radius=20 tube=5></vgl-torus-knot-geometry>
        <vgl-mesh-standard-material name="std"></vgl-mesh-standard-material>
        <vgl-mesh geometry="torus" material="std"></vgl-mesh>
        <vgl-ambient-light color="#ffeecc"></vgl-ambient-light>
        <vgl-directional-light position="0 1 2"></vgl-directional-light>
    </vgl-scene>
    <vgl-perspective-camera orbit-position="radius: 100; phi: 1; theta: 0.5;"></vgl-perspective-camera>
</vgl-renderer>
```
<div class="vgl-example"><iframe class="vgl-example__content" srcdoc="
    <style>
        body {
            margin: 0;
            overflow: hidden;
        }
        .vgl-canvas {
            height: 100vh;
        }
    </style>
    <vgl-renderer :antialias='true' class='vgl-canvas'>
        <vgl-scene>
            <vgl-torus-knot-geometry name='torus' radius=20 tube=5></vgl-torus-knot-geometry>
            <vgl-mesh-standard-material name='std'></vgl-mesh-standard-material>
            <vgl-mesh geometry='torus' material='std'></vgl-mesh>
            <vgl-ambient-light color='#ffeecc'></vgl-ambient-light>
            <vgl-directional-light position='0 1 2'></vgl-directional-light>
        </vgl-scene>
        <vgl-perspective-camera orbit-position='radius: 100; phi: 1; theta: 0.5;'></vgl-perspective-camera>
    </vgl-renderer>
    <script src='https://unpkg.com/vue/dist/vue.min.js'></script>
    <script src='https://unpkg.com/three/build/three.min.js'></script>
    <script src='../js/vue-gl.js'></script>
    <script>
        Object.keys(VueGL).forEach(function(name) {
            Vue.component(name, VueGL[name]);
        });
        const vm = new Vue({
            el: '.vgl-canvas'
        });
    </script>
"></iframe></div>
<script src="https://unpkg.com/srcdoc-polyfill@1.0.0/srcdoc-polyfill.min.js"></script>
