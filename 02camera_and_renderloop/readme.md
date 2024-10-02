# ThreeJS with Vite Starter Pack
### Prerequisites
Before you start, make sure you have Node.js installed on your machine: (https://nodejs.org/en/download/)

### Installation
Once you've cloned or downloaded this project file to your local machine, navigate to this project directory in your terminal.

Run the following command to install the necessary dependencies:

``` bash
npm install
```
### Running the project
To start the development server, run the following command:

``` bash
npm run dev
```
This will start the server and open your default browser to your localhost. The site will reload automatically as you make changes to your code.

## Use of requestAnimationFrame()

<mark>requestAnimationFrame()</mark>: This method tells the browser that you want to perform an animation and requests that the browser call a specified function to update the animation before the next repaint1.
Callback Function: This is the function you provide to requestAnimationFrame(). The browser will call this function before it repaints the screen. This function is where you update the state of your animation, such as moving an element or changing its properties2.

<mark>Next Repaint</mark>: The browser repaints the screen at regular intervals, typically matching the display’s refresh rate (e.g., 60 times per second). By using requestAnimationFrame(), your animation updates are synchronized with these repaints, resulting in smoother animations1.