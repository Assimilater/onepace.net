<?php
header('Content-Type: application/json; charset=utf-8;');
require_once 'db_context.php';
require_once 'config.php';
require_once 'Authenticator.php';
include_once 'secure_indexer.php';
$context = new db_context();
if(!Authenticator::authenticate($context, $_POST['token'], 4, $user)) {
	http_response_code(400);
} else {
	$episode = $_POST['episode'];
	if($episode['part'] < 1) {
		$episode['part'] = null;
	}
	if($episode['released_date'] == '') {
		$episode['released_date'] = null;
	}
	$context->connect();
	$context->update_episode($episode['id'], $episode);
	$episodes = $context->list_progress_episodes($user);
	$context->disconnect();
	echo json_encode($episodes);
}
?>
