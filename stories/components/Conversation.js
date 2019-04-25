import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Conversation from '../../lib/Conversation';
import StoryItem from '../styleguide/StoryItem';
import BoundaryClickWatcher from '../../lib/BoundaryClickWatcher';

const mockUser = {
  id: 2,
  name: 'Bruce',
  avatar: 'https://gathercontent-production-avatars.s3-us-west-2.amazonaws.com/208205_yHGd7vA5HRxsnMQpES4UzjJ7Yxgn6Bp54165gqksRXyDJhuOnW88H6djhLJeE2BZ.jpg',
  initials: 'BB',
  display: 'brucebanner'
};

const mockUserNoAvatar = {
  id: 5,
  name: 'Lynda',
  initials: 'LC',
  display: 'lyndacarter'
};

const mockUsers = [
  mockUser,
  mockUserNoAvatar,
  {
    id: 'saul',
    display: 'saulgoodman',
    name: 'Saul Goodman',
    initials: 'SG',
    email: 'heythere@lol.com'
  },
  {
    id: '456',
    display: 'jessepinkman',
    name: 'Jesse Pinkman',
    email: 'heythere@lol.com',
    initials: 'JP',
    url:
      'https://d3iw72m71ie81c.cloudfront.net/2eae47ef-6f37-46fe-a02b-52cff401a8f9-me.jpg'
  }
]

const mockComments = [{
  id: 'comment-id-1',
  body: 'Here is a decent size comment that was created by someone who wanted to comment.',
  createdAt: '2017-06-08 09:56:41',
  author: mockUser,
  createdBy: 2
}, {
  id: 'comment-id-4',
  body: 'Here is another comment in reply to the original.',
  createdAt: '2017-06-08 09:56:41',
  author: mockUser,
  createdBy: 2
}, {
  id: 'comment-id-2',
  body: 'Comment body and a link to http://google.com and a mention @lyndacarter',
  createdAt: 'Less than a minute ago',
  author: {
    avatar: 'https://gathercontent-production-avatars.s3-us-west-2.amazonaws.com/26263_nH1Vuciy3psgQEUCVXZPTVU2RzUyMJ2arUIH7le8U4RrJ9LjFrtvEmyzf2XFgnZ7.png',
    name: 'Ricardo',
    initials: 'RB',
  },
  createdBy: 4
}];

const mockFailedComment = [{
  id: 'comment-id-1',
  body: 'Here is a decent size comment that was created by someone who wanted to comment.',
  createdAt: '2017-06-08 09:56:41',
  author: mockUser,
  createdBy: 2,
  hasFailed: true
}];

const mockConversation = {
  id: '1234567',
  comments: mockComments,
};

const mockActions = {
  resolveConversation: action('resolveConversation'),
  unresolveConversation: action('unresolveConversation'),
  removeComment: action('removeComment'),
  addComment: action('addComment'),
  editComment: action('editComment'),
};

const mockLongComments = [{
  id: 'comment-id-long',
  body: "Hey @lyndacarter here is a really long comment for you to read. Meow to be let in human is washing you why halp oh the horror flee scratch hiss bite annoy owner until he gives you food say meow repeatedly until belly rubs, feels good this human feeds me, i should be a god vommit food and eat it again for jump five feet high and sideways when a shadow moves climb a tree, wait for a fireman jump to fireman then scratch his face. Take a big fluffing crap 💩 kitten is playing with dead mouse pelt around the house and up and down stairs chasing phantoms but run around the house at 4 in the morning nap all day kitty kitty so check cat door for ambush 10 times before coming in. Leave fur on owners clothes. Hide when guests come over yowling nonstop the whole night and pose purrfectly to show my beauty and no, you can't close the door, i haven't decided whether or not i wanna go out. Hide at bottom of staircase to trip human cat fur is the new black , and it's 3am, time to create some chaos for jump around on couch, meow constantly until given food, why must they do that. Favor packaging over toy meow loudly just to annoy owners. Lie on your belly and purr when you are asleep spend all night ensuring people don't sleep sleep all day. Toilet paper attack claws fluff everywhere meow miao french ciao litterbox shove bum in owner's face like camera lens for caticus cuteicus yet lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back. Munch on tasty moths cats making all the muffins, so scamper. Weigh eight pounds but take up a full-size bed sleep everywhere, but not in my bed and meow walk on car leaving trail of paw prints on hood and windshield but eat from dog's food but meow meow and scratch the box. Chase ball of string the door is opening! how exciting oh, it's you, meh if human is on laptop sit on the keyboard or find empty spot in cupboard and sleep all day sleep on dog bed, force dog to sleep on floor. Lick the plastic bag mesmerizing birds why use post when this sofa is here purrrrrr. Roll on the floor purring your whiskers off find empty spot in cupboard and sleep all day attack feet, kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff but bleghbleghvomit my furball really tie the room together yet sleep everywhere, but not in my bed. Kitty scratches couch bad kitty stand in front of the computer screen, or pose purrfectly to show my beauty ask to be pet then attack owners hand you call this cat food. Annoy the old grumpy cat, start a fight and then retreat to wash when i lose sit by the fire so the door is opening!",
  createdAt: '2017-06-08 09:56:41',
  author: mockUser,
  createdBy: 2
}, mockComments[0]];

const mockLongConversation = {
  id: '7654321',
  comments: mockLongComments,
};

storiesOf('Components', module)
  .add('Conversation', () => {
    return (
      <div>
        <StoryItem
          title="Conversation"
          description="Starting a new conversation"
        >
          <Conversation
            id="1234567"
            user={mockUser}
            users={mockUsers}
            addComment={mockActions.addComment}
            showComments
            userCanComment
          />
        </StoryItem>

        <StoryItem
          title="Conversation"
          description="A simple conversation"
        >
          <Conversation
            id="1234567"
            comments={[mockConversation.comments[0]]}
            resolveConversation={mockActions.resolveConversation}
            unresolveConversation={mockActions.unresolveConversation}
            removeComment={mockActions.removeComment}
            addComment={mockActions.addComment}
            editComment={mockActions.editComment}
            user={mockUserNoAvatar}
            users={mockUsers}
            userCanComment
            focusOnMount={false}
          />
        </StoryItem>

        <StoryItem
          title="Conversation"
          description="Conversation with reply"
        >
          <Conversation
            id="1234567"
            comments={mockConversation.comments}
            resolveConversation={mockActions.resolveConversation}
            unresolveConversation={mockActions.unresolveConversation}
            removeComment={mockActions.removeComment}
            addComment={mockActions.addComment}
            editComment={mockActions.editComment}
            user={mockUser}
            users={mockUsers}
            userCanComment
            focusOnMount={false}
          />
        </StoryItem>

        <StoryItem
          title="Conversation"
          description="Collapsed Conversation with reply"
        >
          <Conversation
            id="1234567"
            comments={mockConversation.comments}
            resolveConversation={mockActions.resolveConversation}
            unresolveConversation={mockActions.unresolveConversation}
            removeComment={mockActions.removeComment}
            addComment={mockActions.addComment}
            editComment={mockActions.editComment}
            user={mockUser}
            users={mockUsers}
            userCanComment
            showComments={false}
          />
        </StoryItem>

        <StoryItem
          title="Conversation"
          description="Collapsed Conversation with reply wrapped in BoundaryClickWatcher"
        >
          <BoundaryClickWatcher>
            {boundaryIsActive => (
              <Conversation
                id="1234567"
                comments={mockConversation.comments}
                resolveConversation={mockActions.resolveConversation}
                unresolveConversation={mockActions.unresolveConversation}
                removeComment={mockActions.removeComment}
                addComment={mockActions.addComment}
                editComment={mockActions.editComment}
                user={mockUser}
                users={mockUsers}
                userCanComment
                focusOnMount
                showComments={boundaryIsActive}
                userCanResolve
              />
            )}
          </BoundaryClickWatcher>
        </StoryItem>

        <StoryItem
          title="Conversation"
          description="Conversation with userCanComment set to false"
        >
          <Conversation
            id="1234567"
            comments={mockConversation.comments}
            resolveConversation={mockActions.resolveConversation}
            unresolveConversation={mockActions.unresolveConversation}
            removeComment={mockActions.removeComment}
            addComment={mockActions.addComment}
            editComment={mockActions.editComment}
            user={mockUser}
            users={mockUsers}
            userCanComment={false}
            focusOnMount={false}
            resolved={false}
            userCanResolve={false}
          />
        </StoryItem>

        <StoryItem
          title="Conversation"
          description="Conversation with failed comment"
        >
          <BoundaryClickWatcher>
            {boundaryIsActive => (
              <Conversation
                id="1234567"
                comments={mockFailedComment}
                resolveConversation={mockActions.resolveConversation}
                unresolveConversation={mockActions.unresolveConversation}
                removeComment={mockActions.removeComment}
                addComment={mockActions.addComment}
                editComment={mockActions.editComment}
                user={mockUser}
                users={mockUsers}
                userCanComment={false}
                focusOnMount
                showComments={boundaryIsActive}
              />
            )}
          </BoundaryClickWatcher>
        </StoryItem>

        <StoryItem
          title="Conversation"
          description="A very long conversation"
        >
          <BoundaryClickWatcher>
            {boundaryIsActive => (
              <Conversation
                id="1234567"
                comments={mockLongConversation.comments}
                resolveConversation={mockActions.resolveConversation}
                unresolveConversation={mockActions.unresolveConversation}
                removeComment={mockActions.removeComment}
                addComment={mockActions.addComment}
                editComment={mockActions.editComment}
                user={mockUser}
                users={mockUsers}
                userCanComment
                focusOnMount
                showComments={boundaryIsActive}
              />
            )}
          </BoundaryClickWatcher>
        </StoryItem>
      </div>
    );
  });
