import React from "react";
import {Formik, Form, Field} from "formik";

function Formulario() {
	return (
		<div className=" bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
			<h1 className=" text-gray-600 font-bold text-xl uppercase text-center">
				Agregar Cliente
			</h1>

			<Formik>
				<Form className="mt-10">
					<div className="mb-4">
						<label htmlFor="nombre" className=" text-gray-800">
							Nombre:
						</label>
						<Field
							type="text"
							className=" mt-2 block w-full p-3 bg-gray-50"
							id="nombre"
							placeholder="Nombre del cliente"
						/>
					</div>
          <div className="mb-4">
						<label htmlFor="empresa" className=" text-gray-800">
							Empresa:
						</label>
						<Field
							type="text"
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
							type="text"
							className=" mt-2 block w-full p-3 bg-gray-50 h-40"
							id="notas"
							placeholder="Notas del cliente"
						/>
					</div>
          <input type="submit" value="Agregar Cliente" className=" mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg" />
				</Form>
			</Formik>
		</div>
	);
}

export default Formulario;
