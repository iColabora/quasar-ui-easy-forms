
const description = `This is a more advanced example so you can see the full power of EasyForms.`

export const exampleForms = [
  {
    columnCount: 4,
    schema: [
      {
        fieldType: 'space',
        span: 3,
      },
      {
        fieldType: 'title',
        span: 1,
        label: 'Example fieldType:',
      },
      {
        id: 'name',
        span: 3,
        fieldType: 'input',
        valueType: 'string',
        label: 'Superhero name',
        subLabel: 'Think of something cool.',
        required: true,
      },
      {
        id: 'md-input',
        fieldType: 'markdown',
        span: 1,
        src: '```js\n{fieldType: \'input\'}\n```',
      },
      {
        id: 'powerOrigin',
        span: 3,
        fieldType: 'btn-toggle',
        label: 'Power origin',
        subLabel: 'Where does your power come from?',
        options: [
          {label: 'Mutation', value: 'mutation'},
          {label: 'Self taught', value: 'self'},
          {label: 'By item', value: 'item'},
        ],
      },
      {
        id: 'md-btn-toggle',
        fieldType: 'markdown',
        span: 1,
        src: '```js\n{fieldType: \'btn-toggle\'}\n```',
      },
      {
        id: 'stamina',
        span: 3,
        fieldType: 'slider',
        valueType: 'number',
        label: 'Stamina',
        min: 0,
        max: 100,
        default: 50,
      },
      {
        id: 'md-slider',
        fieldType: 'markdown',
        span: 1,
        src: '```js\n{fieldType: \'slider\'}\n```',
      },
      {
        id: 'power',
        span: 3,
        fieldType: 'input',
        valueType: 'number',
        label: 'Power',
        subLabel: 'Fill in a number.',
      },
      {
        id: 'md-input-nr',
        fieldType: 'markdown',
        span: 1,
        src: '```js\n{fieldType: \'input\'}\n```\n↳ But the input is saved as a number instead of a string.',
      },
      {
        id: 'roleModel',
        span: 3,
        fieldType: 'select',
        valueType: 'object',
        label: 'Role model',
        subLabel: 'Who do you look up to?',
        options: [
          {label: 'Steve Rogers/Captain America', value: 'captain-america'},
          {label: 'Tony Stark/Iron Man', value: 'iron-man'},
          {label: 'Thor Odinson', value: 'thor-odinson'},
          {label: 'Bruce Banner/The Incredible Hulk', value: 'the-incredible-hulk'},
          {label: 'Natasha Romanoff/Black Widow', value: 'black-widow'},
          {label: 'Clint Barton/Hawkeye', value: 'hawkeye'},
          {label: 'Pietro Maximoff/Quicksilver', value: 'quicksilver'},
          {label: 'Wanda Maximoff/Scarlet Witch', value: 'scarlet-witch'},
          {label: 'The Vision', value: 'the-vision'},
          {label: 'James Rhodes/War Machine (Iron Patriot)', value: 'war-machine'},
          {label: 'Sam Wilson/Falcon', value: 'falcon'},
          {label: 'Bucky Barnes/The Winter Soldier (White Wolf)', value: 'the-winter-soldier'},
          {label: 'T\'Challa/Black Panther', value: 'black-panther'},
          {label: 'Stephen Strange/Doctor Strange', value: 'doctor-strange'},
          {label: 'Peter Parker/Spider-Man', value: 'spider-man'},
          {label: 'Scott Lang/Ant-Man (Giant-Man)', value: 'ant-man'},
          {label: 'Hope van Dyne/Wasp', value: 'wasp'},
          {label: 'Carol Danvers/Captain Marvel', value: 'captain-marvel'},
          {label: 'Peter Quill/Star-Lord', value: 'star-lord'},
          {label: 'Gamora', value: 'gamora'},
          {label: 'Drax the Destroyer', value: 'drax-the-destroyer'},
          {label: 'Rocket (Raccoon)', value: 'rocket-raccoon'},
          {label: '(Baby, Teenage) Groot', value: 'groot'},
          {label: 'Mantis', value: 'mantis'},
          {label: 'Matthew Murdock/Daredevil', value: 'daredevil'},
          {label: 'Jessica Jones (Jewel)', value: 'jessica-jones'},
          {label: 'Carl Lucas/Luke Cage (Power Man)', value: 'luke-cage'},
          {label: 'Danny Rand/Iron Fist', value: 'iron-fist'},
          {label: 'Frank Castle/The Punisher', value: 'the-punisher'},
        ],
      },
      {
        id: 'md-select',
        fieldType: 'markdown',
        span: 1,
        src: '```js\n{fieldType: \'select\'}\n```',
      },
      {
        id: 'consent',
        span: 3,
        label: 'Do you agree with our terms.',
        fieldType: 'toggle',
        valueType: 'boolean',
      },
      {
        id: 'md-toggle',
        fieldType: 'markdown',
        span: 1,
        src: '```js\n{fieldType: \'toggle\'}\n```',
      },
      {
        id: 'submissionDate',
        span: 3,
        label: 'Date of submission',
        fieldType: 'input-date',
        valueType: 'date',
      },
      {
        id: 'md-input-date',
        fieldType: 'markdown',
        span: 1,
        src: '```js\n{fieldType: \'input-date\'}\n```',
      },
    ]
  }
]

export const pageForm = {
  mode: 'edit',
  actionButtons: [],
  schema: [
    {
      fieldType: 'markdown',
      src: description,
    },
  ]
}

export default {
  exampleForms,
  pageForm,
}
