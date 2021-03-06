import VglGeometry from "./vgl-geometry.js";
import {BoxGeometry} from "./three.js";
import {parseNumber} from "./utils.js";

export default {
    mixins: [VglGeometry],
    props: [
        "width",
        "height",
        "depth",
        "widthSegments",
        "heightSegments",
        "depthSegments"
    ],
    computed: {
        inst() {
            return new BoxGeometry(
                parseNumber(this.width),
                parseNumber(this.height),
                parseNumber(this.depth),
                parseNumber(this.widthSegments, true),
                parseNumber(this.heightSegments, true),
                parseNumber(this.depthSegments, true)
            );
        }
    }
};
