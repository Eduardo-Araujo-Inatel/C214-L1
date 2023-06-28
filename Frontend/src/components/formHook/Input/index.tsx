import { Controller } from 'react-hook-form';
import { ErrorLabel, InputDiv, InputForm } from './styles';

export function Input({ control, name, error, maxLength, mask, reset, ...props }: any) {
  return (
    <InputDiv className={error ? 'error' : ''}>
      <Controller
        name={name}
        control={control}
        render={({ field: { name, onChange, onBlur } }) => (
          <InputForm
            className={error ? 'error' : ''}
            autoComplete="off"
            error={error}
            maxLength={maxLength}
            {...props}
            onChange={onChange}
            onBlur={onBlur}
            id={name}
          />
        )}
      />
      {error && <ErrorLabel htmlFor={name}>{error.message}</ErrorLabel>}
    </InputDiv>
  );
}
