import React from 'react';
import shared from '../css/shared';
import EntryMine from '../EntryMine';
import EntryTheirs from '../EntryTheirs';

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
          You are so good at complaining! If only their were some award to
          provide you.
        </EntryTheirs>
        <EntryMine>
          For the love of god, don't include and hide a <em>second</em>{' '}
          <code>&lt;nav&gt;</code> “just for mobile.” Find a way to use a single
          element.
        </EntryMine>
        <EntryTheirs>
          But no one will know! These customers will eat just about anything we
          put on a plate. Have you viewed Amazon's source lately?
        </EntryTheirs>
        <EntryMine>
          Not everyone has thousands of engineers at their disposal. And two{' '}
          <code>nav</code> menus are harder to maintain than one. Tell the chef
          to never animate things using the <code>left</code> or{' '}
          <code>top</code> properties. Instead, use <code>transform</code> with{' '}
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
        </EntryMine>
      </ul>
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
    </Section>
  </>
);

export default BurgerView;
