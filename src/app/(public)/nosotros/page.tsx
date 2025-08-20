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

      {/* Hero Section con imagen de fondo */}
      <section className='relative h-48 md:h-60 lg:h-72 flex items-center justify-center overflow-hidden'>
        {/* Imagen de fondo con overlay */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/assets/nosotros/nosotros-banner.webp'
            alt={`Equipo de ${company.name}`}
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80'></div>
        </div>

        {/* Contenido centrado */}
        <div className='relative z-10 text-center px-4 max-w-4xl mx-auto'>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-2xl md:text-3xl lg:text-4xl font-semibold text-color-primary-light mb-3 md:mb-4 lg:mb-6'
          >
            Nosotros
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-xl md:text-2xl text-white/90 font-medium leading-relaxed'
          >
            Más de una década transformando sueños en realidad sobre ruedas
          </motion.p>
        </div>
      </section>

      {/* Sección de historia */}
      <section className='py-10 md:py-16'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='grid lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-16 items-center justify-center'>
            {/* Imagen */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='relative'
            >
              <div className='mx-auto relative max-w-md lg:max-w-full rounded-md md:rounded-lg overflow-hidden shadow-lg aspect-[4/3]'>
                <Image
                  src='/assets/nosotros/nosotros-1.webp'
                  alt={`Equipo de ${company.name}`}
                  fill
                  className='object-cover w-full h-full'
                />
              </div>
            </motion.div>

            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='max-w-lg flex flex-col items-center lg:items-start justify-center text-center lg:text-left'
            >
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
                Nuestra Historia
              </h2>
              <div className='space-y-4 text-gray-700 text-lg leading-relaxed'>
                <p>
                  {company.name} nació de la pasión por los autos y el
                  compromiso con nuestros clientes.
                </p>
                <p>
                  Desde nuestros inicios, nos hemos dedicado a seleccionar
                  cuidadosamente cada vehículo, garantizando que cumpla con los
                  más altos estándares de calidad y seguridad.
                </p>
                <p>
                  Hoy, somos referentes en el mercado de autos usados,
                  reconocidos por nuestra transparencia, profesionalismo y el
                  acompañamiento integral que brindamos a cada cliente.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Línea decorativa */}
      <section className='pb-16'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='w-full h-1 bg-gradient-to-r from-transparent via-color-primary to-transparent'></div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NosotrosPage;
