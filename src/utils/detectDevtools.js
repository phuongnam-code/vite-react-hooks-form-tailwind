// ref: https://github.com/sindresorhus/devtools-detect/blob/main/index.js
const devtools = {
  isOpen: false,
  orientation: undefined,
};

const threshold = 160;

const emitEvent = (isOpen, orientation) => {
  const event = new CustomEvent('devtoolschange', {
    detail: {
      isOpen,
      orientation,
    },
  });
  globalThis.dispatchEvent(event);
};

const main = ({ emitEvents = true } = {}) => {
  const widthThreshold = globalThis.outerWidth - globalThis.innerWidth > threshold;
  const heightThreshold = globalThis.outerHeight - globalThis.innerHeight > threshold;
  const orientation = widthThreshold ? 'vertical' : 'horizontal';

  if (
    !(heightThreshold && widthThreshold) &&
    (
      (globalThis.Firebug && globalThis.Firebug.chrome && globalThis.Firebug.chrome.isInitialized) ||
      widthThreshold ||
      heightThreshold
    )
  ) {
    if ((!devtools.isOpen || devtools.orientation !== orientation) && emitEvents) {
      emitEvent(true, orientation);
    }
    devtools.isOpen = true;
    devtools.orientation = orientation;
  } else {
    if (devtools.isOpen && emitEvents) {
      emitEvent(false, undefined);
    }
    devtools.isOpen = false;
    devtools.orientation = undefined;
  }
};

main({ emitEvents: false });
setInterval(main, 500);

export default devtools;
