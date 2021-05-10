<?php

function json_response($code = 200, $message = null)
{
  header_remove();
  http_response_code($code);
  header("Cache-Control: no-transform,public,max-age=300,s-maxage=900");
  header('Content-Type: application/json');
  $status = [
    200 => '200 OK',
    400 => '400 Bad Request',
    422 => 'Unprocessable Entity',
    500 => '500 Internal Server Error',
  ];
  header('Status: ' . $status[$code]);
  return json_encode([
    'status' => $code < 300,
    'message' => $message,
  ]);
}

$to = 'romanbobrik@tut.by';
$subject = 'romanbobrik.dev contact form';

$data = json_decode(file_get_contents('php://input'), true);

$name = isset($data['name']) ? htmlentities(trim($data['name'])) : '';
$email = isset($data['$email']) ? htmlentities(trim($data['$email'])) : '';
$comment = isset($data['comment']) ? htmlentities(trim($data['comment'])) : '';

if ( strlen($comment) >= 10 ) {
  $body = 'name: ' . $name . "\r\n" . 'email:' . $email . "\r\n" . 'comment:' . $comment;
  if ( mail($to, $subject, $body) ) {
    echo json_response();
  } else {
    echo json_response(500);
  }
} else {
  echo json_response(422);
}
