import React from 'react';
import Highlight from 'react-highlight';
import shared from '../css/shared';

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
        <li className="entry theirs">
          <img src="/snob.jpg" alt="" className="avatar" />
          <p className="message">Your hamburger, monsieur.</p>
        </li>
        <li className="entry mine">
          <img src="/me.jpg" alt="" className="avatar" />
          <p className="message">
            Is this a joke? Are you trying to poison me?
          </p>
        </li>
        <li className="entry theirs">
          <img src="/snob.jpg" alt="" className="avatar" />
          <p className="message">
            You are so good at complaining! What feedback should I give the
            kitchen?
          </p>
        </li>
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
        <li className="entry theirs">
          <img src="/snob.jpg" alt="" className="avatar" />
          <p className="message">
            Once again, you have shown Mel a better way. He would like to offer
            you 5% off a stale cookie.
          </p>
        </li>
        <li className="entry mine">
          <img src="/me.jpg" alt="" className="avatar" />
          <p className="message">Is it gluten-free?</p>
        </li>
      </ul>

      <ReasonList>
        <ReasonListItem>
          Organize your HTML so that a hidden checkbox is a parent to your
          navigation. Create two labels, both pointing to the <code>id</code> of
          the hidden checkbox. The first label will serve as the hambuger toggle
          button. The second label will be the menu‘s close button.
        </ReasonListItem>
        <ReasonListItem>
          The two-label approach lets us use a single checkbox to control our
          mobile navigation. We‘ve also avoided using <code>:target</code>,
          which means there's sudden page jump to suppress. The two-label
          approach works especially well when a fixed header is employed, as in
          the second demo.
        </ReasonListItem>
      </ReasonList>
    </Section>
  </>
);

export default BurgerView;
