import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring'

const terms = [
  { id: 0, content: 'Productivity'},
  { id: 1, content: 'Focus'},
  { id: 2, content: 'Concentration' },
]

function Phrase() {
  const transitionList = Terms().map(({ item, props, key }) => (
    <animated.span
      key={key}
      className="phraseTextAnimated"
      style={{ 
        ...props,
        opacity: props.opacity.interpolate([0, 0.5, 1, 1.5, 2], [0, 0, 1, 0, 0])
      }}
    >{item.content}</animated.span>
  ));

  return (
    <div className="phrase">
      <p className="phraseText">
        The Mindfulness Tool,
        To Enhance <br/> <span className="animPhraseContainer">{transitionList}</span>
      </p>
    </div>
  );
}

const Terms = () => {
  const [termIdx, setTermIdx] = useState(0);
  
  useEffect(() => {
    setInterval(cycleTerms, 3000);
  }, []);

  function cycleTerms() {
    setTermIdx(prevIdx => (prevIdx + 1) % 3);
  }

  const transitions = useTransition(terms[termIdx], term => term.id, {
    from: { opacity: 0, transform: 'scale(1.2)' },
    enter: { opacity: 1, transform: 'scale(1.0)' },
    leave: { opacity: 0, transform: 'scale(1.2)' },
    config: config.molasses,
  });

  return transitions;
}

export default Phrase;