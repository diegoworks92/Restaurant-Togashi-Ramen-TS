import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import SendMSG from '../components/home/SendMSG';

describe('SendMSG', () => {
	beforeEach(() => {
		render(<SendMSG />);
	});

	it('se muestra el nombre del input de Nombre', () => {
		const label = screen.getByText('Your Name');
		expect(label).toBeInTheDocument();
	});

	it('se muestra el nombre del input de Email', () => {
		const label = screen.getByText('Email');
		expect(label).toBeInTheDocument();
	});

	it('se muestra el nombre del input Mensaje', () => {
		const label = screen.getByText('Message');
		expect(label).toBeInTheDocument();
	});

	it('se envía el formulario correctamente', async () => {
		const userTest = {
			name: 'Diego',
			email: 'diegoreyes@diegoworks.com',
			message: 'Muy buen servicio!',
		};

		const inputName = screen.getByLabelText('Your Name');
		const inputEmail = screen.getByLabelText('Email');
		const inputMessage = screen.getByLabelText('Message');
		const btnSubmit = screen.getByRole('button', { name: 'Send' });

		await userEvent.type(inputName, userTest.name);
		await userEvent.type(inputEmail, userTest.email);
		await userEvent.type(inputMessage, userTest.message);

		await userEvent.click(btnSubmit);

		// Espera a que aparezca el mensaje de éxito en el documento.
		const successMessage = await screen.findByText('Message sent!');
		expect(successMessage).toBeInTheDocument();
	});
});
