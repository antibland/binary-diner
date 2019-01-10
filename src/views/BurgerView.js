import React from 'react';
import shared from '../css/shared';
import EntryMine from '../EntryMine';
import EntryTheirs from '../EntryTheirs';

const ReasonList = shared.reasonList();
const ReasonListItem = shared.reasonListItem();
const Section = shared.section();
const SectionTitle = shared.sectionTitle();

const BurgerView = () => (
  <>
    <Section>
      <SectionTitle>Attempt #1</SectionTitle>

      <iframe
        height="300"
        scrolling="no"
        title="Flawed hamburger menu"
        src="//codepen.io/antibland/embed/preview/bQxxoe/?height=300&theme-id=21538&default-tab=css,result"
        frameBorder="no"
        style={{ width: '100%' }}
      >
        See the Pen{' '}
        <a href="https://codepen.io/antibland/pen/bQxxoe/">
          Flawed hamburger menu
        </a>{' '}
        by Andy Hoffman (<a href="https://codepen.io/antibland">@antibland</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>

      <ul className="log">
        <EntryTheirs>Your hamburger, monsieur.</EntryTheirs>
        <EntryMine>Is this a joke? Are you trying to poison me?</EntryMine>
        <EntryTheirs>
          You are so good at complaining! What feedback should I give the
          kitchen?
        </EntryTheirs>
      </ul>

      <ReasonList>
        <ReasonListItem>
          For the love of god, don't include and hide a <em>second</em>{' '}
          <code>&lt;nav&gt;</code> “just for mobile.” Find a way to use a single
          element.
        </ReasonListItem>
        <ReasonListItem>
          Never animate things using the <code>left</code> or <code>top</code>{' '}
          properties. Instead, use <code>transform</code> with{' '}
          <code>translate</code>. A very{' '}
          <a
            href="https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/"
            rel="noopener noreferrer"
            target="_blank"
            className="standard"
          >
            old, awesome post
          </a>{' '}
          explains why.
        </ReasonListItem>
      </ReasonList>
    </Section>

    <Section>
      <SectionTitle>Attempt #2</SectionTitle>
      <iframe
        height="298"
        scrolling="no"
        title="JS-free hamburger menu w/ fixed header"
        src="//codepen.io/antibland/embed/preview/BGPGMa/?height=298&theme-id=21538&default-tab=css,result"
        frameBorder="no"
        style={{ width: '100%' }}
      >
        See the Pen{' '}
        <a href="https://codepen.io/antibland/pen/BGPGMa/">
          JS-free hamburger menu w/ fixed header
        </a>{' '}
        by Andy Hoffman (<a href="https://codepen.io/antibland">@antibland</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>

      <ul className="log">
        <EntryTheirs>
          Once again, you have shown Mel a better way. He would like to offer
          you 5% off a stale cookie.
        </EntryTheirs>
        <EntryMine>Is it gluten-free?</EntryMine>
      </ul>

      <ReasonList>
        <ReasonListItem>
          Organize your HTML so that a hidden checkbox is a parent to your
          navigation. Create two labels, both pointing to the <code>id</code> of
          the hidden checkbox. The first label will serve as the hambuger toggle
          button. The second label will be the menu’s close button.
        </ReasonListItem>
        <ReasonListItem>
          The two-label approach allows us to control our mobile navigation
          using a single checkbox. We’ve also avoided using <code>:target</code>
          , which means there's no sudden page jump to suppress. The two-label
          approach works especially well when a fixed header is employed, as in
          the second demo.
        </ReasonListItem>
      </ReasonList>
    </Section>
  </>
);

export default BurgerView;
