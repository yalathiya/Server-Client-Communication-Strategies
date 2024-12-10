// Listen for messages from the main thread
self.onmessage = function(event) {
    const largeArray = event.data;

    // Perform sorting
    const sortedArray = largeArray.sort((a, b) => a - b);

    // Send the sorted array back to the main thread
    postMessage(sortedArray);
};
