<?php
	define('REQUIRE_PATH', $_SERVER['DOCUMENT_ROOT']);
	define('HOME', 'http://' . $_SERVER['SERVER_NAME']);

	$getUrl = strip_tags(trim(filter_input(INPUT_GET, 'url', FILTER_DEFAULT)));
	$setUrl = (empty($getUrl) ? 'index' : $getUrl);
	$Url = explode('/', $setUrl);

    // if(empty($Url[0]) || $Url[0] == 'index'){
    //     header("Location:". HOME .'/login');
    // } else if(!file_exists(REQUIRE_PATH . '/' . $Url[0]) && empty($Url[1])){
    //     require(REQUIRE_PATH . '/' . $Url[0] . '.php');
    // }else if (file_exists(REQUIRE_PATH . '/' . $Url[0] . '/' . $Url[1] . '.php')) {
    //     require(REQUIRE_PATH . '/' . $Url[0] . '/' . $Url[1] . '.php');
    // }else {
    //     header("Location:". HOME .'/login');
    // }
