export const assertNotNull = <T>(value: T | null | undefined): T => {
  if (value == null) {
    throw Error('Expected not to be null');
  }
  return value;
};
