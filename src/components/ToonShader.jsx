const ToonShader = new ShaderMaterial({
    uniforms: {
      lightPosition: { value: new THREE.Vector3(5, 5, 5) },
      baseColor: { value: new THREE.Color(0xffffff) },
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vLightDirection;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 lightPosition = viewMatrix * vec4(5.0, 5.0, 5.0, 1.0);
        vLightDirection = normalize(lightPosition.xyz - position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vNormal;
      varying vec3 vLightDirection;
      uniform vec3 baseColor;
      void main() {
        float intensity = dot(normalize(vNormal), normalize(vLightDirection));
        intensity = ceil(intensity * 4.0) / 4.0; // Quantize light intensity
        gl_FragColor = vec4(baseColor * intensity, 1.0);
      }
    `,
  });
  
  const ToonSphere = (props) => (
    <mesh {...props}>
      <sphereGeometry args={[1, 32, 32]} />
      <primitive object={ToonShader} attach="material" />
    </mesh>
  );
  
  export default ToonSphere;