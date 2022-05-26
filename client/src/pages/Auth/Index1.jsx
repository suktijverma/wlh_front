import React from 'react'

const Index1 = () => {
  return (
    <div>
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    {/* <!-- Bootstrap CSS --> */}
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    />

    {/* <!-- Bootstrap JS --> */}
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>

    {/* <!-- My JS --> */}
    <script src="Main1.js"></script>

    {/* <!-- My CSS --> */}
    <link rel="stylesheet" href="style1.css" />

    {/* <!-- Font Awesome --> */}
    <script src="https://kit.fontawesome.com/996973c893.js"></script>

    {/* <!-- Google Font --> */}
    <link
      href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
      rel="stylesheet"
    />

    <title>Pomodoro App</title>
  </head>
  <body onload="template()">
    <div class="container">
      {/* <!-- Heading --> */}
      <h1 class="text-center my-5 heading">Pomodoro App</h1>

      {/* <!-- Main Timer --> */}
      <div class="container timer">
        <div class="row">
          <div class="col-5">
            <h4 id="minutes"></h4>
          </div>
          <div class="col-2">
            <h4>:</h4>
          </div>
          <div class="col-5">
            <h4 id="seconds"></h4>
          </div>
        </div>
      </div>

      {/* <!-- Finished Message --> */}
      <div class="my-5">
        <h3 id="done" class="text-center"></h3>
      </div>

      {/* <!-- Start Button and reset button--> */}
      <div class="conatiner d-flex justify-content-center my-5">
        <button class="btn" onclick="start_timer()">
          <i class="fas fa-play fa-2x"></i>
        </button>
        <a href="index.html"><i class="fas fa-redo-alt fa-2x"></i></a>
      </div>
    </div>
  </body></div>
  )
}

export default Index1;