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
        title="Inaccessible Accordion"
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
          This accordion is inaccessible. It has no keyboard support whatsoever.
          Also, there are <code>div</code>s everywhere. Surely the chef has more
          semantic ingredients he could use.
        </EntryMine>
        <EntryTheirs>
          We are but a lowly diner, monsieur, not some Michelin Star outfit.
        </EntryTheirs>
        <EntryMine>
          Please try harder. While the chef fixes things up, I'll go on social
          media and start feeling lousy.
        </EntryMine>
      </ul>
      <ul className="log">
        <EntryTheirs>
          Ah, you are in luck today. The chef is inspired and has prepared you{' '}
          <em>two</em> options! Each one has its pros and cons.
        </EntryTheirs>
        <EntryMine>
          Can you describe the first option? Quickly, I'm feeling lightheaded.
        </EntryMine>
      </ul>
    </Section>

    <Section>
      <SectionTitle>
        Option #1: <code>&lt;details&gt;</code> &amp;{' '}
        <code>&lt;summary&gt;</code>
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
          with an optional <code>summary</code> element. And, look at this, no
          JavaScript!
        </EntryTheirs>
        <EntryMine>
          It looks delicious, but is it too good to be true? What are the pros
          and cons of this approach?
        </EntryMine>
      </ul>

      <h3 className="centeredHeader">Pros</h3>
      <ReasonList>
        <ReasonListItem>No JavaScript necessary.</ReasonListItem>
        <ReasonListItem>Totally accessible out of the box.</ReasonListItem>
      </ReasonList>

      <h3 className="centeredHeader">Cons</h3>
      <ReasonList>
        <ReasonListItem>
          No IE, IE Mobile, or Edge support. Polyfills exist.
        </ReasonListItem>
        <ReasonListItem>
          Difficult to style. Those ugly arrows can be hidden via
          vendor-prefixed styles. Chrome ignores CSS transitions on the
          `summary` element while Firefox seems to only transition opened,
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
        Option #2: <code>aria-expanded</code> &amp; <code>aria-hidden</code>
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
          Here we have a delicious accordion lightly fried in JavaScript. It has
          basic keyboard accessibility baked into it. From your other visits,
          the chef is aware of your JavaScript sensitivity and wanted me to
          inform you that there are only 12 lines of it in this dish, so strap
          your diaper on and deal with it.
        </EntryTheirs>
        <EntryMine>…</EntryMine>
      </ul>

      <h3 className="centeredHeader">Pros</h3>
      <ReasonList>
        <ReasonListItem>
          Easy to style and works predictably with CSS transitions.
        </ReasonListItem>
        <ReasonListItem>Works cross-browser with no polyfills.</ReasonListItem>
      </ReasonList>

      <h3 className="centeredHeader">Con</h3>
      <ReasonList>
        <ReasonListItem>Not accessible by default (but close).</ReasonListItem>
      </ReasonList>
    </Section>
    <Section>
      <h2 className="centeredHeader">Takeaways</h2>
      <ReasonList>
        <ReasonListItem>
          If you don't require IE or Edge support, or don't mind using a
          polyfill, the <code>&lt;detail&gt;</code> element might be for you.
        </ReasonListItem>
        <ReasonListItem>
          Use <code>&lt;button&gt;</code>s for panel triggers. They are keyboard
          (tab) friendly by default, meaning there is no need to add{' '}
          <code>tabindex</code>.
        </ReasonListItem>
        <ReasonListItem>
          For screenreaders to convey when a drawer is opened or closed, add a
          little JavaScript that toggles the <code>aria-expanded</code>{' '}
          attribute on the panel trigger and <code>aria-hidden</code> on the
          panel content. This tells screenreaders to ignore hidden content for
          closed panels.
        </ReasonListItem>
        <ReasonListItem>
          In your CSS, use the value of <code>aria-selected</code> to control
          the opened and closed state of the panels.
        </ReasonListItem>
      </ReasonList>
    </Section>
  </>
);

export default AccordionView;
