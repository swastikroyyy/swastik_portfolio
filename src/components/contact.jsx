import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Textarea } from '@mantine/core';

const Contact = () => {
    const { handleSubmit, control,  reset, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    });

    const onSubmit = async (data) => {
        // Handle form submission
        try {
            const response = await fetch('https://formspree.io/f/mayrgepl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                // Form submitted successfully
                console.log('Form submitted successfully');
                reset();
            } else {
                // Form submission failed
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    

    return (
        <div id='contact' className="bg-gray-100 py-16 ">
            <div className=" mx-auto px-4 ">
                <h2 className="text-3xl font-bold text-center mb-4">Contact</h2>
                <form className="max-w-lg mx-auto shadow bg-white p-4 rounded" onSubmit={handleSubmit(onSubmit)} action="https://formspree.io/f/mayrgepl" method="POST">
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <Controller
                            name="name"
                            control={control}
                            defaultValue=""
                            rules={{ required: true }}
                            render={({ field }) => (
                                <TextInput
                                    {...field}
                                    error={errors?.name?.message}
                                    type="text"
                                    className="!w-full p-2 border border-gray-300 rounded"
                                />
                            )}
                        />

                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{ required: true }}
                            render={({ field }) => (
                                <TextInput
                                    {...field}
                                    error={errors?.email?.message}
                                    type="email"
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            )}
                        />
                        {errors.email && <span className="text-red-500">Email is required</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Message</label>
                        <Controller
                            name="message"
                            control={control}
                            defaultValue=""
                            rules={{ required: true }}
                            render={({ field }) => (
                                <Textarea
                                    {...field}
                                    autosize
                                    minRows={4}
                                    maxRows={8}
                                    error={errors?.message?.message}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            )}
                        />

                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">Send</button>
                    </div>
                </form>
            </div>
            <p className="text-lg m-4 text-center">Feel free to get in touch with me via email or phone.</p>
            <div className="text-center flex justify-center items-center gap-6  m-4">
           
          <a href="mailto:swastik.roy1995@gmail.com">
      <img src='/icons/email.svg' className='w-5 h-5' alt=''/>
      </a>
      <a href="tel:8918701506">
      <img src='/icons/telephone.svg' className='w-5 h-5' alt=''/>
      </a>
      <a href="https://www.linkedin.com/in/swastik-roy-306702135/">
      <img src='/icons/linkedin.svg' className='w-5 h-5' alt=''/>
      </a>
      <a href="https://github.com/swastikroyyy">
      <img src='/icons/github.svg' className='w-5 h-5' alt=''/>
      </a>
     
      
      
  
  </div>
        </div>
    );
};

export default Contact;
