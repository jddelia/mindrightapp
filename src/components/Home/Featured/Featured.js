import React from 'react';

import FeaturedItem from './FeaturedItem';

const marcus = `
Marcus Aurelius Antoninus was born on April 26, A.D. 121. His real name was M. Annius Verus, 
and he was sprung of a noble family... 
`;
const miyamoto = `
Miyamoto Musashi was born in 1584, in a Japan struggling to recover from more than four 
centuries of internal strife.
`;
const epictetus = `
The little book by Epictetus called Enchiridion or “manual” has played a disproportionately 
large role in the rise of modern attitudes...
`

function Featured() {
  return (
    <div className="featured">
      <FeaturedItem 
        img={require('../../../assets/marcusAurelius.png')}
        author={"Marcus Aurelius"}
        content={marcus}
        url={"https://www.gutenberg.org/files/2680/2680-h/2680-h.htm"}
      />
      <FeaturedItem 
        img={require('../../../assets/musashi.png')}
        author={"Miyamoto Musashi"}
        content={miyamoto}
        url={"https://terebess.hu/zen/mesterek/A-book-of-five-rings.pdf"}
      />
      <FeaturedItem 
        img={require('../../../assets/epictetus.png')}
        author={"Epictetus"}
        content={epictetus}
        url={"https://www.gutenberg.org/files/45109/45109-h/45109-h.htm"}
      />
    </div>
  );
}

export default Featured;