export const GlobalCSS = {
    'html': {
      scrollBehavior: 'smooth!'
    },
    '.htmlScreen iframe': {
        width: '1385px',
        height: '693px',
        border: 'none',
        background: '#000000',
    },
    '.hover-underline': {
        display: 'inline-block',
        position: 'relative',
        color: '#ffffff',
    },
    '.hover-underline:hover': {
      color: '#C8F9FF'
    },
    '.hover-underline::after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      transform: 'scaleX(0)',
      height: '2px',
      bottom: '0',
      left: '0',
      backgroundColor: '#C8F9FF',
      transformOrigin: 'bottom right',
      transition: 'transform 0.25s ease-out'
    },
    '.hover-underline:hover::after': {
      transform: 'scaleX(1)',
      transformOrigin: 'bottom left'
    },
    '.link:hover': {
      textDecoration: 'underline'
    },
}

export default GlobalCSS;