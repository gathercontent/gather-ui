import React, { Fragment, useState } from 'react';
import {
  mockActions,
  mockConversation,
  mockFailedComment,
  mockUsers
} from './mockData';
import BoundaryClickWatcher from '../../BoundaryClickWatcher';
import { Conversation } from '../Conversation';
import { Comment } from '../../Comment/Comment';

export function FailedConversation() {
  const failedComment = mockFailedComment[0];

  const [editingId, setEditingId] = useState();
  const [deletingId, setDeletingId] = useState();
  const [isResolved, setIsResolved] = useState(false);

  return (
    <BoundaryClickWatcher>
      {boundaryIsActive => (
        <Conversation isActive={boundaryIsActive}>
          {boundaryIsActive && (
            <Conversation.Header>
              <Comment.SubscribeToggle
                onToggle={mockActions.onSubscribeChange}
                isChecked
                id={`${mockConversation.id}-subscribe`}
              />
              <Comment.ResolveButton
                resolved={isResolved}
                onUndoResolve={() => setIsResolved(false)}
                userCanResolve
                onResolve={() => setIsResolved(true)}
              />
            </Conversation.Header>
          )}
          <Conversation.Body isActive={boundaryIsActive}>
            {boundaryIsActive ? (
              <Comment>
                <Comment.Body
                  users={mockUsers}
                  comment={failedComment}
                  onEditSubmit={(...args) => {
                    setEditingId(null);
                    mockActions.editComment(...args);
                  }}
                  isEditing={failedComment.id === editingId}
                >
                  {failedComment.hasFailed ? (
                    <Comment.Failed />
                  ) : (
                    <Comment.Meta />
                  )}
                </Comment.Body>
                <Comment.Overlay
                  onCancel={() => setDeletingId(null)}
                  onConfirm={mockActions.removeComment}
                  show={deletingId === failedComment.id}
                  text="Delete thread"
                />
              </Comment>
            ) : (
              <Fragment>
                <Comment>
                  <Comment.Body comment={failedComment} users={mockUsers} />
                </Comment>
              </Fragment>
            )}
          </Conversation.Body>
        </Conversation>
      )}
    </BoundaryClickWatcher>
  );
}