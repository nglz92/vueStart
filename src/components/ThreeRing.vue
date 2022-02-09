<template>
  <!-- cooler background /lib/three-vignette.js -->
  <!-- this.vignette = createBackground({
      aspect: this.defaultCamera.aspect,
      grainScale: IS_IOS ? 0 : 0.001, // mattdesl/three-vignette-background#1
      colors: [this.state.bgColor1, this.state.bgColor2]
    });
    this.vignette.name = 'Vignette';
    this.vignette.renderOrder = -1; -->
  <!-- venice Sunset -->
  <!-- https://www.youtube.com/watch?v=yMYjb5O45hI -->
  <Renderer ref="renderer" resize orbit-ctrl>
    <Camera ref="cameraCenter" :fov="20" :position="{ z: 75, y: 30, x: 0 }" />
    <Scene>
      <AmbientLight color="#505050" />
      <SpotLight
        ref="spotLight1"
        color="#ffffff"
        :intensity="1"
        :position="{ z: 40, y: 0, x: -5 }"
        :angle="Math.PI / 2"
        :penumbra="0.1"
      />
      <SpotLight
        ref="spotLight2"
        color="#ffffff"
        :intensity="1"
        :position="{ z: 30, y: 8, x: 5 }"
        :angle="Math.PI / 4"
        :penumbra="0.1"
      />
      <Box>
        <PhysicalMaterial color="#ff0000" />
      </Box>
      <GltfModel
        :position="{ z: 3, y: -18, x: 8 }"
        ref="ring-dia"
        src="../../src/assets/models/goldenring.gltf"
        :rotation="{ z: -0.4, y: 0, x: 0 }"
        @load="onReady"
      >
        <PhysicalMaterial color="#ff0000" />
      </GltfModel>
      <GltfModel
        :position="{ z: 0, y: -18, x: -8 }"
        :rotation="{ z: -0.4, y: 0, x: 0 }"
        ref="ring-dia"
        src="../../src/assets/models/goldenring.gltf"
        @load="onReady"
      >
      </GltfModel>
    </Scene>
    <EffectComposer>
      <RenderPass />
    </EffectComposer>
  </Renderer>
</template>

<script>
import { Object3D, MathUtils, Vector3 } from "three";
const { randFloat: rnd, randFloatSpread: rndFS } = MathUtils;
import {
  AmbientLight,
  BoxGeometry,
  Camera,
  EffectComposer,
  HalftonePass,
  GltfModel,
  InstancedMesh,
  PhongMaterial,
  PointLight,
  Renderer,
  RenderPass,
  StandardMaterial,
  SpotLight,
  PhysicalMaterial,
  Scene,
  FbxModel,
  Text,
} from "troisjs";
export default {
  components: {
    AmbientLight,
    SpotLight,
    PointLight,
    BoxGeometry,
    GltfModel,
    Camera,
    StandardMaterial,
    PhongMaterial,
    PhysicalMaterial,
    EffectComposer,
    HalftonePass,
    InstancedMesh,

    FbxModel,
    Renderer,
    RenderPass,
    Scene,
    Text,
  },
  setup() {
    // gltf material

    function onReady(model) {
      console.log("onReady", model);
      // const GoldMaterial = ne({color: "#00ffff"});
      // model.traverse(gltf =>{

      //   if(gltf.isMesh){
      //   const Mesh= [];
      //   Mesh.forEach(mat => (mat.material= GoldMaterial));
      //   console.log(gltf);
      //   }
      // });
    }

    const NUM_INSTANCES = 10;
    const instances = [];
    const target = new Vector3();
    const dummyO = new Object3D();
    const dummyV = new Vector3();

    for (let i = 0; i < NUM_INSTANCES; i++) {
      instances.push({
        position: new Vector3(rndFS(200), rndFS(200), rndFS(200)),
        scale: rnd(0.2, 1),
        scaleZ: rnd(0.1, 1),
        velocity: new Vector3(rndFS(2), rndFS(2), rndFS(2)),
        attraction: 0.03 + rnd(-0.01, 0.01),
        vlimit: 1.2 + rnd(-0.1, 0.1),
      });
    }

    return {
      onReady,

      NUM_INSTANCES,
      instances,
      target,
      dummyO,
      dummyV,
    };
  },
  mounted() {
    this.cameraCenter = this.$refs.cameraCenter;

    this.renderer = this.$refs.renderer;
    this.init();
  },
  methods: {
    init() {
      // animate
      console.log(this.$refs.spotLight1);
      // this.cameraCenter.add(spotLight1);
      // this.cameraCenter.add(spotLight2);

      this.renderer.onBeforeRender(this.animate);
    },
    animate() {
      const { pointer } = this.renderer.three;
      this.target.copy(pointer.positionV3);
      for (let i = 0; i < this.NUM_INSTANCES; i++) {
        const { position, scale, scaleZ, velocity, attraction, vlimit } =
          this.instances[i];
        this.dummyV
          .copy(this.target)
          .sub(position)
          .normalize()
          .multiplyScalar(attraction);
        velocity.add(this.dummyV).clampScalar(-vlimit, vlimit);
        position.add(velocity);
        this.dummyO.position.copy(position);
        this.dummyO.scale.set(scale, scale, scaleZ);
        this.dummyO.lookAt(this.dummyV.copy(position).add(velocity));
        this.dummyO.updateMatrix();
      }
    },
  },
};
</script>
