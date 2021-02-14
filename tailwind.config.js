module.exports = {
  purge: [
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'ssm': '480px',
      'sm':	"640px",
      'md':	'768px',
      'lg':	'1024px',	
      'xl':	'1280px',
      '2xl':	'1536px',
    },
    extend: {
      padding: {
        '1/20': '5%',
        '1/10': '10%',
        '1/4': '25%',
        '3/10': '30%',
        '2/5': '40%',
        '1/2': '50%',
        '3/5': '60%',
        '3/4': '75%',
        '4/5': '80%',
        '9/10': '90%',
        'full': '100%',
      },
      margin: {
        '1/20': '5%',
        '1/10': '10%',
        '1/5': '20%',
        '1/4': '25%',
        '3/10': '30%',
        '2/5': '40%',
        '1/2': '50%',
        '3/5': '60%',
        '3/4': '75%',
        '4/5': '80%',
        '9/10': '90%',
        'full': '100%',
      },
      keyframes: {
        ripple: {
        '0%' : {
          boxShadow: '0 4px 10px rgba(102, 102, 102, 0.1), 0 0 0 0 rgba(102, 102, 102, 0.1), 0 0 0 5px rgba(102, 102, 102, 0.1), 0 0 0 10px rgba(102, 102, 102, 0.1);' },
        '100%': {
          boxShadow: '0 4px 10px rgba(102, 102, 102, 0.1), 0 0 0 5px rgba(102, 102, 102, 0.1), 0 0 0 10px rgba(102, 102, 102, 0.1), 0 0 0 20px rgba(102, 102, 102, 0);'},
        },
        in: {
          '0%':{ transform: 'translateX(-50%)', opacity: '0'},
          '100%': { transform: 'translateX(0)', opacity: '1'},
        },
        out: {
          '0%':{ transform: 'translateX(0)', opacity: '1'},
          '100%': { transform: 'translateX(-50%)', opacity: '0'},
        },
        up: {
          '0%': {transform: 'translateY(-50%)', opacity: '0'},
          '100%': {transform: 'translateY(0%)', opacity: '1'},
        }
      },
      animation: {
        ripple: 'ripple 1s ease-in-out infinite',
        in: 'in 1s ease-in-out forwards',
        out: 'out 1s ease-in-out forwards',
        up: 'up 1s ease-in-ou forwards',  
      }
    },
    maxHeight: {
      '0': '0',
      '1/4': '25vh',
      '2/5': '40vh',
      '1/2': '50vh',
      '3/5': '60vh',
      '3/4': '75vh',
      '4/5': '80vh',
      '9/10': '90vh',
      'full': '100vh',
      'screen':'100%',
    },
    maxWidth: {
      '1/4': '25vw',
      '2/5': '40vw',
      '1/2': '50vw',
      '3/5': '60vw',
      '13/20': '65vw',
      '7/10': '70vw',
      '3/4': '75vw',
      '4/5': '80vw',
      '9/10': '90vw',
      'screen':'100%',
      'full': '100vw',
    },
    minWidth: {
      '1/5': '20vw',
      '1/4': '25vw',
      '2/5': '40vw',
      '1/2': '50vw',
      '3/5': '60vw',
      '13/20': '65vw',
      '7/10': '70vw',
      '3/4': '75vw',
      '4/5': '80vw',
      '9/10': '90vw',
      'screen':'100%',
      'full': '100vw',
    },
    minHeight: {
      '0': '0',
      '1/5': '20vh',
      '1/4': '25vh',
      '2/5': '40vh',
      '1/2': '50vh',
      '3/5': '60vh',
      '3/4': '75vh',
      '4/5': '80vh',
      '9/10': '90vh',
      'full': '100vh',
      'screen':'100%',
    },
    fontFamily: {
      sans: ['Ubuntu', 'sans-serif'],
      serif: ['Frank Ruhl Libre', 'serif'],
    },
  },
  variants: {
    mixBlendMode: ['responsive'],
    backgroundBlendMode: ['responsive'],
    isolation: ['responsive'],
    extend: {
      animation: ['hover', 'focus', 'group-hover'],
      inset: ['hover', 'focus', 'group-hover'],
    },
  },
  plugins: [
    require('tailwindcss-blend-mode')(),
  ],
}
