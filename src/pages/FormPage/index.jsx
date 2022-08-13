import React from 'react';
import { useForm } from 'react-hook-form';
import ErrorMessageForm from '@/components/ErrorMessageForm';
import Button from '@/components/Button';
import Label from '@/components/Label';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import InputTel from '@/components/InputTel';
import InputFile from '@/components/FileInput';

const FormPage = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: '',
			job_title: '',
			location: 'vn',
			telephone: '',
			description: '',
		},
	});

	const onSubmitForm = (values) => {
		console.log(values);
	};

	return (
		<form onSubmit={handleSubmit(onSubmitForm)} className='max-w-lg' autoComplete='off'>
			<div>
				<Label idFor='name' label='Job title' />
				<Input idFor='name' disabled={true} placeholder='Type a name' isError={errors.name} inputProps={register('name')} />
				<ErrorMessageForm errors={errors} name='name' />
			</div>
			<div>
				<Label idFor='job_title' label='Job title' />
				<Input
					idFor='job_title'
					placeholder='Type a job'
					isError={errors.job_title}
					inputProps={register('job_title', {
						required: 'This field is required',
					})}
				/>
				<ErrorMessageForm errors={errors} name='job_title' />
			</div>
			<div className='mt-2'>
				<Label idFor='location' label='Location' />
				<Input idFor='location' readOnly={true} placeholder='Type a location' isError={errors.location} inputProps={register('location')} />
				<ErrorMessageForm errors={errors} name='location' />
			</div>
			<div className='mt-2'>
				<Label idFor='telephone' label='Telephone' />
				<InputTel
					idFor='telephone'
					placeholder='Type a telephone'
					isError={errors.telephone}
					inputProps={register('telephone', {
						required: 'This field is required',
					})}
				/>
				<ErrorMessageForm errors={errors} name='telephone' />
			</div>
			<div className='mt-2'>
				<Label idFor='description' label='Description' />
				<Textarea idFor='description' placeholder='Type a description' isError={errors.description} inputProps={register('description')} />
				<ErrorMessageForm errors={errors} name='description' />
			</div>
			<InputFile
				input={{
					onChange: () => {},
					onBlur: () => {},
				}}
			/>
			<div className='mt-4'>
				<Button label='Submit' />
			</div>
		</form>
	);
};

export default FormPage;
