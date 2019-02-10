import React from 'react';
import Highlight from 'react-highlight';
import shared from '../css/shared';
import EntryMine from '../EntryMine';
import EntryTheirs from '../EntryTheirs';

const ReasonList = shared.reasonList();
const ReasonListItem = shared.reasonListItem();
const Section = shared.section();
const SectionTitle = shared.sectionTitle();

const ImageZoomView = () => (
  <>
    <Section>
      <ul className="log">
        <EntryTheirs>What will it be this morning?</EntryTheirs>
        <EntryMine>
          I'm thinking about trying the Image Zoom. How is it prepared?
        </EntryMine>
        <EntryTheirs>
          Ah, well, it is prepared by a third party and brought in frozen. It's
          complicated.
        </EntryTheirs>
        <EntryMine>
          I'm not eating some reheated crap from 2011. I'll cook it myself. Out
          of my way, waiter!
        </EntryMine>
        <EntryTheirs>
          Please stop, sir! Mel is recharging in his dock. He is embarrassed
          when humans see him like that.
        </EntryTheirs>
        <EntryMine>Whoa…</EntryMine>
        <EntryTheirs avatar="/robot.png">
          <p>
            <em>
              Charging
              <span className="loading-dots" />
            </em>
          </p>
        </EntryTheirs>
      </ul>
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

  this.style.setProperty('--mouse-x', percentX);
  this.style.setProperty('--mouse-y', percentY);
      `}
      </Highlight>

      <p>
        That's all the <code>JavaScript</code> we need. In our CSS, we carefully
        place <code>--mouse-x</code> and <code>--mouse-y</code>. As visitors
        hover about our image, our CSS variables are instantly updated.
      </p>

      <Highlight className="css">{`
.zoomify:hover::after {
  opacity: 1;
  background-size: 250%;
  cursor: zoom-in;
  background-position: calc(var(--mouse-x) * 1%) calc(var(--mouse-y) * 1%);
}
`}</Highlight>
    </Section>
    <Section>
      <h2 className="centeredHeader">Takeaways</h2>
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
  </>
);

export default ImageZoomView;
