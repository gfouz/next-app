import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ISvgProps {
  fill?: string;
  width?: string;
  height?: string;
  thickness?: string;
  strokeColor?: string;
}

export function Wxplorer(props: ISvgProps) {
  const [color, setColor] = useState(false);
  const { width, height, fill, thickness, strokeColor } = props;

  useEffect(() => {
    setTimeout(() => {
      setColor(true);
    }, 2200);
  }, []);

  return (
    <>
      <svg
        width={width || '90'}
        height={height || '90'}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
      >
        <motion.path
          fill={color ? fill : 'none'}
          stroke={strokeColor || '#ffffff'}
          strokeWidth={thickness || '3'}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4 }}
          d='M512 256c0 141.2-114.7 256-256 256C114.8 512 0 397.3 0 256S114.7 0 256 0s256 114.7 256 256zm-32 0c0-123.2-100.3-224-224-224C132.5 32 32 132.5 32 256s100.5 224 224 224 224-100.5 224-224zM160.9 124.6l86.9 37.1-37.1 86.9-86.9-37.1 37.1-86.9zm110 169.1l46.6 94h-14.6l-50-100-48.9 100h-14l51.1-106.9-22.3-9.4 6-14 68.6 29.1-6 14.3-16.5-7.1zm-11.8-116.3l68.6 29.4-29.4 68.3L230 246l29.1-68.6zm80.3 42.9l54.6 23.1-23.4 54.3-54.3-23.1 23.1-54.3z'
        />
      </svg>
    </>
  );
}
export default Wxplorer;
