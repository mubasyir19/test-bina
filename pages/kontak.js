import React from 'react';
import Navbar3 from '../components/organism/Navbar3';
import Footer from '../components/organism/Footer';
import Image from 'next/image';
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Kontak - Bina Al Insan</title>
      </Head>
      <Navbar3 />
      <header>
        {/* Contact */}
        <section className='mt-5 py-lg-7'>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <div className='card overflow-hidden mb-5'>
                  <div className='row'>
                    <div className='col-lg-7'>
                      <form className='p-3' id='contact-form' method='post'>
                        <div className='card-header px-4 py-sm-5 py-3'>
                          <h2>Say Hi!</h2>
                          <p className='lead'> We'd like to talk with you.</p>
                        </div>
                        <div className='card-body pt-1'>
                          <div className='row'>
                            <div className='col-md-12 pe-2 mb-3'>
                              <label>Nama Lengkap</label>
                              <input className='form-control' placeholder='Nama Lengkap' type='text' />
                            </div>
                            <div className='col-md-12 pe-2 mb-3'>
                              <label>Email</label>
                              <input className='form-control' placeholder='Email' type='email' />
                            </div>
                            <div className='col-md-12 pe-2 mb-3'>
                              <div className='form-group mb-0'>
                                <label>Pesan</label>
                                <textarea
                                  name='message'
                                  className='form-control'
                                  id='message'
                                  rows='6'
                                  placeholder='Tulis pesan...'
                                ></textarea>
                              </div>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-md-6 text-end ms-auto'>
                              <button type='submit' className='btn btn-round bg-gradient-info mb-0'>
                                Kirim Pesan
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      className='col-lg-5 position-relative bg-cover px-0'
                      style={{ backgroundImage: "url('/img/curved-images/curved5.jpg')" }}
                    >
                      <div className='position-absolute z-index-2 w-100 h-100 top-0 start-0 d-lg-block d-none'>
                        <img src='/img/wave-1.svg' className='h-100 ms-n2' alt='vertical-wave' />
                      </div>
                      <div className='z-index-2 text-center d-flex h-100 w-100 d-flex m-auto justify-content-center'>
                        <div className='mask bg-gradient-info opacity-9'></div>
                        <div className='p-5 ps-sm-8 position-relative text-start my-auto z-index-2'>
                          <h3 className='text-white'>Contact Information</h3>
                          <p className='text-white opacity-8 mb-4'>
                            Fill up the form and our Team will get back to you within 24 hours.
                          </p>
                          <div className='d-flex p-2 text-white'>
                            <div>
                              <i className='fas fa-phone text-sm'></i>
                            </div>
                            <div className='ps-3'>
                              <span className='text-sm opacity-8'>(+62) 857 2998 8831</span>
                            </div>
                          </div>
                          <div className='d-flex p-2 text-white'>
                            <div>
                              <i className='fas fa-envelope text-sm'></i>
                            </div>
                            <div className='ps-3'>
                              <span className='text-sm opacity-8'>bina.alinsan@gmail.com</span>
                            </div>
                          </div>
                          <div className='d-flex p-2 text-white'>
                            <div>
                              <i className='fas fa-map-marker-alt text-sm'></i>
                            </div>
                            <div className='ps-3'>
                              <span className='text-sm opacity-8'>
                                Desa Kaliwlingi RT 01/RW 05, Kec. Brebes Kab. Brebes – Jawa Tengah 52219
                              </span>
                            </div>
                          </div>
                          <div className='mt-4'>
                            <button
                              type='button'
                              className='btn btn-icon-only btn-link text-white btn-lg mb-0'
                              data-toggle='tooltip'
                              data-placement='bottom'
                              data-original-title='Log in with Facebook'
                            >
                              <i className='fa fa-facebook'></i>
                            </button>
                            <button
                              type='button'
                              className='btn btn-icon-only btn-link text-white btn-lg mb-0'
                              data-toggle='tooltip'
                              data-placement='bottom'
                              data-original-title='Log in with Twitter'
                            >
                              <i className='fa fa-twitter'></i>
                            </button>
                            <button
                              type='button'
                              className='btn btn-icon-only btn-link text-white btn-lg mb-0'
                              data-toggle='tooltip'
                              data-placement='bottom'
                              data-original-title='Log in with Dribbble'
                            >
                              <i className='fa fa-dribbble'></i>
                            </button>
                            <button
                              type='button'
                              className='btn btn-icon-only btn-link text-white btn-lg mb-0'
                              data-toggle='tooltip'
                              data-placement='bottom'
                              data-original-title='Log in with Instagram'
                            >
                              <i className='fa fa-instagram'></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================== */}
        {/* <div className='page-header min-vh-85'>
          <div>
            <img
              className='position-absolute fixed-top ms-auto w-50 h-100 z-index-0 d-none d-sm-none d-md-block border-radius-section border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0'
              src='/img/curved-images/curved-8.jpg'
              alt='image'
            />
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-7 d-flex justify-content-center flex-column'>
                <div className='card d-flex blur justify-content-center p-4 shadow-lg my-sm-0 my-sm-6 mt-8 mb-5'>
                  <div className='text-center'>
                    <h3 className='text-gradient text-primary'>Hubungi Kami</h3>
                    <p className='mb-0'>Desa Kaliwlingi RT 01/RW 05, Kec. Brebes Kab. Brebes – Jawa Tengah 52219</p>
                    <p>
                      <i class='fas fa-phone text-md opacity-8'></i> +62 857 2998 8831
                    </p>
                    <p>
                      <i class='fa fa-mail text-md opacity-8'></i> bina.alinsan@gmail.com
                    </p>
                  </div>
                  <form id='contact-form' method='post' autocomplete='off'>
                    <div className='card-body pb-2'>
                      <div className='row'>
                        <div className='col-md-6'>
                          <label>Nama</label>
                          <div className='input-group mb-4'>
                            <input
                              className='form-control'
                              placeholder='Full Name'
                              aria-label='Full Name'
                              type='text'
                            />
                          </div>
                        </div>
                        <div className='col-md-6 ps-md-2'>
                          <label>Email</label>
                          <div className='input-group'>
                            <input type='email' className='form-control' placeholder='example@mail.com' />
                          </div>
                        </div>
                      </div>
                      <div className='form-group mb-0 mt-md-0 mt-4'>
                        <label>Pesan</label>
                        <textarea
                          name='message'
                          className='form-control'
                          id='message'
                          rows='6'
                          placeholder='Tulis pesan'
                        ></textarea>
                      </div>
                      <div className='row'>
                        <div className='col-md-12 text-center'>
                          <button type='submit' className='btn bg-gradient-primary mt-3 mb-0'>
                            Kirim
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </header>

      <Footer />
    </>
  );
}
