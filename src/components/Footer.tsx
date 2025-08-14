'use client';

import { navigation } from '@/app/constants/constants';
import { company } from '@/app/constants/constants';

import Image from 'next/image';
import InstagramIcon from './icons/InstagramIcon';
import FacebookIcon from './icons/FacebookIcon';
import WhatsappIcon from './icons/WhatsappIcon';

import Link from 'next/link';
import GravityLogo from './icons/GravityLogo';

const Footer = () => {
  return (
    <div className='relative'>
      <footer
        id='contactoSection'
        className={`flex justify-center pt-10 shadow-top-lg relative font-medium ${
          company.darkmode
            ? 'bg-color-bg-secondary-dark'
            : 'bg-color-bg-primary'
        } `}
        style={{ boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1)' }}
      >
        <div className='flex flex-col items-center w-full relative z-10'>
          <section className='flex md:justify-center text-color-text-light w-full '>
            <div className='flex flex-col md:flex-row gap-8 lg:gap-32 w-full justify-between max-w-7xl mx-6 sm:mx-8 md:mx-10 py-10'>
              <article className='flex w-full flex-col'>
                {company.favicon ? (
                  <div className='w-48 sm:w-52 md:w-52 lg:w-56 h-12 sm:h-14'>
                    <Image
                      className='w-full h-full object-contain object-left'
                      src='/assets/company/logo.webp'
                      alt={`${company.name} logo`}
                      width={288}
                      height={72}
                    />
                  </div>
                ) : (
                  <div className='w-60 sm:w-60 md:w-64 lg:w-72 h-14 md:h-16'>
                    <Image
                      className='w-full h-full object-contain object-left'
                      src='/assets/company/logo.webp'
                      alt={`${company.name} logo`}
                      width={288}
                      height={72}
                    />
                  </div>
                )}

                <p
                  className={`${
                    company.darkmode
                      ? 'text-color-text-light'
                      : 'text-color-text'
                  } text-sm lg:text-base mt-3 max-w-96`}
                >
                  {company.footer}
                </p>
                <div className='flex gap-4 mt-4'>
                  {company.instagram && (
                    <a
                      href={`https://www.instagram.com/${company.instagram}/`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <InstagramIcon
                        className={`w-8 h-8 ${
                          company.darkmode
                            ? 'text-color-text-light hover:text-color-primary-light'
                            : 'text-color-text hover:text-color-primary'
                        }  transition-colors`}
                      />
                    </a>
                  )}
                  {company.facebook && (
                    <a
                      href={`${company.facebook}`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FacebookIcon
                        className={`w-8 h-8 ${
                          company.darkmode
                            ? 'text-color-text-light hover:text-color-primary-light'
                            : 'text-color-text hover:text-color-primary'
                        }  transition-colors`}
                      />
                    </a>
                  )}
                  {company.whatsapp && (
                    <a
                      href={`https://api.whatsapp.com/send?phone=549${company.whatsapp[0]}&text=Hola! Quería hacer una consulta`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <WhatsappIcon
                        className={`w-8 h-8 ${
                          company.darkmode
                            ? 'text-color-text-light hover:text-color-primary-light'
                            : 'text-color-text hover:text-color-primary'
                        }  transition-colors`}
                      />
                    </a>
                  )}
                </div>
              </article>
              <article className='flex md:justify-center'>
                <div>
                  <h4
                    className={`${
                      company.darkmode
                        ? 'text-color-title-light'
                        : 'text-color-title'
                    }`}
                  >
                    Menú
                  </h4>
                  <ul className='flex flex-col'>
                    {navigation.map((link) => (
                      <li key={link.id}>
                        <Link
                          href={`${link.url}`}
                          className={`${
                            company.darkmode
                              ? 'text-color-text-light hover:text-color-primary-light'
                              : 'text-color-text hover:text-color-primary'
                          } transition-colors cursor-pointer`}
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
              <article className='w-full'>
                {company.adress || company.city ? (
                  <div>
                    <h4
                      className={`${
                        company.darkmode
                          ? 'text-color-title-light'
                          : 'text-color-title'
                      }`}
                    >
                      Dirección
                    </h4>
                    <div className='flex flex-col items-start text-center text-balance'>
                      <div
                        className={`flex items-center gap-0.5 ${
                          company.darkmode
                            ? 'text-color-text-light'
                            : 'text-color-text'
                        }`}
                      >
                        <span>{company.adress && `${company.adress}, `}</span>
                        <span>{company.city && `${company.city}`}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  ''
                )}

                <div>
                  <h4
                    className={`${
                      company.darkmode
                        ? 'text-color-title-light'
                        : 'text-color-title'
                    }`}
                  >
                    Contacto
                  </h4>
                  <div className='flex flex-col'>
                    {company.whatsapp &&
                      company.whatsapp.map((whatsappNumber, idx) => (
                        <a
                          key={idx}
                          href={`https://api.whatsapp.com/send?phone=549${whatsappNumber}&text=Hola! Quería hacer una consulta`}
                          target='_blank'
                          rel='noopener noreferrer'
                          className={`${
                            company.darkmode
                              ? 'text-color-text-light hover:text-color-primary-light'
                              : 'text-color-text hover:text-color-primary'
                          } transition-colors`}
                        >
                          {whatsappNumber}
                        </a>
                      ))}
                  </div>
                </div>
                {company.instagram && (
                  <div>
                    <h4
                      className={`${
                        company.darkmode
                          ? 'text-color-title-light'
                          : 'text-color-title'
                      }`}
                    >
                      Instagram
                    </h4>
                    <a
                      href={`https://www.instagram.com/${company.instagram}/`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={`${
                        company.darkmode
                          ? 'text-color-text-light hover:text-color-primary-light'
                          : 'text-color-text hover:text-color-primary'
                      } transition-colors`}
                    >
                      @{company.instagram}
                    </a>
                  </div>
                )}
                {company.email && (
                  <div>
                    <h4
                      className={`${
                        company.darkmode
                          ? 'text-color-title-light'
                          : 'text-color-title'
                      }`}
                    >
                      Email
                    </h4>
                    <a
                      href={`mailto:${company.email}`}
                      className={`${
                        company.darkmode
                          ? 'text-color-text-light hover:text-color-primary-light'
                          : 'text-color-text hover:text-color-primary'
                      } transition-colors`}
                    >
                      {company.email}
                    </a>
                  </div>
                )}
              </article>
            </div>
          </section>
          <section
            className={`${
              company.dark
                ? 'border-color-primary-light'
                : 'border-color-primary'
            } flex justify-center w-full pb-16 pt-8 border-t`}
          >
            <article className='flex flex-col md:flex-row justify-between items-center text-sm sm:text-base gap-3 sm:gap-5 w-full max-w-7xl mx-6 sm:mx-8 md:mx-10'>
              <div
                className={`flex items-center gap-1 sm:gap-2 ${
                  company.darkmode ? 'text-color-text-light' : 'text-color-text'
                }`}
              >
                <span>© Copyright {new Date().getFullYear()}</span>
                <span>-</span>
                <span>{company.name}</span>
              </div>
              <div className='flex items-center gap-2'>
                <span
                  className={`${
                    company.darkmode
                      ? 'text-color-text-light'
                      : 'text-color-text'
                  }`}
                >
                  Desarrollado por:
                </span>
                <a
                  href='https://www.agenciagravity.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <GravityLogo
                    className={`w-20 md:w-24 ${
                      company.darkmode
                        ? 'text-white hover:text-[#D1FA2D]'
                        : 'text-black hover:text-black/70'
                    } transition-colors`}
                  />
                </a>
              </div>
            </article>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
