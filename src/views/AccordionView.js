import React from 'react';
import Highlight from 'react-highlight';
import shared from '../css/shared';

const ReasonList = shared.reasonList();
const ReasonListItem = shared.reasonListItem();
const Section = shared.section();
const SectionTitle = shared.sectionTitle();

const AccordionView = () => (
  <>
    <Section>
      <SectionTitle>Attempt #1</SectionTitle>

      <iframe
        height="300"
        scrolling="no"
        title="Vanilla Js Accordion"
        src="//codepen.io/antibland/embed/preview/XyYyga/?height=300&theme-id=21538&default-tab=js,result"
        frameBorder="no"
        style={{ width: '100%' }}
      >
        See the Pen{' '}
        <a href="https://codepen.io/antibland/pen/XyYyga/">
          Vanilla Js Accordion
        </a>{' '}
        by Andy Hoffman (<a href="https://codepen.io/antibland">@antibland</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>

      <ul className="log">
        <li className="entry mine">
          <img src="/me.jpg" alt="" className="avatar" />
          <p className="message">
            Waiter, too much JavaScript gives me a rash. Can the chef prepare
            this using only CSS?
          </p>
        </li>
        <li className="entry theirs">
          <img src="/snob.jpg" alt="" className="avatar" />
          <p className="message">
            Only CSS? We are a lowly diner, sir, not some Michelin Star outfit.
            I will see what I can do. What do you have against JavaScript?
          </p>
        </li>
      </ul>

      <ReasonList>
        <ReasonListItem>
          A 100KB JS file takes longer to process than a 100KB JPG. We have to
          consider{' '}
          <a
            href="https://medium.com/dev-channel/the-cost-of-javascript-84009f51e99e"
            rel="noopener noreferrer"
            target="_blank"
            className="standard"
          >
            The Cost of Javascript
          </a>
          .
        </ReasonListItem>
        <ReasonListItem>
          JavaScript sometimes adds gratuitous complexity to a web application
          or website.
        </ReasonListItem>
        <ReasonListItem>
          Sometimes, we are handing a finished project to a client who is not so
          technically skilled. For them, modifying JavaScript can be an unwieldy
          task.
        </ReasonListItem>
      </ReasonList>
    </Section>

    <Section>
      <SectionTitle>Attempt #2</SectionTitle>
      <iframe
        height="300"
        scrolling="no"
        title="JS-free Accordion"
        src="//codepen.io/antibland/embed/preview/ReeREK/?height=300&theme-id=21538&default-tab=css,result"
        frameBorder="no"
        style={{ width: '100%' }}
      >
        See the Pen{' '}
        <a href="https://codepen.io/antibland/pen/ReeREK/">JS-free Accordion</a>{' '}
        by Andy Hoffman (<a href="https://codepen.io/antibland">@antibland</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>

      <ul className="log">
        <li className="entry theirs">
          <img src="/snob.jpg" alt="" className="avatar" />
          <p className="message">
            Chef Mel cannot believe it. This is much simpler than all the
            JavaScript he was writing.
          </p>
        </li>
      </ul>

      <ReasonList>
        <ReasonListItem>
          The whole “trick” to this is inserting a visibly hidden checkbox
          before the panel users will click to toggle. The checkbox, though not
          visible, is toggled as users click each panel handle.
          <Highlight className="html">{`<input class="accordion-checkbox" id="tab-one" type="checkbox" />
<label for="tab-one" class="accordion-label title">
  First Panel
</label>`}</Highlight>
        </ReasonListItem>
        <ReasonListItem>
          Then we leverage the <code>:checked</code> pseudo-class of a checkbox
          and the subsequent-sibling combinator (or tilde) to control the state
          of the panel.
          <Highlight className="css">{`.accordion-checkbox:checked ~ .accordion-content {
  /* do stuff */
}`}</Highlight>
        </ReasonListItem>
      </ReasonList>
    </Section>
  </>
);

export default AccordionView;
