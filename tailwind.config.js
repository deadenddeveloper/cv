function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if ( undefined !== opacityValue ) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }

    return `rgb(var(${variableName}))`;
  }
}

module.exports = {
  theme: {
    extend: {
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          inverted: withOpacity('--color-text-inverted'),
          accent: withOpacity('--color-text-accent'),
          'accent-hover': withOpacity('--color-text-accent-hover'),
        },
      },
      backgroundColor: {
        skin: {
          base: withOpacity('--color-bg-base'),
          accent: withOpacity('--color-bg-accent'),
          'accent-hover': withOpacity('--color-bg-accent-hover'),
        },
      },
      borderColor: {
        skin: {
          base: withOpacity('--color-border-base'),
          hover: withOpacity('--color-border-hover'),
        },
      },
    },
  },
}