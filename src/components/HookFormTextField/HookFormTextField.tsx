import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import {TextFieldProps, TextFieldVariants} from "@mui/material/TextField/TextField";
import styles from './HookFormTextField.module.scss';

type HookFormTextFieldType = TextFieldProps & {
  name: any;
  control: any;
  label: any;
  variant?: TextFieldVariants;
};

const HookFormTextField = ({ name, control, label, variant = 'standard', multiline = false }: HookFormTextFieldType) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <div className={styles.wrapper}>
          <TextField
            helperText={error ? error.message : null}
            size="small"
            error={!!error}
            onChange={onChange}
            value={value}
            fullWidth
            label={label}
            variant={variant}
            multiline={multiline}
            rows={multiline ? 4 : 1}
          />
        </div>
      )}
    />
  );
};

export default HookFormTextField;