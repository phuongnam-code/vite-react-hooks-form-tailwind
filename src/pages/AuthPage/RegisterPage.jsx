import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ErrorMessageForm from '@/components/ErrorMessageForm';
import Label from '@/components/Label';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { validation } from '@/utils';
import { useNavigate } from 'react-router-dom';

const RegisterPage = ({ firebase }) => {
	const navigate = useNavigate();

	const [messageError, setMessageError] = useState('');

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			confirm_password: '',
		},
	});

	const onSubmitForm = (values) => {
		console.log(values);
		const { email, password } = values;
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((res) => {
				console.log(res);
				navigate('/auth/login');
			})
			.catch((err) => {
				console.log(err.errors);
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
				<div className='mt-2'>
					<Label idFor='confirm_password' label='Confirm password' />
					<Input
						idFor='confirm_password'
						type='password'
						placeholder='Enter the password'
						isError={errors.confirm_password}
						inputProps={register('confirm_password', {
							required: {
								value: true,
								message: 'This field is required',
							},
							validate: {
								confirmPassword: (val) => {
									if (watch('password') !== val) return 'Your passwords do no match';
								},
							},
						})}
					/>
					<ErrorMessageForm errors={errors} name='confirm_password' />
				</div>
				{!!messageError && <div className='text-xs text-red-500 font-semibold tracking-wider mt-1 leading-4'>{messageError}</div>}
				<div className='mt-4 flex justify-between items-center'>
					<Button label='Submit' type='submit' />
					<span className='cursor-pointer' onClick={() => navigate('/auth/login')}>
						Already account?
					</span>
				</div>
			</div>
		</form>
	);
};

export default RegisterPage;
