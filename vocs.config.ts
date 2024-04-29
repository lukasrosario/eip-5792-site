import { defineConfig } from 'vocs'

export default defineConfig({
  theme: {
    colorScheme: 'system',
    variables: {
      color: {
        textAccent: { light: '#2394ff', dark: '#e9e9ea' },
        backgroundDark: {light: '#ebeaee', dark: 'black'},
        background: {light: '#f6f5f8', dark: 'black'}, //f6f5f8 /ebf1f8
        heading: { light: 'black', dark: '#e9e9ea' },
        text3: { light: 'black', dark: '#e9e9ea' },
        background5: { light: '#dee8ff', dark: '#3c393f' },
      }
    }
  },
  title: 'EIP-5792',
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Example',
      link: '/example',
    },
  ],
})
