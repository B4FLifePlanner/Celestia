const apiKey = 'AIzaSyDAYJe49Q_BMSp9AnIis9OUqzX7i9Sik0o'; // Replace with your actual API key

const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

const data = {
  contents: [
    {
      parts: [
        { text: 'Explain how AI works' }
      ]
    }
  ]
};

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
};

fetch(url, {
  ...options,
  params: {
    key: apiKey
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));