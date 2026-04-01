<?php
  header("Access-Control-Allow-Origin: *");
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <button id="get">Get</button>
  <button id="post">Post</button>
  <button id="put">Put</button>
  <button id="delete">Delete</button>

  <!-- script side -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script>

    document.getElementById('get').addEventListener('click', () => {
      $.ajax({
        url: "/getusers",
        type: "GET",
        dataType: "json",
        success: function (data) {
          console.log(data)
        }
      })
    })

    document.getElementById('post').addEventListener('click', () => {
      const users = {
        name:'Mustafa',
        lastname: 'Kaya',
        age:50
      }
      $.ajax({
        url: "/postusers",
        headers:{'X-CSRF-TOKEN':'{{csrf_token()}}'},
        type: "POST",
        data: users,
        dataType: "json",
        success: function (data) {
          console.log(data)
        }
      })
    })

    document.getElementById('put').addEventListener('click', () => {
      $.ajax({
        url: "/putusers",
        headers:{'X-CSRF-TOKEN':'{{csrf_token()}}'},
        type: "PUT",
        data: {id:3},
        dataType: "json",
        success: function (data) {
          console.log(data)
        }
      })
    })

    document.getElementById('delete').addEventListener('click', () => {
      $.ajax({
        url: "/deleteusers",
        headers:{'X-CSRF-TOKEN':'{{csrf_token()}}'},
        type: "DELETE",
        data: {id:4},
        dataType: "json",
        success: function (data) {
          console.log(data)
        }
      })
    })

  </script>
</body>
</html>