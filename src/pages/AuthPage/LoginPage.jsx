import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ErrorMessageForm from '@/components/ErrorMessageForm';
import Label from '@/components/Label';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { validation } from '@/utils';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ firebase }) => {
	const navigate = useNavigate();

	const [messageError, setMessageError] = useState('');

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmitForm = (values) => {
		const { email, password } = values;
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((res) => {
				console.log(res);
				setIsSignedIn(true);
			})
			.catch((err) => {
				console.log(err?.errors);
				setMessageError(err?.errors?.message || 'An error has occurred');
			});
	};

	return (
		<form onSubmit={handleSubmit(onSubmitForm)} autoComplete='off'>
			<div className='w-96 mx-auto'>
				<div>
					<Label idFor='email' label='Your email' />
					<Input
						idFor='email'
						placeholder='Type a email'
						isError={errors.email}
						inputProps={register('email', {
							required: {
								value: true,
								message: 'This field is required',
							},
							validate: {
								validEmail: (val) => {
									if (!validation.validate({ type: 'email', value: val })) return 'Please enter a valid email address';
								},
							},
						})}
					/>
					<ErrorMessageForm errors={errors} name='email' />
				</div>
				<div className='mt-2'>
					<Label idFor='password' label='Your password' />
					<Input
						idFor='password'
						type='password'
						placeholder='Type a password'
						isError={errors.password}
						inputProps={register('password', {
							required: {
								value: true,
								message: 'This field is required',
							},
							minLength: {
								value: 6,
								message: 'Password requires 6 characters',
							},
						})}
					/>
					<ErrorMessageForm errors={errors} name='password' />
				</div>
				{!!messageError && <div className='text-xs text-red-500 font-semibold tracking-wider mt-1 leading-4'>{messageError}</div>}
				<div className='mt-4 flex justify-between items-center'>
					<Button label='Submit' type='submit' />
					<span className='cursor-pointer' onClick={() => navigate('/auth/register')}>
						You need create an account?
					</span>
				</div>
			</div>
		</form>
	);
};

export default LoginPage;
