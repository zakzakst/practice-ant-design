import { AddressOption } from "./Form";

type Props = {
  disabled?: boolean;
  options: AddressOption[];
};

export const PastDeliveryAddress = ({ disabled, options }: Props) => {
  return (
    <fieldset disabled={disabled} style={{ opacity: disabled ? 0.3 : 1 }}>
      <legend>過去のお届け先</legend>
      <select name="pastDeliveryAddress">
        {options.map(({ id, ...opt }) => (
          <option key={id} {...opt} />
        ))}
      </select>
    </fieldset>
  );
};
