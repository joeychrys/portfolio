import { PointMaterial } from '@react-three/drei';
import { Points } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import * as buffer from 'maath/buffer';
import * as misc from 'maath/misc';
import * as random from 'maath/random';
import { useRef, useState } from 'react';
import { useMemo } from 'react';
import { Quaternion, Vector3 } from 'three';

const rotationAxis = new Vector3(3, 1, 0).normalize();
const q = new Quaternion();

function PointCloud(props) {
  const [positions] = useMemo(() => {
    const positions = new Float32Array(8000);
    for (let i = 0; i < 8000; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    return [positions];
  }, []);

  const pointsRef = useRef();
  const [{ box, sphere, final }] = useState(() => {
    const box = random.inBox(new Float32Array(8000), { sides: [1, 1, 1] });
    const sphere = random.inSphere(box.slice(0), { radius: 0.75 });
    const final = box.slice(0);

    return { box, sphere, final };
  });

  const { viewport } = useThree();

  useFrame(({ clock }, delta) => {
    const et = clock.getElapsedTime();

    if (et <= 9.5) {
      const t = misc.remap(Math.sin(et / 2), [-1, 1], [0, 1]);
      const t2 = misc.remap(Math.cos(et), [-1, 1], [0, 1]);

      buffer.rotate(box, {
        q: q.setFromAxisAngle(rotationAxis, t2 * 0.1),
      });
      buffer.lerp(sphere, positions, final, t);
    }
    if (et > 9.5) {
      pointsRef.current.rotation.x -= delta / 1;
      pointsRef.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]} position={[0, 0, 2]}>
      <Points positions={final} stride={3} ref={pointsRef} {...props}>
        <PointMaterial
          transparent
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          color="black"
        />
      </Points>
    </group>
  );
}

const PointSphere = () => {
  return (
    <Canvas>
      <PointCloud />
    </Canvas>
  );
};

export default PointSphere;
