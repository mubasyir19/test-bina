import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
// import styles from '../styles/Home.module.css';
import Navbar from '../components/organism/Navbar';
import Navbar2 from '../components/organism/Navbar2';
import Navbar3 from '../components/organism/Navbar3';
import Footer from '../components/organism/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Beranda - Bina Al Insan</title>
      </Head>
      {/* <!-- -------- START HEADER 1 w/ text and image on right ------- --> */}
      <Navbar3 />
      <header>
        <div className='page-header min-vh-100'>
          <div className='oblique position-absolute top-0 h-100 d-md-block d-none'>
            <div
              className='oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6'
              style={{ backgroundImage: "url('/img/curved-images/curved11.jpg')" }}
            ></div>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 col-md-7 d-flex justify-content-center flex-column'>
                <h1 className=''>Yayasan</h1>
                <h1 className='text-gradient text-primary mb-4'>Bina Al Insan</h1>
                <p className='lead pe-5 me-5'>
                  Yayasan BINA AL INSAN BREBES berkiprah di bidang sosial keagamaan dan kemanusiaan, didirikan
                  berdasarkan hukum di Republik Indonesia pada tanggal 20 Oktober 2022.{' '}
                </p>
                <div className='buttons'>
                  <button type='button' className='btn bg-gradient-primary mt-4'>
                    Get Started
                  </button>
                  <button type='button' className='btn text-primary shadow-none mt-4'>
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- -------- END HEADER 1 w/ text and image on right ------- --> */}

      <section className='mt-5'>
        <div className='container'>
          <div class='row'>
            <div class='col-lg-6 mx-auto text-center'>
              <h2 class='mb-0 text-lg'>Program</h2>
              <h2 class='text-gradient text-primary mb-3'>Program Kami</h2>
              <p class='lead'>
                Yayasan Bina Al Insan Brebes berkiprah di bidang <br /> keagamaan, kemanusiaan dan sosial{' '}
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='info-horizontal bg-gradient-primary border-radius-xl p-5'>
                <div className='icon'>
                  <svg
                    className='text-white'
                    width='25px'
                    height='25px'
                    viewBox='0 0 46 43'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                  >
                    <title>delivery-fast</title>
                    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                      <g transform='translate(-2320.000000, -741.000000)' fill='#FFFFFF' fillRule='nonzero'>
                        <g transform='translate(1716.000000, 291.000000)'>
                          <g id='delivery-fast' transform='translate(604.000000, 450.000000)'>
                            <rect
                              className='color-background'
                              opacity='0.601143973'
                              x='0'
                              y='0'
                              width='17.25'
                              height='3.83333333'
                            ></rect>
                            <rect
                              className='color-background'
                              opacity='0.601143973'
                              x='3.83333333'
                              y='7.66666667'
                              width='13.4166667'
                              height='3.83333333'
                            ></rect>
                            <rect
                              className='color-background'
                              opacity='0.601143973'
                              x='7.66666667'
                              y='15.3333333'
                              width='9.58333333'
                              height='3.83333333'
                            ></rect>
                            <rect
                              className='color-background'
                              opacity='0.601888021'
                              x='11.5'
                              y='23'
                              width='5.75'
                              height='3.83333333'
                            ></rect>
                            <path
                              className='color-foreground'
                              d='M44.9400833,19.3679167 L38.0611667,15.9294167 L36.3591667,9.1195 C36.1464167,8.26466667 35.37975,7.66666667 34.5,7.66666667 L31.3854167,7.66666667 L21.0833333,7.66666667 C21.0833333,7.66666667 21.0833333,31.5310833 21.0833333,32.5833333 C21.0833333,33.6355833 21.1810833,34.5 21.1810833,34.5 C21.6640833,38.801 25.2808333,42.1666667 29.7083333,42.1666667 C34.1358333,42.1666667 37.7525833,38.801 38.2355833,34.5 L44.0833333,34.5 C45.1413333,34.5 46,33.6413333 46,32.5833333 L46,21.0833333 C46,20.3569167 45.5898333,19.69375 44.9400833,19.3679167 Z M29.7083333,38.3333333 C27.0671667,38.3333333 24.9166667,36.18475 24.9166667,33.5416667 C24.9166667,30.8985833 27.0671667,28.75 29.7083333,28.75 C32.3495,28.75 34.5,30.8985833 34.5,33.5416667 C34.5,36.18475 32.3495,38.3333333 29.7083333,38.3333333 Z M24.9166667,17.25 L24.9166667,11.5 L33.2426667,11.5 L34.5,17.25 L24.9166667,17.25 Z'
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className='description ps-5'>
                  <h5 className='text-white'>Keagamaan</h5>
                  <p className='text-white'>Menyelenggarakan :</p>
                  <ul>
                    <li className='text-white'>Taman Pendidikan Al-Quran (TPQ)</li>
                    <li className='text-white'>Dakwah</li>
                    <li className='text-white'>Madrasah</li>
                  </ul>
                  <a
                    href='https://www.creative-tim.com/learning-lab/bootstrap/license/soft-ui-design-system'
                    className='text-white icon-move-right'
                  >
                    Baca Selengkapnya
                    <i className='fas fa-arrow-right text-sm ms-1'></i>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 px-lg-1 mt-lg-0 mt-4'>
              <div className='info-horizontal bg-gray-100 border-radius-xl p-5'>
                <div className='icon'>
                  <svg
                    className='text-primary'
                    width='25px'
                    height='25px'
                    viewBox='0 0 40 44'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                  >
                    <title>document</title>
                    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                      <g transform='translate(-1870.000000, -591.000000)' fill='#FFFFFF' fillRule='nonzero'>
                        <g transform='translate(1716.000000, 291.000000)'>
                          <g transform='translate(154.000000, 300.000000)'>
                            <path
                              className='color-foreground'
                              d='M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z'
                              opacity='0.603585379'
                            ></path>
                            <path
                              className='color-background'
                              d='M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z'
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className='description ps-5'>
                  <h5>Kemanusiaan</h5>
                  <p>Bidang Kemanusiaan Menggalang, mengumpulkan dan memberikan bantuan kepada korban bencana alam</p>
                  <a href='' className='text-primary icon-move-right'>
                    Baca Selengkapnya
                    <i className='fas fa-arrow-right text-sm ms-1'></i>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mt-lg-0 mt-4'>
              <div className='info-horizontal bg-gray-100 border-radius-xl p-5'>
                <div className='icon'>
                  <svg
                    className='text-primary'
                    width='25px'
                    height='25px'
                    viewBox='0 0 40 40'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                  >
                    <title>ungroup</title>
                    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                      <g transform='translate(-2170.000000, -442.000000)' fill='#FFFFFF' fillRule='nonzero'>
                        <g transform='translate(1716.000000, 291.000000)'>
                          <g id='ungroup' transform='translate(454.000000, 151.000000)'>
                            <path
                              className='color-background'
                              d='M38.1818182,10.9090909 L32.7272727,10.9090909 L32.7272727,30.9090909 C32.7272727,31.9127273 31.9127273,32.7272727 30.9090909,32.7272727 L10.9090909,32.7272727 L10.9090909,38.1818182 C10.9090909,39.1854545 11.7236364,40 12.7272727,40 L38.1818182,40 C39.1854545,40 40,39.1854545 40,38.1818182 L40,12.7272727 C40,11.7236364 39.1854545,10.9090909 38.1818182,10.9090909 Z'
                            ></path>
                            <path
                              className='color-foreground'
                              d='M27.2727273,29.0909091 L1.81818182,29.0909091 C0.812727273,29.0909091 0,28.2781818 0,27.2727273 L0,1.81818182 C0,0.814545455 0.812727273,0 1.81818182,0 L27.2727273,0 C28.2781818,0 29.0909091,0.814545455 29.0909091,1.81818182 L29.0909091,27.2727273 C29.0909091,28.2781818 28.2781818,29.0909091 27.2727273,29.0909091 Z'
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className='description ps-5'>
                  <h5>Sosial</h5>
                  <p>Menyelenggarakan :</p>
                  <ul>
                    <li>Play Group</li>
                    <li>Taman Kanak-Kanak</li>
                  </ul>
                  <a href='' className='text-primary icon-move-right'>
                    Baca Selengkapnya
                    <i className='fas fa-arrow-right text-sm ms-1'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='my-5 py-5'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 ms-auto'>
              <div className='row justify-content-start'>
                <div className='col-md-6'>
                  <div className='info'>
                    <div className='icon icon-sm'>
                      <svg
                        className='text-primary'
                        width='25px'
                        height='25px'
                        viewBox='0 0 40 44'
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                      >
                        <title>document</title>
                        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                          <g transform='translate(-1870.000000, -591.000000)' fill='#FFFFFF' fillRule='nonzero'>
                            <g transform='translate(1716.000000, 291.000000)'>
                              <g transform='translate(154.000000, 300.000000)'>
                                <path
                                  className='color-background'
                                  d='M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z'
                                  opacity='0.603585379'
                                ></path>
                                <path
                                  className='color-background'
                                  d='M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z'
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <h5 className='font-weight-bolder mt-3'>Full Documentation</h5>
                    <p className='pe-5'>
                      Built by developers for developers. Check the foundation and you will find everything inside our
                      documentation.
                    </p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='info'>
                    <div className='icon icon-sm'>
                      <svg
                        className='text-primary'
                        width='25px'
                        height='25px'
                        viewBox='0 0 45 40'
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                      >
                        <title>shop </title>
                        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                          <g transform='translate(-1716.000000, -439.000000)' fill='#FFFFFF' fillRule='nonzero'>
                            <g transform='translate(1716.000000, 291.000000)'>
                              <g id='shop-' transform='translate(0.000000, 148.000000)'>
                                <path
                                  className='color-background'
                                  d='M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z'
                                  opacity='0.598981585'
                                ></path>
                                <path
                                  className='color-background'
                                  d='M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z'
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>

                    <h5 className='font-weight-bolder mt-3'>Bootstrap 5 Ready</h5>
                    <p className='pe-3'>
                      The world’s most popular front-end open source toolkit, featuring Sass variables and mixins.
                    </p>
                  </div>
                </div>
              </div>
              <div className='row justify-content-start mt-5'>
                <div className='col-md-6 mt-3'>
                  <div className='info'>
                    <div className='icon icon-sm'>
                      <svg
                        className='text-primary'
                        width='25px'
                        height='25px'
                        viewBox='0 0 42 44'
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                      >
                        <title>time-alarm</title>
                        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                          <g transform='translate(-2319.000000, -440.000000)' fill='#923DFA' fillRule='nonzero'>
                            <g transform='translate(1716.000000, 291.000000)'>
                              <g id='time-alarm' transform='translate(603.000000, 149.000000)'>
                                <path
                                  className='color-background'
                                  d='M18.8086957,4.70034783 C15.3814926,0.343541521 9.0713063,-0.410050841 4.7145,3.01715217 C0.357693695,6.44435519 -0.395898667,12.7545415 3.03130435,17.1113478 C5.53738466,10.3360568 11.6337901,5.54042955 18.8086957,4.70034783 L18.8086957,4.70034783 Z'
                                  opacity='0.6'
                                ></path>
                                <path
                                  className='color-background'
                                  d='M38.9686957,17.1113478 C42.3958987,12.7545415 41.6423063,6.44435519 37.2855,3.01715217 C32.9286937,-0.410050841 26.6185074,0.343541521 23.1913043,4.70034783 C30.3662099,5.54042955 36.4626153,10.3360568 38.9686957,17.1113478 Z'
                                  opacity='0.6'
                                ></path>
                                <path
                                  className='color-background'
                                  d='M34.3815652,34.7668696 C40.2057958,27.7073059 39.5440671,17.3375603 32.869743,11.0755718 C26.1954189,4.81358341 15.8045811,4.81358341 9.13025701,11.0755718 C2.45593289,17.3375603 1.79420418,27.7073059 7.61843478,34.7668696 L3.9753913,40.0506522 C3.58549114,40.5871271 3.51710058,41.2928217 3.79673036,41.8941824 C4.07636014,42.4955431 4.66004722,42.8980248 5.32153275,42.9456105 C5.98301828,42.9931963 6.61830436,42.6784048 6.98113043,42.1232609 L10.2744783,37.3434783 C16.5555112,42.3298213 25.4444888,42.3298213 31.7255217,37.3434783 L35.0188696,42.1196087 C35.6014207,42.9211577 36.7169135,43.1118605 37.53266,42.5493622 C38.3484064,41.9868639 38.5667083,40.8764423 38.0246087,40.047 L34.3815652,34.7668696 Z M30.1304348,25.5652174 L21,25.5652174 C20.49574,25.5652174 20.0869565,25.1564339 20.0869565,24.6521739 L20.0869565,15.5217391 C20.0869565,15.0174791 20.49574,14.6086957 21,14.6086957 C21.50426,14.6086957 21.9130435,15.0174791 21.9130435,15.5217391 L21.9130435,23.7391304 L30.1304348,23.7391304 C30.6346948,23.7391304 31.0434783,24.1479139 31.0434783,24.6521739 C31.0434783,25.1564339 30.6346948,25.5652174 30.1304348,25.5652174 Z'
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>

                    <h5 className='font-weight-bolder mt-3'>Save Time & Money</h5>
                    <p className='pe-5'>
                      Creating your design from scratch with dedicated designers can be very expensive. Start with our
                      Design System.
                    </p>
                  </div>
                </div>
                <div className='col-md-6 mt-3'>
                  <div className='info'>
                    <div className='icon icon-sm'>
                      <svg
                        className='text-primary'
                        width='25px'
                        height='25px'
                        viewBox='0 0 42 42'
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                      >
                        <title>office</title>
                        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                          <g transform='translate(-1869.000000, -293.000000)' fill='#FFFFFF' fillRule='nonzero'>
                            <g transform='translate(1716.000000, 291.000000)'>
                              <g id='office' transform='translate(153.000000, 2.000000)'>
                                <path
                                  className='color-background'
                                  d='M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z'
                                  opacity='0.6'
                                ></path>
                                <path
                                  className='color-background'
                                  d='M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z'
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>

                    <h5 className='font-weight-bolder mt-3'>Fully Responsive</h5>
                    <p className='pe-3'>
                      Regardless of the screen size, the website content will naturally fit the given resolution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4'>
              <div className='card card-background card-background-mask-primary tilt' data-tilt>
                <div
                  className='full-background'
                  style={{
                    backgroundImage: `url(
                      'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/team-working.jpg'
                    )`,
                  }}
                ></div>
                <div className='card-body pt-7 text-center'>
                  <div className='icon icon-lg up mb-3 mt-3'>
                    <svg
                      width='50px'
                      height='50px'
                      viewBox='0 0 42 42'
                      version='1.1'
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                    >
                      <title>box-3d-50</title>
                      <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                        <g transform='translate(-2319.000000, -291.000000)' fill='#FFFFFF' fillRule='nonzero'>
                          <g transform='translate(1716.000000, 291.000000)'>
                            <g id='box-3d-50' transform='translate(603.000000, 0.000000)'>
                              <path d='M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z'></path>
                              <path
                                d='M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z'
                                opacity='0.7'
                              ></path>
                              <path
                                d='M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z'
                                opacity='0.7'
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <h2 className='text-white up mb-0'>
                    Feel the <br /> Soft UI Design System
                  </h2>
                  <a
                    href='.//sections/elements/buttons.html'
                    target='_blank'
                    className='btn btn-outline-white mt-5 up btn-round'
                  >
                    Start with Elements
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- -------- START Features w/ icons and text on left & gradient title and text on right -------- --> */}
      <section className='py-9'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <h3 className='text-gradient text-primary mb-0 mt-2'>Read More About Us</h3>
              <h3>The most important</h3>
              <p>
                Pain is what we go through as we become older. We get insulted by others, lose trust for those others.
                We get back stabbed by friends. It becomes harder for us to give others a hand.
              </p>
              <a href='javascript:;' className='text-primary icon-move-right'>
                More about us
                <i className='fas fa-arrow-right text-sm ms-1'></i>
              </a>
            </div>
            <div className='col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0'>
              <div className='p-3 info-horizontal'>
                <div className='icon icon-shape rounded-circle bg-gradient-primary shadow text-center'>
                  <i className='fa fa-ship opacity-10'></i>
                </div>
                <div className='description ps-3'>
                  <p className='mb-0'>
                    It becomes harder for us to give others a hand. <br /> We get our heart broken by people we love.
                  </p>
                </div>
              </div>

              <div className='p-3 info-horizontal'>
                <div className='icon icon-shape rounded-circle bg-gradient-primary shadow text-center'>
                  <i className='fa fa-handshake opacity-10'></i>
                </div>
                <div className='description ps-3'>
                  <p className='mb-0'>
                    As we live, our hearts turn colder. <br />
                    Cause pain is what we go through as we become older.
                  </p>
                </div>
              </div>
              <div className='p-3 info-horizontal'>
                <div className='icon icon-shape rounded-circle bg-gradient-primary shadow text-center'>
                  <i className='fa fa-hourglass opacity-10'></i>
                </div>
                <div className='description ps-3'>
                  <p className='mb-0'>
                    When we lose family over time. <br /> What else could rust the heart more over time? Blackgold.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- -------- END Features w/ icons and text on left & gradient title and text on right -------- --> */}

      <section>
        <div className='bg-gradient-dark position-relative m-3 border-radius-xl overflow-hidden'>
          <img
            src='/img/shapes/waves-white.svg'
            alt='pattern-lines'
            className='position-absolute start-0 top-md-0 w-100 opacity-6'
          />
          <div className='container py-7 postion-relative z-index-2 position-relative'>
            <div className='row'>
              <div className='col-md-7 mx-auto text-center'>
                <h3 className='text-white mb-0'>Do you love this awesome</h3>
                <h3 className='text-primary text-gradient mb-4'>Design System for Bootstrap 5?</h3>
                <p className='text-white mb-5'>
                  Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you
                  can find the Design System in HTML. Start a new project or give an old Bootstrap project a new look!
                </p>
                <a
                  href='https://www.creative-tim.com/product/soft-ui-design-system'
                  className='btn btn-primary btn-lg mb-3 mb-sm-0'
                >
                  Download HTML
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
