import React from 'react';

export default function index() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-gradient-dark z-index-3 py-3'>
      <div className='container'>
        <a
          className='navbar-brand text-white'
          href='https://demos.creative-tim.com/soft-ui-design-system/presentation.html'
          rel='tooltip'
          title='Designed and Coded by Creative Tim'
          data-placement='bottom'
          target='_blank'
        >
          Soft UI Design System
        </a>
        <a
          href='https://www.creative-tim.com/product/soft-ui-design-system-pro#pricingCard'
          className='btn btn-sm  bg-gradient-primary  btn-round mb-0 ms-auto d-lg-none d-block'
        >
          Buy Now
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
        <div className='collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0' id='navigation'>
          <ul className='navbar-nav navbar-nav-hover mx-auto'>
            <li className='nav-item mx-2'>
              <a
                className='nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center'
                role='button'
              >
                Pages
                <svg height='7' viewBox='0 0 10 7' width='10' xmlns='http://www.w3.org/2000/svg' className='ms-1'>
                  <path
                    d='m7.91769231.99461539-3.30230769 3.30230769-3.3023077-3.30230769c-.30182991-.29151709-.78160367-.28734798-1.07832198.00937032-.2967183.29671831-.30088741.77649207-.00937032 1.07832198l3.84615384 3.84615385c.3003845.3002938.78730781.3002938 1.08769231 0l3.84615385-3.84615385c.1999666-.19313421.28016353-.47913684.20976704-.74808255-.07039649-.26894572-.28043108-.47898031-.5493768-.5493768-.26894571-.07039649-.55494834.00980044-.74808255.20976705z'
                    fill='#fff'
                  />
                </svg>
              </a>
            </li>

            <li className='nav-item mx-2'>
              <a
                className='nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center'
                role='button'
              >
                Account
                <svg height='7' viewBox='0 0 10 7' width='10' xmlns='http://www.w3.org/2000/svg' className='ms-1'>
                  <path
                    d='m7.91769231.99461539-3.30230769 3.30230769-3.3023077-3.30230769c-.30182991-.29151709-.78160367-.28734798-1.07832198.00937032-.2967183.29671831-.30088741.77649207-.00937032 1.07832198l3.84615384 3.84615385c.3003845.3002938.78730781.3002938 1.08769231 0l3.84615385-3.84615385c.1999666-.19313421.28016353-.47913684.20976704-.74808255-.07039649-.26894572-.28043108-.47898031-.5493768-.5493768-.26894571-.07039649-.55494834.00980044-.74808255.20976705z'
                    fill='#fff'
                  />
                </svg>
              </a>
            </li>
            <li className='nav-item mx-2'>
              <a
                className='nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center'
                role='button'
              >
                Blocks
                <img src='../../../assets/img/down-arrow-white.svg' alt='down-arrow' className='arrow ms-1' />
              </a>
            </li>

            <li className='nav-item dropdown dropdown-hover mx-2'>
              <a
                className='nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center'
                role='button'
              >
                Docs
                <img src='../../assets/img/down-arrow-white.svg' alt='down-arrow' className='arrow ms-1' />
              </a>
            </li>
          </ul>

          <ul className='navbar-nav d-lg-block d-none'>
            <li className='nav-item'>
              <a
                href='https://www.creative-tim.com/product/soft-ui-design-system-pro#pricingCard'
                className='btn btn-sm  bg-gradient-primary  btn-round mb-0 me-1'
                role='button'
              >
                Buy Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
