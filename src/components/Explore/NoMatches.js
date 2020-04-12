import React from 'react';
import { motion } from 'framer-motion';

function NoMatches() {
  return (
    <motion.div
      className="noMatches"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 0.5 }}
    >
      No Matches Found.
    </motion.div>
  );
}

export default NoMatches;