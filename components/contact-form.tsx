'use client'; // se estiver usando app router

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { Send, Phone, Mail, User } from 'lucide-react';

const schema = z.object({
  fullName: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone inválido')
});

type FormData = z.infer<typeof schema>;

const LeadForm: React.FC = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('https://n8n-n8n.i4khe5.easypanel.host/webhook/lp-dama.ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar os dados');
      }

      router.push('/obrigado');
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    }
  };

  return (
    <div id="lead-form" className="py-16 bg-gradient-to-b from-white to-gray-50 rounded-2xl">
      <div className="max-w-4xl mx-auto px-4">
  

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <User size={18} className="mr-2 text-[#fa1571]" />
              Nome Completo
            </label>
            <input
              {...register('fullName')}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#fa1571] focus:ring-2 focus:ring-[#fa1571] focus:ring-opacity-20 transition-colors duration-200 text-gray-900"
              placeholder="Digite seu nome completo"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Phone size={18} className="mr-2 text-[#fa1571]" />
              Telefone
            </label>
            <input
              {...register('phone')}
              type="tel"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#fa1571] focus:ring-2 focus:ring-[#fa1571] focus:ring-opacity-20 transition-colors duration-200 text-gray-900"
              placeholder="(11) 99999-9999"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Mail size={18} className="mr-2 text-[#fa1571]" />
              Email
            </label>
            <input
              {...register('email')}
              type="email"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#fa1571] focus:ring-2 focus:ring-[#fa1571] focus:ring-opacity-20 transition-colors duration-200 text-gray-900"
              placeholder="seu@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 bg-[#fa1571] hover:bg-[#e01364] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <>
                Solicitar Informações
                <Send size={20} className="ml-2" />
              </>
            )}
          </button>
        </form>

        </div>
      </div>
    </div>
  );
};

export default LeadForm;
