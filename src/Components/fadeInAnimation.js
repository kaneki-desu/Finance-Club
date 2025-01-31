export const fadeIn={
    initial:{opacity:0,y:50,filter:"blur(10px)",scale:0.95},
    animate:(index)=>{
      return {
        opacity:1,y:0,filter:"blur(0px)",scale:1,
        transition:{
          duration:1,
          ease:"easeInOut",
        }
      }
    }
  }
export const StaggeredfadeIn={
    initial:{opacity:0,y:50,filter:"blur(10px)",scale:0.95},
    animate:(index)=>{
      return {
        opacity:1,y:0,filter:"blur(0px)",scale:1,
        transition:{
          duration:1,
          ease:"easeInOut",
          delay:0.5*index
        }
      }
    }
  }
