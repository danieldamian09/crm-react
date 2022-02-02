import {Formik, Form, Field} from "formik";
import {Children} from "react/cjs/react.production.min";
import * as Yup from "yup";
import Alerta from "./Alerta";

function Formulario() {
	// validaciones
	const nuevoClienteSchema = Yup.object().shape({
		nombre: Yup.string()
			.min(3, "El nombre es muy corto")
			.max(20, "El nombre es muy largo")
			.required("El nombre del cliente es Obligatorio"),
	});

	// evento Submit
	const handleSubmit = (values) => {
		console.log(values);
	};

	return (
		<div className=" bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
			<h1 className=" text-gray-600 font-bold text-xl uppercase text-center">
				Agregar Cliente
			</h1>

			{/* Declaras el estado inicial del formulario */}
			<Formik
				initialValues={{
					nombre: "",
					empresa: "",
					email: "",
					telefono: "",
					notas: "",
				}}
				onSubmit={(values) => {
					handleSubmit(values);
				}}
				validationSchema={nuevoClienteSchema}
			>
				{({errors, touched}) => {
					// console.log(data)
					return (
						<Form className="mt-10">
							<div className="mb-4">
								<label htmlFor="nombre" className=" text-gray-800">
									Nombre:
								</label>
								<Field
									type="text"
									name="nombre"
									className=" mt-2 block w-full p-3 bg-gray-50"
									id="nombre"
									placeholder="Nombre del cliente"
								/>
								{errors.nombre && touched.nombre ? (
									<Alerta>{errors.nombre}</Alerta>
								) : null}
							</div>
							<div className="mb-4">
								<label htmlFor="empresa" className=" text-gray-800">
									Empresa:
								</label>
								<Field
									type="text"
									name="empresa"
									className=" mt-2 block w-full p-3 bg-gray-50"
									id="empresa"
									placeholder="Empresa del cliente"
								/>
							</div>
							<div className="mb-4">
								<label htmlFor="email" className=" text-gray-800">
									Email:
								</label>
								<Field
									type="email"
									name="email"
									className=" mt-2 block w-full p-3 bg-gray-50"
									id="email"
									placeholder="Email del cliente"
								/>
							</div>
							<div className="mb-4">
								<label htmlFor="telefono" className=" text-gray-800">
									Teléfono:
								</label>
								<Field
									type="tel"
									name="telefono"
									className=" mt-2 block w-full p-3 bg-gray-50"
									id="telefono"
									placeholder="Teléfono del cliente"
								/>
							</div>
							<div className="mb-4">
								<label htmlFor="notas" className=" text-gray-800">
									Notas:
								</label>
								<Field
									as="textarea"
									name="notas"
									type="text"
									className=" mt-2 block w-full p-3 bg-gray-50 h-40"
									id="notas"
									placeholder="Notas del cliente"
								/>
							</div>
							<input
								type="submit"
								value="Agregar Cliente"
								className=" mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
							/>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
}

export default Formulario;
