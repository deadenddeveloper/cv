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
          //
          success: withOpacity('--color-success'),
          info: withOpacity('--color-info'),
          danger: withOpacity('--color-danger'),
          warning: withOpacity('--color-warning'),
        },
      },
      backgroundColor: {
        skin: {
          base: withOpacity('--color-bg-base'),
          accent: withOpacity('--color-bg-accent'),
          'accent-hover': withOpacity('--color-bg-accent-hover'),
          muted: withOpacity('--color-bg-muted'),
          //
          success: withOpacity('--color-success'),
          info: withOpacity('--color-info'),
          danger: withOpacity('--color-danger'),
          warning: withOpacity('--color-warning'),
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
