import React from 'react';
import Highlight from 'react-highlight';
import shared from '../css/shared';
import EntryMine from '../EntryMine';
import EntryTheirs from '../EntryTheirs';

const Section = shared.section();
const SectionTitle = shared.sectionTitle();

const ButtonView = () => (
  <>
    <Section>
      <SectionTitle>Attempt #1</SectionTitle>
      <Highlight className="html">{`<a href="#">
  Click here
</a>`}</Highlight>

      <ul className="log">
        <EntryTheirs>
          Enjoy your button, sir. What's that? You don't like it?
        </EntryTheirs>
        <EntryMine>
          I can't eat this! Doesn't the chef know how accessibility suffers when
          anchors are used to represent buttons?
        </EntryMine>
        <EntryTheirs>I'm writing this down…</EntryTheirs>
        <EntryMine>
          Write this down, too. Not all browsers allow users to use their tab
          key to reach anchors.
        </EntryMine>
        <EntryTheirs>
          Okay, okay. I will take this back to the chef and remake this for you.
        </EntryTheirs>
      </ul>
    </Section>

    <Section>
      <SectionTitle>Attempt #2</SectionTitle>
      <Highlight className="html">
        {`<a tabindex="0" role="button" href="#">
  Click here
</a>`}
      </Highlight>

      <ul className="log">
        <EntryTheirs>
          Here is a fresh dish for you, from scratch. Please like us on Yelp.
        </EntryTheirs>
        <EntryMine>
          First, I hate Yelp. More importantly, I still can't eat this code.
        </EntryMine>
        <EntryTheirs>
          They say the customer is always right. What is the problem this time?
        </EntryTheirs>
        <EntryMine>
          This is not a real button. Anchors masquerading as buttons are the
          imitation crab of the web. Adding a <code>tabindex</code> attribute
          “fixes” the focus issue, but a true button element receives tab focus
          for free.
        </EntryMine>
        <EntryTheirs>
          The chef is confused when to use a button and when to use an anchor.
          How is a humble chef to know?
        </EntryTheirs>
        <EntryMine>
          Links <em>go</em> places; buttons <em>do</em> things. Simple rule.
        </EntryMine>
      </ul>
    </Section>

    <Section>
      <SectionTitle>Attempt #3</SectionTitle>
      <Highlight className="html">{`<button>
  Click here
</button>`}</Highlight>

      <ul className="log">
        <EntryTheirs>
          The chef realizes he was doing a lot of needless work. This one is on
          the house, as they say.
        </EntryTheirs>
      </ul>
    </Section>
  </>
);

export default ButtonView;
