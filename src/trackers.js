const logEvent = (scope) => {
  scope = scope.startsWith('ton-connect-ui-') ? 'TonConnectUI' : 'TonConnect';

  return (event) => {
    if (!(event instanceof CustomEvent)) {
      return;
    }
    const detail = event.detail;
    console.log(`${scope} Event: ${detail.type}`, detail);
  }
};

const tonConnectUiPrefix = 'ton-connect-ui-';
const tonConnectUiEvents = [
  'request-version',
  'response-version',
  'connection-started',
  'connection-completed',
  'connection-error',
  'connection-restoring-started',
  'connection-restoring-completed',
  'connection-restoring-error',
  'transaction-sent-for-signature',
  'transaction-signed',
  'transaction-signing-failed',
  'disconnection',
].map(event => `${tonConnectUiPrefix}${event}`);

const tonConnectPrefix = 'ton-connect-';
const tonConnectEvents = [
  'request-version',
  'response-version',
  'connection-started',
  'connection-completed',
  'connection-error',
  'connection-restoring-started',
  'connection-restoring-completed',
  'connection-restoring-error',
  'transaction-sent-for-signature',
  'transaction-signed',
  'transaction-signing-failed',
  'disconnection',
].map(event => `${tonConnectPrefix}${event}`);

const events = [
  ...tonConnectUiEvents,
  ...tonConnectEvents
];

for (const event of events) {
  try {
    window.addEventListener(`${event}`, logEvent(event));
  } catch (e) {}
}
