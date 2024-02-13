# Team Profile Generator

## Overview
The Team Profile Generator is a command-line application that allows users to create a team profile by entering information about team members. The application prompts users to input details such as name, ID, email, and specific information depending on the role of the team member (manager, engineer, or intern). Once all the information is provided, the application generates an HTML file containing the team profile, which includes cards for each team member with their respective details.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install`.

## Usage

1. Open your terminal and navigate to the project directory.
2. Run the application by entering `node index.js`.
3. Follow the prompts to enter information about each team member.

![Terminal](./assets/terminal%20screenshot.PNG)

4. Once all team members are added, choose the option to finish building the team.
5. The application will generate an HTML file in the `output` folder.

![Folder](./assets/folder%20screenshot.PNG)

## preview

![HTML file](./assets/HTML%20screenshot.PNG)

## Technologies Used
- Node.js
- Inquirer.js
- Jest (for testing)

## License
This project is licensed under the [MIT License](LICENSE).

## Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests.
