import { Controller } from "react-hook-form";
import Select from 'react-select';

export const ModalSelect = {
	container: (provided: any, state: { selectProps: { error: any; }; }) => ({
		...provided,
		width: "100%",
		border: `1px solid ${state.selectProps.error ? "#FF0000" : "#949494"}`,
		borderRadius: 5,
		height: "100%"
	}),
	singleValue: (provided: any) => ({
		...provided,
		color: "#000",
		fontWeight: 600,
		margin: 0
	}),
	control: (provided: any) => ({
		...provided,
		border: "none",
		boxShadow: "none",
		borderRadius: 5,
		width: "100%",
		fontFamily: 'var(--font-inter)',
		fontWeight: 600,
		fontSize: 12,
		display: 'flex',
		alignItems: 'center',
		textAlign: 'center',
		color: '#000000',
		background: 'transparent',
	}),
	valueContainer: (provided: any) => ({
		...provided,
		backgroundColor: 'transparent',
		padding: '0 8px',
		paddingLeft: 16,
		justifyItems: 'start'
	}),
	indicatorSeparator: (provided: any) => ({
		...provided,
		backgroundColor: 'transparent',
		margin: 0
	}),
	indicatorsContainer: (provided: any) => ({
		...provided,
		padding: 0,
	}),
	input: (provided: any) => ({
		...provided,
		color: "black",
		margin: 0
	}),
	menu: (provided: any) => ({
		...provided,
		marginTop: 2,
		borderRadius: 0
	}),
	placeholder: (provided: any, state: { selectProps: { error: any; }; }) => ({
		...provided,
		color: "#949494",
		margin: 0
	}),
	dropdownIndicator: (provided: any, state: { selectProps: { error: any; }; }) => ({
		...provided,
		position: 'relative',
		top: 0,
		color: "#949494",
	}),
	option: (provided: any, state: { isFocused: any; }) => ({
		...provided,
		backgroundColor: state.isFocused ? "#f0f0f0" : "transparent",
		color: state.isFocused ? "#000000" : "#949494",
		fontFamily: 'var(--font-inter)',
		fontWeight: 400,
		fontSize: 14,
		':hover': {
			backgroundColor: "#f0f0f0",
			color: "#000000",
		},
	}),
};

export default function Dropdown({ control, name, isMulti, error, options, loading, ...props }: any) {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { name, onChange, value, onBlur } }) => {
				return (
					<Select
						isLoading={loading}
						error={error}
						options={options}
						styles={ModalSelect}
						{...props}
						isMulti={isMulti}
						onChange={onChange}
						onBlur={onBlur}
						value={value}
						name={name}
					/>
				)
			}}
		/>
	);
}
