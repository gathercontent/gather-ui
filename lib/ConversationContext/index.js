import React from 'react';
import PropTypes, { arrayOf, shape } from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { Person } from 'lib';
import { Conversation } from '../Conversation/Conversation';
import { Comment } from '../Comment/Comment';

const ConversationContext = ({
  label,
  children,
  userCanResolve,
  resolved,
  comments,
  resolveConversation,
  users
}) => (
  <Row>
    <Col sm={3} xs={12}>
      <div className="conversation-context__label">{label}</div>
    </Col>
    <Col sm={8} xs={12}>
      {children && (
        <div className="conversation-context__context">{children}</div>
      )}
      <Conversation isOpen>
        <Conversation.Header>
          {userCanResolve && (
            <Comment.ResolveButton
              resolved={resolved}
              onResolve={resolveConversation}
              userCanResolve
            />
          )}
        </Conversation.Header>

        <Conversation.Body>
          {comments.map(comment => (
            <Comment.Provider isOpen key={comment.id}>
              <Comment>
                <Comment.Header>
                  <Person
                    person={comment.author}
                    meta={<Comment.Meta>{comment.createdAt}</Comment.Meta>}
                  />
                </Comment.Header>

                <Comment.Body>
                  <Comment.Text users={users} showFullText>
                    {comment.body}
                  </Comment.Text>
                </Comment.Body>
              </Comment>
            </Comment.Provider>
          ))}
        </Conversation.Body>
      </Conversation>
    </Col>
  </Row>
);

ConversationContext.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ]),
  resolved: PropTypes.bool.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  resolveConversation: PropTypes.func.isRequired,
  users: arrayOf(shape({})).isRequired,
  userCanResolve: PropTypes.bool
};

ConversationContext.defaultProps = {
  children: null,
  userCanResolve: false
};

export default ConversationContext;
