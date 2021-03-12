export const formatUrlWithProtocol = ({ url, secure = false }) => {
  if (!url) {
    return null;
  }

  const containsProtocol = /^https?:\/\//i.test(url);
  const prefix = secure ? 'https://' : 'http://';

  if (!containsProtocol) {
    return `${prefix}${url}`;
  }

  return url;
};
