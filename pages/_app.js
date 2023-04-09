import Head from 'next/head';
import '../assets/css/nucleo-icons.css';
import '../assets/css/nucleo-svg.css';
import '../assets/css/soft-design-system.css';
// import '../styles/soft-design-system.css.map';
import '../assets/css/soft-design-system.min.css';
// import '../assets/js/core/popper.min';
// import '../assets/js/core/bootstrap.min';
// import

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <!--     Fonts and icons     --> */}
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' rel='stylesheet' />

        {/* <!-- Nucleo Icons --> */}
        <link href='./assets/css/nucleo-icons.css' rel='stylesheet' />
        <link href='./assets/css/nucleo-svg.css' rel='stylesheet' />

        {/* <!-- Font Awesome Icons --> */}
        <script src='https://kit.fontawesome.com/42d5adcbca.js' crossorigin='anonymous'></script>
        <link href='./assets/css/nucleo-svg.css' rel='stylesheet' />

        {/* <!-- CSS Files --> */}
        <link id='pagestyle' href='./assets/css/soft-design-system.css?v=1.0.9' rel='stylesheet' />

        {/* <!-- Nucleo Icons --> */}
        <link
          href='https://unpkg.com/soft-ui-design-system@1.0.4/assets/css/soft-design-system.min.css'
          rel='stylesheet'
        />
      </Head>
      <Component {...pageProps} />

      {/* <!--   Core JS Files   --> */}
      <script src='../assets/js/core/popper.min.js' type='text/javascript'></script>
      <script src='../assets/js/core/bootstrap.min.js' type='text/javascript'></script>
      <script src='../assets/js/plugins/perfect-scrollbar.min.js'></script>

      {/* <!--  Plugin for TypedJS, full documentation here: https://github.com/inorganik/CountUp.js --> */}
      <script src='../assets/js/plugins/countup.min.js'></script>

      <script src='../assets/js/plugins/choices.min.js'></script>

      <script src='../assets/js/plugins/prism.min.js'></script>
      <script src='../assets/js/plugins/highlight.min.js'></script>

      {/* <!--  Plugin for Parallax, full documentation here: https://github.com/dixonandmoe/rellax --> */}
      <script src='../assets/js/plugins/rellax.min.js'></script>
      {/* <!--  Plugin for TiltJS, full documentation here: https://gijsroge.github.io/tilt.js/ --> */}
      <script src='../assets/js/plugins/tilt.min.js'></script>
      {/* <!--  Plugin for Selectpicker - ChoicesJS, full documentation here: https://github.com/jshjohnson/Choices --> */}
      <script src='./assets/js/plugins/choices.min.js'></script>

      {/* <!--  Plugin for Parallax, full documentation here: https://github.com/wagerfield/parallax  --> */}
      <script src='../assets/js/plugins/parallax.min.js'></script>

      {/* <!-- Control Center for Soft UI Kit: parallax effects, scripts for the example pages etc --> */}
      {/* <!--  Google Maps Plugin    --> */}

      <script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI'></script>
      <script src='../assets/js/soft-design-system.min.js?v=1.0.9' type='text/javascript'></script>
    </>
  );
}
