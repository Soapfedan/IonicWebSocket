<?php
use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;
include('wsHandler.php');
require 'C:\Users\Federico-PC\vendor\autoload.php';

$server = IoServer::factory(
    new HttpServer(
        new WsServer(
            new WsHandler()
        )
    ), 8080);

$server->run();
/* 

    $server = IoServer::factory(
        new HttpServer(
        new WsHandler()
    ), 8080);

    $server->run(); */