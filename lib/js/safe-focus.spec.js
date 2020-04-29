import { safeFocusInit, safeFocusClass } from './safe-focus';

describe('Safe Focus', () => {
  const getDocument = () => global.document;
  const getDocumentElement = () => getDocument().documentElement;
  const hasSafeFocusClass = () => getDocumentElement().classList.contains(safeFocusClass);
  const dispatchKeydown = () => { getDocument().dispatchEvent(new window.KeyboardEvent('keydown')); };
  const dispatchMouseDown = () => { getDocument().dispatchEvent(new window.MouseEvent('mousedown')); };

  beforeEach(() => {
    safeFocusInit();
  });

  it('doesn\'t include the safe focus class on load', () => {
    expect(hasSafeFocusClass()).toBe(false);
  });

  it('adds the safe focus class on keydown', () => {
    dispatchKeydown();
    expect(hasSafeFocusClass()).toBe(true);
  });

  it('removes the safe focus class on mousedown', () => {
    dispatchMouseDown();
    expect(hasSafeFocusClass()).toBe(false);
  });
});
