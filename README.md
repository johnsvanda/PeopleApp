PeopleApp

Environment:

- react
- redux
- react-hook-form
- css flex

SPA should have two tabs.

First tab "Personal Info" contains

1. two text inputs:

- first name
- last name

2. one selector:

- occupation

3. button "Save"

Second tab "Skills" contains:

1. one text input:

- skill

2. button "+" (just near first input) (button "-" near second and other inputs)
3. button "Save"

Before rendering tabs need to get list of occupations (in real application for it back end API is used but for test app use predefined list of occupations) and save it Redux store. Response must have following structure:
[{
code: "PRESIDENT",
name: "President"
}, {
code: "PHILANTHROPIST",
name: "Bill Gates"
}, {
code: "ASTRONAUT",
name: "Astronaut"
}, {
code: "JOCKEY",
name: "Jockey"
}]

Render tabs when data will be in the store. By default "Personal Info" tab is chosen.

- Use occupations from Redux store to add options in selector.
- First Name and Last Name are required (validation is needed)
  On click on "Save" button validate required fields and show errors if needed. Otherwise emulate sending request to server. Request must have following structure:
  {
  firstName: <firstName>,
  lastName: <lastName>,
  occupation: <occupation code>
  }
  Print it on page (under "Save" button) or in console.

On tab "Skills" should be possible to add any count of your skills.
By clicking on "+" button need to add one more text input with "-" button. On click on "-" button need to remove input and button. New input field must be added in the end of the list.
On click on "Save" button emulate sending data to server. Request must have following structure:
["Skill1", "Skill2", "Skill3"...]
Skip empty skills before sending data.
Print request on page (under "Save" button) or in console.

Use CSS flex to position elements on the page.

Cover functionality with unit tests.
