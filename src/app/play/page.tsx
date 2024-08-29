'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

function Play() {
  return (
    <div>
        <Wrapper
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: [
              '20%',
              '20%',
              '50%',
              '50%',
              '20%',
            ],
          }}
        />
    </div>
  );
}

export default Play;

const Wrapper = styled(motion.div)`
  text-align: center;
  height: 100px;
  width: 100px;
  background-color: lightblue;
`;
