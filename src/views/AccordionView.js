import React from 'react';
import shared from '../css/shared';
import EntryMine from '../EntryMine';
import EntryTheirs from '../EntryTheirs';

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
        title="Inaccessibles Accordion"
        src="//codepen.io/antibland/embed/preview/XyYyga/?height=300&theme-id=21538&default-tab=js,result"
        frameBorder="no"
        style={{ width: '100%' }}
      >
        See the Pen{' '}
        <a href="https://codepen.io/antibland/pen/XyYyga/">
          Inaccessible Js Accordion
        </a>{' '}
        by Andy Hoffman (<a href="https://codepen.io/antibland">@antibland</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>

      <ul className="log">
        <EntryMine>
          Waiter, too much JavaScript gives me a rash—even the good,
          vanilla-flavored variety. Can the chef do better? Also, this accordion
          is inaccessible. Add that to my list of complaints.
        </EntryMine>
        <EntryTheirs>
          We are but a lowly diner, monsieur, not some Michelin Star outfit.
        </EntryTheirs>
        <EntryMine>
          Please try harder. I'll read some Wikipedia articles to keep my mind
          off of the impending starvation.
        </EntryMine>
        <EntryTheirs>
          I must ask why you detest JavaScript so much? It is the hallmark of
          any website—er, entrée, I mean.
        </EntryTheirs>
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
          JavaScript can add gratuitous complexity to a web application or
          website. Always aim to use as little as possible.
        </ReasonListItem>
        <ReasonListItem>
          Sometimes, we are handing a finished project to a client who is not so
          technically skilled. For them, modifying JavaScript can be an unwieldy
          task.
        </ReasonListItem>
      </ReasonList>
      <ul className="log">
        <EntryTheirs>
          Ah, you are in luck today. The chef is inspired and has prepared you{' '}
          <em>two</em> options! Each one has its pros and cons.
        </EntryTheirs>
        <EntryMine>
          Can you describe the first option? Quickly, if possible. I'm getting
          lightheaded.
        </EntryMine>
      </ul>
    </Section>

    <Section>
      <SectionTitle>
        Option #1: <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code>
      </SectionTitle>
      <iframe
        height="300"
        scrolling="no"
        title="Summary/details Accordion"
        src="//codepen.io/antibland/embed/preview/bOvWXL/?height=300&theme-id=21538&default-tab=css,result"
        frameBorder="no"
        style={{ width: '100%' }}
      >
        See the Pen{' '}
        <a href="https://codepen.io/antibland/pen/bOvWXL/">
          Summary/details Accordion
        </a>{' '}
        by Andy Hoffman (<a href="https://codepen.io/antibland">@antibland</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>

      <ul className="log">
        <EntryTheirs>
          What we have here are three <code>detail</code> elements, each stuffed
          with a <code>summary</code> element. And, look at this, no JavaScript!
        </EntryTheirs>
        <EntryMine>
          It looks delicious, but is it too good to be true? What are the pros
          and cons of this approach?
        </EntryMine>
      </ul>

      <ReasonList>
        <ReasonListItem>
          <strong>Pro:</strong> No JavaScript necessary.
        </ReasonListItem>
        <ReasonListItem>
          <strong>Pro:</strong> Totally accessible out of the box.
        </ReasonListItem>
        <ReasonListItem>
          <strong>Con:</strong> No IE, IE Mobile, or Edge support. Polyfills
          exist.
        </ReasonListItem>
        <ReasonListItem>
          <strong>Con:</strong> Difficult to style. Those ugly arrows can be
          hidden via vendor-prefixed styles. Chrome ignores CSS transitions on
          the `summary` element while Firefox seems to only transition opened,
          closing abruptly.
        </ReasonListItem>
      </ReasonList>

      <ul className="log">
        <EntryMine>
          Not bad, but I need IE support, so let's hear about option 2.
        </EntryMine>
        <EntryTheirs>
          Monsieur, please stop gnawing on the tablecloth. I am well aware of
          your hunger.
        </EntryTheirs>
      </ul>
    </Section>

    <Section>
      <SectionTitle>
        Option #2: <code>aria-expanded</code>
      </SectionTitle>
      <iframe
        height="300"
        scrolling="no"
        title="Accessible Accordion"
        src="//codepen.io/antibland/embed/preview/rodwRe/?height=300&theme-id=21538&default-tab=css,result"
        frameBorder="no"
        style={{ width: '100%' }}
      >
        See the Pen{' '}
        <a href="https://codepen.io/antibland/pen/ReeREK/">
          Accessible Accordion
        </a>{' '}
        by Andy Hoffman (<a href="https://codepen.io/antibland">@antibland</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>

      <ul className="log">
        <EntryTheirs>
          Here we have a delicious accordion lightly fried in JavaScript. The
          chef is aware of your JavaScript sensitivity and wanted me to inform
          you that there are only 12 lines of it in this dish, so strap your
          diaper on and deal with it.
        </EntryTheirs>
        <EntryMine>…</EntryMine>
      </ul>

      <ReasonList>
        <ReasonListItem>
          <strong>Pro:</strong> Easy to style and works predictably with CSS
          transitions.
        </ReasonListItem>
        <ReasonListItem>
          <strong>Pro:</strong> Works cross-browser with no polyfills.
        </ReasonListItem>
        <ReasonListItem>
          <strong>Con:</strong> Not accessible by default. For screenreaders to
          convey when a drawer is opened or closed, add a little JavaScript that
          toggles true/false on each drawer's <code>aria-expanded</code>{' '}
          attribute.
        </ReasonListItem>
      </ReasonList>
    </Section>
  </>
);

export default AccordionView;
