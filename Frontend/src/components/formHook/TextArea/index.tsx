import { Controller } from 'react-hook-form';
import { ErrorLabel, TextAreaDiv, TextAreaForm } from './styles';

export function TextArea({ control, name, error, maxLength, mask, reset, ...props }: any) {
  return (
    <TextAreaDiv className={error ? 'error' : ''}>
      <Controller
        name={name}
        control={control}
        render={({ field: { name, onChange, onBlur } }) => (
          <TextAreaForm
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
    </TextAreaDiv>
  );
}
