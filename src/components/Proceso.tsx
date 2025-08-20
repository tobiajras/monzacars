'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { company } from '@/app/constants/constants';

const beneficios = [
  {
    titulo: 'Financiación a tu medida',
    descripcion:
      'Ofrecemos planes de financiación flexibles y personalizados para que puedas acceder a tu próximo auto de manera simple y segura.',
    icono: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-full h-full'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
  },

  {
    titulo: 'Vehículos certificados',
    descripcion:
      'Todos nuestros autos pasan por rigurosos controles de calidad y certificación para garantizar su estado óptimo y funcionamiento.',
    icono: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-full h-full'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
        />
      </svg>
    ),
  },
  {
    titulo: 'Recibimos tu usado',
    descripcion:
      'Recibimos tu vehículo usado como parte de pago, con tasación profesional y condiciones transparentes para facilitar tu cambio.',
    icono: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-full h-full'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
        />
      </svg>
    ),
  },
];

const Proceso = () => {
  return (
    <section className='flex flex-col items-center justify-center py-10 md:py-16'>
      <div className='max-w-7xl w-full flex flex-col px-4 md:px-8'>
        {/* Título y subtítulo */}
        <div className='text-center mb-3 md:mb-5 lg:mb-10'>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className='text-2xl md:text-3xl lg:text-4xl font-extrabold text-color-title mb-2'
          >
            La mejor <span className='text-color-primary'>experiencia</span> en
            tu compra
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className='text-color-text max-w-2xl mx-auto md:text-lg font-medium'
          >
            En {company.name} te acompañamos en cada paso para que tu
            experiencia sea simple, segura y transparente.
          </motion.p>
        </div>
        {/* Layout principal */}
        <div className='flex flex-col lg:flex-row items-center justify-center gap-3 md:gap-5 lg:gap-10 w-full'>
          {/* Imagen del auto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className='flex justify-center'
          >
            <div className='relative max-w-md'>
              {/* Imagen para mobile */}
              <Image
                src='/assets/proceso/proceso-mobile.webp'
                alt='Auto destacado mobile'
                width={300}
                height={170}
                className='object-contain w-[300px] h-[170px] md:w-[400px] md:h-[250px] block lg:hidden'
                priority
              />
              {/* Imagen para escritorio */}
              <Image
                src='/assets/proceso/proceso.webp'
                alt='Auto destacado desktop'
                width={300}
                height={500}
                className='object-contain w-[300px] h-[500px] hidden lg:block'
                priority
              />
            </div>
          </motion.div>
          {/* Beneficios */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className='w-full lg:w-1/2 flex flex-col gap-6'
          >
            {beneficios.map((b, i) => (
              <div
                key={i}
                className='flex justify-center items-center gap-3 md:gap-4 bg-white/10'
              >
                <div className='flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 p-1.5 md:p-2 lg:p-3 rounded-full bg-color-primary/20 text-color-primary'>
                  {b.icono}
                </div>
                <div>
                  <h4 className='text-lg lg:text-xl font-semibold text-color-title mb-1'>
                    {b.titulo}
                  </h4>
                  <p className='text-color-text font-medium md:text-lg max-w-xs md:max-w-sm lg:max-w-lg'>
                    {b.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Proceso;
