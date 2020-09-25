// function to generate markdown for README
function generateMarkdown(data) {
  // Initialize all variables
  var tableOfContents = "## Table Of Contents"
  var installation = "";
  var usage = "";
  var license = "";
  var licenseBadge = "";
  var contribution = "";
  var test = "";
  var questions = "";

  if(data.installation)
  {
    installation = `## Installation
${data.installation}`
    tableOfContents += `
* [Installation](#installation)`;
  }

  if(data.usage)
  {
    usage = `## Usage
${data.usage}`
    tableOfContents += `
* [Usage](#usage)`;
  }

  if(data.license !== "")
  {
    license = `## License
Licensed under the ${data.license} license.`;
    tableOfContents += `
* [License](#license)`
    if(data.license === 'GPLv3')
    {
      licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    }
    else
    {
      licenseBadge = `[![License: ${data.license}](https://img.shields.io/badge/License-${data.license.replace(" ", "%20")}-blue.svg)](https://wwww.opensource.org/licenses/${data.license.replace(" ", "-")})`;
    }
  }

  if(data.contribution)
  {
    contribution = `## Contribution
${data.contribution}`;
    tableOfContents += `
* [Contribution](#contribution)`
  }

  if(data.test)
  {
    test = `## Test
${data.test}`;
    tableOfContents += `
* [Test](#test)`;
  }

  if(data.github || data.email)
  {
    tableOfContents += `
* [Questions](#questions)`;
    questions = `## Questions
`
    if(data.github)
    {
      questions += `Where to get more information on my other projects?

https://github.com/${data.github}

`;
    }
    if(data.email)
    {
      questions += `How to reach me with additional questions?

${data.email}

`;
    }
  }
  return `# ${data.title}
${licenseBadge}
## Description
${data.description}

${tableOfContents}

${installation}

${usage}

${license}

${contribution}

${test}

${questions}
`;
}

module.exports = generateMarkdown;