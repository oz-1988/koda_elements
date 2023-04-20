# koda_elements
Web Elements<br>
Web Elements Collection

A creative and modern collection of web elements, including effects, buttons, and other interactive components crafted using HTML, CSS, and JavaScript. This repository offers a variety of reusable components that can be easily integrated into your projects, enhancing their visual appearance and user experience.

<u><b>Table of Contents</b></u>
<li>Web Elements Collection</li>
<li>Table of Contents</li>
<li>Demo</li>
<li>Features</li>
<li>Installation</li>
<li>Customization</li>
<li>Contributing</li>
<li>License</li>
<br>
<br>
<b>Demo</b><br>
Experience the interactive live demo:
<meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Word Roulette</title>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=K2D&display=swap">
                        <style>
                            body {
                                font-family: 'K2D', sans-serif;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            height: 100vh;
                            margin: 0;
         }
                            h1 {
                                text-align: center;
                            margin-bottom: 30px;
        }
                            #word-container {
                                display: inline-flex;
                            align-items: center;
                            font-size: 57px;
                            color: white;
                            overflow: hidden;
                            position: relative;
        }
                            #adjective, #noun {
                                display: inline-block;
                            white-space: nowrap;
                            margin-right: 10px;
                            padding: 5px 0;
        }
                            #adjective {
                                color: orange;
                            margin-right: 20px;
        }
                            #noun {
                                border: 2px solid #00686d;
                            border-radius: 20px;
                            padding: 5px 10px;
                            color: #00686d;
        }
                        </style>
                    </head>
                    <body>
                        <div id="content">
                            <div id="word-container">
                                <span id="adjective">Innovative</span>
                                <span id="noun">Design</span>
                            </div>
                        </div>

                        <script>
                            const adjectives = [
                            "Innovative", "Cutting-Edge", "Efficient", "Streamlined", "Responsive", "User-Friendly", "Scalable", "Robust", "Versatile", "Tailored", "Secure", "Reliable", "High-Performance", "Modern", "Advanced", "Smart", "Intuitive", "Agile", "Interactive", "Seamless"
                            ];

                            const nouns = [
                            "Design", "Code", "Website", "App", "Automation", "Bot", "Interface", "Solution", "Integration", "Platform", "Strategy", "Process", "Technology", "Analytics", "E-commerce", "Optimization", "CMS", "Workflow", "Infrastructure", "Support"
                            ];

                            let cycleCount = 0;

                            function generateWords() {
            const adjectiveElement = document.getElementById("adjective");
                            const nounElement = document.getElementById("noun");

            const slotMachineEffect = (element, words, callback) => {
                const wordCount = words.length;
                            const duration = 200;
                            const startTime = performance.now();

                const animate = (currentTime) => {
                    const timePassed = currentTime - startTime;
                            const progress = Math.min(timePassed / duration, 1);

                            const randomIndex = Math.floor(Math.random() * wordCount);
                            element.textContent = words[randomIndex];

                            if (progress < 1) {
                                requestAnimationFrame(animate);
                    } else {
                                callback();
                    }
                };

                            requestAnimationFrame(animate);
            };

            const newAdjectives = adjectives.filter(word => word !== adjectiveElement.textContent);
            const newNouns = nouns.filter(word => word !== nounElement.textContent);

                            slotMachineEffect(adjectiveElement, newAdjectives, () => {
setTimeout(() => {
slotMachineEffect(nounElement, newNouns, () => {
cycleCount++;
    if (cycleCount === 4) {
        cycleCount = 0;
        adjectiveElement.textContent = "Automation";
        nounElement.textContent = "Made Simple";
        setTimeout(generateWords, 2000);
    } else {
        setTimeout(generateWords, 1200);
    }
});
}, 100);
                            });
    }

    generateWords();
</script><br>
<br>
<b>Features</b><br>
<li>Stunning web elements for different use-cases</li>
<li>Fully responsive and mobile-friendly</li>
<li>Easy to integrate into your projects</li>
<li>Highly customizable</li>
<li>Lightweight and performant</li>
<li>No dependencies</li><br>

<b>Installation</b><br>
To use these web elements in your project, simply clone the repository or download the latest release:
<pre><code>git clone https://github.com/your_username/web-elements-collection.git</code></pre> 
Alternatively, download the ZIP file from here and extract the contents.

<b>Customization</b><br>
All web elements are designed to be easily customizable. You can modify the appearance, animation, and other properties by editing the CSS and JavaScript codes. Look for the relevant variables, classes, or styles and adjust them as needed to fit your design.

<b>Contributing</b><br>
Contributions are always welcome! If you have an idea for a new web element or want to improve an existing one, feel free to create a pull request or open an issue.

<b>License</b><br>
This project is licensed under the MIT License. Please make sure to read and understand the terms before using these web elements in your projects.
