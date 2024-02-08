'use client'

import { MdOutlineEmail } from 'react-icons/md'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { CgSpinner } from 'react-icons/cg'
import { SubmitHandler, useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactFormSchema, TContactFormSchema } from '../contactFormSchema'
import { Button } from '../../button'
import { useState } from 'react'

export const ContactForm = () => {
  const [sending, setSending] = useState<boolean>(false)

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<TContactFormSchema>({
    resolver: zodResolver(ContactFormSchema),
  })

  const submit: SubmitHandler<TContactFormSchema> = (
    formData: TContactFormSchema,
  ) => {
    const templateParams = formData
    setSending(true)

    emailjs
      .send(
        'service_aawzc1t',
        'template_4k8jlbd',
        templateParams,
        '4WupWa5uXT73Ak2CL',
      )
      .then((response) => {
        if (response.status === 200) {
          // toast.success('Email enviado!', {
          //   theme: 'dark',
          // })
          setSending(false)
          reset()
        } else {
          // toast.error('Ops, algo deu errado!', {
          //   theme: 'dark',
          // })
          setSending(false)
          reset()
        }
      })
    reset()
  }
  return (
    <form
      className="mt-14 w-full flex flex-col gap-4"
      onSubmit={handleSubmit(submit)}
    >
      <input
        type="text"
        placeholder="Nome"
        className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-orange-600"
        {...register('from_name')}
      />
      {errors.from_name && (
        <p className="text-orange-600 font-medium text-sm">
          {errors.from_name.message}
        </p>
      )}
      <input
        type="text"
        placeholder="Email"
        className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-orange-600"
        {...register('email')}
      />
      {errors.email && (
        <p className="text-orange-600 font-medium text-sm">
          {errors.email.message}
        </p>
      )}
      <textarea
        placeholder="Mensagem"
        className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-40 p-4 focus:outline-none focus:ring-2 ring-orange-600"
        maxLength={1200}
        {...register('message')}
      />
      {errors.message && (
        <p className="text-orange-600 font-medium text-sm">
          {errors.message.message}
        </p>
      )}
      <Button
        className={`h-max mx-auto shadow-button mt-6 ${
          sending ? 'bg-disabled' : 'bg-enabled'
        }`}
        type="submit"
        disabled={sending}
      >
        {sending ? (
          <>
            Enviando
            <CgSpinner className="animate-spin mr-2" />
            <HiOutlineMailOpen size={18} />
          </>
        ) : (
          <>
            Enviar Mensagem <MdOutlineEmail size={18} />
          </>
        )}
      </Button>
    </form>
  )
}
