/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow : { 
        'img': '0px 5px 15px rgba(0, 0, 0, 0.35)',
      },
      keyframes : {
        rotate : {
            to : {transform: 'rotate(360deg)'},
        },
        firstImg: { 
          '0%' : {right:'0px',left:'0px',transform:'translateY(0px)', 'z-index':'50'},
          '10%' : {right:'0px',left:'0px',transform:'translateY(0px)', 'z-index':'50',border:'5px solid white'},
          '30%' : {right:'0px',left:'-18%',transform:'translateY(64px)', 'z-index':'10'},
          '40%' : {right:'0px',left:'-18%',transform:'translateY(64px)', 'z-index':'10'},
          '60%' : {right:'0px',left:'18%',transform:'translateY(44px)', 'z-index':'30'},
          '70%' : {right:'0px',left:'18%',transform:'translateY(44px)', 'z-index':'30'},
          '90%' : {right:'0px',left:'0px',transform:'translateY(0px)', 'z-index':'50'},
          '100%' : {right:'0px',left:'0px',transform:'translateY(0px)', 'z-index':'50',border:'5px solid white'},
        },
        secondImg: { 
          '0%' : {left:'-18%',right: '0px',transform:'translateY(64px)', 'z-index':'10'},
          '10%' : {left:'-18%',right: '0px',transform:'translateY(64px)', 'z-index':'10'},
          '30%' : {right:'0px',left:'18%',transform:'translateY(44px)', 'z-index':'30'},
          '40%' : {right:'0px',left:'18%',transform:'translateY(44px)', 'z-index':'30'},
          '60%' : {right:'0px',left:'0px',transform:'translateY(0px)', 'z-index':'50'},
          '70%' : {right:'0px',left:'0px',transform:'translateY(0px)', 'z-index':'50',border:'5px solid white'},
          '90%' : {left:'-18%',right: '0px',transform:'translateY(64px)', 'z-index':'10'},
          '100%' : {left:'-18%',right: '0px',transform:'translateY(64px)', 'z-index':'10'},
        },
        thirdImg: { 
          '0%' : {right:'0px',left:'18%',transform:'translateY(44px)', 'z-index':'30'},
          '10%' : {right:'0px',left:'18%',transform:'translateY(44px)', 'z-index':'30'},
          '30%' : {right:'0px',left:'0px',transform:'translateY(0px)', 'z-index':'50'},
          '40%' : {right:'0px',left:'0px',transform:'translateY(0px)', 'z-index':'50',border:'5px solid white'},
          '60%' : {right:'0px',left:'-18%',transform:'translateY(64px)', 'z-index':'10'},
          '70%' : {right:'0px',left:'-18%',transform:'translateY(64px)', 'z-index':'10'},
          '90%' : {right:'0px',left:'18%',transform:'translateY(44px)', 'z-index':'30'},
          '100%' : {right:'0px',left:'18%',transform:'translateY(44px)', 'z-index':'30'},
        },
        firstMobImg: { 
          '0%' : {'z-index':'50'},
          '50' : {'z-index':'-1'},
          '100%' : {'z-index':'-1'},
        },
        secondMobImg: {  
          '0%' : {'z-index':'-1'},
          '50' : {'z-index':'-1'},
          '100%' : {'z-index':'50'},
        },
    },
    fontFamily: { 
      'spaceFont': 'var(--space-font)',
    },
    animation : {
      rotate :'rotate 10s linear infinite',
      firstImg : 'firstImg 4s linear infinite',
      secondImg : 'secondImg 4s linear infinite',
      thirdImg : 'thirdImg 4s linear infinite',
      firstMobImg : 'firstMobImg 4s linear infinite',
      secondMobImg : 'secondMobImg 4s linear infinite'
    },
    transitionProperty : { 
      'logo' : 'transform, opacity',
    }
    
    },
  },
  plugins: [],
}

