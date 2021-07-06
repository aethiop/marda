export const isValidKey = key => {
  return !!(
    typeof key === `object` &&
    key.pub &&
    key.epub &&
    key.priv &&
    key.epriv
  );
};
