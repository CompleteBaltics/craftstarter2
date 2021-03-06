/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.

|-------------------------------------------------------------------------------
| The default config
|-------------------------------------------------------------------------------
|
| This variable contains the default Tailwind config. You don't have
| to use it, but it can sometimes be helpful to have available. For
| example, you may choose to merge your custom configuration
| values with some of the Tailwind defaults.
|
*/

let defaultConfig = require('tailwindcss/defaultConfig')

/*
|-------------------------------------------------------------------------------
| Colors                                    https://tailwindcss.com/docs/colors
|-------------------------------------------------------------------------------
|
| Here you can specify the colors used in your project. To get you started,
| we've provided a generous palette of great looking colors that are perfect
| for prototyping, but don't hesitate to change them for your project. You
| own these colors, nothing will break if you change everything about them.
|
| We've used literal color names ("red", "blue", etc.) for the default
| palette, but if you'd rather use functional names like "primary" and
| "secondary", or even a numeric scale like "100" and "200", go for it.
|
*/

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    /*
    |-----------------------------------------------------------------------------
    | Colors                                  https://tailwindcss.com/docs/colors
    |-----------------------------------------------------------------------------
    |
    | The color palette defined above is also assigned to the "colors" key of
    | your Tailwind config. This makes it easy to access them in your CSS
    | using Tailwind's config helper. For example:
    |
    | .error { color: theme('colors.red') }
    |
    */

  	colors: {
      'primary': 'var(--primary-color)',
      'secondary': 'var(--secondary-color)',
      'accent': 'var(--accent-color)',
      'header': 'var(--header-color)',
      'text': 'var(--text-color)',
      'pale': '#edeade',
      // 'pale-light': '#f2f1e8',
			'blue': '#053047',
      'off-white': '#f2efe7',
      'brown-grey': '#686469',
      'light-peach': '#dbd6cd',
      'lighter-peach': '#ebe7df',
      'warm-purple': '#9e3095',
      'warm-purple-light': '#632473',
      'grape-purple': '#431e61',
      'transparent': 'transparent',

      'black': '#000000',
      'black-faded': '#232120',
      'black-darker': '#363534',
      'grey-dark': '#757575', // AA compliant version of grey
      'grey': '#9a9a9a',
      'grey-lighter': '#dcdcdc',
      'light-grey': '#f4f4f4',
      // 'light-grey-two': '#f9f9f5',
      'brownish-grey': '#686868',
      'brownish-grey-light': '#cccbc8',
      // 'purple-brown': '#4d353b',
      'purplish-grey': '#686469',
      'pinkish-grey': '#ccc4b6',
      'white': '#ffffff',
      'error': '#bd3030',
      // Norwegian Reward
      'nr-red': '#D81939',
      'nr-blue': '#003D50'
    },

    /*
    |-----------------------------------------------------------------------------
    | Screens                      https://tailwindcss.com/docs/responsive-design
    |-----------------------------------------------------------------------------
    |
    | Screens in Tailwind are translated to CSS media queries. They define the
    | responsive breakpoints for your project. By default Tailwind takes a
    | "mobile first" approach, where each screen size represents a minimum
    | viewport width. Feel free to have as few or as many screens as you
    | want, naming them in whatever way you'd prefer for your project.
    |
    | Tailwind also allows for more complex screen definitions, which can be
    | useful in certain situations. Be sure to see the full responsive
    | documentation for a complete list of options.
    |
    | Class name: .{screen}:{utility}
    |
    */

  	screens: {
  		'small': '576px',
  		'medium': '768px',
  		'large': '992px',
  		'xlarge': '1200px',
  		'xxlarge': '1600px',
  		'xxxlarge': '1921px'
  	},

    /*
    |-----------------------------------------------------------------------------
    | Fonts                                    https://tailwindcss.com/docs/fonts
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your project's font stack, or font families.
    | Keep in mind that Tailwind doesn't actually load any fonts for you.
    | If you're using custom fonts you'll need to import them prior to
    | defining them here.
    |
    | By default we provide a native font stack that works remarkably well on
    | any device or OS you're using, since it just uses the default fonts
    | provided by the platform.
    |
    | Class name: .font-{name}
    | CSS property: font-family
    |
    */

  	fontFamily: {
  		'header': 'var(--font-header)',
  		'primary': 'var(--font-body)'
  	},

    /*
    |-----------------------------------------------------------------------------
    | Text sizes                         https://tailwindcss.com/docs/text-sizing
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your text sizes. Name these in whatever way
    | makes the most sense to you. We use size names by default, but
    | you're welcome to use a numeric scale or even something else
    | entirely.
    |
    | By default Tailwind uses the "rem" unit type for most measurements.
    | This allows you to set a root font size which all other sizes are
    | then based on. That said, you are free to use whatever units you
    | prefer, be it rems, ems, pixels or other.
    |
    | Class name: .text-{size}
    | CSS property: font-size
    |
    */

    fontSize: {
      'base': '16px',       // 1rem
      'xxsmall': '0.75rem', // 12px
      'xsmall': '0.875rem', // 14px
			'xsmall': '0.875rem', // 14px
			'xsmallm': '0.9375rem', // 15px
      'small': '1.25rem',   // 20px
      'smedium': '1.375rem', // 22px
      'medium': '1.5rem',   // 24px
      'large': '1.875rem',  // 30px
      'xlarge': '2.5rem',   // 40px
      'xxlarge': '3rem', // 55px
      'xxxlarge': '3.75rem', // 60px
      'ultralarge': '12.5rem', // 200px
  		// 'xl': '1.25rem',    // 20px
  		// 'h1': '1.5rem',    // 24px
  		// 'h2': '1.875rem',  // 30px
  		// 'h3': '2.25rem',   // 36px
  		// 'h4': '3rem',      // 48px
  		// 'h5': '3rem',      // 48px
  		// 'h6': '3rem'      // 48px
  	},

    /*
    |-----------------------------------------------------------------------------
    | Font weights                       https://tailwindcss.com/docs/font-weight
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your font weights. We've provided a list of
    | common font weight names with their respective numeric scale values
    | to get you started. It's unlikely that your project will require
    | all of these, so we recommend removing those you don't need.
    |
    | Class name: .font-{weight}
    | CSS property: font-weight
    |
    */

  	fontWeight: {
  		'light': 300,
			'normal': 400,
      'semi-bold': 600,
  		'bold': 700
  	},

    /*
    |-----------------------------------------------------------------------------
    | Leading (line height)              https://tailwindcss.com/docs/line-height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your line height values, or as we call
    | them in Tailwind, leadings.
    |
    | Class name: .leading-{size}
    | CSS property: line-height
    |
    */

    lineHeight: {
      'none': 1,
      'tight': 1.25,
      'normal': 1.5,
      'loose': 2,
    },

    /*
    |-----------------------------------------------------------------------------
    | Tracking (letter spacing)       https://tailwindcss.com/docs/letter-spacing
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your letter spacing values, or as we call
    | them in Tailwind, tracking.
    |
    | Class name: .tracking-{size}
    | CSS property: letter-spacing
    |
    */

    letterSpacing: {
      'tight': '-0.05em',
      'normal': '0',
      'wide': '0.05em',
    },

    /*
    |-----------------------------------------------------------------------------
    | Text colors                         https://tailwindcss.com/docs/text-color
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your text colors. By default these use the
    | color palette we defined above, however you're welcome to set these
    | independently if that makes sense for your project.
    |
    | Class name: .text-{color}
    | CSS property: color
    |
    */

  	textColor: theme => theme('colors'),

    /*
    |-----------------------------------------------------------------------------
    | Background colors             https://tailwindcss.com/docs/background-color
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your background colors. By default these use
    | the color palette we defined above, however you're welcome to set
    | these independently if that makes sense for your project.
    |
    | Class name: .bg-{color}
    | CSS property: background-color
    |
    */

  	backgroundColor: theme => theme('colors'),

    /*
    |-----------------------------------------------------------------------------
    | Background sizes               https://tailwindcss.com/docs/background-size
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your background sizes. We provide some common
    | values that are useful in most projects, but feel free to add other sizes
    | that are specific to your project here as well.
    |
    | Class name: .bg-{size}
    | CSS property: background-size
    |
    */

  	backgroundSize: {
  		'auto': 'auto',
  		'cover': 'cover',
  		'contain': 'contain'
  	},

    /*
    |-----------------------------------------------------------------------------
    | Border widths                     https://tailwindcss.com/docs/border-width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your border widths. Take note that border
    | widths require a special "default" value set as well. This is the
    | width that will be used when you do not specify a border width.
    |
    | Class name: .border{-side?}{-width?}
    | CSS property: border-width
    |
    */

  	borderWidth: {
  		default: '1px',
  		'0': '0',
  		'2': '2px',
  		'4': '4px',
  		'8': '8px'
  	},

    /*
    |-----------------------------------------------------------------------------
    | Border colors                     https://tailwindcss.com/docs/border-color
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your border colors. By default these use the
    | color palette we defined above, however you're welcome to set these
    | independently if that makes sense for your project.
    |
    | Take note that border colors require a special "default" value set
    | as well. This is the color that will be used when you do not
    | specify a border color.
    |
    | Class name: .border-{color}
    | CSS property: border-color
    |
    */

  	borderColor: theme => ({
      default: theme('colors.grey-light'),
      ...theme('colors'),
    }),

    /*
    |-----------------------------------------------------------------------------
    | Border radius                    https://tailwindcss.com/docs/border-radius
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your border radius values. If a `default` radius
    | is provided, it will be made available as the non-suffixed `.rounded`
    | utility.
    |
    | If your scale includes a `0` value to reset already rounded corners, it's
    | a good idea to put it first so other values are able to override it.
    |
    | Class name: .rounded{-side?}{-size?}
    | CSS property: border-radius
    |
    */

  	borderRadius: {
  		'none': '0',
  		'small': '.125rem',
  		default: '.25rem',
          'medium': '.5rem',
  		'large': '1rem',
  		'full': '9999px'
  	},

    /*
    |-----------------------------------------------------------------------------
    | Width                                    https://tailwindcss.com/docs/width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your width utility sizes. These can be
    | percentage based, pixels, rems, or any other units. By default
    | we provide a sensible rem based numeric scale, a percentage
    | based fraction scale, plus some other common use-cases. You
    | can, of course, modify these values as needed.
    |
    |
    | It's also worth mentioning that Tailwind automatically escapes
    | invalid CSS class name characters, which allows you to have
    | awesome classes like .w-2/3.
    |
    | Class name: .w-{size}
    | CSS property: width
    |
    */

    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
			'56': '14rem',
			'72': '18rem',
			'96': '24rem',
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '2/6': '33.33333%',
      '3/6': '50%',
      '4/6': '66.66667%',
      '5/6': '83.33333%',
      '1/12': '8.33333%',
      '2/12': '16.66667%',
      '3/12': '25%',
      '4/12': '33.33333%',
      '5/12': '41.66667%',
      '6/12': '50%',
      '7/12': '58.33333%',
      '8/12': '66.66667%',
      '9/12': '75%',
      '10/12': '83.33333%',
      '11/12': '91.66667%',
      full: '100%',
      screen: '100vw',
    }),

    /*
    |-----------------------------------------------------------------------------
    | Height                                  https://tailwindcss.com/docs/height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your height utility sizes. These can be
    | percentage based, pixels, rems, or any other units. By default
    | we provide a sensible rem based numeric scale plus some other
    | common use-cases. You can, of course, modify these values as
    | needed.
    |
    | Class name: .h-{size}
    | CSS property: height
    |
    */

    height: {
      'auto': 'auto',
      'px': '1px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '24': '6rem',
      '32': '8rem',
      '48': '12rem',
      '64': '16rem',
      '96': '24rem',
      '1/2': '50%',
      '3/5': '60%',
      'full': '100%',
      'screen': '100vh',
    },

    /*
    |-----------------------------------------------------------------------------
    | Minimum width                        https://tailwindcss.com/docs/min-width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your minimum width utility sizes. These can
    | be percentage based, pixels, rems, or any other units. We provide a
    | couple common use-cases by default. You can, of course, modify
    | these values as needed.
    |
    | Class name: .min-w-{size}
    | CSS property: min-width
    |
    */

    minWidth: {
      '0': '0',
			'64': '16rem',
      'full': '100%',
    },

    /*
    |-----------------------------------------------------------------------------
    | Minimum height                      https://tailwindcss.com/docs/min-height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your minimum height utility sizes. These can
    | be percentage based, pixels, rems, or any other units. We provide a
    | few common use-cases by default. You can, of course, modify these
    | values as needed.
    |
    | Class name: .min-h-{size}
    | CSS property: min-height
    |
    */

    minHeight: {
      '0': '0',
      'full': '100%',
      'screen': '100vh',
    },

    /*
    |-----------------------------------------------------------------------------
    | Maximum width                        https://tailwindcss.com/docs/max-width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your maximum width utility sizes. These can
    | be percentage based, pixels, rems, or any other units. By default
    | we provide a sensible rem based scale and a "full width" size,
    | which is basically a reset utility. You can, of course,
    | modify these values as needed.
    |
    | Class name: .max-w-{size}
    | CSS property: max-width
    |
    */

    maxWidth: {
      'xs': '20rem',
      'xsm': '26rem',
      'sm': '30rem',
      'md': '40rem',
      'lg': '50rem',
      'xl': '60rem',
      '2xl': '70rem',
      '3xl': '80rem',
      '4xl': '90rem',
      '5xl': '100rem',
      'full': '100%',
    },

    /*
    |-----------------------------------------------------------------------------
    | Maximum height                      https://tailwindcss.com/docs/max-height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your maximum height utility sizes. These can
    | be percentage based, pixels, rems, or any other units. We provide a
    | couple common use-cases by default. You can, of course, modify
    | these values as needed.
    |
    | Class name: .max-h-{size}
    | CSS property: max-height
    |
    */

    maxHeight: {
      'full': '100%',
      'screen': '100vh',
			'screen-80': '80vh',
    },

    /*
    |-----------------------------------------------------------------------------
    | Padding                                https://tailwindcss.com/docs/padding
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your padding utility sizes. These can be
    | percentage based, pixels, rems, or any other units. By default we
    | provide a sensible rem based numeric scale plus a couple other
    | common use-cases like "1px". You can, of course, modify these
    | values as needed.
    |
    | Class name: .p{side?}-{size}
    | CSS property: padding
    |
    */

    padding: {
      'px': '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.7rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
			'14': '3.5rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
			'36': '9rem',
			'40': '11rem',
			'44': '12rem',
			'48': '13rem',
			'52': '14rem'
    },

    /*
    |-----------------------------------------------------------------------------
    | Margin                                  https://tailwindcss.com/docs/margin
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your margin utility sizes. These can be
    | percentage based, pixels, rems, or any other units. By default we
    | provide a sensible rem based numeric scale plus a couple other
    | common use-cases like "1px". You can, of course, modify these
    | values as needed.
    |
    | Class name: .m{side?}-{size}
    | CSS property: margin
    |
    */

    margin: {
      'auto': 'auto',
      'px': '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
			'7': '1.7rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
			'36': '9rem',
			'40': '11rem',
			'64': '16rem',
      '-px': '-1px',
      '-1': '-0.25rem',
      '-2': '-0.5rem',
      '-3': '-0.75rem',
      '-4': '-1rem',
      '-5': '-1.25rem',
      '-6': '-1.5rem',
			'-7': '-1.7rem',
      '-8': '-2rem',
      '-10': '-2.5rem',
      '-12': '-3rem',
      '-16': '-4rem',
      '-20': '-5rem',
      '-24': '-6rem',
      '-32': '-8rem',
			'-36': '-9rem',
			'-40': '-11rem',
			'screenh': '100vh',
			'screenw': '100vw'
    },

    // DEPRECATED negativeMargin
    /*
    |-----------------------------------------------------------------------------
    | Negative margin                https://tailwindcss.com/docs/negative-margin
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your negative margin utility sizes. These can
    | be percentage based, pixels, rems, or any other units. By default we
    | provide matching values to the padding scale since these utilities
    | generally get used together. You can, of course, modify these
    | values as needed.
    |
    | Class name: .-m{side?}-{size}
    | CSS property: margin
    |
    */

    // negativeMargin: {
    //   'px': '1px',
    //   '0': '0',
    //   '1': '0.25rem',
    //   '2': '0.5rem',
    //   '3': '0.75rem',
    //   '4': '1rem',
    //   '5': '1.25rem',
    //   '6': '1.5rem',
    //   '8': '2rem',
    //   '10': '2.5rem',
    //   '12': '3rem',
    //   '16': '4rem',
    //   '20': '5rem',
    //   '24': '6rem',
    //   '32': '8rem',
    // },

    /*
    |-----------------------------------------------------------------------------
    | Shadows                                https://tailwindcss.com/docs/shadows
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your shadow utilities. As you can see from
    | the defaults we provide, it's possible to apply multiple shadows
    | per utility using comma separation.
    |
    | If a `default` shadow is provided, it will be made available as the non-
    | suffixed `.shadow` utility.
    |
    | Class name: .shadow-{size?}
    | CSS property: box-shadow
    |
    */

    boxShadow: {
      default: '0 2px 4px 0 rgba(0,0,0,0.10)',
      'md': '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
      'lg': '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
      'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      'outline': '0 0 0 3px rgba(52,144,220,0.5)',
      'none': 'none',
    },

    /*
    |-----------------------------------------------------------------------------
    | Z-index                                https://tailwindcss.com/docs/z-index
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your z-index utility values. By default we
    | provide a sensible numeric scale. You can, of course, modify these
    | values as needed.
    |
    | Class name: .z-{index}
    | CSS property: z-index
    |
    */

    zIndex: {
      'auto': 'auto',
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '-1': '-1',
    },

    /*
    |-----------------------------------------------------------------------------
    | Opacity                                https://tailwindcss.com/docs/opacity
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your opacity utility values. By default we
    | provide a sensible numeric scale. You can, of course, modify these
    | values as needed.
    |
    | Class name: .opacity-{name}
    | CSS property: opacity
    |
    */

    opacity: {
      '0': '0',
      '25': '.25',
      '50': '.5',
      '75': '.75',
      '100': '1'
    },

    /*
    |-----------------------------------------------------------------------------
    | SVG fill                                   https://tailwindcss.com/docs/svg
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your SVG fill colors. By default we just provide
    | `fill-current` which sets the fill to the current text color. This lets you
    | specify a fill color using existing text color utilities and helps keep the
    | generated CSS file size down.
    |
    | Class name: .fill-{name}
    | CSS property: fill
    |
    */

    fill: {
      'current': 'currentColor',
    },

    /*
    |-----------------------------------------------------------------------------
    | SVG stroke                                 https://tailwindcss.com/docs/svg
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your SVG stroke colors. By default we just provide
    | `stroke-current` which sets the stroke to the current text color. This lets
    | you specify a stroke color using existing text color utilities and helps
    | keep the generated CSS file size down.
    |
    | Class name: .stroke-{name}
    | CSS property: stroke
    |
    */

    stroke: {
      'current': 'currentColor'
    },

    rotate: {
      '-270': '-270deg',
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '0': '0',
      '45': '45deg',
      '90': '90deg',
      '180': '180deg',
      '270': '270deg'
    }
  },
  /*
  |-----------------------------------------------------------------------------
  | Modules                  https://tailwindcss.com/docs/configuration#modules
  |-----------------------------------------------------------------------------
  |
  | Here is where you control which modules are generated and what variants are
  | generated for each of those modules.
  |
  | Currently supported variants:
  |   - responsive
  |   - hover
  |   - focus
  |   - focus-within
  |   - active
  |   - group-hover
  |
  | To disable a module completely, use `false` instead of an array.
  |
  */
	variants: {
		appearance: ['responsive'],
		backgroundAttachment: ['responsive'],
		backgroundColor: ['responsive', 'hover', 'focus'],
		backgroundPosition: ['responsive'],
		backgroundRepeat: ['responsive'],
		backgroundSize: ['responsive'],
		borderCollapse: [],
		borderColor: ['responsive', 'hover', 'focus'],
		borderRadius: ['responsive'],
		borderStyle: ['responsive'],
		borderWidth: ['responsive'],
		cursor: ['responsive'],
		display: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
		float: ['responsive'],
		fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
		fontWeight: ['responsive', 'hover', 'focus'],
		height: ['responsive'],
    inset: ['responsive'],
    letterSpacing: ['responsive'],
		lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
		margin: ['responsive', 'last'],
		maxHeight: ['responsive'],
		maxWidth: ['responsive'],
		minHeight: ['responsive'],
		minWidth: ['responsive'],
		negativeMargin: ['responsive'],
		objectFit: false,
		objectPosition: false,
		opacity: ['responsive', 'hover'],
		outline: ['focus'],
		overflow: ['responsive'],
		padding: ['responsive'],
		pointerEvents: ['responsive'],
		position: ['responsive'],
		resize: ['responsive'],
		boxShadow: ['responsive', 'hover', 'focus'],
		fill: [],
		stroke: [],
		tableLayout: ['responsive'],
		textAlign: ['responsive'],
		textColor: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
		userSelect: ['responsive'],
		verticalAlign: ['responsive'],
		visibility: ['responsive'],
		whitespace: ['responsive'],
		width: ['responsive'],
    wordBreak: ['responsive'],
		zIndex: ['responsive'],
    transform: ['responsive'],
    transformOrigin: ['responsive'],
    scale: ['responsive', 'hover', 'focus'],
    rotate: ['responsive', 'hover', 'focus'],
    translate: ['responsive', 'hover', 'focus'],
    transitionDuration: ['responsive'],
    transitionProperty: ['responsive'],
	},

  /*
  |-----------------------------------------------------------------------------
  | Plugins                                https://tailwindcss.com/docs/plugins
  |-----------------------------------------------------------------------------
  |
  | Here is where you can register any plugins you'd like to use in your
  | project. Tailwind's built-in `container` plugin is enabled by default to
  | give you a Bootstrap-style responsive container component out of the box.
  |
  | Be sure to view the complete plugin documentation to learn more about how
  | the plugin system works.
  |
  */
  corePlugins: {},
	plugins: [
		// require('tailwindcss/plugins/container')({
		// 	// center: true,
		// 	// padding: '1rem',
		// })
	],

  /*
  |-----------------------------------------------------------------------------
  | Advanced Options         https://tailwindcss.com/docs/configuration#options
  |-----------------------------------------------------------------------------
  |
  | Here is where you can tweak advanced configuration options. We recommend
  | leaving these options alone unless you absolutely need to change them.
  |
  */

	// options: {
	// 	prefix: '',
	// 	important: false,
	// 	separator: ':'
	// }
};
