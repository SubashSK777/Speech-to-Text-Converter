# Speech to Text Converter

This is a simple speech-to-text converter web application that uses the `SpeechRecognition` API. It allows users to convert spoken words into text displayed on the web page.

## Features

- Start and stop speech recognition with button clicks.
- Display both final and interim speech recognition results.
- User-friendly interface with a microphone and stop button.
- Responsive design with a clean and modern look.

## Technologies Used

- HTML
- CSS
- JavaScript
- `SpeechRecognition` API (or `webkitSpeechRecognition` for older browsers)

## Getting Started

### Prerequisites

To run this application, you need a modern web browser that supports the `SpeechRecognition` API. We recommend using the latest version of Google Chrome or any Chromium-based browser.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/SubashSK777/Speech-to-Text-Converter.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Speech-to-Text-Converter
    ```
3. Open the `index.html` file in your preferred web browser.

### Usage

1. Open the `index.html` file in a supported web browser.
2. Click the microphone button to start speech recognition.
3. Speak into your device's microphone.
4. The recognized text will be displayed in the result area.
5. Click the stop button to stop speech recognition.

### Supported Browsers

- Google Chrome
- Opera (with experimental web platform features enabled)
- Brave
- Other Chromium-based browsers

## Troubleshooting

If you see an alert saying your browser does not support speech recognition, ensure you are using one of the supported browsers and that it is up-to-date. 

For Opera users, enable experimental web platform features:
1. Navigate to `opera://flags`
2. Search for "Experimental Web Platform features"
3. Enable the flag and restart your browser

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
