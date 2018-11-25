import React from 'react';
import Highlight from 'react-highlight';
import shared from '../css/shared';

const ReasonList = shared.reasonList();
const ReasonListItem = shared.reasonListItem();

const ButtonView = () => (
  <>
    <h2>Attempt #1</h2>
    <Highlight className="html">
      {`<a href="#" class="button">Click here</a>`}
    </Highlight>

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
        Accessibility suffers when anchors are used in place of native buttons.
      </ReasonListItem>
      <ReasonListItem>
        Some browsers don't allow users to tab to the anchor.
      </ReasonListItem>
      <ReasonListItem>
        Screen readers don't provide helpful announcements for links meant to be
        buttons.
      </ReasonListItem>
    </ReasonList>
  </>
);

export default ButtonView;
