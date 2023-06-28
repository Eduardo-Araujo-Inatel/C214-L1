import Dropdown from "components/formHook/Dropdown";
import { FiltersBody } from "./styles";
import { useEffect, useState } from "react";
import { Form, useForm } from "react-hook-form";
import { useStore } from "hooks/useStore";

interface FiltersProps {
	games: any[]
}

function Filters({ games }: FiltersProps) {
	const { control, register, watch } = useForm()
	const { setCategoriesSelected } = useStore();
	const [listCategories, setListCategories] = useState<any>([]);
	const categorySelected = watch("Categorias");

	useEffect(() => {
		if (categorySelected)
			setCategoriesSelected(categorySelected.map((category: any) => category.value))
	}, [categorySelected]);

	useEffect(() => {
		let categories = games?.map((game: any) => game?.Categorias)
		setListCategories(categories.flat().filter((value: any, index: number, self: any) => {
			return self.indexOf(value) === index;
		}))
	}, [games]);

	return (
		<FiltersBody>
			<Form control={control} onSubmit={() => { }}>
				<Dropdown
					isMultiValue
					options={listCategories.map((option: any) => ({
						"label": option,
						"value": option
					}))}
					control={control}
					placeholder={"Categorias"}
					isMulti
					{...register("Categorias", { required: true })}
				/>
			</Form>
		</FiltersBody>
	);
}

export default Filters;