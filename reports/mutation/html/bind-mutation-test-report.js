document.querySelector('mutation-test-report-app').report = {"files":{"/mnt/c/Users/rfrei/t_git_clones/project-react-test-library/sd-05-block15-project-react-testing-library/src/components/About.js":{"language":"javascript","mutants":[{"id":"1","location":{"end":{"column":30,"line":6},"start":{"column":21,"line":6}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Killed"},{"id":"0","location":{"end":{"column":18,"line":6},"start":{"column":10,"line":6}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Killed"},{"id":"2","location":{"end":{"column":113,"line":12},"start":{"column":14,"line":12}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Killed"}],"source":"import React from 'react';\nimport './about.css';\n\nconst About = () => (\n  <section>\n    <h2>{`About ` + `Pokédex`}</h2>\n    <section>\n      <p>This application simulates a Pokédex, a digital encliclopedia containing all Pokémons </p>\n      <p>One can filter Pokémons by type, and see more details for each one of them</p>\n      <img\n        className=\"pokedex-image\"\n        src={`https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png`}\n        alt=\"Pokédex\"\n      />\n    </section>\n  </section>\n);\n\nexport default About;\n"}},"schemaVersion":"1.0","thresholds":{"high":80,"low":60,"break":null}};