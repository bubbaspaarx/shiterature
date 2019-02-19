# Shiterature: Putting The AI in Haikus
Welcome to the best and most hilarious random haiku generator in the world!

[pic of app working]

## Description
Lucy and Ed made this small app to showcase GIF fetches, webkit Speech Recognition, and human creativity.

## How to use
You will be shown three ranndomly-selected GIFs in a row. Your job is to describe each GIF (using language as flowery or poetic or stark or ludicrous as you like) with a break between each GIF. When you click 'Finished!', your poem will appear on the screen.

## Tech details
The app is made in React with no backend.

The HTML5 Speech Recognition API gives Javascript access to a browser's audio stream and converts it into text. Currently, this is only supported on Firefox and Chrome.

The GIFs are taken from the Giphy API.

## Accessibility
If you would like to make changes to this and input your poem in a different language, we recommend forking, cloning and changing the code to specify a language parameter with `whateverYouCalledYourSpeechVariable.lang`. For example, we've called ours `speech` so it looks like this: `speech.lang = "en-GB"`, as the default language is `en-US` but we weren't about that. At the moment, [40 languages are supported](https://ourcodeworld.com/articles/read/362/getting-started-with-the-speech-recognition-api-in-javascript).
