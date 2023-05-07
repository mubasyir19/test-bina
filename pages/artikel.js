import Head from 'next/head';
import React from 'react';
import Navbar3 from '../components/organism/Navbar3';
import Footer from '../components/organism/Footer';

export default function Artikel() {
  return (
    <>
      <Head>
        <title>Artikel - Bina Al Insan</title>
      </Head>
      {/* Navbar */}
      <Navbar3 />

      {/* Header */}
      <header className='bg-gradient-dark'>
        <div className='page-header min-vh-75' style={{ backgroundImage: "url('/img/office-dark.jpg')" }}>
          <span className='mask bg-gradient-info opacity-8'></span>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-8 text-center mx-auto my-auto'>
                <h1 className='text-white'>Selamat Datang di Blog Kami !</h1>
                <p className='lead mb-4 text-white opacity-8'>Jadilah yang Terdepan Dalam Mengetahui Berita Terbaru</p>
                {/* <button type='submit' className='btn bg-white text-dark'>
                  Create Account
                </button> */}
                <h6 className='text-white mb-2 mt-5'>Kunjungi juga sosial media Kami</h6>
                <div className='d-flex justify-content-center'>
                  <a href='javascript:;'>
                    <i className='fab fa-instagram text-lg text-white me-4'></i>
                  </a>
                  <a href='javascript:;'>
                    <i className='fab fa-facebook text-lg text-white me-4'></i>
                  </a>
                  <a href='javascript:;'>
                    <i className='fab fa-twitter text-lg text-white me-4'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='position-absolute w-100 z-index-1 bottom-0'>
            <svg
              className='waves'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              viewBox='0 24 150 40'
              preserveAspectRatio='none'
              shapeRendering='auto'
            >
              <defs>
                <path id='gentle-wave' d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z' />
              </defs>
              <g className='moving-waves'>
                <use xlinkHref='#gentle-wave' x='48' y='-1' fill='rgba(255,255,255,0.40' />
                <use xlinkHref='#gentle-wave' x='48' y='3' fill='rgba(255,255,255,0.35)' />
                <use xlinkHref='#gentle-wave' x='48' y='5' fill='rgba(255,255,255,0.25)' />
                <use xlinkHref='#gentle-wave' x='48' y='8' fill='rgba(255,255,255,0.20)' />
                <use xlinkHref='#gentle-wave' x='48' y='13' fill='rgba(255,255,255,0.15)' />
                <use xlinkHref='#gentle-wave' x='48' y='16' fill='rgba(255,255,255,1)' />
              </g>
            </svg>
          </div>
        </div>
      </header>
      {/* end of Header */}

      {/* Artikel */}
      <section className='pt-5 pb-0'>
        <div className='container'>
          <div class='row'>
            <div class='col-md-8 mx-auto text-center'>
              <h6 class='text-gradient text-info text-uppercase'>Artikel</h6>
              <h2>Selamat Membaca !!!</h2>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col-lg-4 col-md-6'>
              <div className='card card-blog card-plain'>
                <div className='position-relative'>
                  <a className='d-block blur-shadow-image'>
                    <img
                      src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/house.jpg'
                      alt='img-blur-shadow'
                      className='img-fluid shadow border-radius-lg'
                    />
                  </a>
                </div>
                <div className='card-body px-1 pt-3'>
                  <p className='text-gradient text-dark mb-2 text-sm'>Entire Apartment • 3 Guests • 2 Beds</p>
                  <a href='javascript:;'>
                    <h5>Lovely and cosy apartment</h5>
                  </a>
                  <p>
                    Siri&#39;s latest trick is offering a hands-free TV viewing experience, that will allow consumers to
                    turn on or off their television, change inputs, fast forward.
                  </p>
                  <button type='button' className='btn btn-outline-primary btn-sm'>
                    From / Night
                  </button>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='card card-blog card-plain'>
                <div className='position-relative'>
                  <a className='d-block blur-shadow-image'>
                    <img
                      src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/pool.jpg'
                      alt='img-blur-shadow'
                      className='img-fluid shadow border-radius-lg'
                    />
                  </a>
                </div>
                <div className='card-body px-1 pt-3'>
                  <p className='text-gradient text-dark mb-2 text-sm'>Private Room • 1 Guests • 1 Sofa</p>
                  <a href='javascript:;'>
                    <h5>Single room in the center of the city</h5>
                  </a>
                  <p>
                    As Uber works through a huge amount of internal management turmoil, the company is also
                    consolidating and rationalizing more of its international business.
                  </p>
                  <button type='button' className='btn btn-outline-primary btn-sm'>
                    From / Night
                  </button>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='card card-blog card-plain'>
                <div className='position-relative'>
                  <a className='d-block blur-shadow-image'>
                    <img
                      src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/antalya.jpg'
                      alt='img-blur-shadow'
                      className='img-fluid shadow border-radius-lg'
                    />
                  </a>
                </div>
                <div className='card-body px-1 pt-3'>
                  <p className='text-gradient text-dark mb-2 text-sm'>Entire Apartment • 4 Guests • 2 Beds</p>
                  <a href='javascript:;'>
                    <h5>Independent house bedroom kitchen</h5>
                  </a>
                  <p>
                    Music is something that every person has his or her own specific opinion about. Different people
                    have different taste, and various types of music.
                  </p>
                  <button type='button' className='btn btn-outline-primary btn-sm'>
                    From / Night
                  </button>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='card card-blog card-plain'>
                <div className='position-relative'>
                  <a className='d-block blur-shadow-image'>
                    <img
                      src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/tiny-house.jpg'
                      alt='img-blur-shadow'
                      className='img-fluid shadow border-radius-lg'
                    />
                  </a>
                </div>
                <div className='card-body px-1 pt-3'>
                  <p className='text-gradient text-dark mb-2 text-sm'>Entire Apartment • 2 Guests • 1 Bed</p>
                  <a href='javascript:;'>
                    <h5>Zen Gateway with pool and garden</h5>
                  </a>
                  <p>
                    Fast forward, rewind and more, without having to first invoke a specific skill, or even press a
                    button on their remote.
                  </p>
                  <button type='button' className='btn btn-outline-primary btn-sm'>
                    From / Night
                  </button>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='card card-blog card-plain'>
                <div className='position-relative'>
                  <a className='d-block blur-shadow-image'>
                    <img
                      src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/air-bnb.jpg'
                      alt='img-blur-shadow'
                      className='img-fluid shadow border-radius-lg'
                    />
                  </a>
                </div>
                <div className='card-body px-1 pt-3'>
                  <p className='text-gradient text-dark mb-2 text-sm'>Entire Flat • 8 Guests • 3 Rooms</p>
                  <a href='javascript:;'>
                    <h5>Cheapest hotels for a luxury vacation</h5>
                  </a>
                  <p>Today, the company announced it will be combining its rides-on-demand business and UberEATS.</p>
                  <button type='button' className='btn btn-outline-primary btn-sm'>
                    From / Night
                  </button>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='card card-blog card-plain'>
                <div className='position-relative'>
                  <a className='d-block blur-shadow-image'>
                    <img
                      src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/palm-house.jpg'
                      alt='img-blur-shadow'
                      className='img-fluid shadow border-radius-lg'
                    />
                  </a>
                </div>
                <div className='card-body px-1 pt-3'>
                  <p className='text-gradient text-dark mb-2 text-sm'>Entire Apartment • 2 Guests • 1 Bed</p>
                  <a href='javascript:;'>
                    <h5>Cozy Double Room Near Station</h5>
                  </a>
                  <p>
                    Different people have different taste, and various types of music have many ways of leaving an
                    impact on someone.
                  </p>
                  <button type='button' className='btn btn-outline-primary btn-sm'>
                    From / Night
                  </button>
                </div>
              </div>
            </div>
            <div className='col-sm-7 ms-auto text-end'>
              <ul className='pagination pagination-primary mt-4'>
                <li className='page-item ms-auto'>
                  <a className='page-link' href='javascript:;' aria-label='Previous'>
                    <span aria-hidden='true'>
                      <i className='fa fa-angle-double-left' aria-hidden='true'></i>
                    </span>
                  </a>
                </li>
                <li className='page-item active'>
                  <a className='page-link' href='javascript:;'>
                    1
                  </a>
                </li>
                <li className='page-item'>
                  <a className='page-link' href='javascript:;'>
                    2
                  </a>
                </li>
                <li className='page-item'>
                  <a className='page-link' href='javascript:;'>
                    3
                  </a>
                </li>
                <li className='page-item'>
                  <a className='page-link' href='javascript:;'>
                    4
                  </a>
                </li>
                <li className='page-item'>
                  <a className='page-link' href='javascript:;'>
                    5
                  </a>
                </li>
                <li className='page-item'>
                  <a className='page-link' href='javascript:;' aria-label='Next'>
                    <span aria-hidden='true'>
                      <i className='fa fa-angle-double-right' aria-hidden='true'></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* end of Artikel */}

      {/* Footer */}
      <Footer />
    </>
  );
}
