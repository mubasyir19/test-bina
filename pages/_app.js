import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Icon Tab */}
        <link rel='icon' href='https://www.binaalinsan.id/wp-content/uploads/2023/03/logo-binaalinsan.png' />

        {/* <!--     Fonts and icons     --> */}
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' rel='stylesheet' />

        {/* <!-- Nucleo Icons --> */}
        <link href='/css/nucleo-icons.css' rel='stylesheet' />
        <link href='/css/nucleo-svg.css' rel='stylesheet' />

        {/* <!-- Font Awesome Icons --> */}
        <script src='https://kit.fontawesome.com/42d5adcbca.js' crossorigin='anonymous'></script>
        <link href='/css/nucleo-svg.css' rel='stylesheet' />

        {/* <!-- CSS Files --> */}

        <link id='pagestyle' href='/css/soft-design-system.css?v=1.0.9' rel='stylesheet' />

        {/* <!--   Core JS Files   --> */}
        <script src='/js/core/popper.min.js' type='text/javascript'></script>
        <script src='/js/core/bootstrap.min.js' type='text/javascript'></script>
        <script src='/js/plugins/perfect-scrollbar.min.js'></script>

        {/* <!--  Plugin for TypedJS, full documentation here: https://github.com/inorganik/CountUp.js --> */}
        <script src='/js/plugins/countup.min.js'></script>

        <script src='/js/plugins/choices.min.js'></script>

        <script src='/js/plugins/prism.min.js'></script>
        <script src='/js/plugins/highlight.min.js'></script>

        {/* <!--  Plugin for Parallax, full documentation here: https://github.com/dixonandmoe/rellax --> */}
        <script src='/js/plugins/rellax.min.js'></script>
        {/* <!--  Plugin for TiltJS, full documentation here: https://gijsroge.github.io/tilt.js/ --> */}
        <script src='/js/plugins/tilt.min.js'></script>
        {/* <!--  Plugin for Selectpicker - ChoicesJS, full documentation here: https://github.com/jshjohnson/Choices --> */}
        <script src='/js/plugins/choices.min.js'></script>

        {/* <!--  Plugin for Parallax, full documentation here: https://github.com/wagerfield/parallax  --> */}
        <script src='/js/plugins/parallax.min.js'></script>

        {/* <!-- Control Center for Soft UI Kit: parallax effects, scripts for the example pages etc --> */}
        {/* <!--  Google Maps Plugin    --> */}

        <script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI'></script>
        <script src='/js/soft-design-system.min.js?v=1.0.9' type='text/javascript'></script>

        {/* <script type="text/javascript">
      if (document.getElementById('state1')) {
        const countUp = new CountUp('state1', document.getElementById('state1').getAttribute('countTo'));
        if (!countUp.error) {
          countUp.start();
        } else {
          console.error(countUp.error);
        }
      }
      if (document.getElementById('state2')) {
        const countUp1 = new CountUp('state2', document.getElementById('state2').getAttribute('countTo'));
        if (!countUp1.error) {
          countUp1.start();
        } else {
          console.error(countUp1.error);
        }
      }
      if (document.getElementById('state3')) {
        const countUp2 = new CountUp('state3', document.getElementById('state3').getAttribute('countTo'));
        if (!countUp2.error) {
          countUp2.start();
        } else {
          console.error(countUp2.error);
        }
      }
    </script> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
