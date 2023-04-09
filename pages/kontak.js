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
        <div className='page-header min-vh-85'>
          <div>
            {/* <Image
              src='/img/curved-images/curved-8.jpg'
              className='position-absolute fixed-top ms-auto w-50 h-100 z-index-0 d-none d-sm-none d-md-block border-radius-section border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0'
              //   layout='responsive'
              alt='image'
            /> */}
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
        </div>
      </header>

      <Footer />
    </>
  );
}
