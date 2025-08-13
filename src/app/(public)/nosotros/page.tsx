'use client';

import Image from 'next/image';
import { company } from '@/app/constants/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const NosotrosPage = () => {
  return (
    <>
      <Header />

      {/* Título y subtítulo al estilo Proceso */}
      <div className='py-8 md:py-14 lg:py-16'>
        <section className='flex flex-col items-center w-full'>
          <div className='text-center mb-3 sm:mb-4 md:mb-5 lg:mb-10'>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2'
            >
              <span className='text-color-primary'>Sobre {company.name}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-gray-600 max-w-sm sm:max-w-lg lg:max-w-2xl mx-auto md:text-lg font-medium'
            >
              En {company.name} nos especializamos en la venta de autos usados,
              ofreciendo calidad y confianza en cada transacción.
            </motion.p>
          </div>
        </section>
      </div>

      {/* Historia y Misión */}
      <section className='relative'>
        <div className='max-w-6xl mx-auto px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            {/* Imagen */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='relative'
            >
              <div className='relative overflow-hidden rounded-2xl shadow-2xl'>
                <Image
                  src='/assets/nosotros/nosotros-1.webp'
                  alt={`Equipo de ${company.name}`}
                  width={600}
                  height={600}
                  className='object-cover w-full aspect-square'
                  priority
                />
                {/* Overlay sutil */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
              </div>
            </motion.div>

            {/* Contenido */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className='space-y-8'
            >
              <div>
                <h2 className='text-3xl md:text-4xl font-semibold text-gray-900 mb-6'>
                  Nuestra Historia
                </h2>
                <div className='w-16 h-1 bg-color-primary mb-6'></div>
                <p className='text-lg text-gray-600 leading-relaxed mb-6'>
                  Desde nuestros inicios, nos hemos dedicado a ofrecer un
                  servicio de calidad en la venta de autos usados, con
                  transparencia y atención personalizada.
                </p>
                <p className='text-lg text-gray-600 leading-relaxed'>
                  Nuestro equipo de profesionales del sector automotriz trabaja
                  para ayudarte a encontrar el auto que necesitas, con opciones
                  de financiamiento y asesoramiento integral.
                </p>
              </div>

              <div className='grid grid-cols-2 gap-6 pt-8'>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-color-primary mb-2'>
                    13+
                  </div>
                  <div className='text-gray-600'>Años de Experiencia</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-color-primary mb-2'>
                    50+
                  </div>
                  <div className='text-gray-600'>Autos en Stock</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className='py-20 md:py-28 relative'>
        {/* Fondo sutil */}
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent'></div>

        <div className='relative z-10 max-w-6xl mx-auto px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-3xl md:text-4xl font-semibold text-gray-900 mb-6'>
              Nuestros Valores
            </h2>
            <div className='w-16 h-1 bg-color-primary mx-auto mb-6'></div>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Los valores que nos guían en cada operación y en la atención a
              nuestros clientes
            </p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                icon: (
                  <svg
                    className='w-12 h-12'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
                  </svg>
                ),
                title: 'Calidad Garantizada',
                description:
                  'Seleccionamos cada vehículo con cuidado, asegurando calidad y confiabilidad en todos nuestros autos.',
              },
              {
                icon: (
                  <svg
                    className='w-12 h-12'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' />
                    <circle cx='12' cy='7' r='4' />
                  </svg>
                ),
                title: 'Atención Personalizada',
                description:
                  'Cada cliente es importante para nosotros. Ofrecemos asesoramiento honesto y acompañamiento en todo el proceso.',
              },
              {
                icon: (
                  <svg
                    className='w-12 h-12'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' />
                    <path d='m9 12 2 2 4-4' />
                  </svg>
                ),
                title: 'Transparencia',
                description:
                  'Creemos en la honestidad. Toda la información sobre nuestros vehículos está disponible para nuestros clientes.',
              },
            ].map((valor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='group relative p-8 rounded-2xl transition-colors duration-300 bg-white shadow-lg hover:shadow-xl border border-gray-200'
              >
                {/* Icono */}
                <div className='text-color-primary mb-6'>{valor.icon}</div>

                {/* Contenido */}
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                  {valor.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {valor.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NosotrosPage;
