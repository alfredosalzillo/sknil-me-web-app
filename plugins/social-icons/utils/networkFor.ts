const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const networkFor = (url: string): string | null => {
  const { hostname } = new URL(url);
  if (hostname.includes('play.google.')) return 'GooglePlay';
  if (hostname.includes('developer.mozilla')) return 'DeveloperMozilla';
  const [, socialName] = hostname.split('.').toReversed();
  return socialName.split(/[.\-_]/ig).map(capitalize).join('');
};

export default networkFor;
