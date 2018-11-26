import React from 'react';
import Highlight from 'react-highlight';
import shared from '../css/shared';

const ReasonList = shared.reasonList();
const ReasonListItem = shared.reasonListItem();
const Section = shared.section();

const ButtonView = () => (
  <>
    <Section>
      <h2>Attempt #1</h2>
      <Highlight className="html">{`<a href="#">
  Click here
</a>`}</Highlight>

      <ul className="log">
        <li className="entry theirs">
          <img src="/snob.jpg" alt="" className="avatar" />
          <p className="message">
            Enjoy your button, sir. What's that? You don't like it?
          </p>
        </li>
        <li className="entry mine">
          <img src="/me.jpg" alt="" className="avatar" />
          <p className="message">I can't eat this! Tell the chef:</p>
        </li>
      </ul>

      <ReasonList>
        <ReasonListItem>
          Accessibility suffers when anchors are used in place of native
          buttons.
        </ReasonListItem>
        <ReasonListItem>
          Some browsers don't allow users to tab to the anchor.
        </ReasonListItem>
        <ReasonListItem>
          Screen readers don't provide helpful announcements for links meant to
          be buttons.
        </ReasonListItem>
      </ReasonList>
    </Section>

    <Section>
      <h2>Attempt #2</h2>
      <Highlight className="html">
        {`<a tabindex="0" role="button" href="#">
  Click here
</a>`}
      </Highlight>

      <ul className="log">
        <li className="entry theirs">
          <img src="/snob.jpg" alt="" className="avatar" />
          <p className="message">
            I've spoken to the chef, and he has made a fresh button for you.
            Please like us on Yelp.
          </p>
        </li>
        <li className="entry mine">
          <img src="/me.jpg" alt="" className="avatar" />
          <p className="message">
            First, I hate Yelp. More importantly, I still can't eat this code.
            This is not even a real button. Take these comments back to the
            chef. Last try before I leave.
          </p>
        </li>
      </ul>

      <ReasonList>
        <ReasonListItem>
          Adding a <code>tabindex</code> attribute “fixes” the focus issue, but
          the <code>&lt;button&gt;</code> receives focus for free.
        </ReasonListItem>
        <ReasonListItem>
          Why play a <code>role</code> when you can be the real thing?
        </ReasonListItem>
        <ReasonListItem>
          Links <em>go</em> places; buttons <em>do</em> things. Simple rule.
        </ReasonListItem>
      </ReasonList>
    </Section>

    <Section>
      <h2>Attempt #3</h2>
      <Highlight className="html">{`<button>
  Click here
</button>`}</Highlight>

      <ul className="log">
        <li className="entry theirs">
          <img src="/snob.jpg" alt="" className="avatar" />
          <p className="message">
            The chef realizes he was doing a lot of needless work. This one is
            on the house, as they say.
          </p>
        </li>
      </ul>
    </Section>
  </>
);

export default ButtonView;
