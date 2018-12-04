import uuid from "uuid";

export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const ADD_COMMENT = 'CREATE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

export function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

export function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        id,
        text,
    }
}

export function deleteComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

export function thumbUpComment(commentId) {
    return {
        type: THUMB_UP_COMMENT,
        id: commentId
        // votes: votes++
    }
}

export function thumbDownComment(commentId) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: commentId
        // votes: votes--
    }
}
