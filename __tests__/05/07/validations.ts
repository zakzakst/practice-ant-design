export class ValidationError extends Error {}

// eslint-disable-next-line
export const checkPhoneNumber = (value: any) => {
  if (!value.match(/^[0-9\-]+$/)) {
    throw new ValidationError();
  }
};
