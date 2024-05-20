import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <a href="https://unstop.com/p/fill-the-void-iit-jammu-869973" target="_blank" rel="noopener noreferrer" className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer text-decoration-none`}> 
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[24px] leading-[23.4px]">
            <span className="text-gradient">Register</span>
          </p>
          <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
        </div>
        
        <p className="font-poppins font-medium text-[28px] leading-[23.4px]">
          <span className="text-gradient">Now</span>
        </p>
      </div>
    </div>
  </a>
);

export default GetStarted;
