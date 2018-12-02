import React from 'react';
import Highlight from 'react-highlight';
import shared from '../css/shared';

const ReasonList = shared.reasonList();
const ReasonListItem = shared.reasonListItem();
const Section = shared.section();
const SectionTitle = shared.sectionTitle();

const ImageZoomView = () => (
  <>
    <Section>
      <ul className="log">
        <li className="entry theirs">
          <img src="/snob.jpg" alt="" className="avatar" />
          <p className="message">What will it be this morning?</p>
        </li>
        <li className="entry mine">
          <img src="/me.jpg" alt="" className="avatar" />
          <p className="message">
            I'm thinking about trying the Image Zoom. How is it prepared?
          </p>
        </li>
        <li className="entry theirs">
          <img src="/snob.jpg" alt="" className="avatar" />
          <p className="message">
            Ah, well, it is prepared by a third party and brought in frozen.
          </p>
        </li>
        <li className="entry mine">
          <img src="/me.jpg" alt="" className="avatar" />
          <p className="message">
            I'm not eating some reheated crap. Take me to the kitchen. I'll cook
            it myself.
          </p>
        </li>
      </ul>

      <ReasonList>
        <ReasonListItem>
          The more reliant we become on outside vendors, the more risk we take
          in polluting the continuity of our work. We should strive to build our
          own libraries and understand how every feature works.
        </ReasonListItem>
        <ReasonListItem>
          Before hitting Google for some quick plugin, consider how long it
          would take to build it in-house.
        </ReasonListItem>
        <ReasonListItem>
          If IE11 is not in your project’s browser support tree,
          <em> definitely</em> consider using modern browser technologies to
          solve the problem in-house.
        </ReasonListItem>
      </ReasonList>
    </Section>

    <Section>
      <SectionTitle>Solution</SectionTitle>

      <iframe
        height="300"
        scrolling="no"
        title="Basic image zoom  w/ CSS Variables"
        src="//codepen.io/antibland/embed/mQaybx/?height=300&theme-id=21538&default-tab=js,result"
        frameBorder="no"
        style={{ width: '100%' }}
      >
        See the Pen{' '}
        <a href="https://codepen.io/antibland/pen/mQaybx/">
          Basic image zoom w/ CSS Variables
        </a>{' '}
        by Andy Hoffman (<a href="https://codepen.io/antibland">@antibland</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>

      <Highlight className="javascript">
        {`
// 1. Track the user’s mouse movement within the image container.

  const el = document.querySelector('.zoomify');
  el.addEventListener('mousemove', handleMouseMove, false);

// 2. Recalculate the percentages of the mouse cursor from the top/left
      corner of the image container.

  const dimensions = this.getBoundingClientRect();
  const [x, y] = [
    e.clientX - dimensions.left,
    e.clientY - dimensions.top
  ];
  const [percentX, percentY] = [
    Math.round(100 / (dimensions.width / x)),
    Math.round(100 / (dimensions.height / y))
  ];

// 3. Update CSS variables

  root.style.setProperty('--mouse-x', percentX);
  root.style.setProperty('--mouse-y', percentY);
      `}
      </Highlight>

      <p>
        That's all the <code>JavaScript</code> we need. In our CSS, we carefully
        place <code>--mouse-x</code> and <code>--mouse-y</code>. As visitors
        hover about our image, our CSS variables are instantly updated.
      </p>

      <Highlight className="css">{`
:root {
  --mouse-x: 0;
  --mouse-y: 0;
}

…

.zoomify:hover::after {
  opacity: 1;
  background-size: 250%;
  cursor: zoom-in;
  background-position: calc(var(--mouse-x) * 1%) calc(var(--mouse-y) * 1%);
}
`}</Highlight>
    </Section>
  </>
);

export default ImageZoomView;
