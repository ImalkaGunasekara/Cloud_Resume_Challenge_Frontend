// Replace 'YOUR_API_GATEWAY_URL' with the actual URL of your API Gateway endpoint
const apiUrl = 'https://oxvqittgd2.execute-api.us-east-1.amazonaws.com/dev/example';

async function fetchViewCount() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        document.getElementById('view-counter').textContent = data['body']['views'];
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById('view-counter').textContent = 'Error fetching view count';
    }
}

// Fetch the view count when the page loads
window.onload = fetchViewCount;