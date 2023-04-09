import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function index() {
  return (
    // <!-- Navbar -->
    <div className='container position-sticky z-index-sticky top-0'>
      <div className='row'>
        <div className='col-12'>
          <nav className='navbar navbar-expand-lg blur blur-rounded top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4'>
            <div className='container-fluid px-0'>
              <a
                className='navbar-brand font-weight-bolder ms-sm-3'
                href='https://demos.creative-tim.com/soft-ui-design-system/index.html'
                rel='tooltip'
                title='Designed and Coded by Creative Tim'
                data-placement='bottom'
                target='_blank'
              >
                <img
                  src='https://www.binaalinsan.id/wp-content/uploads/2023/03/logo-binaalinsan.png'
                  height={24}
                  width={24}
                  alt='logo'
                />
                Yayasan Bina Al Insan
              </a>
              <button
                className='navbar-toggler shadow-none ms-2'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navigation'
                aria-controls='navigation'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon mt-2'>
                  <span className='navbar-toggler-bar bar1'></span>
                  <span className='navbar-toggler-bar bar2'></span>
                  <span className='navbar-toggler-bar bar3'></span>
                </span>
              </button>
              <div className='collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100' id='navigation'>
                <ul className='navbar-nav navbar-nav-hover ms-lg-12 ps-lg-5 w-100'>
                  <Link className='nav-item mx-2' href='/'>
                    <span class='nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center'>
                      Beranda
                    </span>
                  </Link>
                  <li className='nav-item dropdown dropdown-hover mx-2'>
                    <a
                      className='nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center'
                      href='/program'
                      id='dropdownMenuPages'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Program
                      <img src='/img/down-arrow-dark.svg' alt='down-arrow' class='arrow ms-1'></img>
                    </a>
                    <div
                      className='dropdown-menu dropdown-menu-animation dropdown-md p-3 border-radius-lg mt-0 mt-lg-3'
                      aria-labelledby='dropdownMenuPages'
                    >
                      <div className='d-none d-lg-block'>
                        <div className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center px-0'>
                          <div className='d-inline-block'>
                            <div className='icon icon-shape icon-xs border-radius-md bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center'>
                              {/* <svg
                                width='12px'
                                height='12px'
                                viewBox='0 0 45 40'
                                version='1.1'
                                xmlns='http://www.w3.org/2000/svg'
                                xmlns:xlink='http://www.w3.org/1999/xlink'
                              >
                                <title>shop</title>
                                <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
                                  <g
                                    transform='translate(-1716.000000, -439.000000)'
                                    fill='#FFFFFF'
                                    fill-rule='nonzero'
                                  >
                                    <g transform='translate(1716.000000, 291.000000)'>
                                      <g transform='translate(0.000000, 148.000000)'>
                                        <path
                                          d='M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z'
                                          opacity='0.598981585'
                                        ></path>
                                        <path d='M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z'></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg> */}
                            </div>
                          </div>
                          Pendidikan
                        </div>
                        <a href='./pages/about-us.html' className='dropdown-item border-radius-md'>
                          <span className='ps-3'>Ibtidaiyah (SD)</span>
                        </a>
                        <a href='/contact' className='dropdown-item border-radius-md'>
                          <span className='ps-3'>Tsanawiyah (SMP)</span>
                        </a>
                        <a href='./pages/author.html' className='dropdown-item border-radius-md'>
                          <span className='ps-3'>Aliyah (SMA)</span>
                        </a>
                        <div className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center px-0 mt-3'>
                          <div className='d-inline-block'>
                            <div className='icon icon-shape icon-xs border-radius-md bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center ps-0'>
                              {/* <svg
                                width='12px'
                                height='12px'
                                viewBox='0 0 42 42'
                                version='1.1'
                                xmlns='http://www.w3.org/2000/svg'
                                xmlns:xlink='http://www.w3.org/1999/xlink'
                              >
                                <title>office</title>
                                <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
                                  <g
                                    transform='translate(-1869.000000, -293.000000)'
                                    fill='#FFFFFF'
                                    fill-rule='nonzero'
                                  >
                                    <g transform='translate(1716.000000, 291.000000)'>
                                      <g transform='translate(153.000000, 2.000000)'>
                                        <path
                                          d='M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z'
                                          opacity='0.6'
                                        ></path>
                                        <path d='M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z'></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg> */}
                            </div>
                          </div>
                          Sosial
                        </div>
                        <a href='./pages/sign-in.html' className='dropdown-item border-radius-md'>
                          <span className='ps-3'>Bakti Sosial</span>
                        </a>
                        <a href='./pages/sign-in.html' className='dropdown-item border-radius-md'>
                          <span className='ps-3'>Koperasi</span>
                        </a>
                      </div>

                      <div className='d-lg-none'>
                        <div className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center px-0'>
                          <div className='d-inline-block'>
                            <div className='icon icon-shape icon-xs border-radius-md bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center'>
                              {/* <svg
                                width='12px'
                                height='12px'
                                viewBox='0 0 45 40'
                                version='1.1'
                                xmlns='http://www.w3.org/2000/svg'
                                xmlns:xlink='http://www.w3.org/1999/xlink'
                              >
                                <title>shop</title>
                                <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
                                  <g
                                    transform='translate(-1716.000000, -439.000000)'
                                    fill='#FFFFFF'
                                    fill-rule='nonzero'
                                  >
                                    <g transform='translate(1716.000000, 291.000000)'>
                                      <g transform='translate(0.000000, 148.000000)'>
                                        <path
                                          d='M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z'
                                          opacity='0.598981585'
                                        ></path>
                                        <path d='M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z'></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg> */}
                            </div>
                          </div>
                          Landing Pages
                        </div>

                        <a href='./pages/about-us.html' className='dropdown-item border-radius-md'>
                          <span className='ps-3'>About Us</span>
                        </a>
                        <a href='./pages/contact-us.html' className='dropdown-item border-radius-md'>
                          <span className='ps-3'>Contact Us</span>
                        </a>
                        <a href='./pages/author.html' className='dropdown-item border-radius-md'>
                          <span className='ps-3'>Author</span>
                        </a>

                        <div className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center px-0 mt-3'>
                          <div className='d-inline-block'>
                            <div className='icon icon-shape icon-xs border-radius-md bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center ps-0'>
                              {/* <svg
                                width='12px'
                                height='12px'
                                viewBox='0 0 42 42'
                                version='1.1'
                                xmlns='http://www.w3.org/2000/svg'
                                xmlns:xlink='http://www.w3.org/1999/xlink'
                              >
                                <title>office</title>
                                <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
                                  <g
                                    transform='translate(-1869.000000, -293.000000)'
                                    fill='#FFFFFF'
                                    fill-rule='nonzero'
                                  >
                                    <g transform='translate(1716.000000, 291.000000)'>
                                      <g transform='translate(153.000000, 2.000000)'>
                                        <path
                                          d='M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z'
                                          opacity='0.6'
                                        ></path>
                                        <path d='M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z'></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg> */}
                            </div>
                          </div>
                          Account
                        </div>
                        <a href='./pages/sign-in.html' className='dropdown-item border-radius-md'>
                          <span className='ps-3'>Sign In</span>
                        </a>
                      </div>
                    </div>
                  </li>

                  {/* <li className='nav-item dropdown dropdown-hover mx-2'>
                    <a
                      className='nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center'
                      href='javascript:;'
                      id='dropdownMenuDocs'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Event
                    </a>
                    <div
                      className='dropdown-menu dropdown-menu-animation dropdown-lg mt-0 mt-lg-3 p-3 border-radius-lg'
                      aria-labelledby='dropdownMenuDocs'
                    >
                      <div className='d-none d-lg-block'>
                        <ul className='list-group'>
                          <li className='nav-item list-group-item border-0 p-0'>
                            <a
                              className='dropdown-item py-2 ps-3 border-radius-md'
                              href=' https://www.creative-tim.com/learning-lab/bootstrap/license/soft-ui-design-system '
                            >
                              <div className='d-flex'>
                                <div className='icon h-10 me-3 d-flex mt-1'></div>
                                <div>
                                  <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                                    Getting Started
                                  </h6>
                                  <span className='text-sm'>All about overview, quick start, license and contents</span>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li className='nav-item list-group-item border-0 p-0'>
                            <a className='dropdown-item py-2 ps-3 border-radius-md' href='  '>
                              <div className='d-flex'>
                                <div className='icon h-10 me-3 d-flex mt-1'></div>
                                <div>
                                  <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                                    Foundation
                                  </h6>
                                  <span className='text-sm'>See our colors, icons and typography</span>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li className='nav-item list-group-item border-0 p-0'>
                            <a className='dropdown-item py-2 ps-3 border-radius-md' href='  '>
                              <div className='d-flex'>
                                <div className='icon h-10 me-3 d-flex mt-1'></div>
                                <div>
                                  <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                                    Components
                                  </h6>
                                  <span className='text-sm'>Explore our collection of fully designed components</span>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li className='nav-item list-group-item border-0 p-0'>
                            <a className='dropdown-item py-2 ps-3 border-radius-md' href='  '>
                              <div className='d-flex'>
                                <div className='icon h-10 me-3 d-flex mt-1'></div>
                                <div>
                                  <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                                    Plugins
                                  </h6>
                                  <span className='text-sm'>Check how you can integrate our plugins</span>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li className='nav-item list-group-item border-0 p-0'>
                            <a className='dropdown-item py-2 ps-3 border-radius-md' href='  '>
                              <div className='d-flex'>
                                <div className='icon h-10 me-3 d-flex mt-1'></div>
                                <div>
                                  <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                                    Utility classNamees
                                  </h6>
                                  <span className='text-sm'>
                                    For those who want flexibility, use our utility classNamees
                                  </span>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className='row d-lg-none'>
                        <div className='col-md-12 g-0'>
                          <a className='dropdown-item py-2 ps-3 border-radius-md' href='./pages/about-us.html'>
                            <div className='d-flex'>
                              <div className='icon h-10 me-3 d-flex mt-1'></div>
                              <div>
                                <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                                  Getting Started
                                </h6>
                                <span className='text-sm'>All about overview, quick start, license and contents</span>
                              </div>
                            </div>
                          </a>

                          <a className='dropdown-item py-2 ps-3 border-radius-md' href='./pages/about-us.html'>
                            <div className='d-flex'>
                              <div className='icon h-10 me-3 d-flex mt-1'></div>
                              <div>
                                <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                                  Foundation
                                </h6>
                                <span className='text-sm'>See our colors, icons and typography</span>
                              </div>
                            </div>
                          </a>

                          <a className='dropdown-item py-2 ps-3 border-radius-md' href='./pages/about-us.html'>
                            <div className='d-flex'>
                              <div className='icon h-10 me-3 d-flex mt-1'></div>
                              <div>
                                <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                                  Components
                                </h6>
                                <span className='text-sm'>Explore our collection of fully designed components</span>
                              </div>
                            </div>
                          </a>

                          <a className='dropdown-item py-2 ps-3 border-radius-md' href='./pages/about-us.html'>
                            <div className='d-flex'>
                              <div className='icon h-10 me-3 d-flex mt-1'></div>
                              <div>
                                <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                                  Plugins
                                </h6>
                                <span className='text-sm'>Check how you can integrate our plugins</span>
                              </div>
                            </div>
                          </a>

                          <a className='dropdown-item py-2 ps-3 border-radius-md' href='./pages/about-us.html'>
                            <div className='d-flex'>
                              <div className='icon h-10 me-3 d-flex mt-1'></div>
                              <div>
                                <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                                  Utility classNamees
                                </h6>
                                <span className='text-sm'>All about overview, quick start, license and contents</span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>

                  <Link className='nav-item mx-2' href='/artikel'>
                    <span class='nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center'>
                      Artikel
                    </span>
                  </Link> */}

                  <Link className='nav-item mx-2' href='/kontak'>
                    <span class='nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center'>
                      Kontak
                    </span>
                  </Link>

                  <Link
                    className='nav-item ms-lg-auto'
                    href='https://www.creative-tim.com/product/soft-ui-design-system-pro'
                  >
                    <span className='btn btn-sm bg-gradient-primary btn-round mb-0 me-1 mt-2 mt-md-0'>Profil Kami</span>
                  </Link>
                  <Link
                    className='nav-item my-auto ms-3 ms-lg-0'
                    href='https://www.creative-tim.com/builder/soft-ui-design-system'
                  >
                    <span className='btn btn-sm btn-outline-primary btn-round mb-0 me-1 mt-2 mt-md-0'>Koperasi</span>
                  </Link>
                  {/* <li className='nav-item my-auto ms-3 ms-lg-0'>
                    <a
                      href='https://www.creative-tim.com/product/soft-ui-design-system-pro'
                      className='btn btn-sm bg-gradient-primary btn-round mb-0 me-1 mt-2 mt-md-0'
                    >
                      Upgrade to Pro
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
          {/* <!-- End Navbar --> */}
        </div>
      </div>
    </div>
  );
}
