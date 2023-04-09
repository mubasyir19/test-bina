import React from 'react';

export default function index() {
  return (
    <nav className='navbar navbar-expand-lg  blur blur-rounded top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4'>
      <div className='container-fluid px-0'>
        <a
          className='navbar-brand font-weight-bolder ms-sm-3'
          href='https://demos.creative-tim.com/soft-ui-design-system/index.html'
          rel='tooltip'
          title='Designed and Coded by Creative Tim'
          data-placement='bottom'
          target='_blank'
        >
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
            <li className='nav-item ms-lg-auto'>
              <a
                className='nav-link nav-link-icon me-2'
                href='https://github.com/creativetimofficial/soft-ui-design-system'
                target='_blank'
              >
                <p
                  className='d-inline text-sm z-index-1 font-weight-bold'
                  data-bs-toggle='tooltip'
                  data-bs-placement='bottom'
                >
                  Beranda
                </p>
              </a>
            </li>
            <li className='nav-item dropdown dropdown-hover mx-2'>
              <a
                className='nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center'
                href='javascript:;'
                id='dropdownMenuPages'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Program
                <svg height='7' viewBox='0 0 10 7' width='10' xmlns='http://www.w3.org/2000/svg' className='ms-1'>
                  <path
                    d='m7.91769231.99461539-3.30230769 3.30230769-3.3023077-3.30230769c-.30182991-.29151709-.78160367-.28734798-1.07832198.00937032-.2967183.29671831-.30088741.77649207-.00937032 1.07832198l3.84615384 3.84615385c.3003845.3002938.78730781.3002938 1.08769231 0l3.84615385-3.84615385c.1999666-.19313421.28016353-.47913684.20976704-.74808255-.07039649-.26894572-.28043108-.47898031-.5493768-.5493768-.26894571-.07039649-.55494834.00980044-.74808255.20976705z'
                    fill='#black'
                  />
                </svg>
              </a>
              <div
                className='dropdown-menu dropdown-menu-animation dropdown-md p-3 border-radius-lg mt-0 mt-lg-3'
                aria-labelledby='dropdownMenuPages'
              >
                <div className='d-none d-lg-block'>
                  <div className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center px-0'>
                    {/* <div className='d-inline-block'>
                      <div className='icon icon-shape icon-xs border-radius-md bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center'>
                        
                      </div>
                    </div> */}
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
                    Account
                  </div>
                  <a href='./pages/sign-in.html' className='dropdown-item border-radius-md'>
                    <span className='ps-3'>Sign In</span>
                  </a>
                </div>

                <div className='d-lg-none'>
                  <div className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center px-0'>
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
                    Account
                  </div>
                  <a href='./pages/sign-in.html' className='dropdown-item border-radius-md'>
                    <span className='ps-3'>Sign In</span>
                  </a>
                </div>
              </div>
            </li>

            <li className='nav-item dropdown dropdown-hover mx-2'>
              <a
                className='nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center'
                href='javascript:;'
                id='dropdownMenuBlocks'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Event
              </a>
            </li>

            <li className='nav-item mx-2'>
              <a
                className='nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center'
                href='javascript:;'
                id='dropdownMenuBlocks'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Artikel
              </a>
            </li>

            <li className='nav-item mx-2'>
              <a
                className='nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center'
                href='javascript:;'
                id='dropdownMenuBlocks'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Galeri
              </a>
            </li>

            <li className='nav-item dropdown dropdown-hover mx-2'>
              <a
                className='nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center'
                href='javascript:;'
                id='dropdownMenuDocs'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Docs
                {/* <img src='./assets/img/down-arrow-dark.svg' alt='down-arrow' className='arrow ms-1' /> */}
              </a>
            </li>
            {/* <li className='nav-item ms-lg-auto'>
              <a
                className='nav-link nav-link-icon me-2'
                href='https://github.com/creativetimofficial/soft-ui-design-system'
                target='_blank'
              >
                <i className='fa fa-github me-1' aria-hidden='true'></i>
                <p
                  className='d-inline text-sm z-index-1 font-weight-bold'
                  data-bs-toggle='tooltip'
                  data-bs-placement='bottom'
                >
                  Github
                </p>
              </a>
            </li> */}
            {/* <li className='nav-item my-auto ms-3 ms-lg-0'>
              <a
                href='https://www.creative-tim.com/builder/soft-ui-design-system'
                className='btn btn-sm btn-outline-primary btn-round mb-0 me-1 mt-2 mt-md-0'
              >
                Online Builder
              </a>
            </li> */}
            {/* <li className='nav-item my-auto ms-3 ms-lg-0'>
              <a
                href='https://www.creative-tim.com/product/soft-ui-design-system-pro'
                className='btn btn-sm  bg-gradient-primary  btn-round mb-0 me-1 mt-2 mt-md-0'
              >
                Upgrade to Pro
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
