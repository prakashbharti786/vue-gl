import VglObject3d from "./vgl-object3d.js";
import {hasGeometry, hasMaterial} from "./mixins.js";
import {Mesh} from "./three.js";

export default {
    mixins: [VglObject3d, hasGeometry, hasMaterial],
    computed: {
        inst: () => new Mesh()
    }
};
