import React from 'react';
import shared from '../css/shared';
import EntryMine from '../EntryMine';
import EntryTheirs from '../EntryTheirs';

const ReasonList = shared.reasonList();
const ReasonListItem = shared.reasonListItem();
const Section = shared.section();
const SectionTitle = shared.sectionTitle();

const Mel = props => {
  // eslint-disable-next-line
  const { children } = props;
  return <EntryTheirs avatar="/robot.png">{children}</EntryTheirs>;
};

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
          Also, there are <code>&lt;div&gt;</code>s everywhere. Surely the chef
          has more semantic ingredients he could use.
        </EntryMine>
        <EntryTheirs>
          We are but a lowly diner, monsieur, not some Michelin Star outfit.
        </EntryTheirs>
        <EntryMine>
          Please try harder. While the chef fixes things up, I'll hop on social
          media and start feeling lousy.
        </EntryMine>
        <EntryTheirs>
          I am back, and you are in luck today. The chef is inspired and has
          prepared you <em>two</em> options! Each one has its pros and cons.
        </EntryTheirs>
        <EntryMine>
          Can you describe the first option? Quickly, I'm feeling lightheaded.
        </EntryMine>
      </ul>
    </Section>

    <Section>
      <SectionTitle>
        Option #1: <code>&lt;details&gt;</code> and
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
        <Mel>Hey, guys.</Mel>
        <EntryMine>Gah! What…are you?</EntryMine>
        <Mel>
          I'm Mel. I'm a crude, free image found on a DuckDuckGo search at 1AM.
          I'm here to tell the truth about things.
        </Mel>
        <EntryMine>
          I guess I'll have to accept this. Tell me about the pros and cons of
          this approach.
        </EntryMine>
        <Mel>
          Let's start with the good. No JavaScript necessary and it's totally
          accessible right out of the box.
        </Mel>
        <EntryMine>
          Great, because JavaScript can make things overly complicated.
        </EntryMine>
        <Mel>
          Right, that's why you built this website using React. Yeah, you{' '}
          <em>really</em> must hate JS.
        </Mel>
        <EntryMine>…</EntryMine>
        <Mel>
          One bad thing is that there's no feature support in IE, IE Mobile, or
          Edge. Polyfills exist.
        </Mel>
        <EntryMine>
          IE Mobile? Yeah, <em>huge</em> market share. Go on.
        </EntryMine>
        <Mel>
          It's also difficult to style. Those ugly arrows can be hidden via
          vendor-prefixed styles. Chrome ignores CSS transitions on the
          <code>summary</code> element while Firefox seems to only transition
          opened, closing abruptly.
        </Mel>
        <EntryMine>
          Not bad, but I want to really control the styling, so let's hear about
          option 2.
        </EntryMine>
        <Mel>
          Okay, but I need to leave for a minute so that the waiter can make a
          few jokes and earn his keep.
        </Mel>
      </ul>
    </Section>

    <Section>
      <SectionTitle>
        Option #2: <code>aria-expanded</code> and <code>aria-hidden</code>
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
          Here we have a delicious, semantic accordion lightly fried in
          JavaScript. The chef is aware of your JavaScript sensitivity and
          wanted me to inform you that there are only 12 lines of it in this
          dish, so strap a diaper on and deal with it.
        </EntryTheirs>
        <Mel>Hey, guys. I'm back. Sorry about the diaper comment, Andy.</Mel>
        <EntryMine>
          Just dispense with the pros and cons of this next approach!
        </EntryMine>
        <Mel>
          It's easy to style and works predictably with CSS transitions. Another
          nice thing is that it works cross-browser with no need for polyfills.
        </Mel>
        <EntryMine>But is it accessible?</EntryMine>
        <Mel>
          Well, no. Not by default. That's where those lines of JavaScript come
          in. Adding those few lines above give us basic keyboard accessibility
          and make things screenreader-friendly.
        </Mel>
      </ul>
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
