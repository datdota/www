export type IsValid = (options: {
  name?: string;
  value?: string;
  group?: boolean;
  errors: Record<any, any> | undefined;
}) => boolean;

export const isValid: IsValid = ({ name, value, group = false, errors }) => {
  if (!errors) return false;
  if (typeof name === `undefined`) return false;
  if (value && group) return !errors[value];
  return !errors[name];
};
