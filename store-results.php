<?php
// store-results.php

header('Content-Type: application/json');

// Get the JSON data
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate the data
if (!isset($data['level']) || !isset($data['score'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid data']);
    exit;
}

// Clean and escape the data for CSV
function cleanForCSV($str) {
    // Remove any commas and quotes
    $str = str_replace(array(',', '"'), ' ', $str);
    // Remove newlines
    $str = str_replace(array("\r", "\n"), ' ', $str);
    return $str;
}

// Format answers for CSV
$answers = $data['answers'];
// Remove newlines and commas from answers
$answers = str_replace(array("\r", "\n", ","), " ", $answers);
// Wrap in quotes to preserve any spaces
$answers = '"' . $answers . '"';

// Prepare the data line
$dataLine = implode(',', [
    date('Y-m-d H:i:s'),
    cleanForCSV($data['name']),
    cleanForCSV($data['email']),
    cleanForCSV($data['level']),
    $data['score'],
    $answers
]) . "\n";

// Store in CSV file
$file = 'results/survey_results.csv';
$directory = dirname($file);

// Create directory if it doesn't exist
if (!file_exists($directory)) {
    mkdir($directory, 0777, true);
}

// Create file with headers if it doesn't exist
if (!file_exists($file)) {
    $headers = "Timestamp,Name,Email,Level,Score,Answers\n";
    file_put_contents($file, $headers);
}

// Append the data
if (file_put_contents($file, $dataLine, FILE_APPEND | LOCK_EX)) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Could not save data']);
}
?>